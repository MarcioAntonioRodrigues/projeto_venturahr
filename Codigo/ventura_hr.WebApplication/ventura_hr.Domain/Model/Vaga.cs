using System;
using System.Collections.Generic;

namespace ventura_hr.Domain.Model
{
	public class Vaga
	{
		public int Id { get; set; }
		public Guid IdEmpresa { get; set; }
		public string Cargo { get; set; }
		public string Descricao { get; set; }
		public int Remuneracao { get; set; }
		public List<Criterio> ListaDeCriterios { get; set; }
		public int TipoVaga { get; set; }
		public DateTime DataCriacao { get; set; }
	}
}
