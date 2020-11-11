using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ventura_hr.Domain.Model;
using ventura_hr.Domain.Repository;

namespace ventura_hr.WebApplication.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class RespostasVagasController : ControllerBase
	{
		private IRespostaVagaRepository RespostaVagaRepository { get; set; }

		public RespostasVagasController(IRespostaVagaRepository respostaVagaRepository)
		{
			this.RespostaVagaRepository = respostaVagaRepository;
		}

		[Route("")]
		public async Task<ActionResult> GetAll()
		{
			return Ok(await this.RespostaVagaRepository.GetAll());
		}

		[HttpPost]
		[Route("Save")]
		public ActionResult SaveResposta(RespostaVaga respostaVaga)
		{
			return Ok(this.RespostaVagaRepository.Save(respostaVaga));
		}
	}
}
