using SpendingsCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SpendingsCalculator.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ApplicationContext context = new ApplicationContext();
            context.Tag.Add(new Tag() { Id = 1, Name = "First" });
            context.SaveChanges();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}