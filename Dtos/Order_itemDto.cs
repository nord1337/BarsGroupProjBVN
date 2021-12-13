using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team_Let1m_carShop.Dtos
{
    public class Order_itemDto
    {
        public ProductDto Product { get; set; }

        public int Quantity { get; set; }
    }
}
