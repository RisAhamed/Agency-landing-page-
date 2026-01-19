
import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  standalone: true,
  template: `
    <section id="results" class="py-24 bg-obsidian border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-16">System Capabilities</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div class="p-6">
            <div class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-blue-400 mb-4">&lt; 10 Seconds</div>
            <h3 class="text-xl text-white font-medium mb-2">Instant Response</h3>
            <p class="text-sm text-gray-400 max-w-xs mx-auto">Engage leads immediately 24/7. AI agents never sleep, ensuring zero missed opportunities.</p>
          </div>

          <div class="p-6 border-l-0 md:border-l border-r-0 md:border-r border-white/10">
            <div class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-blue-400 mb-4 flex items-center justify-center h-12 md:h-14">Unlimited</div>
            <h3 class="text-xl text-white font-medium mb-2">Infinite Scale</h3>
            <p class="text-sm text-gray-400 max-w-xs mx-auto">Handle 10 or 10,000 inquiries simultaneously without needing to hire more support staff.</p>
          </div>

          <div class="p-6">
            <div class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-blue-400 mb-4 flex items-center justify-center h-12 md:h-14">Reduce Overhead</div>
            <h3 class="text-xl text-white font-medium mb-2">Cost Efficiency</h3>
            <p class="text-sm text-gray-400 max-w-xs mx-auto">Automate up to 80% of repetitive workflows, allowing your human team to focus on high-value strategy.</p>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ResultsComponent {}
