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
		public ActionResult GetAllByIdCandidato(Guid idCandidato)
		{
			return Ok(this.Context.RespostaVagas
				.Where(r => r.IdCandidato.Equals(idCandidato)).ToList());
		}

		[HttpGet]
		[Route("GetVagasRespondidasByIdCandidato/{idCandidato}")]
		public List<RespostaVagaCandidatoDto> GetVagasRespondidasByIdCandidato(Guid idCandidato)
		{
			List<RespostaVagaCandidatoDto> respostasVagaCandidato = new List<RespostaVagaCandidatoDto>();
			List<Vaga> vagasList = new List<Vaga>();
			List<RespostaVaga> respostasVagaList = this.Context.RespostaVagas
				.Where(r => r.IdCandidato.Equals(idCandidato)).ToList();
			respostasVagaList.ForEach(r =>
			{
				RespostaVagaCandidatoDto resposta = new RespostaVagaCandidatoDto();
				Vaga vaga = this.Context.Vagas
				.Where(v => v.Id.Equals(r.IdVaga)).FirstOrDefault();
				Empresa empresa = Context.Empresas
				.Where(e => e.Id.Equals(vaga.IdEmpresa)).FirstOrDefault();
				resposta.Vaga = vaga;
				resposta.Empresa = empresa;
				respostasVagaCandidato.Add(resposta);
				//vagasList.Add(vaga);
			});
			return respostasVagaCandidato;
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
			Empresa emp = new Empresa();
			List<RankingDto> rankingList = new List<RankingDto>();
			List<RespostaVaga> respostasList = this.Context.RespostaVagas
				.Where(r => r.IdVaga.Equals(vagaId)).ToList();

			respostasList.ForEach(r =>
			{
				RankingDto item = new RankingDto();
				List<RespostaCriterio> respCriterio = Context.RespostaCriterios
				.Where(res => res.RespostaVagaId == r.Id).ToList();
				Candidato c = Context.Candidatos
				.Where(c => c.Id.Equals(r.IdCandidato)).FirstOrDefault();

				float media = emp.CalcularMedia(respCriterio);
				item.Candidato = c;
				item.Media = media;

				rankingList.Add(item);
			});
			return rankingList;
		}

	}
}
