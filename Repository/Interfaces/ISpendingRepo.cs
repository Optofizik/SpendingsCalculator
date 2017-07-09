using SpendingsCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpendingsCalculator.Repository.Interfaces
{
    public interface ISpendingRepo :IRepo<Spending>
    {
        IEnumerable<Spending> GetByMonth(DateTime start, DateTime finish);
        IEnumerable<Spending> GetByTag(int tagId);
    }
}
