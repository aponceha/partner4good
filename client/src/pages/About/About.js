/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './About.css';
import { motion, AnimatePresence } from 'framer-motion';
import hero  from '../../assets/hero.png';
import p4g from '../../assets/p4g.png';
import TripleCard from '../../components/TripleCard/TripleCard';

import UserContext from '../../providers/userContext';

export default function About() {
    const { user } = useContext(UserContext);

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
        <div className="bodyDiv">
            <div className =  "imgDiv">
                <img className = "i1" src={hero} alt="placeholder" />
                <h3 className = "h1FYP">Find your partner.</h3>
            </div>
            <TripleCard />
            <div className = "wwaDiv">
                <img id = "whoweare" className = "i1 wwaImg" src={p4g} alt="placeholder" />
                <h2 className = "h1WWA">Who We Are</h2>
                <p className="pWWA">
                Partner for Good is committed to helping good 
                corporate citizens find & partner with causes, 
                in the hopes of fostering a better, more sustainable world. 
                </p>
            </div>
        </div>
    )
}