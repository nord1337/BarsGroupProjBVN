using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Models;


namespace Team_Let1m_carShop.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required] 
        public string Name { get; set; }

        public string Description { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
