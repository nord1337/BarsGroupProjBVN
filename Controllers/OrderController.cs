using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Data;
using Team_Let1m_carShop.Dtos;
using Team_Let1m_carShop.Helpers;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly JwtService _jwtService;

        public OrderController(IOrderRepository orderRepository,IUserRepository userRepository, IMapper mapper, JwtService jwtService)
        {
            _orderRepository = orderRepository;
            _userRepository = userRepository;
            _mapper = mapper;
            _jwtService = jwtService;
        }

        [HttpGet("orders")]
        public async Task<IActionResult> getUserOrders()
        {
            var jwt = Request.Cookies["jwt"];
            var token = _jwtService.Verify(jwt);
            int UserId = int.Parse(token.Issuer);
            var user = await _userRepository.getByIdAsync(UserId);

            var orders = await _orderRepository.getAllUserOrdersAsync(user);

            var orderDtos = new List<OrderDto>();
            foreach (var order in orders)
            {
                orderDtos.Add(_mapper.Map<OrderDto>(order));
            }

            return Ok(JsonConvert.SerializeObject(orderDtos));


        }

        [HttpPost("create")]
        public async Task<IActionResult> createOrder(OrderItemsArrayDto orderItemArray)
        {
            var jwt = Request.Cookies["jwt"];
            var token = _jwtService.Verify(jwt);
            int UserId = int.Parse(token.Issuer);
            var user = await _userRepository.getByIdAsync(UserId);

            var order_items = new List<Order_item>();

            foreach(var item in orderItemArray.OrderItem)
            {
                order_items.Add(_mapper.Map<Order_item>(item));
            }
            
            var order = new Order()
            {
                User = user,
                CreatedAt=DateTime.Now,
                Order_Items=order_items
            };
            //TODO: add exisitng products to products 

            await _orderRepository.CreateAsync(order);

            if(await _orderRepository.SaveChangesAsync())
                return Ok(_mapper.Map<OrderDto>(order));

            return BadRequest();
        }

    }
}
