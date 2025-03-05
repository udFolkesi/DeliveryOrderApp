using DeliveryOrderApp.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace DeliveryOrderApp.Server.Data
{
    public class DeliveryOrderDbContext: DbContext
    {
        public DeliveryOrderDbContext(DbContextOptions<DeliveryOrderDbContext> options) : base(options)
        {
        }

        public DbSet<Order> Orders { get; set; }
    }
}
