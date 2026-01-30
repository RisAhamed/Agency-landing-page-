import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { RootComponent } from './root.component';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { inject } from '@vercel/analytics';

bootstrapApplication(RootComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

// Initialize Vercel Analytics
inject();
