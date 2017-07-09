using SpendingsCalculator.Models;
using SpendingsCalculator.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpendingsCalculator.Repository
{
    public class UnitOfWork
    {
        private ApplicationContext context;

        private IRepo<Tag> tagRepo;
        private ISpendingRepo spendingRepo;

        public UnitOfWork()
        {
            this.context = new ApplicationContext();
        }

        public IRepo<Tag> TagRepo
        {
            get
            {
                if (tagRepo == null)
                    tagRepo = new TagRepo(context);

                return tagRepo;
            }
        }

        public ISpendingRepo SpendingRepo
        {
            get
            {
                if (spendingRepo == null)
                    spendingRepo = new SpendingRepo(context);

                return spendingRepo;
            }
        }
    }
}