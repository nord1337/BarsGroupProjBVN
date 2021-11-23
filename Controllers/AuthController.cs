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
    public class AuthController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        public AuthController(IUserRepository userRepository,IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterDto registerDto)
        {
            var UserEntity = _mapper.Map<User>(registerDto);
            UserEntity.PasswordHash = BCrypt.Net.BCrypt.HashPassword(UserEntity.PasswordHash); // Hashing password

            _userRepository.Create(UserEntity);
            return Created("Sucess",UserEntity);
        }
    }
}
