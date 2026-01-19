
import { Component } from '@angular/core';

@Component({
  selector: 'app-pain-points',
  standalone: true,
  template: `
    <section id="pain-points" class="py-24 bg-obsidian relative overflow-hidden">
      <!-- Background detail -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
            What's costing you <span class="text-red-500">money</span> right now?
          </h2>
          <p class="text-gray-400 max-w-xl">Inefficiencies are silent killers. Identify the bottlenecks slowing down your growth.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="glass-card p-8 rounded-xl group hover:border-red-500/50 transition-all duration-300 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-500"></div>
            
            <div class="relative z-10">
              <div class="w-12 h-12 rounded bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Manual Data Entry</h3>
              <p class="text-gray-400 text-sm">Human error rates average 4%. Stop wasting hours on spreadsheets that AI can process in seconds.</p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="glass-card p-8 rounded-xl group hover:border-red-500/50 transition-all duration-300 relative overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-500"></div>
            <div class="relative z-10">
              <div class="w-12 h-12 rounded bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                 <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Missed Leads</h3>
              <p class="text-gray-400 text-sm">50% of leads go cold within 1 hour. Automated response systems capture every opportunity instantly.</p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="glass-card p-8 rounded-xl group hover:border-red-500/50 transition-all duration-300 relative overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all duration-500"></div>
            <div class="relative z-10">
              <div class="w-12 h-12 rounded bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                 <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Slow Support</h3>
              <p class="text-gray-400 text-sm">Customers demand instant answers. Slow response times churn users faster than any other factor.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class PainPointsComponent {}
