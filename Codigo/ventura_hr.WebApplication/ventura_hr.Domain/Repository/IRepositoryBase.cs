using System.Collections.Generic;
using System.Threading.Tasks;

namespace ventura_hr.Domain.Repository
{
	public interface IRepositoryBase<T>
	{
		Task<List<T>> GetAll();
		Task<T> GetById(object id);
		Task Save(T obj);
		Task Update(T obj);
		Task Delete(T obj);
	}
}
