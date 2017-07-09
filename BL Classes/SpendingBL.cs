using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SpendingsCalculator.Models;

namespace SpendingsCalculator.BL_Classes
{
    public class SpendingBL
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public float Price { get; set; }
        public int TagId { get; set; }

        public SpendingBL GetBLCModel(Spending model)
        {
            SpendingBL result = new SpendingBL();

            result.Id = model.Id;
            result.Price = model.Price;
            result.Description = model.Description;
            result.Date = model.Date.ToString("dd-MM-yyyy");
            result.TagId = model.TagId;

            return result;
        }

        public Spending GetDBModel()
        {
            Spending spending = new Spending();

            spending.Id = this.Id;
            spending.Description = this.Description;
            spending.Date = DateTime.ParseExact(this.Date, "yyyy-MM-dd", null);
            spending.TagId = this.TagId;
            spending.Price = this.Price;
            spending.CreateDate = DateTime.Now;

            return spending;
        }
    }
}