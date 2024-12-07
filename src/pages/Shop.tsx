import { motion } from 'framer-motion';
import { ShoppingBag, Filter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const categories = ['all', 'hoodies', 'shirts', 'pants', 'accessories'];

  const products = [
    {
      id: 1,
      name: 'Unleash Your Creativity',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (1).png',
    },
    {
      id: 2,
      name: "Sorry I'M late",
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (3).png',
    },
    {
      id: 3,
      name: 'Simple & Genius',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (4).png',
    },
    {
      id: 4,
      name: 'Fearless',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (5).png',
    },
    {
      id: 5,
      name: 'LIENZO',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (6).png',
    },
    {
      id: 6,
      name: 'Born To Code',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (7).png',
    },
    {
      id: 7,
      name: 'If You Are Not Broken',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (8).png',
    },
    {
      id: 8,
      name: 'Unleash Fire',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (9).png',
    },
    {
      id: 9,
      name: 'Redefine Your Style',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (10).png',
    },
    {
      id: 10,
      name: 'Panorama',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (11).png',
    },
    {
      id: 11,
      name: 'Friends',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (12).png',
    },
    {
      id: 12,
      name: 'CHOOSE ME',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (13).png',
    },
    {
      id: 13,
      name: 'Bro 🤝',
      price: 649.0,
      category: 'hoodies',
      image: 'src/components/assets/product_mockup/Mockups (14).png',
    },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <motion.div className="relative h-[60vh] bg-gradient-to-r from-gray-900 to-black flex flex-col items-center justify-end">
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50">
          {/* Video section */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            style={{ pointerEvents: 'none' }}
          >
            <source src="/resources/Final10000-0240.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-center z-10 mb-12">
          {' '}
          {/* Adjust margin-bottom */}
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Shop Collection
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400"
          >
            Discover our premium streetwear collection
          </motion.p>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="relative mb-4 md:mb-0"
          >
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>Filter</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isFilterOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 bg-gray-900 rounded-lg shadow-xl p-2 z-10"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-lg capitalize ${
                      selectedCategory === category
                        ? 'bg-white text-black'
                        : 'hover:bg-gray-800'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>

          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-gray-400"
          >
            Showing {filteredProducts.length} products
          </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-square overflow-hidden bg-gray-900 rounded-lg mb-4">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </motion.button>
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400">{`₹${product.price.toFixed(
                  2
                )}`}</p>{' '}
                {/* Changed to rupee symbol */}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
