import React from 'react';
import { QUERY_ME } from '../../utils/queries';
// import { motion, AnimatePresence } from 'framer-motion';
// import charity3 from '../../assets/charity3.png';
// import charity4 from '../../assets/charity4.png';
import Auth from '../../utils/auth';
import ph from '../../assets/placeholder.png';
import './MyCause.css';

export default function MyCausePage() {

    // const containerVariants = {
    //     hidden: {
    //         opacity: 0,
    //     },
    //     visible: {
    //         opacity: 1,
    //         transition: {
    //             type: "spring",
    //             when: 'beforeChildren', staggerChildren: 0.1,
    //             staggerDirection: 1,

    //         },

    //     },
    //     exit: {
    //         scale: "-100vw",
    //         transition: { ease: "easeInOut" },
    //     },
    // };

    // const cardVariants = {
    //     hidden: {
    //         scale: 0,
    //         opacity: 0,
    //     },
    //     visible: {
    //         scale: 1,
    //         opacity: 1,
    //         transition: { type: "spring", stiffness: 50 },
    //     },
    //     exit: {
    //         x: "-100vw",
    //         transition: { ease: "easeInOut" },
    //     },
    // };

    return (
        <div className="aboutContainer">
            <div className="mainContainer">
                {/* display this if user hasn't yet created a cause */}
                <button className="editButton rightFloat"
                    onClick={() => window.location.href = '/addcause'}
                > Add My Cause </button>
                {/* display this once user has created cause */}
                <button className="editButton rightFloat mt-5"
                    onClick={() => window.location.href = '/editcause'}
                > Edit My Cause </button>

                <div className="mainGrid">

                    <div className="container m-0 p-0 ">
                        <img className="imgPartner mx-auto" src={ph} alt="placeholder" />
                        <div className="middle">
                            <button className="imgUpload  rounded p-3">Coming soon!</button>
                        </div>
                    </div>

                    <div className="dataList">
                        <h2 className="h2Name" placeholder="Name">name</h2>
                        <h4>Headquarters</h4>
                        <h4>Contact</h4>
                        <h4>Email</h4>
                        <h4>Website</h4>
                        <h4>Category</h4>
                    </div>
                </div>
                <p className="descriptionDiv"></p>
            </div>
        </div>
    )
}
