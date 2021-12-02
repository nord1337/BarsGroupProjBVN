using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Team_Let1m_carShop.Data.BaseRepos
{
    interface IRepositoryBase<T>
    {
        
        Task Create(T entity); 
        Task Update(T entity);
        void Delete(T entity);
        Task<bool> SaveChangesAsync();
    }
}
