using System.Runtime.Serialization;

namespace ventura_hr.Domain.Model
{
	[DataContract]
	public class Candidato : Usuario
	{
		[DataMember(Name = "Cpf")]
		public string Cpf { get; set; }
		[DataMember(Name = "Endereco")]
		public Endereco Endereco { get; set; }
		[DataMember(Name = "Sexo")]
		public string Sexo { get; set; }
		[DataMember(Name = "DataNascimento")]
		public string DataNascimento { get; set; }
		[DataMember(Name = "Telefone")]
		public string Telefone { get; set; }

	}
}
