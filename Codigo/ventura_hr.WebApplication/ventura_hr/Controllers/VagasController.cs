using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ventura_hr.Domain.Model;
using ventura_hr.Domain.Repository;
using ventura_hr.Repository.Context;

namespace ventura_hr.WebApplication.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class VagasController : ControllerBase
	{
		private IVagaRepository VagaRepository { get; set; }
		private VenturaHRContext Context { get; set; }

		public VagasController(IVagaRepository vagaRepository, VenturaHRContext context)
		{
			this.VagaRepository = vagaRepository;
			this.Context = context;
		}

		[Route("")]
		public async Task<ActionResult> GetAll()
		{
			return Ok(await this.VagaRepository.GetAll());
		}

		[HttpGet]
		[Route("GetByIdEmpresa/{idEmpresa}")]
		public ActionResult BuscarVagasByIdEmpresa(Guid idEmpresa)
		{
			return Ok(this.Context.Vagas.Where(v => v.IdEmpresa.Equals(idEmpresa)).ToList());
		}

		[HttpPost]
		[Route("Save")]
		public ActionResult SaveVaga(Vaga vaga)
		{
			return Ok(this.VagaRepository.Save(vaga));
		}

		[Route("Delete")]
		public ActionResult DeleteVaga(Vaga vaga)
		{
			return Ok(this.VagaRepository.Delete(vaga));
		}

		[HttpGet]
		[Route("Buscar/{cargo}")]
		public ActionResult BuscarVagas(string cargo)
		{
			var vagas = Context.Vagas.Where(v => v.Cargo.Contains(cargo));
			return Ok(vagas);
		}



		[HttpGet]
		[Route("BuscarCriterios/{id}")]
		public ActionResult BuscarCriterios(int id)
		{
			List<Criterio> criterios = new List<Criterio>();

			criterios = Context.Criterio.Where(c => id == c.VagaId).ToList();

			return Ok(criterios);
		}
	}
}
