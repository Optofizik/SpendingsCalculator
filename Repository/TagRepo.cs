using SpendingsCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace SpendingsCalculator.Repository
{
    public class TagRepo : IRepo<Tag>
    {
        private ApplicationContext context;

        public TagRepo(ApplicationContext context)
        {
            this.context = context;
        }

        public void Create(Tag model)
        {
            context.Tag.Add(model);
            context.SaveChanges();
        }

        public void Delete(int Id)
        {
            Tag tag = Get(Id);

            if (tag != null)
            {
                context.Tag.Remove(tag);
                context.SaveChanges();
            }
        }

        public IEnumerable<Tag> Get()
        {
            return context.Tag;
        }

        public Tag Get(int Id)
        {
           return context.Tag.FirstOrDefault<Tag>(c => c.Id == Id);
        }

        public void Update(Tag model)
        {
            context.Entry<Tag>(model).State = EntityState.Modified;
        }
    }
}