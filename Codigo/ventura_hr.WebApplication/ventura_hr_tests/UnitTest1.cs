using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using ventura_hr.Domain.Model;

namespace ventura_hr_tests
{
	[TestClass]
	public class UnitTest1
	{
		public Empresa Empresa { get; set; }

		[TestInitialize]
		public void IniciarTestes()
		{

		}

		[TestMethod]
		public void TestarCalcularMedia()
		{
			Empresa emp = new Empresa();
			RespostaCriterio resp1 = new RespostaCriterio();
			RespostaCriterio resp2 = new RespostaCriterio();

			resp1.Peso = 3;
			resp1.PMD = 3;

			resp2.Peso = 3;
			resp2.PMD = 3;

			List<RespostaCriterio> respostaCriterioList = new List<RespostaCriterio>();
			respostaCriterioList.Add(resp1);
			respostaCriterioList.Add(resp2);
			float media = emp.CalcularMedia(respostaCriterioList);
			bool istrue;
			if (media.Equals(3))
			{
				istrue = true;
			}
			else
			{
				istrue = false;
			}

			Assert.IsTrue(istrue);
		}

		[TestCleanup]
		public void FinalizarTest()
		{

		}
	}
}
