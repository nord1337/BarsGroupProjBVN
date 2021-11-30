using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Team_Let1m_carShop.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        
        
        public int CategoryId { get; set; }

        [Required]
        [MaxLength(90)]
        public string Name { get; set; }

        [Required]
        public string ImagePath { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required] 
        public string Description { get; set; }

        public int Quantity { get; set; }

        [ForeignKey(name: "CategoryId")]
        public virtual Category Category { get; set; }


    }
}
