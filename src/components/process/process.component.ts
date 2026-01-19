
import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  template: `
    <section id="process" class="py-24 bg-obsidian relative">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-16 text-center">The Synapse Method</h2>
        
        <div class="relative">
          <!-- Pulsing Line -->
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2">
             <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1/3 bg-gradient-to-b from-transparent via-electric-teal to-transparent animate-pulse opacity-75"></div>
          </div>

          <!-- Step 1 -->
          <div class="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 group">
            <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-12 md:pl-0">
              <h3 class="text-2xl font-bold text-white mb-2">Neural Audit</h3>
              <p class="text-gray-400">We deep-dive into your existing infrastructure to identify high-value automation opportunities.</p>
            </div>
            <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-obsidian border-2 border-electric-teal z-10 flex items-center justify-center order-1 md:order-2 shadow-[0_0_15px_rgba(102,252,241,0.5)]">
               <span class="w-2 h-2 rounded-full bg-electric-teal"></span>
            </div>
            <div class="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
          </div>

          <!-- Step 2 -->
          <div class="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 group">
            <div class="md:w-1/2 md:pr-12 hidden md:block order-1"></div>
            <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-obsidian border-2 border-electric-teal z-10 flex items-center justify-center order-1 md:order-2 shadow-[0_0_15px_rgba(102,252,241,0.5)]">
               <span class="w-2 h-2 rounded-full bg-electric-teal"></span>
            </div>
            <div class="md:w-1/2 md:pl-12 order-2 md:order-3 pl-12 md:pl-0">
               <h3 class="text-2xl font-bold text-white mb-2">Build & Integrate</h3>
               <p class="text-gray-400">Our engineers deploy custom AI agents and connect them seamlessly to your current tech stack.</p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative flex flex-col md:flex-row items-center justify-between group">
            <div class="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-12 md:pl-0">
              <h3 class="text-2xl font-bold text-white mb-2">Scale & Optimize</h3>
              <p class="text-gray-400">Continuous monitoring and refinement ensure your AI systems grow smarter and more efficient over time.</p>
            </div>
             <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-obsidian border-2 border-electric-teal z-10 flex items-center justify-center order-1 md:order-2 shadow-[0_0_15px_rgba(102,252,241,0.5)]">
               <span class="w-2 h-2 rounded-full bg-electric-teal"></span>
            </div>
            <div class="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ProcessComponent {}
