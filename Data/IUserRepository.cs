using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Data
{
    public interface IUserRepository
    {
        Task CreateAsync(User user);
        Task<User> getByEmailAsync(string email);
        Task<User> getByIdAsync(int id);
        Task<bool> SaveChangesAsync();
    }
}
