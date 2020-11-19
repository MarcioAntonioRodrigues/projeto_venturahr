using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ventura_hr.Domain.DTO;
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

		[HttpGet]
		[Route("GetAllByIdVaga/{idVaga}")]
		public ActionResult BuscarRespostasByIdVaga(int idVaga)
		{
			return Ok(this.Context.RespostaVagas.Where(r => r.IdVaga.Equals(idVaga)).ToList());
		}

		[HttpGet]
		[Route("GetRespostasCriterioByIdRespostaVaga/{respostaVagaId}")]
		public ActionResult GetRespostasCriterioByIdRespostaVaga(int respostaVagaId)
		{
			return Ok(this.Context.RespostaCriterios.Where(r => r.RespostaVagaId.Equals(respostaVagaId)).ToList());
		}

		[HttpPost]
		[Route("Save")]
		public ActionResult SaveResposta(RespostaVaga respostaVaga)
		{
			return Ok(this.RespostaVagaRepository.Save(respostaVaga));
		}

		[HttpGet]
		[Route("GetRankingByRespostaVagaId/{vagaId}")]
		public List<RankingDto> GetRankingByRespostaVagaId(int vagaId)
		{
			//Criar uma lista de rankingDto
			List<RankingDto> rankingList = new List<RankingDto>();

			//pegar lista de respostas de uma vaga pelo id da mesma
			List<RespostaVaga> respostasList = this.Context.RespostaVagas
				.Where(r => r.IdVaga.Equals(vagaId)).ToList();



			//montar a lista do ranking varrendo a lista de respostas
			respostasList.ForEach(r =>
			{
				RankingDto item = new RankingDto();

				List<RespostaCriterio> respCriterio = Context.RespostaCriterios
				.Where(res => res.RespostaVagaId == r.Id).ToList();

				Candidato c = Context.Candidatos
				.Where(c => c.Id.Equals(r.IdCandidato)).FirstOrDefault();

				float media = CalcularMedia(respCriterio);
				item.Candidato = c;
				item.Media = media;

				rankingList.Add(item);
			});
			return rankingList;
		}

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
