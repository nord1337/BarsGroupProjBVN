using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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

        public async Task CreateAsync(Product entity)
        {
            await _shopContext.Products.AddAsync(entity);
        }

        public void Delete(Product entity)
        {
             _shopContext.Products.Remove(entity);
        }

        public async Task<IEnumerable<Product>> getAllAsync()
        {
            var products = await _shopContext.Products
                .AsNoTracking()
                .ToListAsync();
            return products;
        }

        public async Task<IEnumerable<Product>> getByCategoryAsync(Category category)
        {
            var products = await _shopContext.Products
                .AsNoTracking()
                .Where(pr => pr.Category == category)
                .ToListAsync();
            return products;
        }

        public async Task<bool> SaveChangesAsync()
        {
            var changes =await _shopContext.SaveChangesAsync();
            if (changes >= 0)
                return true;
            return false;

        }

        public Task UpdateAsync(Product entity)
        {
            throw new NotImplementedException();
        }
    }
}
