using ventura_hr.Domain.Model;
using ventura_hr.Domain.Repository;
using ventura_hr.Repository.Context;

namespace ventura_hr.Repository.Repository
{
	public class RespostaVagaRepository : RepositoryBase<RespostaVaga>, IRespostaVagaRepository
	{
		private VenturaHRContext Context { get; set; }
		public RespostaVagaRepository(VenturaHRContext context) : base(context)
		{
			this.Context = context;
		}
	}
}
