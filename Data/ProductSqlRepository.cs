using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Data
{
    public class ProductSqlRepository : IShopRepository
    {
        protected ShopContext _shopContext;
        public ProductSqlRepository(ShopContext shopContext)
        {
            _shopContext = shopContext;
        }

        public async Task Create(Product entity)
        {
            await _shopContext.Products.AddAsync(entity);
        }

        public void Delete(Product entity)
        {
             _shopContext.Products.Remove(entity);
        }

        public async Task<IEnumerable<Product>> getAllAsync()
        {
            var products =await _shopContext.Products.ToListAsync();
            return products;
        }

        public Task<Product> getByCategoryAsync(Category category)
        {
            
        }

        public Task<bool> SaveChangesAsync()
        {
            throw new NotImplementedException();
        }

        public Task Update(Product entity)
        {
            throw new NotImplementedException();
        }
    }
}
