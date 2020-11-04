using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ventura_hr.Repository.Migrations
{
    public partial class CreateEmpresaTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Empresa",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nome = table.Column<string>(maxLength: 250, nullable: false),
                    Email = table.Column<string>(maxLength: 50, nullable: false),
                    Senha = table.Column<string>(maxLength: 50, nullable: false),
                    CNPJ = table.Column<string>(maxLength: 11, nullable: false),
                    Telefone = table.Column<string>(maxLength: 20, nullable: false),
                    Endereco_Cidade = table.Column<string>(maxLength: 250, nullable: true),
                    Endereco_Estado = table.Column<string>(maxLength: 250, nullable: true),
                    Endereco_Logradouro = table.Column<string>(maxLength: 250, nullable: true),
                    Endereco_Cep = table.Column<int>(maxLength: 250, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empresa", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Empresa");
        }
    }
}
