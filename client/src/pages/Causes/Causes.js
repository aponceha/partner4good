import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@apollo/client';
import { QUERY_CAUSES } from '../../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import CauseCard from '../../components/CauseCard/CauseCard';
import './Causes.css';

export default function Causes() {
    // const [causes1, setCauses] = useState([]);
    const [filter, setFilter] = useState(false);
    const { loading, data } = useQuery(QUERY_CAUSES);
    const [selectCategory, setSelectCategory] = useState(null);
    const [filteredCauses, setFilteredCauses] = useState([]);

    const handleChange = (e) => {
        setSelectCategory(e.target.value);
        const filteredCauses = data.causes.filter(cause => cause.category.name === e.target.value);
        setFilteredCauses(filteredCauses);
    };

    const causes = data?.causes || [];

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


    if (loading) {
        return <div>Loading...</div>;
    }

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
                        onClick={() => { setFilter(!filter) }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 2 }}
                    >  &nbsp; Filter &nbsp; <FontAwesomeIcon icon={faCaretDown} />&nbsp;</motion.button>
                </AnimatePresence>
            </div>
            <div className="filterDiv2">
                <AnimatePresence>
                    {filter && <motion.div className="dropDown"
                        initial={{ y: -400, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -400, opacity: 0 }}
                        transition={{ duration: 0.1, type: "spring", stiffness: 120 }}

                    >
                        <div className="listRow">
                            <input className="checkBox" type="checkbox" value="Environment" onChange={handleChange}>
                            </input><span className="filCat">Environment</span>
                        </div>
                        <div className="listRow">
                            <input className="checkBox" type="checkbox" value="Diversity, Equity, Inclusion"
                                onChange={handleChange}></input><span className="filCat" >Diversity, Equity, Inclusion</span>
                        </div>
                        <div className="listRow">
                            <input className="checkBox" type="checkbox" value="LGBTQ" onChange={handleChange}></input><span className="filCat">LGBTQ</span>
                        </div>
                        <div className="listRow">
                            <input className="checkBox" type="checkbox" value="Homelessness" onChange={handleChange}></input>
                            <span className="filCat">Homelessness</span>
                        </div>
                        <div className="listRow">
                            <input className="checkBox" type="checkbox" value="Food Security" onChange={handleChange}></input>
                            <span className="filCat">Food Security</span>
                        </div>
                    </motion.div>}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                <motion.div className="partnerContainer"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* {loading ? (
                        <div>Loading...</div>): */}
                    {selectCategory ? filteredCauses.map(cause => (
                        <CauseCard
                            key={cause._id}
                            name={cause.name}
                            causeId={cause._id}
                            description={cause.description}
                        />
                    )) :
                        (causes.map(cause => (
                            <CauseCard
                                key={cause._id}
                                name={cause.name}
                                causeId={cause._id}
                                description={cause.description}
                            />
                        )))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}