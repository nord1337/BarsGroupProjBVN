using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Data.BaseRepos;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Data
{
    public interface IShopRepository:IRepositoryBase<Product>
    {
        Task<IEnumerable<Product>> getByCategoryAsync(Category category);
        Task<IEnumerable<Product>> getAllAsync();


    }
}
