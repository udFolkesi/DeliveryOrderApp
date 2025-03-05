using DeliveryOrderApp.Server.Models.Abstractions;

namespace DeliveryOrderApp.Server.Models
{
    public class Order: BaseEntity
    {
        public string FromCity { get; set; }
        public string FromAddress { get; set; }
        public string ToCity { get; set; }
        public string ToAddress { get; set; }
        public double Weight { get; set; }
        public DateTime OrderCollectedAt { get; set; }
        public string OrderNumber { get; set; } = $"ORD-{Guid.NewGuid().ToString().Substring(0, 8).ToUpper()}";
    }
}
