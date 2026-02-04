'use client'; // Directive untuk Next.js - memberitahu bahwa komponen ini akan dijalankan di client-side

// Import komponen UI yang diperlukan untuk membangun interface pembelajaran
import {
  UIBlock, // Container utama untuk setiap practice
  UIBlockChallenge, // Komponen untuk menampilkan challenge/tantangan
  UIBlockContent, // Wrapper untuk konten yang akan ditampilkan
  UIBlockDescription, // Komponen untuk deskripsi practice
  UIBlockList, // Container untuk list tab/trigger
  UIBlockReplayButton, // Tombol untuk replay animasi
  UIBlockTitle, // Komponen untuk judul practice
  UIBlockTrigger, // Tab/trigger untuk switch antar practice
} from '@/components/ui/ui-block';

import { useScrollToHash } from '@/hooks/use-scroll-to-hash'; // Hook untuk scroll ke hash URL
// Import komponen dashboard cards dari folder dashboard-cards
import {
  RevenueCard, // Card untuk revenue metrics
  UsersCard, // Card untuk users metrics
} from './dashboard-cards';
import MultiStageForm from './form-transitions'; // Import form multi-stage
// Import komponen notification cards dari folder notification-cards
import {
  ErrorCard, // Card untuk error notification
  SuccessCard, // Card untuk success notification
} from './notification-cards';

export default function TransitionPropertyPage() {
  // Hook untuk menangani scroll ke hash URL (untuk navigasi internal)
  useScrollToHash();

  return (
    <>
      {/* Judul utama halaman */}
      <h1 className='display-xl-bold mb-lg text-neutral-25'>
        Transition Property
      </h1>

      {/* Deskripsi halaman - menjelaskan tujuan pembelajaran */}
      <p className='mb-3xl text-lg-regular text-neutral-100'>
        Master the art of motion timing through hands-on practice. These
        exercises will help you understand how different transition properties
        affect the feel and personality of your animations.
      </p>

      {/* Container utama untuk semua practice dengan spacing vertikal */}
      <div className='space-y-3xl'>
        {/* Practice 1: Notification Cards - Fokus pada easing curves yang berbeda */}
        <UIBlock defaultValue='success'>
          {' '}
          {/* Default tab yang aktif saat pertama kali load */}
          {/* Anchor untuk scroll navigation */}
          <div id='notification-cards' className='scroll-mt-24' />
          {/* Judul practice 1 */}
          <UIBlockTitle>Practice 1: Notification Card Animations</UIBlockTitle>
          {/* Deskripsi practice 1 - menjelaskan tujuan pembelajaran */}
          <UIBlockDescription>
            Create smooth notification animations with different easing curves.
            Each notification type should have a unique entrance that matches
            its urgency and tone.
          </UIBlockDescription>
          {/* List tab untuk switch antar jenis notification */}
          <UIBlockList>
            <UIBlockTrigger value='success'>Success</UIBlockTrigger>
            <UIBlockTrigger value='error'>Error</UIBlockTrigger>
          </UIBlockList>
          {/* Tombol untuk replay animasi */}
          <UIBlockReplayButton />
          {/* Konten untuk setiap tab notification */}
          <UIBlockContent value='success' className='items-stretch'>
            <SuccessCard />
          </UIBlockContent>
          <UIBlockContent value='error'>
            <ErrorCard />
          </UIBlockContent>
          {/* Challenge/tantangan untuk practice 1 */}
          <UIBlockChallenge>
            <li>
              <strong>Success:</strong> Tween easeOut — halus, reliable
            </li>
            <li>
              <strong>Error:</strong> Spring dari atas — urgency
            </li>
            <li>Icon animate dengan spring + delay setelah card muncul</li>
            <li>Title & message slide in dengan staggered delay</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 2: Dashboard Cards - Fokus pada hover dan click interactions */}
        <UIBlock defaultValue='revenue'>
          {' '}
          {/* Default tab revenue */}
          {/* Anchor untuk scroll navigation */}
          <div id='dashboard-cards' className='scroll-mt-24' />
          {/* Judul practice 2 */}
          <UIBlockTitle>Practice 2: Dashboard Card Interactions</UIBlockTitle>
          {/* Deskripsi practice 2 - menjelaskan fokus pada per-property transitions */}
          <UIBlockDescription>
            Create sophisticated hover and click interactions using per-property
            transitions. Mix spring and tween animations for natural, responsive
            behavior.
          </UIBlockDescription>
          {/* List tab untuk switch antar jenis dashboard card */}
          <UIBlockList>
            <UIBlockTrigger value='revenue'>Revenue</UIBlockTrigger>
            <UIBlockTrigger value='users'>Users</UIBlockTrigger>
          </UIBlockList>
          {/* Tombol untuk replay animasi */}
          <UIBlockReplayButton />
          {/* Konten untuk setiap tab dashboard card */}
          <UIBlockContent value='revenue'>
            <RevenueCard />
          </UIBlockContent>
          <UIBlockContent value='users'>
            <UsersCard />
          </UIBlockContent>
          {/* Challenge/tantangan untuk practice 2 */}
          <UIBlockChallenge>
            <li>Hover: Lift with tween, background rotation with linear</li>
            <li>Click: Expand with spring, fade content with tween</li>
            <li>Each property uses appropriate transition type</li>
            <li>Value scales with high-stiffness spring on expand</li>
            <li>Smooth height animations using spring physics</li>
            <li>Different easing for expand vs collapse opacity</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 3: Form Transitions - Fokus pada multi-step form flows */}
        <UIBlock>
          {/* Anchor untuk scroll navigation */}
          <div id='form-transitions' className='scroll-mt-24' />

          {/* Judul practice 3 */}
          <UIBlockTitle>Practice 3: Multi-Stage Form Transitions</UIBlockTitle>

          {/* Deskripsi practice 3 - menjelaskan fokus pada form UX patterns */}
          <UIBlockDescription>
            Create smooth multi-step form flows with progress indicators and
            seamless transitions between steps. Master form UX patterns with
            motion.
          </UIBlockDescription>

          {/* Konten form multi-stage */}
          <UIBlockContent>
            <MultiStageForm />
          </UIBlockContent>

          {/* Challenge/tantangan untuk practice 3 */}
          <UIBlockChallenge>
            <li>Progress bar animates with spring physics</li>
            <li>Current step indicator scales up smoothly</li>
            <li>Form slides in from right with spring transition</li>
            <li>Success state appears with orchestrated animations</li>
            <li>Form fields stagger in with consistent delays</li>
            <li>Back/Next buttons maintain proper state</li>
          </UIBlockChallenge>
        </UIBlock>

     
      </div>
    </>
  );
}
