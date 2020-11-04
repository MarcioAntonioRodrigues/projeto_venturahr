using ventura_hr.Domain.Model;
using ventura_hr.Domain.Repository;
using ventura_hr.Repository.Context;

namespace ventura_hr.Repository.Repository
{
	public class VagaRepository : RepositoryBase<Vaga>, IVagaRepository
	{
		private VenturaHRContext Context { get; set; }
		public VagaRepository(VenturaHRContext context) : base(context)
		{
			this.Context = context;
		}
	}
}
