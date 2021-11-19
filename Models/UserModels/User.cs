using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Npgsql.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Team_Let1m_carShop.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Firstname { get; set; }

        [Required]
        public string Lastname { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string PasswordHash { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Phone]
        public string Phonenumber { get; set; }
    }
}
