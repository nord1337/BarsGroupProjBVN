using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Data;
using Team_Let1m_carShop.Dtos;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IShopRepository _shopRepository;
        private readonly IMapper _mapper;
        public ProductsController(IShopRepository shopRepository,IMapper mapper)
        {
            _shopRepository = shopRepository;
            _mapper = mapper;
        }

        [HttpGet("all")]
        public async Task<IActionResult> Products()
        {
            var products = await _shopRepository.getAllAsync();
            return Ok(products);
        }

        [HttpPost("byCat")]
        public async Task<IActionResult> GetByCategory(CategoryDto categoryDto)
        {

            var category = _mapper.Map<Category>(categoryDto);

            var products = await _shopRepository.getByCategoryAsync(category);

            return Ok(products);
        }

    }
}
