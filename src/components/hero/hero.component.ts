
import { Component, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

// Declare Hls global from script tag
declare const Hls: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative w-full min-h-screen flex items-center justify-start overflow-hidden">
      
      <!-- Video Background -->
      <div class="absolute inset-0 z-0">
        <video #videoRef class="w-full h-full object-cover" muted loop playsinline autoplay></video>
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>
        <div class="absolute inset-0 bg-obsidian/40 mix-blend-multiply"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div class="max-w-3xl">
          
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-teal/30 bg-electric-teal/5 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span class="w-2 h-2 rounded-full bg-electric-teal animate-pulse"></span>
            <span class="text-xs font-semibold tracking-wide text-electric-teal uppercase">New AI Automation Ally</span>
          </div>

          <!-- Headline -->
          <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Unlock the Power of <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-white">AI for Your Business</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Our cutting-edge AI platform automates, analyzes, and accelerates your workflows, turning data into dominance.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="group px-8 py-4 bg-white text-obsidian font-bold rounded hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              Get Your Free AI Audit
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>

            <a href="#booking" class="px-8 py-4 glass-card text-white font-bold rounded hover:bg-white/10 transition-all border border-white/20 text-center">
              Book a Strategy Call
            </a>
          </div>

        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

    </section>
  `,
  styles: [`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;
    const videoSrc = 'https://customer-cbeadsgr09pnsezs.cloudflarestream.com/df176a2fb2ea2b64bd21ae1c10d3af6a/manifest/video.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.log('Autoplay prevented:', e));
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.log('Autoplay prevented:', e));
      });
    }
  }
}
