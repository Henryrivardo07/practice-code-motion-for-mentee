export interface MenuItem {
  id: string;
  title: string;
  href?: string;
  subItems?: MenuItem[];
}

export const sidebarMenuItems: MenuItem[] = [
  {
    id: 'the-motion-component',
    title: 'The Motion Component',
    subItems: [
      {
        id: 'motion-prefix',
        title: 'Practice 1: motion._prefix',
        href: '/practices/the-motion-component#motion-prefix',
      },
      {
        id: 'motion-create',
        title: 'Practice 2: motion.create()',
        href: '/practices/the-motion-component#motion-create',
      },
    ],
  },
  {
    id: 'animate-property',
    title: 'Animate Property',
    subItems: [
      {
        id: 'animate-basics',
        title: 'Practice 1: Basic Animations',
        href: '/practices/animate-property#animate-basics',
      },
      {
        id: 'color-transitions',
        title: 'Practice 2: Color Transitions',
        href: '/practices/animate-property#color-transitions',
      },
      {
        id: 'interactive-positioning',
        title: 'Practice 3: Interactive Positioning',
        href: '/practices/animate-property#interactive-positioning',
      },
      {
        id: 'animate-with-state',
        title: 'Practice 4: Animate with State',
        href: '/practices/animate-property#animate-with-state',
      },
    ],
  },
  {
    id: 'initial-property',
    title: 'Initial Property',
    subItems: [
      {
        id: 'fade-scale',
        title: 'Practice 1: Fade and Scale',
        href: '/practices/initial-property#fade-scale',
      },
      {
        id: 'slide-directions',
        title: 'Practice 2: Slide Directions',
        href: '/practices/initial-property#slide-directions',
      },
      {
        id: 'transform-origin',
        title: 'Practice 3: Transform Origin',
        href: '/practices/initial-property#transform-origin',
      },
      {
        id: 'skill-cards',
        title: 'Practice 4: Skill Cards',
        href: '/practices/initial-property#skill-cards',
      },
    ],
  },
  {
    id: 'transition-property',
    title: 'Transition Property',
    subItems: [
      {
        id: 'notification-cards',
        title: 'Practice 1: Notification Cards',
        href: '/practices/transition-property#notification-cards',
      },
      {
        id: 'dashboard-cards',
        title: 'Practice 2: Dashboard Cards',
        href: '/practices/transition-property#dashboard-cards',
      },
      {
        id: 'form-transitions',
        title: 'Practice 3: Multi-Stage Form',
        href: '/practices/transition-property#form-transitions',
      },
    ],
  },
  {
    id: 'exit-property',
    title: 'Exit Property',
    subItems: [
      {
        id: 'exit-basics',
        title: 'Practice 1: Basic Exit Animations',
        href: '/practices/exit-property#exit-basics',
      },
      {
        id: 'exit-styles',
        title: 'Practice 2: Exit Animation Styles',
        href: '/practices/exit-property#exit-styles',
      },
      {
        id: 'animate-presence-modes',
        title: 'Practice 3: AnimatePresence Modes',
        href: '/practices/exit-property#animate-presence-modes',
      },
      {
        id: 'list-animations',
        title: 'Practice 4: List Exit Animations',
        href: '/practices/exit-property#list-animations',
      },
    ],
  },
  {
    id: 'variants',
    title: 'Variants',
    subItems: [
      {
        id: 'animated-card',
        title: 'Practice 1: Premium Animated Card',
        href: '/practices/variants#animated-card',
      },
      {
        id: 'product-card',
        title: 'Practice 2: Product Card Gallery',
        href: '/practices/variants#product-card',
      },
      {
        id: 'music-player',
        title: 'Practice 3: Music Player Controls',
        href: '/practices/variants#music-player',
      },
    ],
  },
];
