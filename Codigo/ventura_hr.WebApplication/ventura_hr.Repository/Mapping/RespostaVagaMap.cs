using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ventura_hr.Domain.Model;

namespace ventura_hr.Repository.Mapping
{
	public class RespostaVagaMap : IEntityTypeConfiguration<RespostaVaga>
	{
		public void Configure(EntityTypeBuilder<RespostaVaga> builder)
		{
			builder.ToTable("RespostaVaga");
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
			builder.Property(x => x.IdVaga).IsRequired().HasMaxLength(250);
			builder.Property(x => x.IdCandidato).IsRequired().HasMaxLength(250);
			builder.HasMany(x => x.RespostasCriterios).WithOne();
		}
	}
}
