using DeliveryOrderApp.Server.Models;

namespace DeliveryOrderApp.Server.Services.Abstractions
{
    public interface IOrderService
    {
        Task<IEnumerable<Order>> GetOrdersAsync();
        Task<Order> GetOrderAsync(int id);
        Task CreateOrderAsync(Order order);
    }
}
