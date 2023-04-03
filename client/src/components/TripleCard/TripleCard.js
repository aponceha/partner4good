/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import CauseCard from '../../components/CauseCard/CauseCard';

import { useQuery } from '@apollo/client';
import { QUERY_CAUSES } from '../../utils/queries';

import { motion, AnimatePresence } from 'framer-motion';

export default function TripleCause() {

    const { loading, data } = useQuery(QUERY_CAUSES);

    const causes = data?.causes || [];
    const numCauses = causes.length;
    // get 3 random indexes from 0 to numCAuses - 1
    var arr = [];
    if (data) {
        while (arr.length < 3) {
            var r = Math.floor(Math.random() * numCauses) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
    }
    // filter array to show 3 random causes
    const random3Cause = causes.filter((cause, index) => arr.includes(index));
    
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
        <div className="fypDiv">
            <AnimatePresence>
                <motion.div className="fypGrid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {random3Cause.map((cause, index) => (
                        <CauseCard
                            key={cause._id}
                            name={cause.name}
                            causeId={cause._id}
                            description={cause.description}
                            imgpath={`c${index}`}
                        />
                    ))}

                    <button className="btnSMC" onClick={() => window.location.href = '/causes'}> See More Causes</button>

                </motion.div>
            </AnimatePresence>
        </div>
    )
}