
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  template: `
    <section id="booking" class="py-24 bg-obsidian relative overflow-hidden">
      <!-- Background Glow -->
      <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-electric-teal/5 to-transparent pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <!-- Left Column: Contact -->
          <div class="lg:pr-12 pt-8">
            <h2 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to <br /><span class="text-electric-teal">Evolve?</span></h2>
            <p class="text-xl text-gray-300 mb-12">Book a 15-minute discovery call to see how we can automate your operations and future-proof your business.</p>

            <div class="space-y-6">
              <a href="mailto:riswanahamed38@gmail.com" class="flex items-center gap-4 text-white hover:text-electric-teal transition-colors group p-4 rounded-lg glass-card hover:bg-white/5">
                <div class="w-12 h-12 rounded-full bg-electric-teal/10 flex items-center justify-center group-hover:bg-electric-teal/20 transition-all">
                  <svg class="w-6 h-6 text-electric-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs text-gray-400 uppercase tracking-wider">Email Us</span>
                  <span class="text-lg font-medium break-all">riswanahamed38@gmail.com</span>
                </div>
              </a>

              <a href="tel:+917418540369" class="flex items-center gap-4 text-white hover:text-electric-teal transition-colors group p-4 rounded-lg glass-card hover:bg-white/5">
                <div class="w-12 h-12 rounded-full bg-electric-teal/10 flex items-center justify-center group-hover:bg-electric-teal/20 transition-all">
                  <svg class="w-6 h-6 text-electric-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                 <div class="flex flex-col">
                  <span class="text-xs text-gray-400 uppercase tracking-wider">Call Us</span>
                  <span class="text-lg font-medium">+91 741 854 0369</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Right Column: Cal.com Embed -->
          <div class="w-full glass-card p-2 rounded-2xl border border-white/10 shadow-2xl">
             <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline-15min"></div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class BookingComponent implements OnInit {
  ngOnInit() {
    (function (C: any, A: any, L: any) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          let script = d.createElement("script");
          script.src = A; 
          d.head.appendChild(script); 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    const win = window as any;
    win.Cal("init", "15min", {origin:"https://app.cal.eu"});

    win.Cal.ns["15min"]("inline", {
      elementOrSelector:"#my-cal-inline-15min",
      config: {"layout":"month_view"},
      calLink: "riswan-ai/15min",
    });
  }
}
