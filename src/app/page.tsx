import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-1200 px-3xl py-3xl'>
        <h1 className='display-2xl-bold mb-lg text-neutral-25'>
          Motion for React Practice
        </h1>
        <p className='mb-3xl max-w-800 text-lg-regular text-neutral-100'>
          Welcome to the Motion for React practice exercises. Here you'll find
          hands-on challenges to help you master animation concepts in React.
          Each section contains interactive examples and coding challenges to
          build your skills.
        </p>

        <div className='grid max-w-1000 grid-cols-1 gap-lg md:grid-cols-2'>
          <Link
            href='/practices/the-motion-component'
            className='group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-xl transition-all hover:border-neutral-700 hover:bg-neutral-900'
          >
            <h2 className='mb-sm text-neutral-25 text-xl-semibold transition-colors group-hover:text-primary-400'>
              The Motion Component
            </h2>
            <p className='mb-lg text-md-regular text-neutral-300'>
              Learn the fundamentals of creating animated components using
              motion._prefix and motion.create()
            </p>
            <div className='flex flex-wrap gap-sm'>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                2 Practices
              </span>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                motion._prefix
              </span>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                motion.create()
              </span>
            </div>
          </Link>

          <Link
            href='/practices/animate-property'
            className='group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-xl transition-all hover:border-neutral-700 hover:bg-neutral-900'
          >
            <h2 className='mb-sm text-neutral-25 text-xl-semibold transition-colors group-hover:text-primary-400'>
              Animate Property
            </h2>
            <p className='mb-lg text-md-regular text-neutral-300'>
              Master animations with position, scale, rotation, and color
              transitions
            </p>
            <div className='flex flex-wrap gap-sm'>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                4 Practices
              </span>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                Basic Animations
              </span>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                State Control
              </span>
            </div>
          </Link>

          <Link
            href='/practices/initial-property'
            className='group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-xl transition-all hover:border-neutral-700 hover:bg-neutral-900'
          >
            <h2 className='mb-sm text-neutral-25 text-xl-semibold transition-colors group-hover:text-primary-400'>
              Initial Property
            </h2>
            <p className='mb-lg text-md-regular text-neutral-300'>
              Set starting values for animations with entrance effects and
              transform origins
            </p>
            <div className='flex flex-wrap gap-sm'>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                4 Practices
              </span>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                Entrance Effects
              </span>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                Transform Origin
              </span>
            </div>
          </Link>

          <Link
            href='/practices/transition-property'
            className='group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-xl transition-all hover:border-neutral-700 hover:bg-neutral-900'
          >
            <h2 className='mb-sm text-neutral-25 text-xl-semibold transition-colors group-hover:text-primary-400'>
              Transition Property
            </h2>
            <p className='mb-lg text-md-regular text-neutral-300'>
              Control animation timing with easing curves and spring physics
            </p>
            <div className='flex flex-wrap gap-sm'>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                3 Practices
              </span>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                Easing Curves
              </span>
              <span className='rounded-md bg-neutral-800 px-sm py-xs text-neutral-400 text-xs-medium'>
                Spring Physics
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
