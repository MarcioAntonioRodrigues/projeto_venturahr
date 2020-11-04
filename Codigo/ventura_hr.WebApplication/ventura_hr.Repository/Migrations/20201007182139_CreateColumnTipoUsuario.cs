using Microsoft.EntityFrameworkCore.Migrations;

namespace ventura_hr.Repository.Migrations
{
    public partial class CreateColumnTipoUsuario : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TipoUsuario",
                table: "Empresa",
                maxLength: 20,
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TipoUsuario",
                table: "Candidato",
                maxLength: 20,
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TipoUsuario",
                table: "Empresa");

            migrationBuilder.DropColumn(
                name: "TipoUsuario",
                table: "Candidato");
        }
    }
}
