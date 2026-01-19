
import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  standalone: true,
  template: `
    <section id="results" class="py-24 bg-obsidian border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-16">Real AI Transformations</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div class="p-6">
            <div class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-blue-400 mb-4">3.5x</div>
            <h3 class="text-xl text-white font-medium mb-2">Faster Lead Response</h3>
            <p class="text-sm text-gray-500">From hours to seconds</p>
          </div>

          <div class="p-6 border-l-0 md:border-l border-r-0 md:border-r border-white/10">
            <div class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-blue-400 mb-4">65%</div>
            <h3 class="text-xl text-white font-medium mb-2">Fewer Support Tickets</h3>
            <p class="text-sm text-gray-500">Automated L1 resolution</p>
          </div>

          <div class="p-6">
            <div class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-blue-400 mb-4">$420k</div>
            <h3 class="text-xl text-white font-medium mb-2">Annual Revenue Added</h3>
            <p class="text-sm text-gray-500">Through captured opportunities</p>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ResultsComponent {}
