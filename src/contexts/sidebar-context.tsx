'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';

type SidebarContextValue = {
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  toggleCollapse: () => void;
  setSidebarOpen: (open: boolean) => void;
};

const SidebarContext = createContext<SidebarContextValue | undefined>(
  undefined
);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleCollapse = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{
        sidebarOpen,
        sidebarCollapsed,
        toggleSidebar,
        toggleCollapse,
        setSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}
