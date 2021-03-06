using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Dtos;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Profiles
{
    public class OfferProfile:Profile
    {
        public OfferProfile()
        {
            CreateMap<Order, OrderDto>();
            CreateMap<Order_item, Order_itemDto>();
            CreateMap<Product, ProductDto>();
            CreateMap<Category, CategoryDto>();
            CreateMap<CategoryDto, Category>();
            CreateMap<OrderItemCreateDto, Order_item>();
            CreateMap<ProductToOfferDto, Product>();
        }
        
    }
}
