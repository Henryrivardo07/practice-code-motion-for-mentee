'use client';

import {
  UIBlock,
  UIBlockChallenge,
  UIBlockContent,
  UIBlockDescription,
  UIBlockList,
  UIBlockReplayButton,
  UIBlockTitle,
  UIBlockTrigger,
} from '@/components/ui/ui-block';
import { useScrollToHash } from '@/hooks/use-scroll-to-hash';
import { TransformOriginPractice } from '../animate-property/transform-origin-practice';
import { FadeScalePractice } from './fade-scale-practice';
import { SkillCardPractice } from './skill-card-practice';
import { SlideDirectionPractice } from './slide-direction-practice';

export default function InitialPropertyPage() {
  useScrollToHash();
  return (
    <>
      <h1 className='display-xl-bold mb-lg text-neutral-25'>
        Initial Property
      </h1>
      <p className='mb-3xl text-lg-regular text-neutral-100'>
        Practice setting initial values for animations. Experiment with
        different starting states and see how they affect the animation.
      </p>

      <div className='space-y-3xl'>
        {/* Practice 1: Fade and Scale Entrance */}
        <UIBlock>
          <div id='fade-scale' className='scroll-mt-24' />
          <UIBlockTitle>Practice 1: Fade and Scale Entrance</UIBlockTitle>
          <UIBlockDescription>
            Create an entrance animation that combines opacity and scale.
          </UIBlockDescription>

          <UIBlockReplayButton />

          <UIBlockContent>
            <FadeScalePractice />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Element starts invisible (opacity: 0)</li>
            <li>Element starts at half size (scale: 0.5)</li>
            <li>Element starts rotated 180 degrees</li>
            <li>Animation duration is 0.8 seconds</li>
            <li>Uses easeOut timing for a smooth entrance</li>
            <li>All properties animate to their default values</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 2: Slide from Directions */}
        <UIBlock>
          <div id='slide-directions' className='scroll-mt-24' />
          <UIBlockTitle>Practice 2: Slide from Directions</UIBlockTitle>
          <UIBlockDescription>
            Practice animating elements from different screen edges.
          </UIBlockDescription>

          <UIBlockReplayButton />

          <UIBlockContent>
            <SlideDirectionPractice />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Four elements slide in from different directions</li>
            <li>Use x and y properties for positioning</li>
            <li>Spring physics for natural movement</li>
            <li>Staggered start times using delay</li>
            <li>Each element has a unique color gradient</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 3: Transform Origin Control */}
        <UIBlock defaultValue='center'>
          <div id='transform-origin' className='scroll-mt-24' />
          <UIBlockTitle>Practice 3: Transform Origin Control</UIBlockTitle>
          <UIBlockDescription>
            Change the origin point to see how it affects scale animations.
          </UIBlockDescription>

          <UIBlockList>
            <UIBlockTrigger value='top-left'>top-left</UIBlockTrigger>
            <UIBlockTrigger value='center'>center</UIBlockTrigger>
            <UIBlockTrigger value='bottom-right'>bottom-right</UIBlockTrigger>
          </UIBlockList>

          <UIBlockReplayButton />

          <UIBlockContent value='top-left'>
            <TransformOriginPractice origin='top-left' />
          </UIBlockContent>

          <UIBlockContent value='center'>
            <TransformOriginPractice origin='center' />
          </UIBlockContent>

          <UIBlockContent value='bottom-right'>
            <TransformOriginPractice origin='bottom-right' />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Square scales from selected origin point</li>
            <li>Transform origin changes animation appearance</li>
            <li>Initial scale is 0 (completely collapsed)</li>
            <li>Initial opacity is 0 (invisible)</li>
            <li>Animation duration: 0.6 seconds</li>
            <li>Uses easeOut for smooth expansion</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 4: Skill Card with Progress */}
        <UIBlock>
          <div id='skill-cards' className='scroll-mt-24' />
          <UIBlockTitle>Practice 4: Skill Card with Progress</UIBlockTitle>
          <UIBlockDescription>
            Create a skill card with an animated progress bar that loads from
            left to right.
          </UIBlockDescription>

          <UIBlockReplayButton />

          <UIBlockContent>
            <SkillCardPractice />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Card fades in and slides up from below</li>
            <li>Progress bar scales from left to right (originX: 0)</li>
            <li>
              Progress bar animation starts after card appears (delay: 0.3s)
            </li>
            <li>Progress animation takes 2 seconds</li>
            <li>Percentage appears after progress completes</li>
            <li>Uses easeOut for smooth progress animation</li>
          </UIBlockChallenge>
        </UIBlock>
      </div>
    </>
  );
}
