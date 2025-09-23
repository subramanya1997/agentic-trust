"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const syncScenarios = [
  {
    idp: {
      name: 'Google',
      logo: '/logos/google.svg',
      groups: [
        { name: 'Developers', mapsToRole: 'Developer' },
        { name: 'Support', mapsToRole: 'Support Agent' },
        { name: 'Admins', mapsToRole: 'Admin' },
      ],
    },
    rolesData: [
      { name: 'Developer', role: 'developer', permissions: ['tool:write', 'code:execute'], created: '3 months ago' },
      { name: 'Support Agent', role: 'support-agent', permissions: ['tool:read'], created: '3 months ago' },
      { name: 'Admin', role: 'admin', permissions: ['tool:admin', 'billing:write'], created: '3 months ago' },
    ],
    permissionsData: [
      { name: 'Admin Access', permission: 'tool:admin', created: '1 year ago' },
      { name: 'Billing Write', permission: 'billing:write', created: '1 year ago' },
      { name: 'Tool Write', permission: 'tool:write', created: '1 year ago' },
    ],
  },
  {
    idp: {
      name: 'Okta',
      logo: '/logos/okta.svg',
      groups: [
        { name: 'Developers', mapsToRole: 'Developer' },
        { name: 'Support', mapsToRole: 'Support Agent' },
        { name: 'Admins', mapsToRole: 'Admin' },
      ],
    },
    rolesData: [
      { name: 'Developer', role: 'developer', permissions: ['code:write', 'ci:run'], created: '6 months ago' },
      { name: 'Support Agent', role: 'support-agent', permissions: ['tickets:read', 'tickets:write'], created: '6 months ago' },
      { name: 'Admin', role: 'admin', permissions: ['product:read', 'data:query'], created: '6 months ago' },
    ],
    permissionsData: [
      { name: 'Product Read', permission: 'product:read', created: '1 year ago' },
      { name: 'Data Query', permission: 'data:query', created: '1 year ago' },
      { name: 'Code Write', permission: 'code:write', created: '1 year ago' },
      { name: 'CI Run', permission: 'ci:run', created: '1 year ago' },
    ],
  },
  {
    idp: {
      name: 'Microsoft',
      logo: '/logos/microsoft.svg',
      groups: [
        { name: 'Developers', mapsToRole: 'Developer' },
        { name: 'Support', mapsToRole: 'Support Agent' },
        { name: 'Admins', mapsToRole: 'Admin' },
      ],
    },
    rolesData: [
      { name: 'Developer', role: 'developer', permissions: ['vm:create', 'code:write'], created: '2 months ago' },
      { name: 'Support Agent', role: 'support-agent', permissions: ['bi:read', 'tickets:write'], created: '2 months ago' },
      { name: 'Admin', role: 'admin', permissions: ['vm:admin', 'db:admin'], created: '2 months ago' },
    ],
    permissionsData: [
      { name: 'VM Management', permission: 'vm:create', created: '1 year ago' },
      { name: 'DB Admin', permission: 'db:admin', created: '1 year ago' },
      { name: 'Ticket Management', permission: 'tickets:write', created: '1 year ago' },
      { name: 'BI Access', permission: 'bi:read', created: '1 year ago' },
    ],
  },
];

export const AgentToolSyncSection = () => {
  const [activeIdpIndex, setActiveIdpIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIdpIndex(prevIndex => (prevIndex + 1) % syncScenarios.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeScenario = syncScenarios[activeIdpIndex];
  const { idp, rolesData, permissionsData } = activeScenario;

  return (
    <section className="py-24 bg-gray-100/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Title and subtitle - not sticky on mobile */}
        <div className="mb-8 lg:mb-16 lg:hidden">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Sync roles from your Identity Provider</h2>
          <p className="text-xl text-gray-600">
            Automatically map user groups from your IdP to internal roles. Keep access control synchronized across all platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-start">
          
          <div className="lg:sticky lg:top-24">
            {/* Title and subtitle - sticky on desktop only */}
            <div className="mb-8 hidden lg:block">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Sync roles from your Identity Provider</h2>
              <p className="text-xl text-gray-600">
                Automatically map user groups from your IdP to internal roles. Keep access control synchronized across all platforms.
              </p>
            </div>
            
             <div className="relative h-[200px] lg:h-[400px]">               
               <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-64 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                 <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-lg border border-gray-200">
                   <div className="flex items-center gap-3 mb-4 lg:mb-6 justify-center lg:justify-start">
                     <Image src={idp.logo} alt={`${idp.name} logo`} width={28} height={28} />
                     <span className="font-semibold text-gray-800">{idp.name} Groups</span>
                   </div>
                   {/* Mobile: flexible row layout, Desktop: vertical layout */}
                   <div className="flex flex-wrap gap-2 lg:flex-col lg:space-y-2 lg:gap-0 justify-center lg:justify-start">
                     {idp.groups.map((group) => (
                       <div
                         key={group.name}
                         className="bg-gray-50 border border-gray-200 rounded-xl p-2 lg:p-3 text-center flex-shrink-0"
                       >
                         <span className="font-medium text-gray-700 text-sm lg:text-base">{group.name}</span>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>

          <div className={`bg-white rounded-2xl shadow-xl border border-gray-200/80 p-6 space-y-12 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>

            {/* Permissions Table */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">Permissions</h3>
              </div>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Permission</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {permissionsData.map((p) => (
                      <tr key={p.permission}>
                        <td className="px-6 py-4">
                          <div className="text-sm font-semibold text-gray-900">{p.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-600">{p.permission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Roles Table */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">Roles</h3>
              </div>
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Permissions</th>
                    </tr>
                  </thead>
                   <tbody className="bg-white divide-y divide-gray-200">
                     {rolesData.map((r) => (
                       <tr key={r.role}>
                         <td className="px-6 py-4">
                           <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                         </td>
                         <td className="px-6 py-4">
                           <div className="flex items-center flex-wrap gap-1.5">
                             {r.permissions.map(p => (
                               <span key={p} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-mono text-xs">{p}</span>
                             ))}
                           </div>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
