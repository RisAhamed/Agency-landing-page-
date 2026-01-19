
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-black py-12 border-t border-white/5 text-center">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-8">
           <span class="text-xl font-bold tracking-widest text-white drop-shadow-[0_0_10px_rgba(102,252,241,0.6)]">
            SYNAPSE SYSTEMS
          </span>
        </div>
        <p class="text-electric-teal text-sm font-medium mb-6">Don't hire more staff. Hire AI.</p>
        
        <div class="flex justify-center gap-8 text-xs text-gray-500 mb-8">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms of Service</a>
        </div>

        <p class="text-xs text-gray-700">© 2024 Synapse Systems. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
