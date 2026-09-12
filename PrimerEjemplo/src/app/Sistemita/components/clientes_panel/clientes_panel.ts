import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  categoria: string;
  activo: boolean;
}

@Component({
  selector: 'app-clientes-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes_panel.html',
})
export class ClientesPanel {
  @Input() mode: 'crear' | 'consultar' = 'crear';

  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Ana García',
      email: 'ana.garcia@email.com',
      telefono: '555-0101',
      categoria: 'VIP',
      activo: true,
    },
    {
      id: 2,
      nombre: 'Luis Pérez',
      email: 'luis.perez@email.com',
      telefono: '555-0102',
      categoria: 'Regular',
      activo: true,
    },
    {
      id: 3,
      nombre: 'María López',
      email: 'maria.lopez@email.com',
      telefono: '555-0103',
      categoria: 'Preferente',
      activo: false,
    },
  ];

  nuevoCliente = {
    nombre: '',
    email: '',
    telefono: '',
    categoria: 'Regular',
  };

  filtro = '';

  get clientesFiltrados(): Cliente[] {
    const termino = this.filtro.trim().toLowerCase();

    if (!termino) {
      return this.clientes;
    }

    return this.clientes.filter(
      (cliente) =>
        cliente.nombre.toLowerCase().includes(termino) ||
        cliente.email.toLowerCase().includes(termino) ||
        cliente.telefono.toLowerCase().includes(termino) ||
        cliente.categoria.toLowerCase().includes(termino),
    );
  }

  get clientesActivos(): number {
    return this.clientes.filter((cliente) => cliente.activo).length;
  }

  get clientesVip(): number {
    return this.clientes.filter((cliente) => cliente.categoria === 'VIP')
      .length;
  }

  registrarCliente(): void {
    const nombre = this.nuevoCliente.nombre.trim();
    const email = this.nuevoCliente.email.trim();
    const telefono = this.nuevoCliente.telefono.trim();

    if (!nombre || !email || !telefono) {
      return;
    }

    this.clientes = [
      {
        id: Date.now(),
        nombre,
        email,
        telefono,
        categoria: this.nuevoCliente.categoria,
        activo: true,
      },
      ...this.clientes,
    ];

    this.nuevoCliente = {
      nombre: '',
      email: '',
      telefono: '',
      categoria: 'Regular',
    };
  }
}
