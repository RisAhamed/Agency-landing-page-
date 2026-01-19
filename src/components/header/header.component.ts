
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-white/5 bg-obsidian/70">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        <!-- Memory Layer Glow Background behind logo -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-20 pointer-events-none memory-layer opacity-60"></div>

        <!-- Logo -->
        <a href="#" class="relative z-10 flex items-center gap-2 group">
          <div class="relative w-8 h-8 flex items-center justify-center">
            <!-- Animated SVG Icon -->
            <svg class="w-full h-full text-electric-teal drop-shadow-[0_0_8px_rgba(102,252,241,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M12 2L2 22h20L12 2z" stroke-linejoin="round" class="group-hover:stroke-[3px] transition-all"/>
               <circle cx="12" cy="16" r="3" class="fill-electric-teal/20 animate-pulse"/>
               <circle cx="12" cy="6" r="1" class="fill-electric-teal"/>
               <circle cx="5" cy="19" r="1" class="fill-electric-teal"/>
               <circle cx="19" cy="19" r="1" class="fill-electric-teal"/>
            </svg>
          </div>
          <span class="text-xl font-bold tracking-widest text-white drop-shadow-[0_0_10px_rgba(102,252,241,0.6)]">
            SYNAPSE SYSTEMS
          </span>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#process" class="text-sm font-medium text-gray-300 hover:text-electric-teal transition-colors">Process</a>
          <a href="#solutions" class="text-sm font-medium text-gray-300 hover:text-electric-teal transition-colors">Solutions</a>
          <a href="#results" class="text-sm font-medium text-gray-300 hover:text-electric-teal transition-colors">Results</a>
        </nav>

        <!-- CTA -->
        <div class="hidden md:block">
          <a href="#booking" class="px-5 py-2.5 text-sm font-bold text-obsidian bg-electric-teal rounded hover:bg-white hover:shadow-[0_0_20px_rgba(102,252,241,0.6)] transition-all duration-300">
            Book Strategy Call
          </a>
        </div>

        <!-- Mobile Menu Button (Simple implementation) -->
        <button class="md:hidden text-white" (click)="mobileMenuOpen = !mobileMenuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Dropdown -->
      @if (mobileMenuOpen) {
        <div class="md:hidden absolute top-20 left-0 w-full bg-obsidian border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
           <a href="#process" (click)="mobileMenuOpen = false" class="text-gray-300 hover:text-electric-teal">Process</a>
           <a href="#solutions" (click)="mobileMenuOpen = false" class="text-gray-300 hover:text-electric-teal">Solutions</a>
           <a href="#results" (click)="mobileMenuOpen = false" class="text-gray-300 hover:text-electric-teal">Results</a>
           <a href="#booking" (click)="mobileMenuOpen = false" class="block text-center w-full px-5 py-3 text-sm font-bold text-obsidian bg-electric-teal rounded">
            Book Strategy Call
          </a>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = false;
}
