using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ventura_hr.Repository.Migrations
{
    public partial class initialDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Candidato",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nome = table.Column<string>(maxLength: 250, nullable: false),
                    Email = table.Column<string>(maxLength: 250, nullable: false),
                    Senha = table.Column<string>(maxLength: 250, nullable: false),
                    Cpf = table.Column<string>(maxLength: 11, nullable: false),
                    Endereco_Cidade = table.Column<string>(maxLength: 250, nullable: true),
                    Endereco_Estado = table.Column<string>(maxLength: 250, nullable: true),
                    Endereco_Logradouro = table.Column<string>(maxLength: 250, nullable: true),
                    Endereco_Cep = table.Column<int>(maxLength: 250, nullable: true),
                    Sexo = table.Column<string>(maxLength: 250, nullable: false),
                    DataNascimento = table.Column<string>(maxLength: 250, nullable: false),
                    Telefone = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidato", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Candidato");
        }
    }
}
