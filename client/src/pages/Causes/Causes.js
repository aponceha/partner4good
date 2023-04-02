import React, { useState } from 'react';
import './Causes.css';
import { motion, AnimatePresence } from 'framer-motion';
// import charity1 from '../../assets/charity1.png';
// import charity2 from '../../assets/charity2.png';
// import charity3 from '../../assets/charity3.png';
// import charity4 from '../../assets/charity4.png';
// import charity5 from '../../assets/charity5.png';
// import charity6 from '../../assets/charity6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import CauseCard from '../../components/CauseCard/CauseCard';



export default function Causes() {
    const [causes, setCauses] = useState([]);
    

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
        },
    };

    return (
        <motion.div className="bodyContainer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >

            <div className="filterDiv">
                <AnimatePresence>
                    <motion.button className="filter"
                        initial={{ x: 400 }}
                        animate={{ x: 0 }}
                        exit={{ x: 400 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 0.7 }}
                    >  &nbsp; Filter &nbsp; <FontAwesomeIcon icon={faCaretDown} />&nbsp;</motion.button>
                </AnimatePresence>
            </div>

            <AnimatePresence>
                <motion.div className="partnerContainer"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {causes.map(cause => (
                        <CauseCard
                            key={cause._id}
                            name={cause.name}
                            causeId={cause._id} 
                            description={cause.description}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}