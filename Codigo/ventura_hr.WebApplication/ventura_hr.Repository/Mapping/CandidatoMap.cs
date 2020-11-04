using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ventura_hr.Domain.Model;

namespace ventura_hr.Repository.Mapping
{
	public class CandidatoMap : IEntityTypeConfiguration<Candidato>
	{
		public void Configure(EntityTypeBuilder<Candidato> builder)
		{
			builder.ToTable("Candidato");
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
			builder.Property(x => x.Nome).IsRequired().HasMaxLength(250);
			builder.Property(x => x.Cpf).IsRequired().HasMaxLength(11);
			builder.Property(x => x.Sexo).IsRequired().HasMaxLength(250);
			builder.Property(x => x.DataNascimento).IsRequired().HasMaxLength(250);
			builder.Property(x => x.Email).IsRequired().HasMaxLength(250);
			builder.Property(x => x.Senha).IsRequired().HasMaxLength(250);
			builder.Property(x => x.TipoUsuario).IsRequired().HasMaxLength(20);

			builder.OwnsOne(x => x.Endereco, endereco =>
			{
				endereco.Property(e => e.Cep).IsRequired().HasMaxLength(250);
				endereco.Property(e => e.Estado).IsRequired().HasMaxLength(250);
				endereco.Property(e => e.Cidade).IsRequired().HasMaxLength(250);
				endereco.Property(e => e.Logradouro).IsRequired().HasMaxLength(250);
			});
		}
	}
}
