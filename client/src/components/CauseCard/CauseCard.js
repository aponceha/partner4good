import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Causes.css';
import { motion, AnimatePresence } from 'framer-motion';
// import charity1 from '../../assets/charity1.png';



const CauseCard = ({ name, causeId, description }) => {

  const navigate = useNavigate();

  const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            when: 'beforeChildren', staggerChildren: 0.1,
            staggerDirection: 1,

        },

    },
    exit: {
        scale: "-100vw",
        transition: { ease: "easeInOut" },
    },
};

const cardVariants = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 50 },
    },
    exit: {
        x: "-100vw",
        transition: { ease: "easeInOut" },
    }
};
  return (
    <motion.div className="pBorder"
      variants={cardVariants}
      whileHover={{ y: -10 }}
    >
      <div className="partnerCard">
        <img className="imgCard" alt={causeId} />
      </div>
      <div className="descriptionBox">
        <p className="partnerP">
          {description}
        </p>
        <AnimatePresence>
          <motion.button className="seemore"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
            onClick={() => navigate(`/cause/${causeId}`)}
          > ... See More
          </motion.button>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default CauseCard