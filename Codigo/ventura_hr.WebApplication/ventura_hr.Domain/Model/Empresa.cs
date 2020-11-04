namespace ventura_hr.Domain.Model
{
	public class Empresa : Usuario
	{
		public string CNPJ { get; set; }
		public string Telefone { get; set; }
		public Endereco Endereco { get; set; }
	}
}
