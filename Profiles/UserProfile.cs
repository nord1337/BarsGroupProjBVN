using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Team_Let1m_carShop.Dtos;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Profiles
{
    public class UserProfile:Profile
    {
        public UserProfile()
        {
            //For registrate user
            CreateMap<UserRegisterDto, User>();


        }
    }
}
