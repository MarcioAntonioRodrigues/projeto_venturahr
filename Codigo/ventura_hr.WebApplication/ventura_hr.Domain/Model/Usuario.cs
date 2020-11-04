using System;
using System.Runtime.Serialization;

namespace ventura_hr.Domain.Model
{
	[DataContract]
	public abstract class Usuario
	{
		public Guid Id { get; set; }
		[DataMember(Name = "Nome")]
		public string Nome { get; set; }
		[DataMember(Name = "Email")]
		public string Email { get; set; }
		[DataMember(Name = "Senha")]
		public string Senha { get; set; }
		public int TipoUsuario { get; set; }
	}
}
