using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Data
{
    public interface IUserRepository
    {
        void Create(User user);
        User getByEmail(string email);
        User getById(int id);
        bool SaveChanges();
    }
}
