'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const steps = ['Personal Info', 'Account Setup', 'Preferences'];
type Step = 0 | 1 | 2 | 'success';

export default function MultiStageForm() {
  const [step, setStep] = useState<Step>(0);
  const [showPassword, setShowPassword] = useState(false);

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
    <div className='w-full max-w-[520px] rounded-3xl bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-indigo-900/40 p-10 shadow-2xl shadow-purple-900/20 ring-1 ring-purple-700/30 backdrop-blur-sm'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='mb-2 font-bold text-3xl text-white'>
          {isSuccess ? 'Account Created!' : 'Create an account'}
        </h1>
        {!isSuccess && (
          <p className='text-sm text-white/70'>
            Step {activeIndex + 1} of 3 • {steps[activeIndex]}
          </p>
        )}
      </div>

      {/* Progress bar with SPRING physics */}
      {!isSuccess && (
        <div className='mb-10'>
          <div className='mb-4 h-2 w-full overflow-hidden rounded-full bg-purple-900/50 shadow-inner'>
            <motion.div
              className='h-full rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 shadow-lg shadow-purple-500/30'
              initial={{ width: '0%' }}
              animate={{ width: `${(activeIndex / 3) * 100}%` }}
              transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            />
          </div>

          {/* Current step indicators */}
          <div className='flex items-center gap-3'>
            {['1', '2', '3'].map((n, i) => (
              <motion.div
                key={n}
                className='flex items-center gap-3'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.span
                  className={`grid h-10 w-10 place-items-center rounded-full border-2 font-bold text-sm transition-all duration-300 ${
                    i <= activeIndex - 1
                      ? 'border-purple-400 bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-500/40'
                      : i === activeIndex
                        ? 'border-purple-400/50 bg-purple-900/50 text-purple-300 shadow-md'
                        : 'border-purple-800/50 bg-purple-900/30 text-purple-600'
                  }`}
                  animate={{ scale: i === activeIndex ? 1.1 : 1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                >
                  {n}
                </motion.span>
                {i < 2 && (
                  <div
                    className={`h-0.5 w-10 transition-all duration-500 ${
                      i < activeIndex - 1
                        ? 'bg-gradient-to-r from-purple-500 to-violet-500'
                        : 'bg-purple-900/50'
                    }`}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* FORM BODY — slide in from RIGHT with spring + staggered fields */}
      <div className='relative min-h-[400px]'>
        <AnimatePresence mode='wait'>
          {!isSuccess && typeof step === 'number' ? (
            <motion.form
              key={step}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className='grid gap-6'
              onSubmit={(e) => {
                e.preventDefault();
                next();
              }}
            >
              {/* Step 0: First name and Last name side by side */}
              {step === 0 ? (
                <div className='grid grid-cols-2 gap-4'>
                  {getFields(step).map((f, i) => (
                    <motion.label
                      key={f.id}
                      className='group grid gap-2'
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: 'tween',
                        ease: 'easeOut',
                        duration: 0.22,
                        delay: i * 0.06,
                      }}
                    >
                      <span className='font-medium text-sm text-white/80'>
                        {f.label}
                      </span>
                      <input
                        required
                        id={f.id}
                        type={f.type || 'text'}
                        placeholder={f.placeholder}
                        className='h-40 w-full rounded-xl border border-purple-700/50 bg-purple-900/40 px-4 text-base text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-purple-400 focus:bg-purple-900/60 focus:shadow-lg focus:shadow-purple-500/20'
                      />
                    </motion.label>
                  ))}
                </div>
              ) : (
                // Other steps: full width fields
                getFields(step).map((f, i) => (
                  <motion.label
                    key={f.id}
                    className='group grid gap-2'
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: 'tween',
                      ease: 'easeOut',
                      duration: 0.22,
                      delay: i * 0.06,
                    }}
                  >
                    <span className='font-medium text-sm text-white/80'>
                      {f.label}
                    </span>
                    <div className='relative'>
                      <input
                        required
                        id={f.id}
                        type={
                          f.id === 'password'
                            ? showPassword
                              ? 'text'
                              : 'password'
                            : f.type || 'text'
                        }
                        placeholder={f.placeholder}
                        className='h-40 w-full rounded-xl border border-purple-700/50 bg-purple-900/40 px-4 pr-12 text-base text-white outline-none transition-all duration-300 placeholder:text-white/40 focus:border-purple-400 focus:bg-purple-900/60 focus:shadow-lg focus:shadow-purple-500/20'
                      />
                      {f.id === 'password' && (
                        <button
                          type='button'
                          onClick={() => setShowPassword(!showPassword)}
                          className='-translate-y-1/2 absolute top-1/2 right-4 text-white/60 hover:text-white'
                        >
                          {showPassword ? '👁️' : '👁️‍🗨️'}
                        </button>
                      )}
                    </div>
                  </motion.label>
                ))
              )}

              {/* Terms & Conditions checkbox for last step */}
              {step === 2 && (
                <motion.div
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'tween',
                    ease: 'easeOut',
                    duration: 0.22,
                    delay: 0.12,
                  }}
                  className='flex items-center gap-3'
                >
                  <input
                    type='checkbox'
                    id='terms'
                    required
                    className='h-5 w-5 rounded border-purple-700/50 bg-purple-900/40 text-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900'
                  />
                  <label htmlFor='terms' className='text-sm text-white/80'>
                    I agree to the{' '}
                    <button
                      type='button'
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle terms click
                      }}
                      className='text-purple-300 underline hover:text-purple-200'
                    >
                      Terms & Conditions
                    </button>
                  </label>
                </motion.div>
              )}

              <div className='mt-6 flex items-center justify-between gap-4'>
                {step > 0 && (
                  <motion.button
                    type='button'
                    onClick={back}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='rounded-xl border border-purple-700/50 bg-purple-900/40 px-6 py-3 font-medium text-base text-white/80 transition-all duration-300 hover:bg-purple-900/60 hover:text-white'
                  >
                    Back
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 18,
                    mass: 0.4,
                  }}
                  type='submit'
                  className={`rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-10 py-4 font-bold text-base text-white shadow-purple-500/30 shadow-xl transition-all duration-300 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 hover:shadow-2xl hover:shadow-purple-500/40 ${
                    step === 0 ? 'w-full' : 'ml-auto'
                  }`}
                >
                  {step === 2 ? 'Create account' : 'Next'}
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
              className='grid place-items-center py-10 text-center'
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
                className='mb-6 grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 text-4xl text-white shadow-2xl shadow-purple-500/40'
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
                className='font-bold text-3xl text-white'
              >
                Account Created!
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
                className='mt-3 text-lg text-white/70'
              >
                Your account has been created successfully.
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setStep(0);
                  setShowPassword(false);
                }}
                className='mt-8 rounded-xl border border-purple-700/50 bg-purple-900/40 px-8 py-4 font-semibold text-base text-white/80 transition-all duration-300 hover:bg-purple-900/60 hover:text-white'
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
      {
        id: 'firstName',
        label: 'First name',
        placeholder: 'Fletcher',
        type: 'text',
      },
      {
        id: 'lastName',
        label: 'Last name',
        placeholder: 'Last name',
        type: 'text',
      },
    ];
  }
  if (step === 1) {
    return [
      {
        id: 'email',
        label: 'Email',
        placeholder: 'Email',
        type: 'email',
      },
      {
        id: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        type: 'password',
      },
    ];
  }
  return [
    {
      id: 'timezone',
      label: 'Timezone',
      placeholder: 'Timezone',
      type: 'text',
    },
    {
      id: 'language',
      label: 'Language',
      placeholder: 'Language',
      type: 'text',
    },
  ];
}
