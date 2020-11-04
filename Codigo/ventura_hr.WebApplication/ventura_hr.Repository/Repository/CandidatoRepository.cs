using ventura_hr.Domain.Model;
using ventura_hr.Domain.Repository;
using ventura_hr.Repository.Context;

namespace ventura_hr.Repository.Repository
{
	public class CandidatoRepository : RepositoryBase<Candidato>, ICandidatoRepository
	{
		private VenturaHRContext Context { get; set; }
		public CandidatoRepository(VenturaHRContext context) : base(context)
		{
			this.Context = context;
		}
	}
}
