'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

/*
 * ═══ INTI MATERI MOTION (Dashboard Card) ═══
 * 1. whileHover / whileTap → interaksi (hover naik + shadow, tap scale)
 * 2. layout → ukuran berubah otomatis di-animate
 * 3. animate → nilai tergantung state (rotate chevron, scale value)
 * 4. AnimatePresence + initial/animate/exit → konten masuk/keluar halus
 * 5. transition → tween vs spring, duration, easing
 */

type Metric = { title: string; value: string; delta: string; good?: boolean };

const cardStyle =
  'relative w-[300px] overflow-hidden rounded-4xl border bg-white/60 dark:bg-neutral-900/40 p-6 shadow-lg ring-1 ring-black/5 min-h-[140px]';

function MetricCard({
  metric,
  tint = 'from-emerald-400/25 to-transparent',
  deltaClass = 'bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/20',
}: {
  metric: Metric;
  tint?: string;
  deltaClass?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.button
      type='button'
      onClick={() => setExpanded((s) => !s)}
      className={cardStyle}
      // ─── 1. Hover: naik + shadow ───
      whileHover={{
        y: -6,
        boxShadow: '0 14px 30px rgba(0,0,0,0.12)',
        transition: { type: 'tween', ease: 'easeOut', duration: 0.2 },
      }}
      // ─── 2. Tap: scale sedikit ───
      whileTap={{
        scale: 0.98,
        transition: { type: 'spring', stiffness: 500, damping: 18 },
      }}
      // ─── 3. Layout: saat konten expand/collapse, tinggi kartu di-animate ───
      layout
      transition={{ layout: { type: 'spring', damping: 26, stiffness: 260 } }}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tint} opacity-40`}
      />

      <div className='relative z-10 flex items-start justify-between gap-4'>
        <div className='flex-1'>
          <p className='text-base text-neutral-500'>{metric.title}</p>
          <div className='mt-2 flex items-baseline gap-3'>
            {/* animate: scale value saat expanded */}
            <motion.span
              animate={{ scale: expanded ? 1.04 : 1 }}
              transition={{ type: 'spring', stiffness: 420, damping: 22 }}
              className='font-semibold text-xl tracking-tight'
            >
              {metric.value}
            </motion.span>
            <span
              className={`rounded-lg px-2 py-1 text-sm ${metric.good ? deltaClass : 'bg-rose-500/15 text-rose-700 ring-1 ring-rose-500/20'}`}
            >
              {metric.delta}
            </span>
          </div>
        </div>
        {/* animate: rotate chevron 180° saat expanded */}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ type: 'tween', ease: 'easeOut', duration: 0.18 }}
          className='mt-1 text-lg text-neutral-400'
        >
          ▼
        </motion.span>
      </div>

      {/* ─── 4. AnimatePresence: animate mount/unmount (expand/collapse) ─── */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key='details'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className='relative z-10 overflow-hidden'
          >
            <div className='mt-4 grid grid-cols-2 gap-4 text-base'>
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
                  Campaign CTR improved. Expect stable growth.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── 2 card saja (data singkat, fokus di MetricCard) ───
const KINDS = {
  revenue: {
    tint: 'from-emerald-400/25 to-transparent',
    deltaClass: 'bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/20',
    metric: {
      title: 'Revenue',
      value: '$124,563',
      delta: '+12.5%',
      good: true,
    },
  },
  users: {
    tint: 'from-sky-400/25 to-transparent',
    deltaClass: 'bg-sky-500/15 text-sky-700 ring-1 ring-sky-500/20',
    metric: { title: 'Users', value: '8,234', delta: '+23.1%', good: true },
  },
} as const;

export function RevenueCard() {
  return (
    <MetricCard
      metric={KINDS.revenue.metric}
      tint={KINDS.revenue.tint}
      deltaClass={KINDS.revenue.deltaClass}
    />
  );
}
export function UsersCard() {
  return (
    <MetricCard
      metric={KINDS.users.metric}
      tint={KINDS.users.tint}
      deltaClass={KINDS.users.deltaClass}
    />
  );
}
