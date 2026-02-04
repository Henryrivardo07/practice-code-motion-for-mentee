import { motion } from 'motion/react';

// Constant untuk persentase skill
const SKILL_PERCENTAGE = 80;
const PROGRESS_DURATION = 2;
const PROGRESS_DELAY = 0.3;

export const SkillCardPractice = () => {
  // Konversi persentase ke scale (0-1)
  const progressScale = SKILL_PERCENTAGE / 100;
  // Delay untuk percentage text muncul setelah progress selesai
  const percentageDelay = PROGRESS_DELAY + PROGRESS_DURATION;

  // Konstanta untuk circular progress
  const SIZE = 120; // Ukuran SVG
  const STROKE_WIDTH = 12;
  const RADIUS = (SIZE - STROKE_WIDTH) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  // Hitung stroke-dashoffset berdasarkan persentase
  const strokeDashoffset = CIRCUMFERENCE * (1 - progressScale);

  return (
    <div className='grid grid-cols-1 gap-lg md:grid-cols-2'>
      {/* Card 1: Circular Progress */}
      <motion.div
        className='w-full rounded-3xl bg-[#0f0f0f] p-2xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className='mb-lg text-neutral-50 text-xl-medium'>React</h3>
        <p className='mb-xl text-neutral-400 text-sm-regular'>
          Developing complex user interfaces with reusable components for
          efficient rendering.
        </p>

        {/* Container untuk circular progress dan percentage */}
        <div className='flex items-center gap-lg'>
          {/* Circular progress indicator */}
          <div className='relative' style={{ width: SIZE, height: SIZE }}>
            <svg width={SIZE} height={SIZE} className='-rotate-90 transform'>
              <title>React skill progress: {SKILL_PERCENTAGE}%</title>
              {/* Background circle */}
              <circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill='none'
                stroke='#262626'
                strokeWidth={STROKE_WIDTH}
              />
              {/* Progress circle yang animasi */}
              <motion.circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill='none'
                stroke='#eab308'
                strokeWidth={STROKE_WIDTH}
                strokeLinecap='round'
                strokeDasharray={CIRCUMFERENCE}
                initial={{ strokeDashoffset: CIRCUMFERENCE }}
                animate={{ strokeDashoffset }}
                transition={{
                  duration: PROGRESS_DURATION,
                  ease: 'easeOut',
                  delay: PROGRESS_DELAY,
                }}
              />
            </svg>
            {/* Percentage text di tengah lingkaran */}
            <motion.span
              className='absolute inset-0 flex items-center justify-center text-neutral-50 text-sm-medium'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: percentageDelay }}
            >
              {SKILL_PERCENTAGE}%
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Card 2: Linear Progress Bar */}
      <motion.div
        className='w-full rounded-3xl bg-[#0f0f0f] p-2xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className='mb-lg text-neutral-50 text-xl-medium'>Vue.js</h3>
        <p className='mb-xl text-neutral-400 text-sm-regular'>
          Building progressive web applications with reactive data binding and
          component-based architecture.
        </p>

        {/* Container untuk progress bar dan percentage */}
        <div className='flex items-center gap-lg'>
          {/* Background progress bar (statis) */}
          <div className='h-12 flex-1 rounded-lg bg-neutral-800'>
            {/* Progress bar yang animasi dari kiri ke kanan */}
            <motion.div
              className='h-full rounded-lg bg-yellow-500'
              style={{ originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progressScale }}
              transition={{
                duration: PROGRESS_DURATION,
                ease: 'easeOut',
                delay: PROGRESS_DELAY,
              }}
            />
          </div>
          {/* Percentage text: muncul setelah progress selesai */}
          <motion.span
            className='text-neutral-50 text-sm-medium'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: percentageDelay }}
          >
            {SKILL_PERCENTAGE}%
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};
