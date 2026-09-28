import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentePrueba } from './componentes/componente-prueba/componente-prueba';
import { SegundoComponente } from './componentes/segundo-componente/segundo-componente';

@Component({
  imports: [RouterOutlet, ComponentePrueba, SegundoComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ejemplo_nuevo');
}
