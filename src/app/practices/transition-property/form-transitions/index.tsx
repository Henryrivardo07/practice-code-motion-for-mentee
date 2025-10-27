'use client';

import { AnimatePresence, motion } from 'motion/react';
import { i } from 'motion/react-client';
import { useState } from 'react';

const steps = ['Personal Info', 'Account Setup', 'Preferences'];
type Step = 0 | 1 | 2 | 'success';

export default function MultiStageForm() {
  const [step, setStep] = useState<Step>(0);

  const next = () => {
    if (step === 2) setStep('success');
    else if (typeof step === 'number') setStep((step + 1) as Step);
  };
  const back = () => {
    if (step === 'success') setStep(2);
    else if (typeof step === 'number' && step > 0) setStep((step - 1) as Step);
  };

  const isSuccess = step === 'success';
  const activeIndex = typeof step === 'number' ? step : 3;

  return (
    <div className='min-h-[140px] w-[300px] rounded-4xl border bg-white/60 p-6 shadow-lg ring-1 ring-black/5 dark:bg-neutral-900/40'>
      {/* Progress bar with SPRING physics */}
      <div className='mb-6'>
        <div className='h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800'>
          <motion.div
            className='h-full rounded-full bg-sky-500'
            initial={{ width: '0%' }}
            animate={{ width: `${(activeIndex / 3) * 100}%` }}
            transition={{ type: 'spring', stiffness: 240, damping: 28 }}
          />
        </div>

        {/* Current step indicators (scale up smoothly) */}
        <div className='mt-4 flex items-center gap-4 text-base'>
          {['1', '2', '3'].map((n, i) => (
            <motion.span
              key={n}
              className={`grid h-8 w-8 place-items-center rounded-full border ${
                i <= activeIndex - 1
                  ? 'border-sky-500 bg-sky-500 text-white'
                  : i === activeIndex
                    ? 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-100'
                    : 'border-neutral-300 bg-transparent text-neutral-500 dark:border-neutral-700'
              }`}
              animate={{ scale: i === activeIndex ? 1.08 : 1 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
            >
              {n}
            </motion.span>
          ))}
          <span className='ml-auto text-base text-neutral-500'>
            {isSuccess ? 'Review & Done' : steps[activeIndex]}
          </span>
        </div>
      </div>

      {/* FORM BODY — slide in from RIGHT with spring + staggered fields */}
      <div className='relative min-h-[180px]'>
        <AnimatePresence mode='wait'>
          {!isSuccess && typeof step === 'number' ? (
            <motion.form
              key={step}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className='grid gap-4'
              onSubmit={(e) => {
                e.preventDefault();
                next();
              }}
            >
              {getFields(step).map((f, i) => (
                <motion.label
                  key={f.id}
                  className='grid gap-1'
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'tween',
                    ease: 'easeOut',
                    duration: 0.22,
                    delay: i * 0.06, // STAGGER
                  }}
                >
                  <span className='text-base text-neutral-600 dark:text-neutral-300'>
                    {f.label}
                  </span>
                  <input
                    required
                    id={f.id}
                    placeholder={f.placeholder}
                    className='h-12 rounded-xl border bg-white/80 px-4 text-base outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-sky-500/50 dark:bg-white/10'
                  />
                </motion.label>
              ))}

              <div className='mt-4 flex items-center justify-between'>
                <button
                  type='button'
                  onClick={back}
                  className='rounded-xl border px-4 py-2 text-base hover:bg-neutral-50 dark:hover:bg-neutral-800'
                  disabled={step === 0}
                >
                  Back
                </button>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 18,
                    mass: 0.4,
                  }}
                  type='submit'
                  className='rounded-xl bg-sky-600 px-6 py-2 font-medium text-base text-white hover:bg-sky-700'
                >
                  Next
                </motion.button>
              </div>
            </motion.form>
          ) : (
            // SUCCESS STATE — orchestrated animations
            <motion.div
              key='success'
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, when: 'beforeChildren' },
                },
              }}
              className='grid place-items-center text-center'
            >
              <motion.div
                variants={{
                  hidden: { scale: 0.6, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { type: 'spring', stiffness: 340, damping: 18 },
                  },
                }}
                className='mb-3 grid h-20 w-20 place-items-center rounded-full bg-emerald-500 text-2xl text-white'
              >
                ✓
              </motion.div>
              <motion.h3
                variants={{
                  hidden: { y: 8, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'tween',
                      ease: 'easeOut',
                      duration: 0.24,
                    },
                  },
                }}
                className='font-semibold text-xl'
              >
                All Set!
              </motion.h3>
              <motion.p
                variants={{
                  hidden: { y: 8, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.06,
                      type: 'tween',
                      ease: 'easeOut',
                      duration: 0.22,
                    },
                  },
                }}
                className='mt-2 text-base text-neutral-600 dark:text-neutral-300'
              >
                Your profile has been created successfully.
              </motion.p>

              <motion.button
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.12,
                      type: 'spring',
                      stiffness: 420,
                      damping: 18,
                    },
                  },
                }}
                onClick={() => setStep(0)}
                className='mt-6 rounded-xl border px-6 py-2 text-base hover:bg-neutral-50 dark:hover:bg-neutral-800'
              >
                Create another
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function getFields(step: 0 | 1 | 2) {
  if (step === 0) {
    return [
      { id: 'name', label: 'Full name', placeholder: 'John Appleseed' },
      { id: 'email', label: 'Email address', placeholder: 'you@example.com' },
    ];
  }
  if (step === 1) {
    return [
      { id: 'username', label: 'Username', placeholder: 'your_handle' },
      { id: 'password', label: 'Password', placeholder: '••••••••' },
    ];
  }
  return [
    { id: 'timezone', label: 'Timezone', placeholder: 'Asia/Jakarta' },
    { id: 'language', label: 'Language', placeholder: 'English' },
  ];
}
