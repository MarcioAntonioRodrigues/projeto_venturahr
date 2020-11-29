using System.Collections.Generic;

namespace ventura_hr.Domain.Model
{
	public class Empresa : Usuario
	{
		public string CNPJ { get; set; }
		public string Telefone { get; set; }
		public Endereco Endereco { get; set; }

		public float CalcularMedia(List<RespostaCriterio> respostaCriterio)
		{
			float multiplicacao = 0;
			float soma = 0;
			float mediaPonderada = 0;

			respostaCriterio.ForEach(c =>

				multiplicacao += c.PMD * c.Peso
			);
			respostaCriterio.ForEach(c =>

				soma += c.Peso
			);
			mediaPonderada = multiplicacao / soma;
			return mediaPonderada;
		}
	}
}
