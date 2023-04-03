/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import c0 from '../../assets/c0.png';
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';
import placeholder from '../../assets/placeholder.png';



const CauseCard = ({ name, causeId, description, imgpath }) => {

  const navigate = useNavigate();
  
  let imgSrc = placeholder;
    if (name=='Plant With Purpose') {
        imgSrc = c0;
      }
    else if (name=='The Inclusion Project') {
        imgSrc = c1;
        }
    else if (name=='The Canadian Alliance to End Homelessness') {
        imgSrc = c3;
        }
    else if (name=='Food Secure Canada') {
        imgSrc = c4;
        }   
    else if (name=='CAMH') {
        imgSrc = c5;
        }
    else if (name=='Egale') {
        imgSrc = c2;        
    }

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
        <img className="imgCard" alt={causeId} src={imgSrc}/>
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