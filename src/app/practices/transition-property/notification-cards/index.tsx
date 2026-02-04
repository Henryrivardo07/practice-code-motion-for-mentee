'use client';

import { motion, type Transition } from 'motion/react';
import { useId } from 'react';

/*
 * ═══ INTI MATERI MOTION (Notification Card) ═══
 * 1. initial / animate → masuk dari state A ke B
 * 2. transition → tween (ease, duration) vs spring (stiffness, damping)
 * 3. Tween easeOut → halus, bisa diprediksi (reliability)
 * 4. Spring → natural bounce, cocok untuk urgency/attention
 * 5. Icon & teks: animasi bertahap (delay) setelah card muncul
 */

type Tone = 'success' | 'error';

const toneStyle: Record<Tone, string> = {
  success:
    'bg-emerald-600/10 border-emerald-600/30 text-emerald-900 dark:text-emerald-100',
  error: 'bg-rose-600/10 border-rose-600/30 text-rose-900 dark:text-rose-100',
};

const iconDot: Record<Tone, string> = {
  success: 'bg-emerald-500',
  error: 'bg-rose-500',
};

function NotificationCard({
  tone,
  title,
  message,
  initial,
  animate,
  cardTransition,
  iconTransition,
  extra,
}: {
  tone: Tone;
  title: string;
  message: string;
  initial: React.ComponentProps<typeof motion.div>['initial'];
  animate: React.ComponentProps<typeof motion.div>['animate'];
  cardTransition: Transition;
  iconTransition: Transition;
  extra?: React.ReactNode;
}) {
  const id = useId();
  return (
    <motion.div
      key={id}
      className={`min-h-[140px] w-[300px] rounded-4xl border p-6 shadow-lg ${toneStyle[tone]}`}
      initial={initial}
      animate={animate}
      transition={cardTransition}
    >
      <div className='flex items-start gap-4'>
        {/* Icon: pop in dengan spring + delay */}
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
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.06,
              type: 'tween',
              ease: 'easeOut',
              duration: 0.22,
            }}
            className='font-semibold text-lg leading-tight'
          >
            {title}
          </motion.h4>
          <motion.p
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.12,
              type: 'tween',
              ease: 'easeOut',
              duration: 0.22,
            }}
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

/** Success — tween easeOut: halus, reliable */
export function SuccessCard() {
  return (
    <NotificationCard
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

/** Error — spring dari atas: urgency */
export function ErrorCard() {
  return (
    <NotificationCard
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
