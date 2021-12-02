using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Data.BaseRepos;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Data
{
    interface IOrderRepository:IRepositoryBase<Order>
    {
        Order getByUser(User user);

    }
}
