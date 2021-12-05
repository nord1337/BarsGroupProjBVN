using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Data
{
    public class OrderSqlRepository : IOrderRepository
    {
        private readonly ShopContext _shopContext;

        public OrderSqlRepository(ShopContext shopContext)
        {
            _shopContext=shopContext;
        }

        public async Task CreateAsync(Order order)
        {
            //shitcode
            var productsIds = (order.Order_Items.Select(x => x.Product.Id)).ToList();
            
            foreach(var order_Item in order.Order_Items)
            {
                order_Item.Product = _shopContext.Products.Where(x => x.Id == order_Item.ProductId).FirstOrDefault();
            }

            //shitcode ends
            await _shopContext.Orders.AddAsync(order);
        }

        public Task<Order> CreateOrderAsync(User user, Order order)
        {
            
            throw new NotImplementedException();

        }

        public void Delete(Order entity)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Order>> getAllUserOrdersAsync(User user)
        {
            var orders = await _shopContext.Orders
                .Where(u=>u.UserId==user.Id)
                .Include(x=>x.Order_Items)
                .ThenInclude(x=>x.Product)
                .AsNoTracking()
                .ToListAsync();
            
            return orders;
        }

        public async Task<bool> SaveChangesAsync()
        {
            var changes = await _shopContext.SaveChangesAsync();
            if (changes >= 0)
                return true;
            return false;
        }

        public Task UpdateAsync(Order entity)
        {
            throw new NotImplementedException();
        }

        

    }
}
