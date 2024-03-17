using api14232.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace api14232.DAL.Context
{
    public class MainDbContext : DbContext
    {
        public MainDbContext(DbContextOptions<MainDbContext> options) : base(options) { }
        public DbSet<Key> Keys { get; set; }
        public DbSet<Lock> Locks { get; set; }
    }
}
