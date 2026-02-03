
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-black py-12 border-t border-white/5 text-center">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-8">
           <span class="text-xl font-bold tracking-widest text-white drop-shadow-[0_0_10px_rgba(102,252,241,0.6)]">
            SYNAPSE SYSTEMS
          </span>
        </div>
        <div class="max-w-3xl mx-auto mb-8 glass-card p-6 rounded-2xl border border-white/10 shadow-2xl">
          <p class="text-sm text-white font-semibold mb-3">Synapse Systems | Premier AI Automation Agency based in Chennai, India. Serving clients globally.</p>
          <p class="text-sm text-gray-300 mb-4">Need an AI agency near you? Connect with us and we will help you automate ops, calls, and support.</p>
          <div class="flex flex-col sm:flex-row justify-center gap-3">
            <a href="#booking" class="px-5 py-3 rounded-full bg-electric-teal text-black font-semibold shadow-lg shadow-electric-teal/20 hover:shadow-electric-teal/40 transition-all">Book a discovery call</a>
            <a href="#booking" class="px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">Open contact form</a>
          </div>
        </div>
        <p class="text-electric-teal text-sm font-medium mb-6">Don't hire more staff. Hire AI.</p>
        
        <div class="flex justify-center gap-8 text-xs text-gray-500 mb-8">
          <a routerLink="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</a>
          <a routerLink="/terms-of-service" class="hover:text-white transition-colors">Terms of Service</a>
        </div>

        <p class="text-xs text-gray-700">© 2024 Synapse Systems. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
