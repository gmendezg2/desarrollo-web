import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  estado: string;
}

@Component({
  selector: 'app-consulta-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-productos.html',
  styleUrl: './consulta-productos.css',
})
export class ConsultaProductos implements OnInit {
  private readonly apiUrl = 'http://localhost:5171/api/Productos';

  productos: Producto[] = [];
  cargando = false;
  error = '';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar(): void {
    this.cargando = true;
    this.error = '';

    this.http.get<Producto[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = 'Error al consultar la API: ' + err.message;
        this.cargando = false;
        this.cdr.markForCheck();
      },
    });
  }
}
