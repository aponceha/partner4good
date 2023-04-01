import React from 'react';
import './profile.css';
import {motion, stagger, AnimatePresence} from 'framer-motion';
import charity3 from '../../assets/charity3.png';
import charity4 from '../../assets/charity4.png';
import charity6 from '../../assets/charity6.png';



export default function AddCause() {

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
        <div class="aboutContainer">
            <div className = "mainContainer">
                <button className = "editButton rightFloat"
                onClick={() => window.location.href = '/#/addcause'}
                > Edit Profile </button>
                <div className = "mainGrid">
                    <div className = "imgDivTainer">
                    <img className = "imgPartner" src ={charity6} alt= "placeholder"/>
                    </div>
                    <div className = "dataList">
                        <h2 className = "h2Name">Help for Homeless</h2>
                        <li>Founded:</li>
                        <li>Headquarters:</li>
                        <li>Contact:</li>
                        <li>Email:</li>
                        <li>Website:</li>
                        <li>Category:</li>
                    </div>
                </div>
                <p className = "descriptionDiv">
                    Covenant House is the largest agency in Canada 
                    serving youth who are homeless, trafficked or at risk.
                     Covenant House is inclusive, intentional and impactful.
                      As a leader in the sector, we advocate so that all 
                      youth can have lives free from homelessness and 
                      trafficking. Our donors allow us to meet the emerging
                       needs of our youth and accelerate our work. 
                       Our comprehensive youth-driven programming is centred 
                       on unconditional love, absolute respect and relentless 
                       engagement.
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
                
                <motion.div class="pBorder1"
                    variants={cardVariants}
                    whileHover = {{ y: -10 } }
                    >
                <div class="partnerCard1">
                    <img class="imgCard1" src={charity3} alt="img" />
                </div>
                <div class="descriptionBox1">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore1"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        > ... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>

            <motion.div class="pBorder1"
                    variants={cardVariants}
                    whileHover = {{ y: -10 } }
                    >
                <div class="partnerCard1">
                    <img class="imgCard1" src={charity4} alt="img" />
                </div>
                <div class="descriptionBox1">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore1"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        > ... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>

            <motion.div class="pBorder1"
                    variants={cardVariants}
                    whileHover = {{ y: -10 } }
                    >
                <div class="partnerCard1">
                    <img class="imgCard1" src={charity6} alt="img" />
                </div>
                <div class="descriptionBox1">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore1"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        > ... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>

            <button class="btnSMC" onClick={() => window.location.href = '/#/partners'}> See More Causes</button>
            
            </motion.div>
            </AnimatePresence>
            </div>
        </div>
    )
}
