'use client';

import { BRAND } from '@/lib/brand-tokens';

export default function ContactForm() {
  return (
    <div className="bg-brand-bgAlt rounded-card p-8 border border-brand-border">
      <h3 className="font-heading text-xl font-semibold text-brand-textHeading mb-6">Send a Message</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-body text-sm text-brand-textMuted mb-1">First Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-btn border border-brand-border font-body text-sm focus:outline-none focus:border-brand-primary bg-white" />
          </div>
          <div>
            <label className="block font-body text-sm text-brand-textMuted mb-1">Last Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-btn border border-brand-border font-body text-sm focus:outline-none focus:border-brand-primary bg-white" />
          </div>
        </div>
        <div>
          <label className="block font-body text-sm text-brand-textMuted mb-1">Email</label>
          <input type="email" className="w-full px-4 py-3 rounded-btn border border-brand-border font-body text-sm focus:outline-none focus:border-brand-primary bg-white" />
        </div>
        <div>
          <label className="block font-body text-sm text-brand-textMuted mb-1">Phone</label>
          <input type="tel" className="w-full px-4 py-3 rounded-btn border border-brand-border font-body text-sm focus:outline-none focus:border-brand-primary bg-white" />
        </div>
        <div>
          <label className="block font-body text-sm text-brand-textMuted mb-1">I&apos;m interested in...</label>
          <select className="w-full px-4 py-3 rounded-btn border border-brand-border font-body text-sm focus:outline-none focus:border-brand-primary bg-white text-brand-textBody">
            <option>Buying a home</option>
            <option>Selling my property</option>
            <option>Investment opportunities</option>
            <option>Free market analysis</option>
            <option>General inquiry</option>
          </select>
        </div>
        <div>
          <label className="block font-body text-sm text-brand-textMuted mb-1">Message</label>
          <textarea rows={4} className="w-full px-4 py-3 rounded-btn border border-brand-border font-body text-sm focus:outline-none focus:border-brand-primary bg-white resize-none" />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3.5 rounded-btn text-white font-body font-semibold text-base transition-opacity hover:opacity-90"
          style={{ backgroundColor: BRAND.colors.primary }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
