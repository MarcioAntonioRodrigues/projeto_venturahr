using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ventura_hr.Domain.Model;

namespace ventura_hr.Repository.Mapping
{
	public class VagaMap : IEntityTypeConfiguration<Vaga>
	{
		public void Configure(EntityTypeBuilder<Vaga> builder)
		{
			builder.ToTable("Vaga");
			builder.HasKey(x => x.Id);
			builder.HasMany(x => x.ListaDeCriterios).WithOne();
			builder.Property(x => x.Cargo).IsRequired().HasMaxLength(250);
			builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
			builder.Property(x => x.TipoVaga).IsRequired().HasMaxLength(250);
			builder.Property(x => x.IdEmpresa).IsRequired().HasMaxLength(250);
			builder.Property(x => x.Descricao).IsRequired().HasMaxLength(250);
			builder.Property(x => x.Remuneracao).IsRequired().HasMaxLength(250);
			builder.Property(x => x.DataCriacao).IsRequired().HasMaxLength(250);
		}
	}
}
