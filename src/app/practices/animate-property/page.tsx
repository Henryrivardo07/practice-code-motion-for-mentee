'use client';

import {
  UIBlock,
  UIBlockChallenge,
  UIBlockContent,
  UIBlockDescription,
  UIBlockReplayButton,
  UIBlockTitle,
} from '@/components/ui/ui-block';
import { useScrollToHash } from '@/hooks/use-scroll-to-hash';
import { AnimateBasicsPractice } from './animate-basics-practice';
import { AnimateWithStatePractice } from './animate-with-state-practice';
import { ColorTransitionsPractice } from './color-transitions-practice';
import { InteractivePositioningPractice } from './interactive-positioning-practice';

export default function AnimatePropertyPage() {
  useScrollToHash();
  return (
    <>
      <h1 className='display-xl-bold mb-lg text-neutral-25'>
        Animate Property
      </h1>
      <p className='mb-3xl text-lg-regular text-neutral-100'>
        Master the animate property with these interactive exercises. Practice
        animating position, scale, rotation, and colors.
      </p>

      <div className='space-y-3xl'>
        {/* Practice 1: Basic Animations */}
        <UIBlock>
          <div id='animate-basics' className='scroll-mt-24' />
          <UIBlockTitle>Practice 1: Basic Animations</UIBlockTitle>
          <UIBlockDescription>
            Master the fundamentals of the animate property with position,
            scale, and rotation.
          </UIBlockDescription>

          <UIBlockReplayButton />

          <UIBlockContent>
            <AnimateBasicsPractice />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Move Right: Animate x by 30 pixels</li>
            <li>Move Up: Animate y by -30 pixels</li>
            <li>Scale: Animate to 1.3x size</li>
            <li>Rotate: Animate 180 degrees rotation</li>
            <li>Each uses different transition duration</li>
            <li>All animations start immediately on mount</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 2: Color Transitions */}
        <UIBlock>
          <div id='color-transitions' className='scroll-mt-24' />
          <UIBlockTitle>Practice 2: Color Transitions</UIBlockTitle>
          <UIBlockDescription>
            Animate background colors smoothly between different states.
          </UIBlockDescription>

          <UIBlockReplayButton />

          <UIBlockContent>
            <ColorTransitionsPractice />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Click button to transition to next color</li>
            <li>Smooth color transitions with easing</li>
            <li>Cycles through predefined color palette</li>
            <li>State-driven animation control</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 3: Interactive Positioning */}
        <UIBlock>
          <div id='interactive-positioning' className='scroll-mt-24' />
          <UIBlockTitle>Practice 3: Interactive Positioning</UIBlockTitle>
          <UIBlockDescription>
            Control element position with state. Click buttons to move the
            element.
          </UIBlockDescription>

          <UIBlockContent>
            <InteractivePositioningPractice />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Element moves to clicked position</li>
            <li>Spring physics for natural movement</li>
            <li>Position controlled by state</li>
            <li>Smooth transitions between positions</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 4: State-based Animation */}
        <UIBlock>
          <div id='animate-with-state' className='scroll-mt-24' />
          <UIBlockTitle>Practice 4: State-based Animation</UIBlockTitle>
          <UIBlockDescription>
            Click the card to expand/collapse with multiple animated properties.
          </UIBlockDescription>

          <UIBlockContent>
            <AnimateWithStatePractice />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Card expands from 200px to 400px width on click</li>
            <li>Height animates from 100px to 200px</li>
            <li>Content fades in with appropriate delay</li>
            <li>Spring physics for smooth expansion</li>
            <li>Hover and tap interactions remain active</li>
            <li>State changes trigger automatic animations</li>
          </UIBlockChallenge>
        </UIBlock>
      </div>
    </>
  );
}
