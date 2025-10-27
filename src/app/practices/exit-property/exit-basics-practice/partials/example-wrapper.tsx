// Import useState untuk state management
import { useState } from 'react';
// Import ToggleButton component untuk toggle visibility
import { ToggleButton } from './toggle-button';

// Type definition untuk props ExampleWrapper
type ExampleWrapperProps = {
  // children adalah render prop function yang menerima isVisible boolean
  children: (isVisible: boolean) => React.ReactNode;
  // label untuk display di bawah demo
  label: string;
  // itemLabel untuk text di toggle button
  itemLabel: string;
};

// Wrapper component yang menyediakan toggle functionality untuk demo
export const ExampleWrapper: React.FC<ExampleWrapperProps> = ({
  children,
  label,
  itemLabel,
}) => {
  // State untuk mengontrol visibility elemen yang akan di-animate
  // Default true berarti elemen terlihat saat pertama kali load
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='flex flex-col items-center gap-xl'>
      {/* Toggle button untuk show/hide elemen */}
      <ToggleButton
        isVisible={isVisible}
        onClick={() => setIsVisible(!isVisible)}
        label={itemLabel}
      />
      {/* Container untuk elemen yang akan di-animate */}
      {/* relative positioning untuk absolute positioning anak-anaknya */}
      <div className='relative size-100'>{children(isVisible)}</div>
      {/* Label deskriptif di bawah demo */}
      <span className='text-neutral-400 text-xs-regular'>{label}</span>
    </div>
  );
};
