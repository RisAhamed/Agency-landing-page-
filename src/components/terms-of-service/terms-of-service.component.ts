import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-obsidian text-white">
      <!-- Header -->
      <header class="py-6 border-b border-white/5">
        <div class="max-w-4xl mx-auto px-6">
          <a routerLink="/" class="text-xl font-bold tracking-widest text-white drop-shadow-[0_0_10px_rgba(102,252,241,0.6)]">
            SYNAPSE SYSTEMS
          </a>
        </div>
      </header>

      <!-- Content -->
      <main class="py-16">
        <div class="max-w-4xl mx-auto px-6">
          <h1 class="text-4xl md:text-5xl font-bold mb-8">
            Terms of <span class="text-electric-teal">Service</span>
          </h1>
          <p class="text-gray-400 mb-12">Last updated: January 2026</p>

          <div class="space-y-10 text-gray-300 leading-relaxed">
            
            <section>
              <h2 class="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using Synapse Systems' AI automation services, website, or any related products ("Services"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our Services.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p class="mb-4">Synapse Systems provides AI automation solutions for businesses, including but not limited to:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong class="text-white">AI Lead Qualification:</strong> Automated lead capture, qualification, and nurturing systems.</li>
                <li><strong class="text-white">Business Process Automation:</strong> AI-powered workflow automation and system integrations.</li>
                <li><strong class="text-white">AI Voice Agents:</strong> Automated phone calling and voice-based customer interaction systems.</li>
                <li><strong class="text-white">Custom AI Solutions:</strong> Tailored automation solutions designed for your specific business needs.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">3. Client Responsibilities</h2>
              <p class="mb-4">As a client of our AI automation services, you agree to:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Grant appropriate access to systems and data required for automation implementation</li>
                <li>Ensure you have the legal right to share data processed by our AI systems</li>
                <li>Comply with all applicable laws regarding automated communications (e.g., TCPA, GDPR)</li>
                <li>Obtain necessary consents before using AI agents to contact individuals</li>
                <li>Not use our Services for any unlawful or fraudulent purposes</li>
                <li>Notify us promptly of any security breaches or unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">4. AI Agent Usage Guidelines</h2>
              <p class="mb-4">When using our AI agents, you acknowledge and agree that:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong class="text-white">Disclosure:</strong> You will disclose to end-users when they are interacting with an AI agent, as required by applicable laws.</li>
                <li><strong class="text-white">Accuracy:</strong> AI agents may occasionally produce inaccurate responses. You are responsible for reviewing and validating critical outputs.</li>
                <li><strong class="text-white">Limitations:</strong> AI agents should not be used for medical, legal, or financial advice without appropriate human oversight.</li>
                <li><strong class="text-white">Supervision:</strong> You maintain responsibility for monitoring AI agent performance and intervening when necessary.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p class="mb-4">Ownership rights are allocated as follows:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong class="text-white">Our IP:</strong> Synapse Systems retains all rights to our AI models, algorithms, software, frameworks, and methodologies.</li>
                <li><strong class="text-white">Your Data:</strong> You retain ownership of your business data and content processed through our Services.</li>
                <li><strong class="text-white">Custom Solutions:</strong> Unless otherwise agreed in writing, custom automations built for you are licensed for your use but remain our intellectual property.</li>
                <li><strong class="text-white">Improvements:</strong> Insights and improvements derived from aggregated, anonymized data may be used to enhance our Services.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Payment terms will be specified in your service agreement or proposal.</li>
                <li>Fees are non-refundable unless otherwise stated in your agreement.</li>
                <li>We reserve the right to suspend Services for overdue payments.</li>
                <li>Pricing may be adjusted with 30 days' notice for ongoing services.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">7. Service Level and Support</h2>
              <p class="mb-4">We strive to provide reliable AI automation services:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>We aim for 99% uptime for our AI systems, excluding scheduled maintenance.</li>
                <li>Support response times and availability will be defined in your service agreement.</li>
                <li>We will notify you of planned maintenance that may affect your automations.</li>
                <li>Emergency support is available for critical system issues.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p class="mb-4">To the maximum extent permitted by law:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Synapse Systems shall not be liable for indirect, incidental, special, or consequential damages.</li>
                <li>Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.</li>
                <li>We are not liable for damages resulting from AI agent errors, third-party service failures, or your misuse of the Services.</li>
                <li>We do not guarantee specific business outcomes or results from our automation services.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
              <p>You agree to indemnify and hold harmless Synapse Systems from any claims, damages, or expenses arising from your use of our Services, violation of these Terms, or infringement of any third-party rights.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Either party may terminate services with 30 days' written notice.</li>
                <li>We may terminate immediately for breach of these Terms or non-payment.</li>
                <li>Upon termination, we will assist with data export and transition as agreed.</li>
                <li>Provisions regarding IP, liability, and indemnification survive termination.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">11. Confidentiality</h2>
              <p>Both parties agree to maintain the confidentiality of proprietary information shared during the course of our engagement. This includes business processes, technical specifications, and any data processed through our AI systems.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">12. Modifications to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through our Services. Continued use of our Services after changes constitutes acceptance of the modified Terms.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our Services shall be resolved through arbitration or in the courts of competent jurisdiction.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
              <p class="mb-4">For questions about these Terms of Service, please contact us:</p>
              <div class="bg-white/5 rounded-xl p-6 border border-white/10">
                <p><strong class="text-electric-teal">Email:</strong> riswanahamed38&#64;gmail.com</p>
                <p><strong class="text-electric-teal">Phone:</strong> +91 7418540369</p>
                <p><strong class="text-electric-teal">Company:</strong> Synapse Systems</p>
              </div>
            </section>

          </div>

          <!-- Back to Home -->
          <div class="mt-16 pt-8 border-t border-white/10">
            <a routerLink="/" class="inline-flex items-center gap-2 text-electric-teal hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="py-8 border-t border-white/5 text-center">
        <p class="text-xs text-gray-700">© 2024 Synapse Systems. All rights reserved.</p>
      </footer>
    </div>
  `
})
export class TermsOfServiceComponent {}
