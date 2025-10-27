import { type MotionStyle, motion } from 'motion/react';

type TransformOriginPracticeProps = {
  origin: 'top-left' | 'center' | 'bottom-right';
};

export const TransformOriginPractice: React.FC<
  TransformOriginPracticeProps
> = ({ origin }) => {
  const origins: Record<
    TransformOriginPracticeProps['origin'],
    Pick<MotionStyle, 'originX' | 'originY'>
  > = {
    'top-left': { originX: 0, originY: 0 },
    center: { originX: 0.5, originY: 0.5 },
    'bottom-right': { originX: 1, originY: 1 },
  };

  const originStyle = origins[origin];

  return (
    <div className='flex items-center justify-center rounded-lg p-3xl'>
      <motion.div
        className='size-120 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600'
        style={originStyle}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
};
