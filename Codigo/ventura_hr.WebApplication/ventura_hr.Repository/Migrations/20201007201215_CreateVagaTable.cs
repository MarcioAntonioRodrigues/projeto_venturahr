using Microsoft.EntityFrameworkCore.Migrations;

namespace ventura_hr.Repository.Migrations
{
    public partial class CreateVagaTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vaga",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdEmpresa = table.Column<int>(maxLength: 250, nullable: false),
                    Cargo = table.Column<string>(maxLength: 250, nullable: false),
                    Descricao = table.Column<string>(maxLength: 250, nullable: false),
                    Remuneracao = table.Column<int>(maxLength: 250, nullable: false),
                    TipoVaga = table.Column<int>(maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vaga", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Criterio",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(nullable: true),
                    Descricao = table.Column<string>(nullable: true),
                    PMD = table.Column<int>(nullable: false),
                    Peso = table.Column<int>(nullable: false),
                    VagaId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Criterio", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Criterio_Vaga_VagaId",
                        column: x => x.VagaId,
                        principalTable: "Vaga",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Criterio_VagaId",
                table: "Criterio",
                column: "VagaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Criterio");

            migrationBuilder.DropTable(
                name: "Vaga");
        }
    }
}
