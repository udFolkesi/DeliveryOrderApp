using System.ComponentModel.DataAnnotations;

namespace DeliveryOrderApp.Server.Models.Abstractions
{
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
