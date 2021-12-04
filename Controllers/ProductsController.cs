using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Data;

namespace Team_Let1m_carShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IShopRepository _shopRepository;
        public ProductsController(IShopRepository shopRepository)
        {
            _shopRepository = shopRepository;
        }

        [HttpGet("products")]
        public async Task<IActionResult> Products()
        {
            var products = await _shopRepository.getAllAsync();
            return Ok(products);
        }

    }
}
