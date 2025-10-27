'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MobileSidebarTrigger } from '@/components/ui/mobile-sidebar-trigger';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarNav,
  SidebarTitle,
} from '@/components/ui/sidebar';
import { sidebarMenuItems } from '@/lib/constants/sidebar-menu';
import { cn } from '@/lib/utils';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen'>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'hidden h-full shrink-0 bg-neutral-950 transition-all duration-300 lg:block',
          sidebarCollapsed ? 'w-80' : 'w-280'
        )}
      >
        <Sidebar
          defaultItems={sidebarMenuItems}
          defaultExpandedItems={['the-motion-component']}
        >
          <SidebarHeader>
            <div className='flex items-center justify-between'>
              {!sidebarCollapsed && (
                <Link href='/'>
                  <SidebarTitle>Motion Practice</SidebarTitle>
                </Link>
              )}
              <SidebarMenuButton
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarNav collapsed={sidebarCollapsed} />
          </SidebarContent>
        </Sidebar>
      </aside>

      {/* Mobile Sidebar Trigger */}
      <MobileSidebarTrigger
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      />

      {/* Main Content */}
      <main className='flex-1 overflow-auto bg-neutral-950'>
        <div className='min-h-screen'>{children}</div>
      </main>

      {/* Mobile Sidebar */}
      <div className='lg:hidden'>
        <aside className='data-[state=closed]:-translate-x-full fixed top-0 left-0 z-50 h-full w-280 transform bg-neutral-950 transition-transform duration-300 data-[state=open]:translate-x-0'>
          <Sidebar
            defaultItems={sidebarMenuItems}
            defaultExpandedItems={['the-motion-component']}
          >
            <SidebarHeader>
              <Link href='/'>
                <SidebarTitle>Motion Practice</SidebarTitle>
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <SidebarNav />
            </SidebarContent>
          </Sidebar>
        </aside>
      </div>
    </div>
  );
}
