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
	public class CandidatosController : ControllerBase
	{
		private ICandidatoRepository CandidatoRepository { get; set; }
		private VenturaHRContext Context { get; set; }
		public CandidatosController(ICandidatoRepository candidatoRepository,
									VenturaHRContext context)
		{
			this.CandidatoRepository = candidatoRepository;
			this.Context = context;
		}

		[Route("")]
		public async Task<ActionResult> GetAll()
		{
			return Ok(await this.CandidatoRepository.GetAll());
		}

		[HttpPost]
		[Route("Save")]
		public ActionResult SaveCandidato(Candidato candidato)
		{
			return Ok(this.CandidatoRepository.Save(candidato));
		}

		[Route("Delete")]
		public ActionResult DeleteCandidato(Candidato candidato)
		{
			return Ok(this.CandidatoRepository.Delete(candidato));
		}

		[HttpGet]
		[Route("GetCandidatoById/{idCandidato}")]
		public ActionResult GetCandidatoById(Guid idCandidato)
		{
			return Ok(this.Context.Candidatos.Where(c => c.Id == idCandidato));
		}
	}
}
