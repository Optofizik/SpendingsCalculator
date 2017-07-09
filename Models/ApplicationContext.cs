using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Data.SQLite.EF6;
using SQLite.CodeFirst;

namespace SpendingsCalculator.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext() : base("DBConnection") { }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            var sqliteConnectionInitializer = new SqliteDropCreateDatabaseWhenModelChanges<ApplicationContext>(modelBuilder);
            Database.SetInitializer(sqliteConnectionInitializer);
        }

        public DbSet<Tag> Tag { get; set; }
        public DbSet<Spending> Spending { get; set; }
    }
}