'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('All');

  const filteredAgents = BRAND.agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'All' || agent.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const roles = ['All', 'Broker of Record', 'Broker', 'Sales Representative'];

  return (
    <>
      {/* HERO */}
      <section className="relative py-28" style={{ backgroundColor: BRAND.colors.dark }}>
        <div className="max-w-content mx-auto px-6">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: BRAND.colors.gold }}>
            Our Team
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl leading-tight mb-6" style={{ color: BRAND.colors.textLight }}>
            70+ Agents.<br />
            <span style={{ color: BRAND.colors.gold }}>One Commitment to Excellence.</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Every agent at Upperside Real Estate is committed to delivering exceptional service. Find the right agent for your needs.
          </p>
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="py-8 sticky top-[72px] z-30" style={{ backgroundColor: BRAND.colors.bgMain, borderBottom: `1px solid ${BRAND.colors.border}` }}>
        <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search agents by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 text-sm border rounded-lg outline-none focus:ring-2"
            style={{
              borderColor: BRAND.colors.border,
              color: BRAND.colors.textBody,
            }}
          />
          <div className="flex gap-2 flex-wrap">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setRoleFilter(role)}
                className="px-4 py-2 text-xs font-heading font-semibold uppercase tracking-wider transition-all duration-200"
                style={{
                  backgroundColor: roleFilter === role ? BRAND.colors.gold : 'transparent',
                  color: roleFilter === role ? BRAND.colors.textLight : BRAND.colors.textMuted,
                  border: `1px solid ${roleFilter === role ? BRAND.colors.gold : BRAND.colors.border}`,
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AGENTS GRID */}
      <section className="py-16" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <p className="text-sm mb-8" style={{ color: BRAND.colors.textMuted }}>
            Showing {filteredAgents.length} agent{filteredAgents.length !== 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredAgents.map((agent) => {
              const person = BRAND.people.find(p => p.name === agent.name);
              return (
                <div
                  key={agent.name}
                  className="text-center p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    backgroundColor: BRAND.colors.bgMain,
                    borderRadius: BRAND.spacing.radiusCards,
                    border: `1px solid ${BRAND.colors.border}`,
                  }}
                >
                  {person?.profilePhotoUrl ? (
                    <div
                      className="w-16 h-16 mx-auto mb-3 rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${person.profilePhotoUrl})`,
                        backgroundColor: BRAND.colors.gold,
                      }}
                    />
                  ) : (
                    <div
                      className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center font-heading font-bold text-lg"
                      style={{
                        backgroundColor: BRAND.colors.gold,
                        color: BRAND.colors.textLight,
                      }}
                    >
                      {getInitials(agent.name)}
                    </div>
                  )}
                  <h3 className="font-heading font-semibold text-xs leading-tight" style={{ color: BRAND.colors.textHeading }}>
                    {agent.name}
                  </h3>
                  <p className="text-[10px] mt-1 uppercase tracking-wider" style={{ color: BRAND.colors.textMuted }}>
                    {agent.role}
                  </p>
                </div>
              );
            })}
          </div>
          {filteredAgents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: BRAND.colors.textMuted }}>No agents found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.dark }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6" style={{ color: BRAND.colors.textLight }}>
            Connect With the Right Agent
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Not sure who to contact? Reach out to our office and we will match you with the agent best suited to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 font-heading font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110"
            style={{
              backgroundColor: BRAND.colors.gold,
              color: BRAND.colors.textLight,
              borderRadius: BRAND.spacing.radiusButtons,
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
