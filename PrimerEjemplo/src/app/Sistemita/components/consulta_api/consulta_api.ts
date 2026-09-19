import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

@Component({
  selector: 'app-consulta-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta_api.html',
})
export class ConsultaApi implements OnInit {
  productos: Producto[] = [];
  cargando = true;
  error = '';

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.http.get<Producto[]>('https://fakestoreapi.com/products').subscribe({
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
