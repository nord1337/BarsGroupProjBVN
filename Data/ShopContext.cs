using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team_Let1m_carShop.Models;

namespace Team_Let1m_carShop.Data
{
    public class ShopContext: DbContext
    {
        public ShopContext(DbContextOptions<ShopContext>options):base(options)
        {

        }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(user =>
            {
                user.HasIndex(u => u.Email).IsUnique();
                user.HasIndex(u => u.Phonenumber).IsUnique();
            });
        }
    }
}
