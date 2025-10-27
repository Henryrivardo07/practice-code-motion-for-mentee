'use client';

import { motion, type Variants } from 'motion/react';
import { useId } from 'react';

type CardProps = {
  title: string;
  message: string;
  tone: 'success' | 'warning' | 'error' | 'info';
  // Optional: override class
  className?: string;
};

// Simple tone styles
const toneStyle: Record<CardProps['tone'], string> = {
  success:
    'bg-emerald-600/10 border-emerald-600/30 text-emerald-900 dark:text-emerald-100',
  warning:
    'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-100',
  error: 'bg-rose-600/10 border-rose-600/30 text-rose-900 dark:text-rose-100',
  info: 'bg-sky-600/10 border-sky-600/30 text-sky-900 dark:text-sky-100',
};

const iconDot: Record<CardProps['tone'], string> = {
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  error: 'bg-rose-500',
  info: 'bg-sky-500',
};

const childrenVariants: Variants = {
  hidden: { y: 8, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.06,
      type: 'tween',
      ease: 'easeOut',
      duration: 0.22,
    },
  }),
};

function BaseCard({
  title,
  message,
  tone,
  className,
  containerProps,
  iconTransition,
  cardTransition,
  initial,
  animate,
  extra,
}: CardProps & {
  containerProps?: React.ComponentProps<typeof motion.div>;
  iconTransition: React.ComponentProps<typeof motion.div>['transition'];
  cardTransition: React.ComponentProps<typeof motion.div>['transition'];
  initial: React.ComponentProps<typeof motion.div>['initial'];
  animate: React.ComponentProps<typeof motion.div>['animate'];
  extra?: React.ReactNode;
}) {
  const id = useId();
  return (
    <motion.div
      key={id} // memudahkan replay dari UIBlockReplayButton yang re-mount konten
      className={`min-h-[140px] w-[300px] rounded-4xl border p-6 shadow-lg md:p-2xl ${toneStyle[tone]} ${className || ''}`}
      initial={initial}
      animate={animate}
      transition={cardTransition}
      {...containerProps}
    >
      <div className='flex items-start gap-4'>
        {/* Icon pop with spring after card appears */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={iconTransition}
          className={`grid h-12 w-12 place-items-center rounded-xl ring-1 ring-black/5 ${iconDot[tone]}`}
        >
          <span className='h-2 w-2 rounded-full bg-white' />
        </motion.div>

        <div className='flex-1'>
          <motion.h4
            custom={0}
            variants={childrenVariants}
            initial='hidden'
            animate='visible'
            className='font-semibold text-lg leading-tight'
          >
            {title}
          </motion.h4>
          <motion.p
            custom={1}
            variants={childrenVariants}
            initial='hidden'
            animate='visible'
            className='mt-2 text-base leading-relaxed opacity-90'
          >
            {message}
          </motion.p>

          {extra}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * SUCCESS — tween easeOut, durasi singkat (reliability)
 */
export function SuccessCard() {
  return (
    <BaseCard
      tone='success'
      title='Payment Successful'
      message='Your payment has been processed.'
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      cardTransition={{ type: 'tween', ease: 'easeOut', duration: 0.35 }}
      iconTransition={{
        type: 'spring',
        stiffness: 300,
        damping: 16,
        delay: 0.12,
      }}
    />
  );
}

/**
 * WARNING — tween dengan backOut untuk "popped attention"
 */
export function WarningCard() {
  return (
    <BaseCard
      tone='warning'
      title='Unusual Activity'
      message='We detected a login from a new device.'
      initial={{ y: 24, scale: 0.96, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      cardTransition={{
        type: 'tween',
        ease: 'backOut', // back/anticipate family
        duration: 0.4,
      }}
      iconTransition={{
        type: 'spring',
        stiffness: 340,
        damping: 14,
        delay: 0.14,
      }}
    />
  );
}

/**
 * ERROR — spring from TOP (urgency)
 */
export function ErrorCard() {
  return (
    <BaseCard
      tone='error'
      title='Payment Failed'
      message='Your card was declined. Try a different method.'
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      cardTransition={{
        type: 'spring',
        stiffness: 360,
        damping: 20,
        mass: 0.9,
      }}
      iconTransition={{
        type: 'spring',
        stiffness: 420,
        damping: 12,
        delay: 0.1,
      }}
      extra={
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 280,
            damping: 28,
            delay: 0.12,
          }}
          className='mt-3 overflow-hidden'
        >
          <div className='rounded-lg bg-rose-500/10 px-3 py-2 text-rose-900 ring-1 ring-rose-500/20 dark:text-rose-100'>
            Try updating your billing info or contacting your bank.
          </div>
        </motion.div>
      }
    />
  );
}

/**
 * INFO — anticipate easing + slight rotation
 */
export function InfoCard() {
  return (
    <BaseCard
      tone='info'
      title='New Feature Available'
      message='Explore advanced filters in your dashboard.'
      initial={{ y: 12, rotate: -2, opacity: 0 }}
      animate={{ y: 0, rotate: 0, opacity: 1 }}
      cardTransition={{ type: 'tween', ease: 'anticipate', duration: 0.42 }}
      iconTransition={{
        type: 'spring',
        stiffness: 300,
        damping: 16,
        delay: 0.12,
      }}
    />
  );
}