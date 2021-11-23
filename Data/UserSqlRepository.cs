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
        public void Create(User user)
        {
            _shopContext.Users.Add(user);   
        }
        public User getByEmail(string email)
        {
            return _shopContext.Users.First(u => u.Email == email);
        }

        public User getById(int id)
        {
            return _shopContext.Users.FirstOrDefault(u => u.Id == id);
        }

        public bool SaveChanges()
        {
            return (_shopContext.SaveChanges() >= 0);
        }
    }
}
