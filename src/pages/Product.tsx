import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const products: any[] = [
  // ... your products array
  {
    id: 1,
    name: 'Unleash Your Creativity',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (1).png',
  },
  {
    id: 2,
    name: "Sorry I'M late",
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (3).png',
  },
  {
    id: 3,
    name: 'Simple & Genius',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (4).png',
  },
  {
    id: 4,
    name: 'Fearless',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (5).png',
  },
  {
    id: 5,
    name: 'LIENZO',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (6).png',
  },
  {
    id: 6,
    name: 'Born To Code',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (7).png',
  },
  {
    id: 7,
    name: 'If You Are Not Broken',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (8).png',
  },
  {
    id: 8,
    name: 'Unleash Fire',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (9).png',
  },
  {
    id: 9,
    name: 'Redefine Your Style',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (10).png',
  },
  {
    id: 10,
    name: 'Panorama',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (11).png',
  },
  {
    id: 11,
    name: 'Friends',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (12).png',
  },
  {
    id: 12,
    name: 'CHOOSE ME',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (13).png',
  },
  {
    id: 13,
    name: 'Bro 🤝',
    price: 1499.0,
    image: 'src/components/assets/product_mockup/Mockups (14).png',
  },
  // Add more products as needed
];

function Product() {
  const { id } = useParams();
  console.log('useParams id:', id);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const colors = ['#FF0000', '#00FF00', '#0000FF']; // Example colors array
  const [isAdding, setIsAdding] = useState(false);
  const sizes = ['S', 'M', 'L', 'XL']; // Example sizes array

  if (!Array.isArray(products)) {
    console.error('Products is not an array:', products);
    return <div>Error: Products data is invalid.</div>;
  }

  const product = products.find((p) => p.id === Number(id));
  console.log('Product found:', product);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log('Adding item to cart:', {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
      image: product.image,
    });
    setIsAdding(true);
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
      image: product.image,
    });
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-[600px] bg-gray-900 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl mb-4">{`₹${product.price.toFixed(2)}`}</p>
            <p className="text-gray-400 mb-6">
              Elevate your street style with our premium hoodie. Crafted from
              high-quality materials for ultimate comfort and durability.
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Color</h3>
              <div className="flex space-x-4">
                {colors.map((color: string) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? 'border-white'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="flex space-x-4">
                {sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border ${
                      selectedSize === size
                        ? 'border-white bg-white text-black'
                        : 'border-gray-600 hover:border-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                  isAdding
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{isAdding ? 'Added!' : 'Add to Cart'}</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-3 border border-gray-600 rounded-lg hover:border-white transition-colors"
              >
                <Heart className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Product;
function addItem(arg0: {
  id: any;
  name: any;
  price: any;
  size: string | null;
  color: string | null;
  quantity: number;
  image: any;
}) {
  throw new Error('Function not implemented.');
}
