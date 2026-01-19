
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PainPointsComponent } from './components/pain-points/pain-points.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { ProcessComponent } from './components/process/process.component';
import { ResultsComponent } from './components/results/results.component';
import { BookingComponent } from './components/booking/booking.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    PainPointsComponent,
    SolutionsComponent,
    ProcessComponent,
    ResultsComponent,
    BookingComponent,
    FooterComponent
  ],
  template: `
    <main class="font-sans antialiased text-white bg-obsidian selection:bg-electric-teal selection:text-black">
      <app-header />
      <app-hero />
      <app-pain-points />
      <app-solutions />
      <app-process />
      <app-results />
      <app-booking />
      <app-footer />
    </main>
  `
})
export class AppComponent {}
