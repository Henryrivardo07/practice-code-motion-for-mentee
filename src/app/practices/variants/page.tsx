'use client';

// Import useState untuk state management
import { useState } from 'react';
// Import RefreshButton component untuk reset functionality
import { RefreshButton } from '@/components/ui/refresh-button';
// Import UI components untuk membuat interface yang terstruktur
import {
  UIBlock,
  UIBlockChallenge,
  UIBlockContent,
  UIBlockDescription,
  UIBlockTitle,
} from '@/components/ui/ui-block';
// Import hook untuk scroll navigation
import { useScrollToHash } from '@/hooks/use-scroll-to-hash';
// Import komponen demo untuk berbagai jenis variants practice
import { PremiumCard } from './animated-card-practice';
import { ProductCardDemo } from './product-card-practice';

export default function VariantsPracticePage() {
  // Mengaktifkan scroll otomatis ke hash URL untuk navigasi yang smooth
  useScrollToHash();
  // State untuk mengontrol replay key untuk reset functionality
  const [productReplayKey, setProductReplayKey] = useState(0);

  return (
    <>
      {/* Judul utama halaman - menjelaskan topik yang akan dipelajari */}
      <h1 className='display-xl-bold mb-lg text-neutral-25'>
        Variants Practice
      </h1>
      {/* Deskripsi singkat tentang apa yang akan dipelajari di halaman ini */}
      <p className='mb-3xl text-lg-regular text-neutral-100'>
        Master Motion variants for creating coordinated animations. Learn how
        parent variants propagate to children and how to manage complex state
        transitions.
      </p>

      {/* Container utama untuk semua practice sections */}
      <div className='space-y-3xl'>
        {/* Practice 1: Premium Animated Card - Belajar coordinated hover animations */}
        <UIBlock>
          {/* Anchor untuk scroll navigation */}
          <div id='animated-card' className='scroll-mt-24' />
          {/* Judul practice pertama */}
          <UIBlockTitle>Practice 1: Premium Animated Card</UIBlockTitle>
          {/* Penjelasan tentang coordinated hover animations */}
          <UIBlockDescription>
            Create a premium feature card with coordinated hover animations. All
            child elements should animate through variant propagation when the
            card is hovered, creating a cohesive and polished effect.
          </UIBlockDescription>

          {/* Konten demo untuk premium card */}
          <UIBlockContent>
            <PremiumCard />
          </UIBlockContent>

          {/* Key points untuk coordinated animations */}
          <UIBlockChallenge>
            <li>Parent card has hover state that triggers all animations</li>
            <li>Icon rotates 360° while container counter-rotates</li>
            <li>Title slides right and description moves up</li>
            <li>Button scales and shifts with arrow animation</li>
            <li>Sparkles animate with staggered delays</li>
            <li>Badge appears with spring animation on hover</li>
            <li>All animations coordinate through variant propagation</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 2: Interactive Product Card Gallery - Belajar variant-based state management */}
        <UIBlock>
          {/* Anchor untuk scroll navigation */}
          <div id='product-card' className='scroll-mt-24' />
          {/* Judul practice kedua */}
          <UIBlockTitle>
            Practice 2: Interactive Product Card Gallery
          </UIBlockTitle>
          {/* Penjelasan tentang variant-based state management */}
          <UIBlockDescription>
            Create an e-commerce product card gallery with variant-based state
            management. Each card has multiple states (idle, hover, selected,
            loading) with coordinated animations propagating to child elements.
          </UIBlockDescription>

          {/* Reset button untuk mengulang demo */}
          <div className='mb-lg flex justify-end'>
            <RefreshButton
              onClick={() => setProductReplayKey((prev) => prev + 1)}
              label='Reset Cart'
            />
          </div>

          {/* Konten demo untuk product card gallery */}
          <UIBlockContent>
            <ProductCardDemo key={productReplayKey} />
          </UIBlockContent>

          {/* Key points untuk state management dengan variants */}
          <UIBlockChallenge>
            <li>Cards have 4 states: idle, hover, selected, loading</li>
            <li>Image, price, and button respond to parent state</li>
            <li>Loading state shows spinner and disabled interaction</li>
            <li>Selected state shows green checkmark badge</li>
            <li>Cart counter animates when items are added</li>
            <li>Each card state has unique visual treatment</li>
            <li>State transitions are smooth with spring physics</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 3: Music Player Controls - Belajar complex state management */}
        <UIBlock>
          {/* Anchor untuk scroll navigation */}
          <div id='music-player' className='scroll-mt-24' />
          {/* Judul practice ketiga */}
          <UIBlockTitle>Practice 3: Music Player Controls</UIBlockTitle>
          {/* Penjelasan tentang complex state management dengan variants */}
          <UIBlockDescription>
            Create a Spotify-style music player with variant-based animations.
            The player has multiple states (playing, paused, loading) with all
            child elements coordinating through parent variants.
          </UIBlockDescription>

          {/* Konten demo (belum diimplementasi) */}
          <UIBlockContent>{null}</UIBlockContent>

          {/* Key points untuk complex state management */}
          <UIBlockChallenge>
            <li>Player states: playing, paused, loading</li>
            <li>Album art rotates continuously when playing</li>
            <li>Equalizer bars animate only during playback</li>
            <li>Play button changes color based on state</li>
            <li>Progress bar color reflects player state</li>
            <li>All animations coordinate through parent variants</li>
            <li>Loading state disables interactions temporarily</li>
          </UIBlockChallenge>
        </UIBlock>
      </div>
    </>
  );
}
