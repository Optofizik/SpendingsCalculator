using SpendingsCalculator.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SpendingsCalculator.Models;
using System.Data.Entity;

namespace SpendingsCalculator.Repository
{
    public class SpendingRepo : ISpendingRepo
    {
        private ApplicationContext context;

        public SpendingRepo(ApplicationContext context)
        {
            this.context = context;
        }

        public void Create(Spending model)
        {
            context.Spending.Add(model);
            context.SaveChanges();
        }

        public void Delete(int Id)
        {
           Spending obj = context.Spending.FirstOrDefault(c => c.Id == Id);

            if (obj != null)
            {
                context.Spending.Remove(obj);
                context.SaveChanges();
            }
        }

        public IEnumerable<Spending> Get()
        {
            return context.Spending;
        }

        public Spending Get(int Id)
        {
            return context.Spending.FirstOrDefault(c => c.Id == Id);
        }

        public IEnumerable<Spending> GetByMonth(DateTime start, DateTime finish)
        {
            return context.Spending.Where(c => c.Date >= start && c.Date < finish);
        }

        public IEnumerable<Spending> GetByTag(int tagId)
        {
            return context.Spending.Where(c => c.Tag.Id == tagId);
        }

        public void Update(Spending model)
        {
            context.Entry<Spending>(model).State = EntityState.Modified;
        }
    }
}