using SpendingsCalculator.BL_Classes;
using SpendingsCalculator.Models;
using SpendingsCalculator.Repository;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace SpendingsCalculator.Controllers
{
    public class SpendingsController : ApiController
    {
        private UnitOfWork unit;

        public SpendingsController()
        {
            unit = new UnitOfWork();
        }

        [HttpPost]
        public IHttpActionResult Post(SpendingBL model)
        {
            try
            {
                unit.SpendingRepo.Create(model.GetDBModel());
                return new OkResult(new HttpRequestMessage());
            }
            catch
            {
                return new BadRequestResult(new HttpRequestMessage());
            }            
        }

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return Json(unit.SpendingRepo.Get().Select(c => new SpendingBL().GetBLCModel(c)));
        }

        [HttpGet]
        [Route("api/spendings/date/{date}")]
        public IHttpActionResult GetByMonth(string date)
        {
            try
            {
                DateTime startDate;

                if (DateTime.TryParseExact(date, "yyyy-MM", null, DateTimeStyles.None, out startDate))
                {
                    return Json(unit.SpendingRepo.GetByMonth(startDate, startDate.AddMonths(1)).Select(c => new SpendingBL().GetBLCModel(c)));
                }
                else
                {
                    return new BadRequestResult(new HttpRequestMessage());
                }
            }
            catch
            {
                return new BadRequestResult(new HttpRequestMessage());
            }     
        }

        [HttpGet]
        [Route("api/spendings/tag/{tagId:int}")]
        public IHttpActionResult GetByTag(int tagId)
        {
            try
            {
                return Json(unit.SpendingRepo.GetByTag(tagId).Select(c => new SpendingBL().GetBLCModel(c)));
            }
            catch
            {
                return new BadRequestResult(new HttpRequestMessage());
            }
        }

        [HttpGet]
        [Route("api/spendings/dates")]
        public IHttpActionResult GetDates()
        {
            return Json(unit.SpendingRepo.Get().Select(c => c.Date.ToString("yyyy-MM")).Distinct());
        }
    }
}
