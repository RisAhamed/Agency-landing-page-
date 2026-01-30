import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
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
            Privacy <span class="text-electric-teal">Policy</span>
          </h1>
          <p class="text-gray-400 mb-12">Last updated: January 2026</p>

          <div class="space-y-10 text-gray-300 leading-relaxed">
            
            <section>
              <h2 class="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>Synapse Systems ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI automation services, visit our website, or engage with our AI agents and automation solutions.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p class="mb-4">We may collect the following types of information:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong class="text-white">Personal Information:</strong> Name, email address, phone number, company name, and job title when you book a consultation or contact us.</li>
                <li><strong class="text-white">Business Data:</strong> Information about your business processes, workflows, and systems that you share with us for automation purposes.</li>
                <li><strong class="text-white">Usage Data:</strong> Information about how you interact with our AI agents, automation tools, and services.</li>
                <li><strong class="text-white">Technical Data:</strong> IP address, browser type, device information, and cookies for website analytics.</li>
                <li><strong class="text-white">Communication Data:</strong> Records of conversations with our AI agents, including voice calls, chat messages, and emails processed by our automation systems.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p class="mb-4">We use the collected information to:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Provide our AI automation services as agreed in your service contract</li>
                <li>Process and qualify leads through our AI lead automation systems</li>
                <li>Facilitate workflow integrations between your business tools</li>
                <li>Communicate with you about our services, updates, and support</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">4. AI-Specific Data Practices</h2>
              <p class="mb-4">As an AI automation agency, we are committed to protecting your data. Here is how we handle AI-processed data:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong class="text-white">Your Data Stays Yours:</strong> We do NOT use your business data, customer information, or any private data to train, develop, or improve our AI models. Your data is used solely to deliver the services you have contracted us for.</li>
                <li><strong class="text-white">No Data Mining:</strong> We will never analyze, mine, or use your data for our own benefit, research, or to enhance our products and services.</li>
                <li><strong class="text-white">Automated Decision-Making:</strong> Our AI agents may make automated decisions such as lead qualification. You have the right to request human review of significant automated decisions.</li>
                <li><strong class="text-white">Voice Data:</strong> Phone calls handled by our AI voice agents may be recorded solely for quality assurance purposes with your consent. These recordings are never used to train AI models.</li>
                <li><strong class="text-white">Integration Data:</strong> When we integrate with your CRM, databases, or other systems, we access only the data necessary to perform the agreed-upon automation tasks. This data is never used for any other purpose.</li>
                <li><strong class="text-white">Complete Confidentiality:</strong> All your data processed through our AI systems remains strictly confidential and is used exclusively to deliver your contracted services.</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">5. Data Sharing and Disclosure</h2>
              <p class="mb-4">We may share your information with:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong class="text-white">Service Providers:</strong> Third-party vendors who assist in delivering our AI services (e.g., cloud hosting, AI model providers).</li>
                <li><strong class="text-white">Integration Partners:</strong> Platforms you authorize us to connect with (e.g., CRM systems, communication tools).</li>
                <li><strong class="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
              </ul>
              <p class="mt-4">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">6. Data Security</h2>
              <p>We implement industry-standard security measures to protect your data, including encryption, secure API connections, access controls, and regular security audits. Our AI systems are designed with security-first principles to ensure your business data remains confidential.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
              <p>We retain your data for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Upon termination of services, we will delete or anonymize your data within 90 days, unless retention is required by new contract or re-establishing the contract.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">8. Your Rights</h2>
              <p class="mb-4">Depending on your location, you may have the following rights:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Opt-out of AI-powered automated decision-making</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">9. Cookies and Tracking</h2>
              <p>Our website uses cookies and similar tracking technologies to enhance your experience and analyze website traffic. You can control cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p class="mb-4">If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
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
export class PrivacyPolicyComponent {}
