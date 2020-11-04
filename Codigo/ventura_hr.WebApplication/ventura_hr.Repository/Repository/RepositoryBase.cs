using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using ventura_hr.Domain.Repository;
using ventura_hr.Repository.Context;

namespace ventura_hr.Repository.Repository
{
	public class RepositoryBase<T> : IRepositoryBase<T> where T : class
	{
		private DbSet<T> Query { get; set; }
		private VenturaHRContext Context { get; set; }

		public RepositoryBase(VenturaHRContext context)
		{
			this.Context = context;
			this.Query = context.Set<T>();
		}

		public Task Delete(T obj)
		{
			this.Query.Remove(obj);
			this.Context.SaveChanges();
			return Task.CompletedTask;
		}

		public async Task<List<T>> GetAll()
		{
			return await this.Query.ToListAsync();
		}

		public async Task<T> GetById(object id)
		{
			return await this.Query.FindAsync(id);
		}

		public Task Save(T obj)
		{
			this.Query.Add(obj);
			this.Context.SaveChanges();
			return Task.CompletedTask;
		}

		public Task Update(T obj)
		{
			this.Query.Attach(obj);
			var entry = this.Context.Entry(obj);
			entry.State = EntityState.Modified;
			this.Context.SaveChanges();
			return Task.CompletedTask;
		}
	}
}
