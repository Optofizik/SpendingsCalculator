using SpendingsCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using CodeResult = System.Web.Mvc.HttpStatusCodeResult;
using SpendingsCalculator.Repository;

namespace SpendingsCalculator.Controllers
{
    public class TagController : ApiController
    {
        private UnitOfWork unitOfWork;

        public TagController()
        {
            unitOfWork = new UnitOfWork();
        }

        [HttpGet]        
        public IEnumerable<Tag> Get()
        {
            return unitOfWork.TagRepo.Get();
        }

        [HttpPost]
        public CodeResult Post(Tag model)
        {
            unitOfWork.TagRepo.Create(model);
            return new CodeResult(HttpStatusCode.Created, "Created");
        }

        [HttpDelete]
        public CodeResult Delete(int id)
        {
            unitOfWork.TagRepo.Delete(id);
            return new CodeResult(HttpStatusCode.OK, "Deleted");
        }
    }
}
