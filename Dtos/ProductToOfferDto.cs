using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Team_Let1m_carShop.Dtos
{
    public class ProductToOfferDto
    {
        [JsonProperty("Id")]
        public int Id { get; set; }
    }
}
