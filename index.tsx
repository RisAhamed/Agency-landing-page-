
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './src/app.routes';
import { RootComponent } from './src/root.component';
import { inject } from '@vercel/analytics';

// Entry point used by the host (e.g., AI Studio) mirrors main.ts so routing works.
bootstrapApplication(RootComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

// Initialize Vercel Analytics
inject();

// AI Studio always uses an `index.tsx` file for all project types.
