using DeliveryOrderApp.Server.Data;
using DeliveryOrderApp.Server.Models;
using DeliveryOrderApp.Server.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace DeliveryOrderApp.Server.Services
{
    public class OrderService(DeliveryOrderDbContext dbContext) : IOrderService
    {
        public async Task<Order> GetOrderAsync(int id)
        {
            return await dbContext.Orders.FindAsync(id);
        }

        public async Task<IEnumerable<Order>> GetOrdersAsync()
        {
            return await dbContext.Orders.ToListAsync();
        }

        public async Task CreateOrderAsync(Order order)
        {
            if (order == null)
            {
                throw new ArgumentException(nameof(order));
            }

            dbContext.Orders.Add(order);

            await dbContext.SaveChangesAsync();
        }
    }
}
