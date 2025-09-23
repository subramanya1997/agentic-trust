"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Database, FileText, Shield, Code, Cloud, Lock } from 'lucide-react';

const tools = [
  { name: 'database:query', icon: Database },
  { name: 'files:write', icon: FileText },
  { name: 'files:read', icon: FileText },
  { name: 'security:audit', icon: Shield },
  { name: 'code:execute', icon: Code },
  { name: 'api:external', icon: Cloud },
  { name: 'system:admin', icon: Lock },
];

const agentRoles = [
  { 
    name: 'Admin Agent', 
      color: 'purple',
    icon: '🛡️',
    description: 'Full tool access & system control',
    permissions: ['database:query', 'files:write', 'files:read', 'security:audit', 'code:execute', 'api:external', 'system:admin']
  },
  { 
    name: 'Analyst Agent', 
    color: 'blue',
    icon: '📈',
    description: 'Data analysis & reporting tools',
    permissions: ['database:query', 'files:read', 'api:external', 'code:execute']
  },
  { 
    name: 'Monitor Agent', 
    color: 'green',
    icon: '👁️',
    description: 'Read-only observation tools',
    permissions: ['files:read', 'security:audit']
  }
];

const users = [
    { name: 'Alice (Developer)', icon: '👩🏼‍💻', agentRoles: ['Admin Agent', 'Analyst Agent'] },
    { name: 'Bob (Security)', icon: '🕵️‍♂️', agentRoles: ['Admin Agent', 'Monitor Agent'] },
    { name: 'Charlie (Support)', icon: '👨‍🔧', agentRoles: ['Monitor Agent'] },
];

