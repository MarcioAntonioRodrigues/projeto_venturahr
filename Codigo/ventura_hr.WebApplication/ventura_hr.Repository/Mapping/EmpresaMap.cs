using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ventura_hr.Domain.Model;

namespace ventura_hr.Repository.Mapping
{
	class EmpresaMap : IEntityTypeConfiguration<Empresa>
	{
		public void Configure(EntityTypeBuilder<Empresa> builder)
		{
			builder.ToTable("Empresa");
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).IsRequired().ValueGeneratedOnAdd();
			builder.Property(x => x.Nome).IsRequired().HasMaxLength(250);
			builder.Property(x => x.CNPJ).IsRequired().HasMaxLength(11);
			builder.Property(x => x.Telefone).IsRequired().HasMaxLength(20);
			builder.Property(x => x.Email).IsRequired().HasMaxLength(50);
			builder.Property(x => x.Senha).IsRequired().HasMaxLength(50);
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
