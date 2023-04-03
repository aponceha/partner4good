import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_CAUSE } from '../../utils/queries';

import charity3 from '../../assets/charity3.png';
import charity4 from '../../assets/charity4.png';
import charity6 from '../../assets/charity6.png';
import './Cause.css';



export default function Cause() {

    
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

    const [causeData, setCauseData] = useState({});
    
    const causeId = '6429e7c38db07401c2193519';
    const { loading, data } = useQuery(QUERY_SINGLE_CAUSE, {
        variables: { causeId: causeId },
      });
 
    if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <div className="aboutContainer">
            <div className = "mainContainer">
                {/* <button className = "editButton rightFloat"
                onClick={() => window.location.href = '/addcause'}
                > Edit Profile </button> */}
                <div className = "mainGrid">
                    <div className = "imgDivTainer">
                    <img className = "imgPartner" src ={charity6} alt= "placeholder"/>
                    </div>
                    <div className = "dataList">
                        <h2 className = "h2Name">{data.cause.name}</h2>
                        <li>Headquarters: {data.cause.headquarters}</li>
                        <li>Contact: {data.cause.contactName}</li>
                        <li>Email: {data.cause.contactEmail}</li>
                        <li>Website: <a className="causeSiteLink" 
                        href={data.cause.websiteLink}>View Site</a></li>
                        <li>Cause Category: {data.cause.category.name}</li>
                    </div>
                </div>
                <p className = "descriptionDiv">
                    {data.cause.description}
                    </p>

                <p className = "comingSoon"> Coming Soon.. </p>
                <button className = "donateButton"> Donate Now </button>
            </div>

            <h3 className = "h1FYPp">Check out more Causes</h3>

            <div className = "fypDiv">
            <AnimatePresence>
            <motion.div className = "fypGrid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                
                <motion.div className="pBorder1"
                    variants={cardVariants}
                    whileHover = {{ y: -10 } }
                    >
                <div className="partnerCard1">
                    <img className="imgCard1" src={charity3} alt="img" />
                </div>
                <div className="descriptionBox1">
                    <p className="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button className="seemore1"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/cause'}
                        > ... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>

            <motion.div className="pBorder1"
                    variants={cardVariants}
                    whileHover = {{ y: -10 } }
                    >
                <div className="partnerCard1">
                    <img className="imgCard1" src={charity4} alt="img" />
                </div>
                <div className="descriptionBox1">
                    <p className="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button className="seemore1"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/cause'}
                        > ... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>

            <motion.div className="pBorder1"
                    variants={cardVariants}
                    whileHover = {{ y: -10 } }
                    >
                <div className="partnerCard1">
                    <img className="imgCard1" src={charity6} alt="img" />
                </div>
                <div className="descriptionBox1">
                    <p className="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button className="seemore1"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/cause'}
                        > ... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>

            <button className="btnSMC" onClick={() => window.location.href = '/causes'}> See More Causes</button>
            
            </motion.div>
            </AnimatePresence>
            </div>
        </div>
    )
}