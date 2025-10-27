// Import icons dari Lucide React
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
// Import motion dan Variants type dari Framer Motion
import { motion, type Variants } from 'motion/react';

// Komponen untuk demo premium card dengan coordinated hover animations
export const PremiumCard = () => {
  // Variants untuk card container - parent element yang mengontrol semua child animations
  const cardVariants: Variants = {
    // State idle: card dalam kondisi normal
    idle: {
      scale: 1,
      rotate: 0,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
    },
    // State hover: card saat di-hover dengan efek yang lebih dramatis
    hover: {
      scale: 1.05,
      rotate: 1,
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
      background: 'linear-gradient(135deg, #764ba2, #f093fb)',
      // Spring transition untuk efek yang lebih natural
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Variants untuk icon container - akan inherit state dari parent card
  const iconContainerVariants: Variants = {
    // State idle: container dalam kondisi normal
    idle: {
      scale: 1,
      rotate: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    // State hover: container berputar 360 derajat saat parent di-hover
    hover: {
      scale: 1.1,
      rotate: 360,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      // Different transition untuk rotate dan scale
      transition: {
        rotate: {
          duration: 0.6,
          ease: 'easeInOut',
        },
        scale: {
          type: 'spring',
          stiffness: 400,
          damping: 15,
        },
      },
    },
  };

  // Variants untuk icon - counter-rotate terhadap container
  const iconVariants: Variants = {
    // State idle: icon dalam kondisi normal
    idle: {
      scale: 1,
      rotate: 0,
    },
    // State hover: icon berputar berlawanan arah dengan container (-360 derajat)
    hover: {
      scale: 1.2,
      rotate: -360,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  // Variants untuk title - slide ke kanan saat hover
  const titleVariants: Variants = {
    // State idle: title dalam posisi normal
    idle: {
      x: 0,
      opacity: 1,
    },
    // State hover: title slide ke kanan (x: 10)
    hover: {
      x: 10,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Variants untuk description - move up dan opacity change
  const descriptionVariants: Variants = {
    // State idle: description dengan opacity 0.8
    idle: {
      opacity: 0.8,
      y: 0,
    },
    // State hover: description naik sedikit dan opacity penuh
    hover: {
      opacity: 1,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Variants untuk button - scale dan shift saat hover
  const buttonVariants: Variants = {
    // State idle: button dalam kondisi normal
    idle: {
      scale: 1,
      x: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    // State hover: button scale up dan shift ke kanan
    hover: {
      scale: 1.05,
      x: 5,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    },
  };

  // Variants untuk arrow - slide dan opacity change
  const arrowVariants: Variants = {
    // State idle: arrow dengan opacity 0.7
    idle: {
      x: 0,
      opacity: 0.7,
    },
    // State hover: arrow slide ke kanan dan opacity penuh
    hover: {
      x: 5,
      opacity: 1,
      transition: {
        x: {
          type: 'spring',
          stiffness: 400,
          damping: 15,
        },
      },
    },
  };

  // Variants untuk floating badge - muncul saat hover dengan spring animation
  const badgeVariants: Variants = {
    // State idle: badge tersembunyi (scale 0, opacity 0)
    idle: {
      scale: 0,
      opacity: 0,
      rotate: -180,
    },
    // State hover: badge muncul dengan spring animation dan delay
    hover: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 15,
        delay: 0.1, // Delay untuk efek yang lebih smooth
      },
    },
  };

  // Variants untuk sparkle decorations - infinite animation dengan staggered delay
  const sparkleVariants: Variants = {
    // State idle: sparkle tersembunyi
    idle: {
      scale: 0,
      opacity: 0,
      rotate: 0,
    },
    // State hover: sparkle dengan infinite animation dan custom delay
    hover: (custom: number) => ({
      scale: [0, 1.5, 1], // Scale animation sequence
      opacity: [0, 1, 0], // Opacity animation sequence
      rotate: 360,
      transition: {
        duration: 1.5,
        delay: custom * 0.1, // Staggered delay berdasarkan index
        repeat: Infinity,
        repeatDelay: 1,
      },
    }),
  };

  return (
    <div className='flex h-500 w-full items-center justify-center rounded-xl bg-neutral-950 p-xl'>
      {/* Main card dengan variants - parent element yang mengontrol semua child animations */}
      <motion.div
        className='relative w-full max-w-400 cursor-pointer overflow-hidden rounded-3xl p-2xl text-white'
        variants={cardVariants}
        initial='idle'
        whileHover='hover'
      >
        {/* Sparkle decorations - 3 sparkles dengan staggered animation */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className='absolute'
            style={{
              top: `${20 + i * 30}%`,
              left: `${80 + i * 5}%`,
            }}
            custom={i}
            variants={sparkleVariants}
          >
            <Sparkles className='size-16 text-yellow-300' />
          </motion.div>
        ))}

        {/* Main icon container - akan inherit state dari parent */}
        <motion.div
          className='mb-xl flex size-80 items-center justify-center rounded-2xl'
          variants={iconContainerVariants}
        >
          {/* Icon yang akan counter-rotate terhadap container */}
          <motion.div variants={iconVariants}>
            <Zap className='size-40 text-white' />
          </motion.div>
        </motion.div>

        {/* Title - akan slide ke kanan saat hover */}
        <motion.h3 className='mb-md text-xl-semibold' variants={titleVariants}>
          Premium Features
        </motion.h3>

        {/* Description - akan move up dan opacity change saat hover */}
        <motion.p
          className='mb-xl text-md-regular text-white/90'
          variants={descriptionVariants}
        >
          Unlock advanced capabilities and boost your productivity with our
          premium tier
        </motion.p>

        {/* CTA Button - akan scale dan shift saat hover */}
        <motion.button
          className='flex w-full cursor-pointer items-center justify-between rounded-xl px-lg py-md'
          variants={buttonVariants}
        >
          <span className='text-sm-semibold'>Get Started</span>
          {/* Arrow yang akan slide ke kanan saat hover */}
          <motion.div variants={arrowVariants}>
            <ArrowRight className='size-20' />
          </motion.div>
        </motion.button>

        {/* Floating badge - muncul saat hover dengan spring animation */}
        <motion.div
          className='-top-20 -right-20 absolute flex size-80 items-center justify-center rounded-full bg-yellow-500'
          variants={badgeVariants}
        >
          <Star className='size-32 text-white' fill='white' />
        </motion.div>
      </motion.div>
    </div>
  );
};
