import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navegacion } from '../../shared/navegacion/navegacion';
import { Egiptoapi } from '../../../servicios/egiptoapi';

@Component({
  standalone: true,
  selector: 'app-museo',
  templateUrl: './museo.html',
  styleUrl: './museo.css',
  imports: [CommonModule, Navegacion],
})
export class Museo implements OnInit {
  museos: any[] = [];

  // 🔹 NUEVO: Museo seleccionado para mostrar en el modal
  museoSeleccionado: any = null;

  constructor(private egiptoapi: Egiptoapi) {}

  ngOnInit(): void {
    this.egiptoapi.obtenerMuseos().subscribe({
      next: data => {
        this.museos = data?.data || [];
      },
      error: err => console.error('Error cargando museos', err)
    });
  }

  // 🔹 NUEVO: Método que guarda el museo al hacer clic
  verDetalles(museo: any): void {
    this.museoSeleccionado = museo;
  }
}


