using Microsoft.EntityFrameworkCore;
using StoreCatalog.Entities;
namespace StoreCatalog.DBContext
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }    
    }
}
