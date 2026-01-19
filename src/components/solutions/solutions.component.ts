
import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  template: `
    <section id="solutions" class="py-24 bg-obsidian relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
            The <span class="text-electric-teal">Neural Network</span> for Your Business
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Deploy intelligent agents to handle the heavy lifting.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Solution 1 -->
          <div class="glass-card p-8 rounded-2xl border border-white/5 hover:border-electric-teal/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-electric-teal/10 flex items-center justify-center mb-6 group-hover:bg-electric-teal/20 transition-all">
               <svg class="w-7 h-7 text-electric-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Lead Automation</h3>
            <p class="text-gray-400 leading-relaxed">Instantly qualify and nurture leads 24/7. Our AI agents engage prospects with human-like precision via SMS, Email, and Chat.</p>
          </div>

          <!-- Solution 2 -->
          <div class="glass-card p-8 rounded-2xl border border-white/5 hover:border-electric-teal/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-electric-teal/10 flex items-center justify-center mb-6 group-hover:bg-electric-teal/20 transition-all">
               <svg class="w-7 h-7 text-electric-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Workflow Integration</h3>
            <p class="text-gray-400 leading-relaxed">Seamlessly connect your CRM, Slack, and Databases. Eliminate copy-pasting and let data flow autonomously across your stack.</p>
          </div>

          <!-- Solution 3 -->
          <div class="glass-card p-8 rounded-2xl border border-white/5 hover:border-electric-teal/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-electric-teal/10 flex items-center justify-center mb-6 group-hover:bg-electric-teal/20 transition-all">
               <svg class="w-7 h-7 text-electric-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Analytics & Intelligence</h3>
            <p class="text-gray-400 leading-relaxed">Turn raw data into strategic insights. Our AI models predict trends and optimize performance in real-time.</p>
          </div>

        </div>
      </div>
    </section>
  `
})
export class SolutionsComponent {}