export const RoleBasedPermissionsSection = () => {
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  const [hoveredUser, setHoveredUser] = useState<string | null>(null);
  
  const allAssignments = users.flatMap(u => u.agentRoles.map(r => ({ user: u.name, role: r })));
  
  const [animatedAssignment, setAnimatedAssignment] = useState(allAssignments[0]);
  
  // Refs for auto-scrolling on mobile
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const usersColRef = useRef<HTMLDivElement | null>(null);
  const rolesColRef = useRef<HTMLDivElement | null>(null);
  const toolsColRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimatedAssignment(currentAssignment => {
        const currentIndex = allAssignments.findIndex(a => a.user === currentAssignment.user && a.role === currentAssignment.role);
        const nextIndex = (currentIndex + 1) % allAssignments.length;
        return allAssignments[nextIndex];
      });
    }, 3000);

    return () => clearInterval(animationInterval);
  }, [allAssignments]);

  // Auto-scroll to keep animated elements in view on mobile
  useEffect(() => {
    if (!mobileContainerRef.current || window.innerWidth >= 768) return; // Only on mobile
    
    let target: HTMLElement | null = null;
    
    // Determine which column to focus based on animation state
    if (animatedAssignment) {
      const userIndex = users.findIndex(u => u.name === animatedAssignment.user);
      const roleIndex = agentRoles.findIndex(r => r.name === animatedAssignment.role);
      
      // Scroll to user first, then role, then tools
      if (userIndex !== -1 && usersColRef.current) {
        target = usersColRef.current;
      } else if (roleIndex !== -1 && rolesColRef.current) {
        target = rolesColRef.current;
      }
    }
    
    if (target) {
      const container = mobileContainerRef.current;
      const targetCenter = target.offsetLeft + target.offsetWidth / 2;
      const containerCenter = container.clientWidth / 2;
      const newScrollLeft = targetCenter - containerCenter;
      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  }, [animatedAssignment]);

  const colors: { [key: string]: { main: string, faint: string } } = {
    purple: { main: '#a855f7', faint: '#c084fc' },
    blue: { main: '#3b82f6', faint: '#60a5fa' },
    green: { main: '#22c55e', faint: '#4ade80' },
  };

  const userY = (index: number) => 100 + index * 120;
  const roleY = (index: number) => 100 + index * 120;
  const toolY = (index: number) => 60 + index * 65;

  const userPositions: { [key: string]: { x: number, y: number } } = {};
  users.forEach((user, i) => {
    userPositions[user.name] = { x: 325, y: userY(i) + 35 };
  });

  const rolePositions: { [key: string]: { x_left: number, x_right: number, y: number } } = {};
  agentRoles.forEach((role, i) => {
    rolePositions[role.name] = { x_left: 575, x_right: 825, y: roleY(i) + 45 };
  });
  
  const toolPositions: { [key: string]: { x: number, y: number } } = {};
  tools.forEach((tool, i) => {
    toolPositions[tool.name] = { x: 1075, y: toolY(i) + 25 };
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Role-Based Tool Permissions</h2>
          <p className="text-xl text-gray-600">
            Assign users to agent roles with predefined tool access to enforce a clear chain of permissions based on function and trust.
          </p>
        </div>

        <div className="mt-16 w-full">
          <style>
            {`
              @keyframes draw { to { stroke-dashoffset: 0; } }
              .path-draw {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw 1s ease-out forwards;
              }
              @media (max-width: 768px) {
                .hide-mobile-paths { display: none; }
              }
            `}
          </style>
          {/* Mobile view: Horizontal scrolling container */}
          <div ref={mobileContainerRef} className="md:hidden overflow-x-auto scroll-snap-x mandatory py-4">
            <div className="flex items-center gap-6 px-4 min-w-max min-h-[350px]">
              {/* Users Column */}
              <div ref={usersColRef} className="flex flex-col items-center snap-start">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Users</h3>
                <div className="flex flex-col gap-3">
                  {users.map((user) => {
                    const associatedAnimatedRole = !hoveredUser && !hoveredRole && user.agentRoles.includes(animatedAssignment.role) && animatedAssignment.user === user.name
                      ? agentRoles.find(r => r.name === animatedAssignment.role)
                      : null;
                    
                    return (
                      <div
                        key={user.name}
                        className="bg-white rounded-lg p-2.5 border-2 shadow-sm w-48 cursor-pointer transition-all duration-300"
                        style={{
                          borderColor: associatedAnimatedRole ? colors[associatedAnimatedRole.color].main : '#e5e7eb',
                          boxShadow: associatedAnimatedRole ? `0 0 15px ${colors[associatedAnimatedRole.color].faint}` : '0 1px 3px rgba(0,0,0,0.05)'
                        }}
                        onTouchStart={() => setHoveredUser(user.name)}
                        onTouchEnd={() => setHoveredUser(null)}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-md flex items-center justify-center bg-gray-100 flex-shrink-0">
                            <span className="text-lg">{user.icon}</span>
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-gray-800 font-semibold text-sm truncate">{user.name}</h3>
                            <p className="text-gray-500 text-xs">Can assume {user.agentRoles.length} role{user.agentRoles.length !== 1 && 's'}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Agent Roles Column */}
              <div ref={rolesColRef} className="flex flex-col items-center snap-start">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Agent Roles</h3>
                <div className="flex flex-col gap-3">
                  {agentRoles.map((role) => (
                    <div
                      key={role.name}
                      className="bg-gray-900 rounded-xl p-3 shadow-lg w-52 cursor-pointer transition-all duration-300"
                      style={{
                        boxShadow: hoveredRole === role.name || animatedAssignment.role === role.name ? `0 0 25px ${colors[role.color].faint}` : '0 4px 12px rgba(0,0,0,0.2)',
                        borderColor: hoveredRole === role.name || animatedAssignment.role === role.name ? colors[role.color].main : 'transparent',
                        borderWidth: '1px'
                      }}
                      onTouchStart={() => setHoveredRole(role.name)}
                      onTouchEnd={() => setHoveredRole(null)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md flex items-center justify-center text-2xl bg-gray-700 flex-shrink-0">
                          {role.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-white font-semibold text-sm">{role.name}</h3>
                          <p className="text-gray-400 text-xs leading-tight">{role.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Column */}
              <div ref={toolsColRef} className="flex flex-col items-center snap-start">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Tools</h3>
                <div className="flex flex-col gap-2">
                  {tools.map((tool) => {
                    const animatedRole = agentRoles.find(r => r.name === animatedAssignment.role);
                    const hasAccess = animatedRole?.permissions.includes(tool.name) || false;
                    const isHighlighted = hasAccess && !hoveredUser && !hoveredRole;
                    
                    return (
                      <div 
                        key={tool.name} 
                        className={`flex items-center gap-2.5 border rounded-lg px-3 py-2 shadow-sm w-48 transition-all duration-300 ${
                          isHighlighted 
                            ? 'bg-brand/10 border-brand shadow-brand/20' 
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <tool.icon className={`w-4 h-4 transition-colors duration-300 flex-shrink-0 ${
                          isHighlighted ? 'text-brand' : 'text-gray-600'
                        }`} />
                        <span className={`font-mono text-xs font-medium transition-colors duration-300 truncate ${
                          isHighlighted ? 'text-brand' : 'text-gray-700'
                        }`}>{tool.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop view: Original SVG visualization */}
          <div className="hidden md:flex justify-center">
            <svg viewBox="0 0 1400 600" className="w-full max-w-6xl">
            {/* Column Titles */}
            <text x="200" y="40" textAnchor="middle" className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Users</text>
            <text x="700" y="40" textAnchor="middle" className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Agent Roles</text>
            <text x="1200" y="40" textAnchor="middle" className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Tools</text>

            {/* Agent -> Tool Paths */}
            {agentRoles.map((role) =>
              role.permissions.map((permission) => {
                const toolPos = toolPositions[permission];
                if (!toolPos) return null;
                const rolePos = rolePositions[role.name];
                const isHovered = hoveredRole === role.name || users.find(u => u.name === hoveredUser)?.agentRoles.includes(role.name);
                const isAnimated = animatedAssignment.role === role.name;
                const isAnyHovered = hoveredRole !== null || hoveredUser !== null;
                
                return (
                  <path
                    key={`${role.name}-${permission}`}
                    d={`M ${rolePos.x_right} ${rolePos.y} C ${rolePos.x_right + 150} ${rolePos.y}, ${toolPos.x - 150} ${toolPos.y}, ${toolPos.x} ${toolPos.y}`}
                    stroke={isHovered ? colors[role.color].main : isAnimated ? colors[role.color].faint : '#e5e7eb'}
                    strokeWidth={isHovered || isAnimated ? 2 : 1.5}
                    fill="none"
                    className={`transition-all duration-300 ${isAnimated && !isAnyHovered ? 'path-draw' : ''}`}
                    opacity={isAnyHovered ? (isHovered ? 1 : 0.15) : isAnimated ? 0.8 : 0.4}
                  />
                );
              })
            )}

            {/* User -> Agent Paths */}
            {users.map((user) => 
              user.agentRoles.map(agentRoleName => {
                const userPos = userPositions[user.name];
                const rolePos = rolePositions[agentRoleName];
                const role = agentRoles.find(r => r.name === agentRoleName)!;
                if (!rolePos || !role) return null;

                const isUserHovered = hoveredUser === user.name;
                const isRoleHovered = hoveredRole === agentRoleName;
                const isAnimated = animatedAssignment.user === user.name && animatedAssignment.role === agentRoleName;
                const isAnyHovered = hoveredUser !== null || hoveredRole !== null;
                const isActive = isUserHovered || isRoleHovered;

                return (
                  <path
                    key={`${user.name}-${agentRoleName}`}
                    d={`M ${userPos.x} ${userPos.y} C ${userPos.x + 150} ${userPos.y}, ${rolePos.x_left - 150} ${rolePos.y}, ${rolePos.x_left} ${rolePos.y}`}
                    stroke={isActive ? colors[role.color].faint : isAnimated ? colors[role.color].faint : '#e5e7eb'}
                    strokeWidth={isActive || isAnimated ? 2 : 1.5}
                    fill="none"
                    className={`transition-all duration-300 ${isAnimated && !isAnyHovered ? 'path-draw' : ''}`}
                    opacity={isAnyHovered ? (isActive ? 0.8 : 0.15) : isAnimated ? 0.8 : 0.4}
                  />
                )
              })
            )}

            {/* Tool Nodes */}
            {tools.map((tool, i) => (
              <foreignObject key={tool.name} x="1075" y={toolY(i)} width="250" height="50">
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 h-full shadow-sm">
                  <tool.icon className="w-5 h-5 text-gray-600" />
                  <span className="font-mono text-base font-medium text-gray-700">{tool.name}</span>
              </div>
              </foreignObject>
            ))}

            {/* Agent Role Nodes */}
            {agentRoles.map((role, i) => (
              <foreignObject 
                key={role.name}
                x="575" 
                y={roleY(i)} 
                width="250" 
                height="100"
                onMouseEnter={() => setHoveredRole(role.name)}
                onMouseLeave={() => setHoveredRole(null)}
                className="cursor-pointer rounded-2xl"
              >
                <div className="bg-gray-900 rounded-2xl p-4 h-full transition-all duration-300 shadow-lg"
                  style={{
                    boxShadow: hoveredRole === role.name || animatedAssignment.role === role.name ? `0 0 25px ${colors[role.color].faint}` : '0 4px 12px rgba(0,0,0,0.2)',
                    borderColor: hoveredRole === role.name || animatedAssignment.role === role.name ? colors[role.color].main : 'transparent',
                    borderWidth: '1px'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-3xl flex-shrink-0 bg-gray-700`}>
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base">{role.name}</h3>
                      <p className="text-gray-400 text-base">{role.description}</p>
                    </div>
                  </div>
                </div>
              </foreignObject>
            ))}

            {/* User Nodes */}
            {users.map((user, i) => {
              const isUserHovered = hoveredUser === user.name;
              const isAnyHovering = hoveredUser !== null || hoveredRole !== null;

              // Find if the user is associated with the currently hovered role
              const associatedHoveredRole = hoveredRole && user.agentRoles.includes(hoveredRole)
                ? agentRoles.find(r => r.name === hoveredRole)
                : null;
              
              // Find if the user is associated with the currently animated role (only if nothing is hovered)
              const associatedAnimatedRole = !isAnyHovering && user.agentRoles.includes(animatedAssignment.role) && animatedAssignment.user === user.name
                ? agentRoles.find(r => r.name === animatedAssignment.role)
                : null;

              const style: React.CSSProperties = {
                borderWidth: '1px',
                borderColor: '#e5e7eb', // default border-gray-200
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                transition: 'border-color 300ms ease-in-out, box-shadow 300ms ease-in-out',
              };

              if (isUserHovered) {
                style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              } else if (associatedHoveredRole) {
                style.borderColor = colors[associatedHoveredRole.color].main;
                style.boxShadow = `0 0 15px ${colors[associatedHoveredRole.color].faint}`;
              } else if (associatedAnimatedRole) {
                style.borderColor = colors[associatedAnimatedRole.color].main;
                style.boxShadow = `0 0 15px ${colors[associatedAnimatedRole.color].faint}`;
              }
              
              return (
                <foreignObject
                  key={user.name}
                  x="75"
                  y={userY(i)}
                  width="250"
                  height="70"
                  onMouseEnter={() => setHoveredUser(user.name)}
                  onMouseLeave={() => setHoveredUser(null)}
                  className="cursor-pointer rounded-xl"
                >
                  <div
                    className="bg-white rounded-xl p-3 h-full"
                    style={style}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100">
                        <span className="text-2xl">{user.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-gray-800 font-semibold text-base">{user.name}</h3>
                        <p className="text-gray-500 text-base">Can assume {user.agentRoles.length} role{user.agentRoles.length !== 1 && 's'}</p>
                      </div>
                    </div>
          </div>
                </foreignObject>
              );
            })}
          </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
