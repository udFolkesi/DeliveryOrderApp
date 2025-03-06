using DeliveryOrderApp.Server.Data;
using DeliveryOrderApp.Server.Models;
using DeliveryOrderApp.Server.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace DeliveryOrderApp.Server.Services
{
    public class OrderService : IOrderService
    {
        private readonly DeliveryOrderDbContext dbContext;
        private readonly ILogger<OrderService> logger;

        public OrderService(DeliveryOrderDbContext dbContext, ILogger<OrderService> logger)
        {
            this.dbContext = dbContext;
            this.logger = logger;
        }

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

            logger.LogInformation($"Created order with Id {order.Id}");
        }
    }
}
