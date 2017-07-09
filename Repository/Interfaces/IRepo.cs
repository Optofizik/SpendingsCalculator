using SpendingsCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpendingsCalculator.Repository
{
    public interface IRepo<T> where T: IModel
    {
        IEnumerable<T> Get();
        T Get(int Id);
        void Update(T model);
        void Create(T model);
        void Delete(int Id);
    }
}
