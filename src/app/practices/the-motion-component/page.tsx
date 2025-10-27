'use client';

import {
  UIBlock,
  UIBlockChallenge,
  UIBlockContent,
  UIBlockDescription,
  UIBlockTitle,
} from '@/components/ui/ui-block';
import { useScrollToHash } from '@/hooks/use-scroll-to-hash';
import { MotionCreatePractice } from './motion-create-practice';
import { MotionPrefixPractice } from './motion-prefix-practice';

export default function TheMotionComponentPage() {
  useScrollToHash();
  return (
    <>
      <h1 className='display-xl-bold mb-lg text-neutral-25'>
        The Motion Component
      </h1>
      <p className='mb-3xl text-lg-regular text-neutral-100'>
        Practice creating animated components using motion-for-react. Learn the
        two fundamental approaches: motion._prefix and motion.create().
      </p>

      <div className='space-y-3xl'>
        {/* Practice 1: Using motion._prefix */}
        <UIBlock>
          <div id='motion-prefix' className='scroll-mt-24' />
          <UIBlockTitle>Practice 1: Using motion._prefix</UIBlockTitle>
          <UIBlockDescription>
            Create motion components by prefixing HTML elements with motion. Try
            hovering and clicking!
          </UIBlockDescription>

          <UIBlockContent>
            <MotionPrefixPractice />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Use motion.div to create animated elements</li>
            <li>Hover animation scales to 1.2x size</li>
            <li>Click animation scales down to 0.9x</li>
            <li>Animations respond to user interactions</li>
            <li>Any HTML element can be prefixed with motion.</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 2: Using motion.create() */}
        <UIBlock>
          <div id='motion-create' className='scroll-mt-24' />
          <UIBlockTitle>Practice 2: Using motion.create()</UIBlockTitle>
          <UIBlockDescription>
            Animate custom components with motion.create(). Try hovering over
            the card!
          </UIBlockDescription>

          <UIBlockContent>
            <MotionCreatePractice />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Create a custom Card component with gradient background</li>
            <li>Use motion.create() to make it animatable</li>
            <li>Hover animation: scale to 1.05x and rotate 2 degrees</li>
            <li>Click animation: scale down to 0.95x</li>
            <li>Ref is passed as a regular prop in React 19</li>
          </UIBlockChallenge>
        </UIBlock>
      </div>
    </>
  );
}
