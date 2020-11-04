﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ventura_hr.Repository.Context;

namespace ventura_hr.Repository.Migrations
{
    [DbContext(typeof(VenturaHRContext))]
    [Migration("20201002020843_CreateEmpresaTable")]
    partial class CreateEmpresaTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ventura_hr.Domain.Model.Candidato", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Cpf")
                        .IsRequired()
                        .HasColumnType("nvarchar(11)")
                        .HasMaxLength(11);

                    b.Property<string>("DataNascimento")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)")
                        .HasMaxLength(250);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)")
                        .HasMaxLength(250);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)")
                        .HasMaxLength(250);

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)")
                        .HasMaxLength(250);

                    b.Property<string>("Sexo")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)")
                        .HasMaxLength(250);

                    b.Property<string>("Telefone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Candidato");
                });

            modelBuilder.Entity("ventura_hr.Domain.Model.Empresa", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CNPJ")
                        .IsRequired()
                        .HasColumnType("nvarchar(11)")
                        .HasMaxLength(11);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)")
                        .HasMaxLength(250);

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)")
                        .HasMaxLength(20);

                    b.HasKey("Id");

                    b.ToTable("Empresa");
                });

            modelBuilder.Entity("ventura_hr.Domain.Model.Candidato", b =>
                {
                    b.OwnsOne("ventura_hr.Domain.Model.Endereco", "Endereco", b1 =>
                        {
                            b1.Property<Guid>("CandidatoId")
                                .HasColumnType("uniqueidentifier");

                            b1.Property<int>("Cep")
                                .HasColumnType("int")
                                .HasMaxLength(250);

                            b1.Property<string>("Cidade")
                                .IsRequired()
                                .HasColumnType("nvarchar(250)")
                                .HasMaxLength(250);

                            b1.Property<string>("Estado")
                                .IsRequired()
                                .HasColumnType("nvarchar(250)")
                                .HasMaxLength(250);

                            b1.Property<string>("Logradouro")
                                .IsRequired()
                                .HasColumnType("nvarchar(250)")
                                .HasMaxLength(250);

                            b1.HasKey("CandidatoId");

                            b1.ToTable("Candidato");

                            b1.WithOwner()
                                .HasForeignKey("CandidatoId");
                        });
                });

            modelBuilder.Entity("ventura_hr.Domain.Model.Empresa", b =>
                {
                    b.OwnsOne("ventura_hr.Domain.Model.Endereco", "Endereco", b1 =>
                        {
                            b1.Property<Guid>("EmpresaId")
                                .HasColumnType("uniqueidentifier");

                            b1.Property<int>("Cep")
                                .HasColumnType("int")
                                .HasMaxLength(250);

                            b1.Property<string>("Cidade")
                                .IsRequired()
                                .HasColumnType("nvarchar(250)")
                                .HasMaxLength(250);

                            b1.Property<string>("Estado")
                                .IsRequired()
                                .HasColumnType("nvarchar(250)")
                                .HasMaxLength(250);

                            b1.Property<string>("Logradouro")
                                .IsRequired()
                                .HasColumnType("nvarchar(250)")
                                .HasMaxLength(250);

                            b1.HasKey("EmpresaId");

                            b1.ToTable("Empresa");

                            b1.WithOwner()
                                .HasForeignKey("EmpresaId");
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
