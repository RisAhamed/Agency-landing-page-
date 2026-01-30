import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { inject } from '@vercel/analytics';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

// Initialize Vercel Analytics
inject();
