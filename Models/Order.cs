using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Team_Let1m_carShop.Models
{
    
    public class Order
    {
        [Key] 
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public decimal TotalPrice { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        [ForeignKey(name: "UserId")]
        public User User { get; set; }

        
        public virtual ICollection<Order_item> Order_Items { get; set; }

    }
}
