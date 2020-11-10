using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ventura_hr.Repository.Migrations
{
    public partial class CreateRespostaVagaColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Criterio_Vaga_VagaId",
                table: "Criterio");

            migrationBuilder.AlterColumn<Guid>(
                name: "IdEmpresa",
                table: "Vaga",
                maxLength: 250,
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldMaxLength: 250);

            migrationBuilder.AlterColumn<int>(
                name: "VagaId",
                table: "Criterio",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Criterio_Vaga_VagaId",
                table: "Criterio",
                column: "VagaId",
                principalTable: "Vaga",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Criterio_Vaga_VagaId",
                table: "Criterio");

            migrationBuilder.AlterColumn<int>(
                name: "IdEmpresa",
                table: "Vaga",
                type: "int",
                maxLength: 250,
                nullable: false,
                oldClrType: typeof(Guid),
                oldMaxLength: 250);

            migrationBuilder.AlterColumn<int>(
                name: "VagaId",
                table: "Criterio",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Criterio_Vaga_VagaId",
                table: "Criterio",
                column: "VagaId",
                principalTable: "Vaga",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
