import { motion } from 'framer-motion';
import './narrative.css';

const ShoppingBasket: React.FC = () => {
  const items = [
    { id: 1, name: '🥚', label: 'Eggs' },
    { id: 2, name: '👕', label: 'Shirt' },
    { id: 3, name: '⛽', label: 'Gas' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="shopping-basket-container">
      <motion.div
        className="shopping-basket"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="basket">
          <div className="basket-handle"></div>
          <div className="basket-body">
            <motion.div className="basket-items">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  className="basket-item"
                  variants={itemVariants}
                >
                  <span role="img" aria-label={item.label} style={{ fontSize: '2rem' }}>
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShoppingBasket;