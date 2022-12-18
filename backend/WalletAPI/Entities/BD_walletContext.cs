using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Entities
{
    public partial class BD_walletContext : DbContext
    {
        public BD_walletContext()
        {
        }

        public BD_walletContext(DbContextOptions<BD_walletContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Banco> Bancos { get; set; } = null!;
        public virtual DbSet<Contacto> Contactos { get; set; } = null!;
        public virtual DbSet<CuentaBanco> CuentaBancos { get; set; } = null!;
        public virtual DbSet<Cuenta> Cuenta { get; set; } = null!;
        public virtual DbSet<Operacion> Operaciones { get; set; } = null!;
        public virtual DbSet<TipoOperacion> TipoOperaciones { get; set; } = null!;
        public virtual DbSet<Transferencia> Transferencia { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-T0SOSMU; Database=BD_wallet; User=sa; Password=12345; TrustServerCertificate=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Banco>(entity =>
            {
                entity.HasKey(e => e.IdBanco)
                    .HasName("PK_bancos");

                entity.ToTable("Banco");

                entity.Property(e => e.IdBanco).HasColumnName("idBanco");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");

                entity.Property(e => e.FechaAlta).HasColumnName("fecha_alta");

                entity.Property(e => e.FechaBaja).HasColumnName("fecha_baja");

                entity.Property(e => e.FechaModificacion).HasColumnName("fecha_modificacion");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");
            });

            modelBuilder.Entity<Contacto>(entity =>
            {
                entity.HasKey(e => e.IdContacto)
                .HasName("PK_contactos");

                entity.ToTable("Contacto");

                entity.Property(e => e.IdContacto).HasColumnName("idContacto");

                entity.Property(e => e.Alias)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("alias");
                
                entity.Property(e => e.Cvu)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cvu");
                
                entity.Property(e => e.Descripcion)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");

                entity.Property(e => e.FechaAlta).HasColumnName("fecha_alta");

                entity.Property(e => e.FechaBaja).HasColumnName("fecha_baja");

                entity.Property(e => e.FechaModificacion).HasColumnName("fecha_modificacion");

                entity.Property(e => e.IdCuenta).HasColumnName("idCuenta");

                entity.Property(e => e.IdUsuario).HasColumnName("id_Usuario");

                entity.HasOne(d => d.IdCuentaNavigation)
                    .WithMany(p => p.Contactos)
                    .HasForeignKey(d => d.IdCuenta)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Contacto_Cuenta");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Contactos)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Contacto_Usuario");
            });

            modelBuilder.Entity<CuentaBanco>(entity =>
            {
                entity.HasKey(e => e.IdCuentaBanco)
                    .HasName("PK_cuentasBancos");

                entity.ToTable("CuentaBanco");

                entity.Property(e => e.IdCuentaBanco).HasColumnName("idCuentaBanco");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("apellido");

                entity.Property(e => e.Cbu)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cbu");

                entity.Property(e => e.Cuil)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cuil");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");

                entity.Property(e => e.FechaAlta).HasColumnName("fecha_alta");

                entity.Property(e => e.FechaBaja).HasColumnName("fecha_baja");

                entity.Property(e => e.FechaModificacion).HasColumnName("fecha_modificacion");

                entity.Property(e => e.IdBanco).HasColumnName("idBanco");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");

                entity.HasOne(d => d.IdBancoNavigation)
                    .WithMany(p => p.CuentaBancos)
                    .HasForeignKey(d => d.IdBanco)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_cuentasBancos_bancos");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.CuentaBancos)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CuentaBanco_Usuario");
            });

            modelBuilder.Entity<Cuenta>(entity =>
            {
                entity.HasKey(e => e.IdCuenta)
                    .HasName("PK_cuentas");

                entity.Property(e => e.IdCuenta).HasColumnName("idCuenta");

                entity.Property(e => e.Alias)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("alias");

                entity.Property(e => e.Cvu)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cvu");

                entity.Property(e => e.FechaAlta).HasColumnName("fecha_alta");

                entity.Property(e => e.FechaBaja).HasColumnName("fecha_baja");

                entity.Property(e => e.FechaModificacion).HasColumnName("fecha_modificacion");

                entity.Property(e => e.Saldo)
                    .HasColumnType("decimal(18, 2)")
                    .HasColumnName("saldo");
            });

            modelBuilder.Entity<Operacion>(entity =>
            {
                entity.HasKey(e => e.IdOperacion).HasName("PK_Operacion");

                entity.ToTable("Operacion");

                entity.Property(e => e.IdOperacion).HasColumnName("idOperacion");

                entity.Property(e => e.Detalle)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("detalle");

                entity.Property(e => e.FechaHora).HasColumnName("fecha_hora");

                entity.Property(e => e.IdCuenta).HasColumnName("idCuenta");

                entity.Property(e => e.IdCuentaBanco).HasColumnName("idCuentaBanco");

                entity.Property(e => e.IdTipoOperacion).HasColumnName("idTipoOperacion");

                entity.Property(e => e.Importe)
                    .HasColumnType("decimal(18, 0)")
                    .HasColumnName("importe");

                entity.HasOne(d => d.IdCuentaNavigation)
                    .WithMany(p => p.Operacions)
                    .HasForeignKey(d => d.IdCuenta)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Operacion_Cuenta");

                entity.HasOne(d => d.IdCuentaBancoNavigation)
                    .WithMany(p => p.Operacions)
                    .HasForeignKey(d => d.IdCuentaBanco)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Operacion_CuentaBanco");

                entity.HasOne(d => d.IdTipoOperacionNavigation)
                    .WithMany(p => p.Operacions)
                    .HasForeignKey(d => d.IdTipoOperacion)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Operacion_TipoOperacion");
            });

            modelBuilder.Entity<TipoOperacion>(entity =>
            {
                entity.HasKey(e => e.IdTipoOperacion)
                    .HasName("PK_tiposOperaciones");

                entity.ToTable("TipoOperacion");

                entity.Property(e => e.IdTipoOperacion).HasColumnName("idTipoOperacion");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");
            });

            modelBuilder.Entity<Transferencia>(entity =>
            {
                entity.HasKey(e => e.IdTransferencia)
                    .HasName("PK_operaciones");

                entity.Property(e => e.IdTransferencia).HasColumnName("idTransferencia");

                entity.Property(e => e.Detalles)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("detalles");

                entity.Property(e => e.FechaHora).HasColumnName("fecha_hora");

                entity.Property(e => e.IdCuentaDestino).HasColumnName("idCuentaDestino");

                entity.Property(e => e.IdCuentaOrigen).HasColumnName("idCuentaOrigen");

                entity.Property(e => e.Importe)
                    .HasColumnType("decimal(18, 2)")
                    .HasColumnName("importe");

                entity.HasOne(d => d.IdCuentaDestinoNavigation)
                    .WithMany(p => p.TransferenciumIdCuentaDestinoNavigations)
                    .HasForeignKey(d => d.IdCuentaDestino)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_operaciones_cuentas1");

                entity.HasOne(d => d.IdCuentaOrigenNavigation)
                    .WithMany(p => p.TransferenciumIdCuentaOrigenNavigations)
                    .HasForeignKey(d => d.IdCuentaOrigen)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_operaciones_cuentas");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK_usuarios");

                entity.ToTable("Usuario");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.User)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("user");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("apellido");

                entity.Property(e => e.Cuil)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cuil");

                entity.Property(e => e.Contrasena)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("contrasena");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.FechaAlta).HasColumnName("fecha_alta");

                entity.Property(e => e.FechaBaja).HasColumnName("fecha_baja");

                entity.Property(e => e.FechaModificacion).HasColumnName("fecha_modificacion");

                entity.Property(e => e.IdCuenta).HasColumnName("idCuenta");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");

                entity.Property(e => e.Telefono)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("telefono");

                entity.HasOne(d => d.IdCuentaNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdCuenta)
                    .HasConstraintName("FK_Usuario_Cuenta");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
