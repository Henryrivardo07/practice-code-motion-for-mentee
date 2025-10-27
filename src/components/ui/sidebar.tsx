'use client';

import { ChevronDown, ChevronUp, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Button } from '@/components/ui/button';
import type { MenuItem } from '@/lib/constants/sidebar-menu';
import { cn } from '@/lib/utils';

type SidebarContextValue = {
  menuItems: MenuItem[];
  expandedItems: Set<string>;
  toggleMenuItem: (itemId: string) => void;
};

const SidebarContext = createContext<SidebarContextValue | undefined>(
  undefined
);

const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('Sidebar components must be used within a SidebarProvider');
  }
  return context;
};

type SidebarProps = {
  children: ReactNode;
  defaultItems: MenuItem[];
  onItemToggle?: (itemId: string) => void;
};

export const Sidebar = ({
  children,
  defaultItems,
  defaultExpandedItems = ['vanilla-css'],
  onItemToggle,
}: SidebarProps & { defaultExpandedItems?: string[] }) => {
  const pathname = usePathname();
  const [menuItems] = useState<MenuItem[]>(defaultItems);

  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(defaultExpandedItems)
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setExpandedItems((prevExpanded) => {
        const expanded = new Set(prevExpanded);

        menuItems.forEach((item) => {
          if (item.subItems) {
            const hasActiveSubItem = item.subItems.some(
              (subItem) => pathname === subItem.href
            );
            if (hasActiveSubItem && !expanded.has(item.id)) {
              expanded.add(item.id);
            }
          }
        });

        return expanded;
      });
    }
  }, [pathname, menuItems]);

  const toggleMenuItem = (itemId: string) => {
    const item = menuItems.find((menuItem) => menuItem.id === itemId);

    if (item?.subItems && item.subItems.length > 0) {
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(itemId)) {
          newSet.delete(itemId);
        } else {
          newSet.add(itemId);
        }
        return newSet;
      });
      onItemToggle?.(itemId);
    }
  };

  return (
    <SidebarContext.Provider
      value={{ menuItems, expandedItems, toggleMenuItem }}
    >
      <div className='relative h-full w-full border-neutral-800 border-r'>
        <div className='relative h-full w-full'>
          <div className='relative flex h-full w-full flex-col items-stretch justify-start gap-3xl p-3xl'>
            {children}
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

export const SidebarContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className='relative min-h-0 min-w-0 flex-1 shrink-0 grow'>
      <div className='relative flex w-full flex-col items-stretch justify-start gap-3xl p-0'>
        {children}
      </div>
    </div>
  );
};

export const SidebarHeader = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export const SidebarMenuButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button
      variant='outline'
      size='icon'
      onClick={onClick}
      className='rounded-full border-neutral-800'
      aria-label='Toggle menu'
    >
      <Menu className='size-24 rotate-180' />
    </Button>
  );
};

export const SidebarTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className='relative w-full shrink-0 text-md-semibold text-success-25'>
      {children}
    </h1>
  );
};

type SidebarNavProps = {
  collapsed?: boolean;
};

export const SidebarNav = ({ collapsed = false }: SidebarNavProps) => {
  const { menuItems, expandedItems, toggleMenuItem } = useSidebarContext();
  const pathname = usePathname();

  return (
    <nav className='relative w-full shrink-0'>
      <div className='relative flex w-full flex-col items-stretch justify-start p-0'>
        {menuItems.map((item, index) => {
          const isExpanded = expandedItems.has(item.id);
          return (
            <SidebarMenuItem key={item.id} isFirst={index === 0}>
              {isExpanded && item.subItems && !collapsed ? (
                <div className='relative flex w-full flex-col items-stretch justify-start p-0'>
                  <SidebarSectionButton
                    title={item.title}
                    isExpanded={true}
                    hasSubItems={!!item.subItems?.length}
                    onClick={() => toggleMenuItem(item.id)}
                    collapsed={collapsed}
                  />
                  {item.subItems.map((subItem) => (
                    <SidebarSubMenuItem
                      key={subItem.id}
                      href={subItem.href || '#'}
                      isActive={pathname === subItem.href}
                      collapsed={collapsed}
                    >
                      {subItem.title}
                    </SidebarSubMenuItem>
                  ))}
                </div>
              ) : (
                <SidebarSectionButton
                  title={item.title}
                  isExpanded={false}
                  hasSubItems={!!item.subItems?.length}
                  onClick={() => toggleMenuItem(item.id)}
                  collapsed={collapsed}
                />
              )}
            </SidebarMenuItem>
          );
        })}
      </div>
    </nav>
  );
};

type SidebarMenuItemProps = {
  children: ReactNode;
  isFirst?: boolean;
};

export const SidebarMenuItem = ({
  children,
  isFirst = false,
}: SidebarMenuItemProps) => {
  return (
    <div
      className={cn(
        'relative w-full shrink-0',
        !isFirst && 'border-neutral-800 border-t'
      )}
    >
      {children}
    </div>
  );
};

type SidebarSectionButtonProps = {
  title: string;
  isExpanded?: boolean;
  hasSubItems?: boolean;
  onClick?: () => void;
  collapsed?: boolean;
};

export const SidebarSectionButton = ({
  title,
  isExpanded = false,
  hasSubItems = false,
  onClick,
  collapsed = false,
}: SidebarSectionButtonProps) => {
  const buttonProps: React.ComponentProps<typeof Button> = {
    variant: 'ghost',
    onClick,
    className: cn(
      'h-auto w-full gap-2 rounded-none text-left',
      collapsed ? 'justify-center p-lg' : 'justify-between p-xl'
    ),
  };

  if (collapsed) {
    buttonProps.title = title;
  }

  return (
    <Button {...buttonProps}>
      {!collapsed && <span className='text-sm-medium'>{title}</span>}
      {hasSubItems &&
        !collapsed &&
        (isExpanded ? (
          <ChevronUp className='size-24 shrink-0' />
        ) : (
          <ChevronDown className='size-24 shrink-0' />
        ))}
      {collapsed && <span className='text-sm-medium'>{title.charAt(0)}</span>}
    </Button>
  );
};

type SidebarSubMenuItemProps = {
  children: ReactNode;
  href: string;
  isActive?: boolean;
  collapsed?: boolean;
};

export const SidebarSubMenuItem = ({
  children,
  href,
  isActive = false,
  collapsed = false,
}: SidebarSubMenuItemProps) => {
  const pathname = usePathname();

  if (collapsed) return null;

  const [path, hash] = href.split('#');
  const normalizedPath = path.replace(/\/$/, '');
  const normalizedPathname = pathname.replace(/\/$/, '');
  const isCurrentPage = normalizedPathname === normalizedPath;

  return (
    <Link
      href={isCurrentPage && hash ? `#${hash}` : href}
      className='relative block w-full text-left transition-colors hover:bg-neutral-800'
    >
      <div className='relative flex h-full w-full flex-row items-center justify-start p-xl'>
        <span
          className={cn(
            'text-sm-regular',
            isActive ? 'text-primary-200' : 'text-neutral-25'
          )}
        >
          {children}
        </span>
      </div>
    </Link>
  );
};

export const SidebarScrollIndicator = () => {
  return (
    <div className='relative w-12 shrink-0 self-stretch overflow-hidden rounded-full bg-neutral-600'>
      <div className='absolute top-0 left-0 h-297 w-12 rounded-full bg-neutral-400' />
    </div>
  );
};
