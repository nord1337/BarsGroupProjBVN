using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team_Let1m_carShop.Dtos
{
    public class OrderDto
    {
        public int Id { get; set; }

        public decimal TotalPrice { get; set; }

        public DateTime CreatedAt { get; set; }

        public  IEnumerable<Order_itemDto> Order_Items { get; set; }
    }
}
