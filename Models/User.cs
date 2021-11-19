using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Npgsql.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace Team_Let1m_carShop.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string PasswordHash { get; set; }
        public string Email { get; set; }
        public string Phonenumber { get; set; }
    }
}
