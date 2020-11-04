using ventura_hr.Domain.Model;
using ventura_hr.Domain.Repository;
using ventura_hr.Repository.Context;

namespace ventura_hr.Repository.Repository
{
	public class EmpresaRepository : RepositoryBase<Empresa>, IEmpresaRepository
	{
		private VenturaHRContext Context { get; set; }
		public EmpresaRepository(VenturaHRContext context) : base(context)
		{
			this.Context = context;
		}
	}
}
