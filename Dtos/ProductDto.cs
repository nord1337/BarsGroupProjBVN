using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team_Let1m_carShop.Dtos
{
    public class ProductDto
    {
       
        public int Id { get; set; }

        public string Name { get; set; }

        public string ImagePath { get; set; }

        public decimal Price { get; set; }

        public string Description { get; set; }

        public  CategoryDto Category { get; set; }
    }
}
