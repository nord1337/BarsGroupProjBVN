using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team_Let1m_carShop.Dtos
{
    public class OrderItemCreateDto
    {
        [JsonProperty("Product")]
        public ProductToOfferDto Product { get; set; }

        [JsonProperty("Quantity")]
        public int Quantity { get; set; }
    }
}
