using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ventura_hr.Domain.Repository;
using ventura_hr.Repository.Context;
using ventura_hr.Repository.Repository;

namespace ventura_hr
{
	public class Startup
	{

		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddTransient<ICandidatoRepository, CandidatoRepository>();
			services.AddTransient<IEmpresaRepository, EmpresaRepository>();
			services.AddTransient<IVagaRepository, VagaRepository>();

			services.AddDbContext<VenturaHRContext>(opt =>
			{
				opt.UseSqlServer(Configuration.GetConnectionString("VenturaHRDataBase"));
			});

			services.AddCors(options =>
				{
					options.AddDefaultPolicy(
						builder => builder.WithOrigins("http://localhost:4200"));
					options.AddPolicy(
						"mypolicy", builder => builder.WithOrigins("http://localhost:4200"));
				}
			);


			services.AddControllers();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseHttpsRedirection();

			app.UseRouting();

			app.UseCors(option => option.AllowAnyOrigin().AllowAnyHeader());

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}
