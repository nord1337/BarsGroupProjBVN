using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Team_Let1m_carShop.Data;
using Team_Let1m_carShop.Dtos;
using Team_Let1m_carShop.Helpers;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly JwtService _jwtService;


        public AuthController(IUserRepository userRepository,IMapper mapper,JwtService jwtService)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _jwtService = jwtService;

        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterDto registerDto)
        {
            var UserEntity = _mapper.Map<User>(registerDto);
            UserEntity.PasswordHash = BCrypt.Net.BCrypt.HashPassword(UserEntity.PasswordHash); // Hashing password

            await _userRepository.CreateAsync(UserEntity);
            if (await _userRepository.SaveChangesAsync())
                return Created("Sucess",UserEntity);
            return BadRequest();
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginDto loginDto)
        {
            var User = await _userRepository.getByEmailAsync(loginDto.Email);

            if (User == null)
                return BadRequest();

            if (!BCrypt.Net.BCrypt.Verify(loginDto.PasswordHash, User.PasswordHash))
                return BadRequest();

            var jwt = _jwtService.Generate(User.Id);

            Response.Cookies.Append("jwt",jwt,new CookieOptions()
            {
                HttpOnly = true
            });
            

            return Ok();
        }
        [HttpGet("user")]
        public async Task<IActionResult> User ()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int UserId = int.Parse(token.Issuer);

                var user = await _userRepository.getByIdAsync(UserId);
            
                return Ok(user);

            }
            catch (Exception)
            {

                return Unauthorized();
            }
            
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            Response.Cookies.Delete("jwt");
            return await Task.FromResult(Ok(new { message = "Logged out" }));
        }

    }
}
