using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;


namespace Team_Let1m_carShop.Models
{
   
    //[Keyless]
    [NotMapped]
    public class Order_item
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int OrderId { get; set; }

        [Required]
        public int ProductId { get; set; }

        [Required]
        public int Quantity { get; set; }

        [ForeignKey("ProductId")]
        public virtual Product Product { get; set; }

        [ForeignKey(name: "OrderId")]
        public virtual Order Order { get; set; }

    }
}