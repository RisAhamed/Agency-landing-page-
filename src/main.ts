import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './app.component';

bootstrapApplication(RootComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

// Initialize Vercel Analytics
inject();