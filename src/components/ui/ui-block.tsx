'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { RefreshButton } from './refresh-button';

type UIBlockContextValue = {
  replayKey: number;
  triggerReplay: () => void;
  activeValue: string | null;
  setActiveValue: (value: string) => void;
};

const UIBlockContext = createContext<UIBlockContextValue | undefined>(
  undefined
);

const useUIBlock = () => {
  const context = useContext(UIBlockContext);
  if (!context) {
    throw new Error('useUIBlock must be used within a UIBlock');
  }
  return context;
};

type UIBlockProps = {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
};

export const UIBlock = ({
  children,
  className,
  defaultValue,
}: UIBlockProps) => {
  const [replayKey, setReplayKey] = useState(0);
  const [activeValue, setActiveValue] = useState<string | null>(
    defaultValue || null
  );

  const triggerReplay = () => {
    setReplayKey((prev) => prev + 1);
  };

  return (
    <UIBlockContext.Provider
      value={{ replayKey, triggerReplay, activeValue, setActiveValue }}
    >
      <div
        className={cn(
          'mb-xl rounded-2xl border border-neutral-800 bg-neutral-900/50 p-xl',
          className
        )}
      >
        {children}
      </div>
    </UIBlockContext.Provider>
  );
};

type UIBlockTitleProps = {
  children: ReactNode;
  className?: string;
};

export const UIBlockTitle = ({ children, className }: UIBlockTitleProps) => {
  return (
    <h3 className={cn('mb-md text-lg-semibold text-neutral-25', className)}>
      {children}
    </h3>
  );
};

type UIBlockDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export const UIBlockDescription = ({
  children,
  className,
}: UIBlockDescriptionProps) => {
  return (
    <p className={cn('mb-lg text-md-regular text-neutral-100', className)}>
      {children}
    </p>
  );
};

type UIBlockReplayButtonProps = {
  className?: string;
};

export const UIBlockReplayButton = ({
  className,
}: UIBlockReplayButtonProps) => {
  const { triggerReplay } = useUIBlock();
  return (
    <RefreshButton
      onClick={triggerReplay}
      label='Replay Animations'
      className={className}
    />
  );
};

type UIBlockContentProps = {
  children: ReactNode;
  className?: string;
  value?: string;
};

export const UIBlockContent = ({
  children,
  className,
  value,
}: UIBlockContentProps) => {
  const { replayKey, activeValue } = useUIBlock();

  if (value && value !== activeValue) {
    return null;
  }

  return (
    <div
      key={value ? `${value}-${replayKey}` : replayKey}
      className={cn(
        'mb-lg rounded-lg bg-neutral-800 p-xl',
        'flex min-h-200 items-center justify-center',
        className
      )}
    >
      {children}
    </div>
  );
};

type UIBlockChallengeProps = {
  children: ReactNode;
  className?: string;
};

export const UIBlockChallenge = ({
  children,
  className,
}: UIBlockChallengeProps) => {
  return (
    <div className={cn('rounded-xl bg-neutral-800 p-lg', className)}>
      <h4 className='mb-md text-md-semibold text-neutral-100'>
        🎯 Challenge Requirements:
      </h4>
      <ul className='space-y-sm text-neutral-300 text-sm-regular'>
        {children}
      </ul>
    </div>
  );
};

type UIBlockOptionsProps<T extends string> = {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  getLabel?: (option: T) => string;
  className?: string;
};

export const UIBlockOptions = <T extends string>({
  options,
  value,
  onChange,
  getLabel = (option) => option.charAt(0).toUpperCase() + option.slice(1),
  className,
}: UIBlockOptionsProps<T>) => {
  return (
    <div
      className={cn(
        'mb-lg flex gap-sm rounded-xl bg-neutral-850 p-sm',
        className
      )}
    >
      {options.map((option) => (
        <Button
          key={option}
          type='button'
          variant='ghost'
          onClick={() => onChange(option)}
          className={cn(
            'h-auto cursor-pointer rounded-lg px-xl py-md text-sm-medium transition-all',
            value === option
              ? 'bg-neutral-700 text-neutral-25 shadow-sm hover:bg-neutral-700 hover:text-neutral-25'
              : 'text-neutral-400 hover:bg-transparent hover:text-neutral-200'
          )}
        >
          {getLabel(option)}
        </Button>
      ))}
    </div>
  );
};

type UIBlockListProps = {
  children: ReactNode;
  className?: string;
};

export const UIBlockList = ({ children, className }: UIBlockListProps) => {
  return (
    <div
      className={cn(
        'mb-lg flex gap-sm rounded-xl bg-neutral-850 p-sm',
        className
      )}
    >
      {children}
    </div>
  );
};

type UIBlockTriggerProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export const UIBlockTrigger = ({
  value,
  children,
  className,
}: UIBlockTriggerProps) => {
  const { activeValue, setActiveValue } = useUIBlock();

  return (
    <Button
      type='button'
      variant='ghost'
      onClick={() => setActiveValue(value)}
      className={cn(
        'h-auto cursor-pointer rounded-lg px-xl py-md text-sm-medium transition-all',
        activeValue === value
          ? 'bg-neutral-700 text-neutral-25 shadow-sm hover:bg-neutral-700 hover:text-neutral-25'
          : 'text-neutral-400 hover:bg-transparent hover:text-neutral-200',
        className
      )}
    >
      {children}
    </Button>
  );
};
