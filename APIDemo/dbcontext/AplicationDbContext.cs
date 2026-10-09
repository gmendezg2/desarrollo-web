using System;
using APIDemo.Models;
using Microsoft.EntityFrameworkCore;

namespace APIDemo.dbcontext;

public class AplicationDbContext(DbContextOptions<AplicationDbContext> options) : DbContext(options)
{
    //Mapear la clase Producto a la basa de datos
    public DbSet<Producto> Productos => Set<Producto>();
}
