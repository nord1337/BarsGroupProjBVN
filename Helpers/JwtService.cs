﻿using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
namespace Team_Let1m_carShop.Helpers
{
    public class JwtService
    {
        private string secureKey = "veri secure veri veri";
        public string Generate(int id)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey));
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            var payload = new JwtPayload(id.ToString(),null,null,null,DateTime.Today.AddMonths(1));
            var securityToken = new JwtSecurityToken(header, payload);

            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }
        public JwtSecurityToken Verify(string jwt)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secureKey);
            tokenHandler.ValidateToken(jwt, new TokenValidationParameters() 
            { 
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false
            }, out SecurityToken validatedToken);

            return (JwtSecurityToken)validatedToken;

        }

        
    }
}
