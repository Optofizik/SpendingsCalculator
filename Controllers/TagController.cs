using SpendingsCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SpendingsCalculator.Controllers
{
    public class TagController : ApiController
    {
        [HttpGet]
        [Route("api/tag")]
        public IEnumerable<Tag> Get()
        {
            return new List<Tag>() { new Tag { Id = 1, Name = "Food" }, new Tag { Id = 2, Name = "Clothes" } };
        }
    }
}
