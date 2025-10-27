// Import icons dari Lucide React
import { Check, Loader2, Plus, ShoppingCart, Star } from 'lucide-react';
// Import motion dan Variants type dari Framer Motion
import { motion, type Variants } from 'motion/react';
// Import useState untuk state management
import { useState } from 'react';
// Import cn utility untuk conditional class names
import { cn } from '@/lib/utils';

// Type definition untuk Product
type Product = {
  // Unique identifier untuk setiap product
  id: number;
  // Nama product
  name: string;
  // Harga product
  price: number;
  // Rating product (1-5)
  rating: number;
  // Emoji atau image untuk product
  image: string;
  // Background gradient untuk styling
  gradient: string;
};

// Komponen untuk demo product card gallery dengan state management
export const ProductCardDemo = () => {
  // State untuk menyimpan array ID products yang sudah dipilih
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  // State untuk menyimpan array ID products yang sedang loading
  const [loadingProducts, setLoadingProducts] = useState<number[]>([]);
  // State untuk menghitung jumlah items di cart
  const [cartCount, setCartCount] = useState(0);

  // Array products yang akan ditampilkan di gallery
  const products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      rating: 4.5,
      image: '🎧',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249.99,
      rating: 4.8,
      image: '⌚',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 49.99,
      rating: 4.2,
      image: '💻',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 4,
      name: 'Mechanical Keyboard',
      price: 159.99,
      rating: 4.9,
      image: '⌨️',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  // Variants untuk card - 4 states: idle, hover, selected, loading
  const cardVariants: Variants = {
    // State idle: card dalam kondisi normal
    idle: {
      scale: 1,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    // State hover: card scale up sedikit dan shadow lebih dramatis
    hover: {
      scale: 1.03,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    // State selected: card dengan border putih untuk menunjukkan sudah dipilih
    selected: {
      scale: 1,
      boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
    // State loading: card sedikit mengecil dan opacity berkurang
    loading: {
      scale: 0.98,
      opacity: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Variants untuk product image - respond to parent state
  const imageVariants: Variants = {
    // State idle: image dalam kondisi normal
    idle: {
      scale: 1,
      rotate: 0,
    },
    // State hover: image scale up dan rotate sedikit
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
    // State selected: image scale up lebih besar untuk menunjukkan selected
    selected: {
      scale: 1.2,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
      },
    },
    // State loading: image scale down untuk menunjukkan loading
    loading: {
      scale: 0.9,
      rotate: 0,
    },
  };

  // Variants untuk price - color change berdasarkan state
  const priceVariants: Variants = {
    // State idle: price dengan color default
    idle: {
      scale: 1,
      color: '#e5e7eb',
    },
    // State hover: price scale up dan color purple
    hover: {
      scale: 1.05,
      color: '#8b5cf6',
      transition: {
        duration: 0.2,
      },
    },
    // State selected: price scale up dan color purple
    selected: {
      scale: 1.1,
      color: '#8b5cf6',
    },
    // State loading: price kembali ke color default
    loading: {
      scale: 1,
      color: '#e5e7eb',
    },
  };

  // Variants untuk button - color change berdasarkan state
  const buttonVariants: Variants = {
    // State idle: button dengan background purple
    idle: {
      backgroundColor: '#8b5cf6',
      scale: 1,
    },
    // State hover: button dengan background purple lebih gelap dan scale up
    hover: {
      backgroundColor: '#7c3aed',
      scale: 1.05,
    },
    // State selected: button dengan background hijau untuk menunjukkan added
    selected: {
      backgroundColor: '#22c55e',
      scale: 1,
    },
    // State loading: button dengan background abu-abu untuk menunjukkan disabled
    loading: {
      backgroundColor: '#6b7280',
      scale: 1,
    },
  };

  // Function untuk handle add to cart dengan loading state
  const handleAddToCart = async (productId: number) => {
    // Prevent multiple clicks jika product sedang loading
    if (loadingProducts.includes(productId)) return;

    // Set product ke loading state
    setLoadingProducts([...loadingProducts, productId]);

    // Simulate API call dengan delay 1 detik
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Remove dari loading state
    setLoadingProducts(loadingProducts.filter((id) => id !== productId));
    // Add ke selected products
    setSelectedProducts([...selectedProducts, productId]);
    // Increment cart count
    setCartCount(cartCount + 1);
  };

  // Function untuk menentukan state product berdasarkan loading dan selected state
  const getProductState = (productId: number) => {
    // Priority: loading > selected > idle
    if (loadingProducts.includes(productId)) return 'loading';
    if (selectedProducts.includes(productId)) return 'selected';
    return 'idle';
  };

  return (
    <div className='relative w-full'>
      {/* Cart Counter - floating counter di pojok kanan atas */}
      <motion.div
        className='absolute top-lg right-lg z-10 flex items-center gap-sm rounded-full bg-purple-600 px-lg py-sm shadow-lg'
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        key={cartCount}
        transition={{
          type: 'spring' as const,
          stiffness: 500,
          damping: 15,
        }}
      >
        <ShoppingCart className='size-20 text-white' />
        {/* Cart count dengan animation saat berubah */}
        <motion.span
          key={cartCount}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring' as const,
            stiffness: 500,
            damping: 10,
          }}
          className='text-md-semibold text-white'
        >
          {cartCount}
        </motion.span>
      </motion.div>

      {/* Product Grid - responsive grid untuk product cards */}
      <div className='grid grid-cols-2 gap-xl p-xl md:grid-cols-4'>
        {products.map((product) => {
          // Get current state untuk product ini
          const state = getProductState(product.id);
          return (
            <motion.div
              key={product.id}
              className='relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 p-lg'
              variants={cardVariants}
              initial='idle'
              animate={state}
              whileHover={state === 'idle' ? 'hover' : state}
            >
              {/* Product Image dengan gradient background */}
              <motion.div
                className={cn(
                  'mb-lg flex h-120 items-center justify-center rounded-lg bg-gradient-to-br',
                  product.gradient
                )}
                variants={imageVariants}
              >
                <span className='text-6xl'>{product.image}</span>
              </motion.div>

              {/* Product Info Section */}
              <div className='space-y-sm'>
                {/* Product Name */}
                <h3 className='text-neutral-100 text-sm-semibold'>
                  {product.name}
                </h3>

                {/* Rating dengan stars */}
                <div className='flex items-center gap-xs'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'size-12',
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-500 text-yellow-500'
                          : 'text-neutral-600'
                      )}
                    />
                  ))}
                  <span className='text-neutral-400 text-xs-regular'>
                    {product.rating}
                  </span>
                </div>

                {/* Price Section */}
                <div className='flex items-center justify-between'>
                  <span className='text-neutral-500 text-sm-regular'>
                    Price
                  </span>
                  {/* Price dengan variants untuk color change */}
                  <motion.p
                    className='text-lg-semibold'
                    variants={priceVariants}
                  >
                    ${product.price}
                  </motion.p>
                </div>

                {/* Add to Cart Button dengan conditional content */}
                <motion.button
                  className='flex h-36 w-full cursor-pointer items-center justify-center gap-sm rounded-lg text-sm-semibold text-white'
                  variants={buttonVariants}
                  onClick={() => handleAddToCart(product.id)}
                  disabled={state !== 'idle'}
                >
                  {/* Conditional rendering berdasarkan state */}
                  {state === 'loading' ? (
                    <>
                      <Loader2 className='size-16 animate-spin' />
                      Adding...
                    </>
                  ) : state === 'selected' ? (
                    <>
                      <Check className='size-16' />
                      Added
                    </>
                  ) : (
                    <>
                      <Plus className='size-16' />
                      Add to Cart
                    </>
                  )}
                </motion.button>
              </div>

              {/* Selected Badge - muncul hanya saat selected */}
              {state === 'selected' && (
                <motion.div
                  className='absolute top-md right-md flex size-32 items-center justify-center rounded-full bg-green-500'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring' as const,
                    stiffness: 500,
                  }}
                >
                  <Check className='size-16 text-white' strokeWidth={3} />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
