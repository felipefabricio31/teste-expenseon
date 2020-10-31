using WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Data
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer("data source=FELIPE;Initial Catalog=datTailorit;Integrated Security=True");

           optionsBuilder.UseSqlServer("data source=expanseon.mssql.somee.com;user id=felipefabricio31_SQLLogin_1;pwd=diqery5zuu;persist security info=False;initial catalog=expanseon");
        }

        public DbSet<Hotel> Hotel { get; set; }
    }
}
