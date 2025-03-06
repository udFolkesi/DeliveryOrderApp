﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DeliveryOrderApp.Server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FromCity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FromAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ToCity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ToAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Weight = table.Column<double>(type: "float", nullable: false),
                    OrderCollectedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    OrderNumber = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");
        }
    }
}
