using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Data
{
    public class UserSqlRepository : IUserRepository
    {
        private readonly ShopContext _shopContext;
        public UserSqlRepository(ShopContext context)
        {
            _shopContext = context;
        }
        public async Task CreateAsync(User user)
        {
            await _shopContext.Users.AddAsync(user);   
        }
        public async Task<User> getByEmailAsync(string email)
        {
            return await _shopContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        }
        public async Task<User> getByIdAsync(int id)
        {
            return await _shopContext.Users.FirstOrDefaultAsync(u => u.Id == id);
        }
        public async Task<bool> SaveChangesAsync()
        {
            var changes = await _shopContext.SaveChangesAsync();
            if (changes >= 0)
                return true;
            return false;
        }
    }
}
