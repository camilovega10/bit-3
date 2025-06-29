import { Routes } from '@angular/router';
import { Inicio } from './componentes/paginas/inicio/inicio';
import { Museo } from './componentes/paginas/museo/museo';
import { NotFound } from './componentes/paginas/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'museo', component: Museo },
  { path: '**', component: NotFound }
];