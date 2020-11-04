using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using ventura_hr.Domain.Model;
using ventura_hr.Domain.Repository;

namespace ventura_hr.WebApplication.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class EmpresasController : ControllerBase
	{
		private IEmpresaRepository EmpresaRepository { get; set; }
		public EmpresasController(IEmpresaRepository empresaRepository)
		{
			this.EmpresaRepository = empresaRepository;
		}

		[Route("")]
		public async Task<ActionResult> GetAll()
		{
			return Ok(await this.EmpresaRepository.GetAll());
		}

		[HttpPost]
		[Route("Save")]
		public ActionResult SaveEmpresa(Empresa empresa)
		{
			return Ok(this.EmpresaRepository.Save(empresa));
		}

		[Route("Delete")]
		public ActionResult DeleteEmpresa(Empresa empresa)
		{
			return Ok(this.EmpresaRepository.Delete(empresa));
		}

		[HttpGet]
		[Route("GetById/{id}")]
		public async Task<ActionResult> GetEmpresaById(Guid id)
		{
			return Ok(await this.EmpresaRepository.GetById(id));
		}
	}
}
