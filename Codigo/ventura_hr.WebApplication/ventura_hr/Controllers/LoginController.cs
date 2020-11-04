using Microsoft.AspNetCore.Mvc;
using System.Linq;
using ventura_hr.Domain.Model;
using ventura_hr.Domain.Repository;
using ventura_hr.Repository.Context;

namespace ventura_hr.WebApplication.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class LoginController : ControllerBase
	{
		private IEmpresaRepository EmpresaRepository { get; set; }
		private VenturaHRContext Context { get; set; }
		public LoginController(IEmpresaRepository empresaRepository, VenturaHRContext context)
		{
			this.EmpresaRepository = empresaRepository;
			this.Context = context;
		}

		[HttpPost]
		[Route("login")]
		public ActionResult Login(Empresa usuario)
		{
			if (ModelState.IsValid)
			{
				var empresa = Context.Empresas.Where(s => s.Email.Equals(usuario.Email) && s.Senha.Equals(usuario.Senha)).ToList();
				var candidato = Context.Candidatos.Where(s => s.Email.Equals(usuario.Email) && s.Senha.Equals(usuario.Senha)).ToList();
				if (empresa.Count() > 0)
				{
					return Ok(empresa);
				}
				else if (candidato.Count() > 0)
				{
					return Ok(candidato);
				}
			}
			return null;
		}
	}
}
