import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // asegúrate que el componente App esté decorado con standalone: true
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // si defines tus rutas aparte

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
