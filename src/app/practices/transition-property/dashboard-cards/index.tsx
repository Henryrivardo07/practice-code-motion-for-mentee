'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

type Metric = {
  title: string;
  value: string;
  delta: string;
  good?: boolean;
};

type CardKind = 'revenue' | 'users' | 'orders' | 'conversion';

const baseStyle =
  'relative w-[300px] overflow-hidden rounded-4xl border bg-white/60 dark:bg-neutral-900/40 p-6 shadow-lg ring-1 ring-black/5 min-h-[140px]';

// Gradasi latar per kartu
const TINT_BY_KIND: Record<CardKind, string> = {
  revenue: 'from-emerald-400/25 to-transparent',
  users: 'from-sky-400/25 to-transparent',
  orders: 'from-amber-400/25 to-transparent',
  conversion: 'from-violet-400/25 to-transparent',
};

// Warna badge delta saat good=true per kartu
const DELTA_GOOD_BY_KIND: Record<CardKind, string> = {
  revenue: 'bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/20',
  users: 'bg-sky-500/15 text-sky-700 ring-1 ring-sky-500/20',
  orders: 'bg-amber-500/15 text-amber-700 ring-1 ring-amber-500/20',
  conversion: 'bg-violet-500/15 text-violet-700 ring-1 ring-violet-500/20',
};

function MetricCard({ metric, kind }: { metric: Metric; kind: CardKind }) {
  const [expanded, setExpanded] = useState(false);
  const tint = TINT_BY_KIND[kind];

  return (
    <motion.button
      type='button'
      onClick={() => setExpanded((s) => !s)}
      className={baseStyle}
      whileHover={{
        y: -6,
        boxShadow: '0 14px 30px rgba(0,0,0,0.12)',
        transition: { type: 'tween', ease: 'easeOut', duration: 0.2 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { type: 'spring', stiffness: 500, damping: 18, mass: 0.4 },
      }}
      layout
      transition={{ layout: { type: 'spring', damping: 26, stiffness: 260 } }}
    >
      {/* Overlay gradasi penuh, dipotong oleh rounded+overflow parent */}
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tint} opacity-40`}
        animate={{ rotate: expanded ? 45 : 0 }}
        transition={{ ease: 'linear', duration: 0.6 }}
        style={{ transformOrigin: 'center' }}
      />

      {/* Header */}
      <div className='relative z-10 flex items-start justify-between gap-4'>
        <div className='flex-1'>
          <p className='text-base text-neutral-500'>{metric.title}</p>
          <div className='mt-2 flex items-baseline gap-3'>
            <motion.span
              layout
              animate={{ scale: expanded ? 1.04 : 1 }}
              transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              className='font-semibold text-xl tracking-tight'
            >
              {metric.value}
            </motion.span>

            <span
              className={`rounded-lg px-2 py-1 text-sm ${
                metric.good
                  ? DELTA_GOOD_BY_KIND[kind]
                  : 'bg-rose-500/15 text-rose-700 ring-1 ring-rose-500/20'
              }`}
            >
              {metric.delta}
            </span>
          </div>
        </div>

        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 0.18 }}
          className='mt-1 text-lg text-neutral-400'
        >
          ▼
        </motion.div>
      </div>

      {/* Konten expandable */}
      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            key='details'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className='relative z-10 overflow-hidden'
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.22 }}
              className='mt-4 grid grid-cols-2 gap-4 text-base'
            >
              <div className='rounded-xl bg-white/60 p-4 ring-1 ring-black/5 dark:bg-white/5'>
                <p className='text-neutral-500 text-sm'>Prev. period</p>
                <p className='mt-1 font-medium text-base'>+8.2%</p>
              </div>
              <div className='rounded-xl bg-white/60 p-4 ring-1 ring-black/5 dark:bg-white/5'>
                <p className='text-neutral-500 text-sm'>Best day</p>
                <p className='mt-1 font-medium text-base'>Tue +14%</p>
              </div>
              <div className='col-span-2 rounded-xl bg-white/60 p-4 ring-1 ring-black/5 dark:bg-white/5'>
                <p className='text-neutral-500 text-sm'>Notes</p>
                <p className='mt-1 text-base'>
                  Campaign CTR improved. Expect stable growth next week.
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.button>
  );
}

/** Exports untuk 4 tab */
export function RevenueCard() {
  return (
    <MetricCard
      kind='revenue'
      metric={{
        title: 'Revenue',
        value: '$124,563',
        delta: '+12.5%',
        good: true,
      }}
    />
  );
}

export function UsersCard() {
  return (
    <MetricCard
      kind='users'
      metric={{
        title: 'Users',
        value: '8,234',
        delta: '+23.1%',
        good: true,
      }}
    />
  );
}

export function OrdersCard() {
  return (
    <MetricCard
      kind='orders'
      metric={{
        title: 'Orders',
        value: '1,456',
        delta: '-5.4%',
        good: false,
      }}
    />
  );
}

export function ConversionCard() {
  return (
    <MetricCard
      kind='conversion'
      metric={{
        title: 'Conversion',
        value: '3.24%',
        delta: '+1.2%',
        good: true,
      }}
    />
  );
}
