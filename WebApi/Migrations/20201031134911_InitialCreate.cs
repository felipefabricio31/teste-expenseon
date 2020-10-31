using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Hotel",
                columns: table => new
                {
                    HotelId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeHotel = table.Column<string>(maxLength: 80, nullable: false),
                    Descricao = table.Column<string>(maxLength: 300, nullable: true),
                    Avaliacao = table.Column<int>(nullable: false),
                    Comodidade = table.Column<string>(nullable: true),
                    Logradouro = table.Column<string>(nullable: true),
                    Cidade = table.Column<string>(maxLength: 80, nullable: true),
                    Bairro = table.Column<string>(maxLength: 80, nullable: true),
                    Cep = table.Column<string>(maxLength: 15, nullable: true),
                    Uf = table.Column<string>(maxLength: 2, nullable: true),
                    Numero = table.Column<int>(nullable: false),
                    Observacao = table.Column<string>(maxLength: 300, nullable: true),
                    Ativo = table.Column<bool>(nullable: false),
                    DataCreate = table.Column<DateTime>(nullable: true),
                    DataUpdate = table.Column<DateTime>(nullable: true),
                    DataDelete = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hotel", x => x.HotelId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Hotel");
        }
    }
}
