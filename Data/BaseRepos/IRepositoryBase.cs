using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Team_Let1m_carShop.Data.BaseRepos
{
    public interface IRepositoryBase<T>
    {
        
        Task CreateAsync(T entity); 
        Task UpdateAsync(T entity);
        void Delete(T entity);
        Task<bool> SaveChangesAsync();
    }
}
