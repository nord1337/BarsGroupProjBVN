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
        public DbSet<Order> Orders { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order_item> OrderItems { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(user =>
            {
                user.HasIndex(u => u.Email).IsUnique();
                user.HasIndex(u => u.Phonenumber).IsUnique();
                user.HasMany<Order>("Orders").WithOne(u => u.User);
            });

            modelBuilder.Entity<Order>(order =>
            {
                order.ToTable("Orders");
                order.HasKey(k => k.Id);
                order.HasMany<Order_item>("Order_Items").WithOne(o => o.Order);
                //order.OwnsMany<Order_item>(oi=>oi.Order_Items);
            });

            modelBuilder.Entity<Order_item>(oi =>
            {

                oi.HasOne<Order>("Order").WithMany(o => o.Order_Items);

            });

            base.OnModelCreating(modelBuilder);

        }
    }
}
