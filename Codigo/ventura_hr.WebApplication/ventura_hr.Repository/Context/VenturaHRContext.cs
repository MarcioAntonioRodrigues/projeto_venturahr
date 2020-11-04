using Microsoft.EntityFrameworkCore;
using ventura_hr.Domain.Model;
using ventura_hr.Repository.Mapping;

namespace ventura_hr.Repository.Context
{
	public class VenturaHRContext : DbContext
	{
		public DbSet<Candidato> Candidatos { get; set; }
		public DbSet<Empresa> Empresas { get; set; }
		public DbSet<Vaga> Vagas { get; set; }
		public DbSet<Criterio> Criterio { get; set; }
		public VenturaHRContext(DbContextOptions<VenturaHRContext> options) : base(options)
		{

		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.ApplyConfiguration(new CandidatoMap());
			modelBuilder.ApplyConfiguration(new EmpresaMap());
			modelBuilder.ApplyConfiguration(new VagaMap());

			base.OnModelCreating(modelBuilder);
		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			base.OnConfiguring(optionsBuilder);
		}
	}
}
