using System;
using System.Collections.Generic;

namespace ventura_hr.Domain.Model
{
	public class RespostaVaga
	{
		public int Id { get; set; }
		public int IdVaga { get; set; }
		public Guid IdCandidato { get; set; }
		public List<RespostaCriterio> RespostasCriterios { get; set; }
	}
}
