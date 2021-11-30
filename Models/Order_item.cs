using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;


namespace Team_Let1m_carShop.Models
{
    [Keyless]
    public class Order_item
    {
        
        public int OrderId { get; set; }

        public int ProductId { get; set; }

        [Required]
        public int Quantity { get; set; }

        [ForeignKey("ProductId")]
        public Product Product { get; set; }

        [ForeignKey(name: "OrderId")]
        public Order Order { get; set; }

    }
}