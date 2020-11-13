using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using ventura_hr.Domain.Model;
using ventura_hr.Domain.Repository;
using ventura_hr.Repository.Context;

namespace ventura_hr.WebApplication.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class RespostasVagasController : ControllerBase
	{
		private IRespostaVagaRepository RespostaVagaRepository { get; set; }
		private VenturaHRContext Context { get; set; }

		public RespostasVagasController(IRespostaVagaRepository respostaVagaRepository,
										VenturaHRContext context)
		{
			this.RespostaVagaRepository = respostaVagaRepository;
			this.Context = context;
		}

		[Route("")]
		public async Task<ActionResult> GetAll()
		{
			return Ok(await this.RespostaVagaRepository.GetAll());
		}

		[HttpGet]
		[Route("GetAllByIdCandidato/{idCandidato}")]
		public ActionResult BuscarRespostasByIdUsuario(Guid idCandidato)
		{
			return Ok(this.Context.RespostaVagas.Where(r => r.IdCandidato.Equals(idCandidato)).ToList());
		}

		[HttpPost]
		[Route("Save")]
		public ActionResult SaveResposta(RespostaVaga respostaVaga)
		{
			return Ok(this.RespostaVagaRepository.Save(respostaVaga));
		}
	}
}
