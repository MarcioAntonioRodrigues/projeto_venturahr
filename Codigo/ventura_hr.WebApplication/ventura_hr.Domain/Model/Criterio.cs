namespace ventura_hr.Domain.Model
{
	public class Criterio
	{
		public int Id { get; set; }
		public string Nome { get; set; }
		public string Descricao { get; set; }
		public int PMD { get; set; }
		public int Peso { get; set; }
		public int VagaId { get; set; }
	}
}
