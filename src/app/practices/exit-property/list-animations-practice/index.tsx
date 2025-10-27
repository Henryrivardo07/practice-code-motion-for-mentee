// Import X icon dari Lucide React
import { X } from 'lucide-react';
// Import AnimatePresence dan motion dari Framer Motion
import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
// Import useState untuk state management
import { useState } from 'react';
// Import Button component dari UI library
import { Button } from '@/components/ui/button';
// Import cn utility untuk conditional class names
import { cn } from '@/lib/utils';
// Import control components
import { ModeButton, TaskButton } from './partials/list-controls';

// Type definition untuk TodoItem
type TodoItem = {
  // Unique identifier untuk setiap item
  id: number;
  // Text content dari todo item
  text: string;
  // Background color gradient untuk styling
  color: string;
};

// Type definition untuk props ListAnimationDemo
type ListAnimationDemoProps = {
  // Style animasi yang akan digunakan untuk list items
  animationStyle: 'slide' | 'scale' | 'fade';
};

// Komponen untuk demo list animations dengan todo items
export const ListAnimationDemo: React.FC<ListAnimationDemoProps> = ({
  animationStyle,
}) => {
  // State untuk menyimpan array todo items
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 1,
      text: 'Learn Motion exit animations',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      text: 'Practice with AnimatePresence',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      text: 'Build amazing UI transitions',
      color: 'from-green-500 to-emerald-500',
    },
  ]);
  // State untuk mengontrol mode AnimatePresence
  const [mode, setMode] = useState<'sync' | 'popLayout'>('sync');

  // Array warna gradient untuk todo items
  const colors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-yellow-500 to-amber-500',
  ];

  // Function untuk menambah todo item baru
  const addTodo = () => {
    // Generate ID baru berdasarkan ID tertinggi yang ada
    const newId = Math.max(...todos.map((t) => t.id), 0) + 1;
    // Pilih warna random dari array colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Array nama task yang bisa dipilih
    const taskNames = [
      'Master layout animations',
      'Create smooth transitions',
      'Explore spring physics',
      'Build interactive components',
      'Study animation patterns',
      'Polish user interfaces',
    ];
    // Pilih task name random
    const randomTask = taskNames[Math.floor(Math.random() * taskNames.length)];

    // Tambahkan todo baru ke array
    setTodos([...todos, { id: newId, text: randomTask, color: randomColor }]);
  };

  // Function untuk menghapus todo item berdasarkan ID
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function untuk menghapus semua todo items
  const clearAll = () => {
    setTodos([]);
  };

  // Function untuk mendapatkan exit animation berdasarkan style
  const getExitAnimation = () => {
    switch (animationStyle) {
      case 'slide':
        // Slide out: bergerak ke kiri sambil fade out
        return { x: -300, opacity: 0 };
      case 'scale':
        // Scale out: mengecil sambil fade out
        return { scale: 0, opacity: 0 };
      case 'fade':
        // Fade out: hanya opacity 0
        return { opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  // Function untuk mendapatkan initial animation berdasarkan style
  const getInitialAnimation = () => {
    switch (animationStyle) {
      case 'slide':
        // Slide in: mulai dari kanan sambil fade in
        return { x: 300, opacity: 0 };
      case 'scale':
        // Scale in: mulai dari scale 0 sambil fade in
        return { scale: 0, opacity: 0 };
      case 'fade':
        // Fade in: mulai dari opacity 0
        return { opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div className='space-y-lg'>
      {/* Control buttons */}
      <div className='flex flex-wrap gap-sm'>
        {/* Add task button */}
        <TaskButton onClick={addTodo} icon='add' label='Add Task' />
        {/* Clear all button - disabled jika tidak ada tasks */}
        <TaskButton
          onClick={clearAll}
          icon='clear'
          label='Clear All'
          disabled={todos.length === 0}
        />
        {/* Mode buttons untuk mengubah AnimatePresence mode */}
        <ModeButton
          mode='sync'
          currentMode={mode}
          onClick={() => setMode('sync')}
        />
        <ModeButton
          mode='popLayout'
          currentMode={mode}
          onClick={() => setMode('popLayout')}
        />
      </div>

      {/* List container */}
      <div className='relative min-h-400 w-full rounded-xl bg-neutral-900/50 p-xl pb-80'>
        <div className='mx-auto max-w-600 space-y-md'>
          {/* AnimatePresence untuk menangani exit animations */}
          <AnimatePresence mode={mode}>
            {/* Empty state - ditampilkan jika tidak ada todos */}
            {todos.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex h-200 items-center justify-center'
              >
                <p className='text-neutral-400 text-sm-regular'>
                  No tasks yet. Click "Add Task" to start!
                </p>
              </motion.div>
            )}

            {/* Render setiap todo item */}
            {todos.map((todo) => (
              <motion.div
                // Key penting untuk AnimatePresence - menggunakan todo.id
                key={todo.id}
                // Layout prop untuk smooth position transitions
                layout
                // Initial animation berdasarkan style yang dipilih
                initial={getInitialAnimation()}
                // Animate state - semua property kembali ke normal
                animate={{ x: 0, scale: 1, opacity: 1 }}
                // Exit animation berdasarkan style yang dipilih
                exit={getExitAnimation()}
                // Transition configuration
                transition={{
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                // Hover dan tap interactions
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // Dynamic className berdasarkan todo.color
                className={cn(
                  'group relative flex items-center justify-between rounded-xl bg-gradient-to-r p-lg shadow-lg transition-shadow hover:shadow-xl',
                  todo.color
                )}
              >
                {/* Todo content */}
                <div className='flex items-center gap-md'>
                  {/* ID badge */}
                  <div className='flex size-36 items-center justify-center rounded-lg bg-white/20'>
                    <span className='text-md-bold text-white'>{todo.id}</span>
                  </div>
                  {/* Todo text */}
                  <span className='text-md-semibold text-white'>
                    {todo.text}
                  </span>
                </div>

                {/* Remove button */}
                <Button
                  onClick={() => removeTodo(todo.id)}
                  variant='ghost'
                  size='icon'
                  className='size-32 cursor-pointer text-white hover:bg-white/20'
                >
                  <X className='size-16' />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer dengan info tasks dan mode */}
        <div className='absolute right-0 bottom-0 left-0 p-xl text-center'>
          <div className='inline-flex items-center gap-md rounded-full bg-neutral-900/50 px-lg py-sm'>
            <span className='text-neutral-300 text-sm-regular'>
              Tasks: <strong>{todos.length}</strong>
            </span>
            <span className='text-purple-300 text-xs-regular'>
              ({mode} mode)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
