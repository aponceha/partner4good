import React from 'react';
import './addCause.css';
import {motion, stagger, AnimatePresence, filterProps} from 'framer-motion';
import charity3 from '../../assets/charity3.png';
import charity4 from '../../assets/charity4.png';
import charity6 from '../../assets/charity6.png';
import ph from '../../assets/placeholder.png';
import { useState, useEffect } from 'react';



export default function AddCause(props) {
    
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

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

      props.setPage("addCause")

    return (
        <div class="aboutContainer">
            <div className = "mainContainer">
                <button className = "editButton rightFloat"
                onClick={() => window.location.href = '/#/profile'}
                > Save Profile </button>
                <div className = "mainGrid1">
                <div className = "imgDivTainer1">
                    <img className = "imgPartner" src ={ph} alt= "placeholder"/>
                </div>
                    
                    <form className = "dataList">
                        
                        <h2 className = "h2Name">Help for Homeless</h2>
                        <div className = "row1">
                        <li className = "formTitle">Founded:</li>
                        <input
                            type="text"
                            name="founded"
                            placeholder="Founded"
                            className="input"
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className = "row1">
                        <li className = "formTitle">Headquarters:</li>
                        <input
                            type="text"
                            name="headquarters"
                            placeholder="Headquarters"
                            className="input"
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className = "row1">
                        <li className = "formTitle">Contact:</li>
                        <input
                            type="text"
                            name="contact"
                            placeholder="Contact"
                            className="input"
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className = "row1">
                        <li className = "formTitle">Email:</li>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="input"
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className = "row1">
                        <li className = "formTitle">Website:</li>
                        <input
                            type="text"
                            name="website"
                            placeholder="Website"
                            className="input"
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className = "row1">
                        <li className = "formTitle">Category:</li>
                        <select
                        type="select"
                        name="category"
                        placeholder="Category"
                        className="input"
                        onChange={(e) => setName(e.target.value)}
                        > 
                        <option value="category">Environment</option>
                        <option value="category">Diversity, Equity, Inclusion</option>
                        <option value="category">LGBTQ</option>
                        <option value="category">Homelessness</option>
                        <option value="category">Food Security</option>
                        </select>
                        </div>
                        <li>Description:</li>
                        <textarea
                            type="text"
                            name="description"
                            placeholder="Description"
                            className="descriptionDiv"
                            onChange={(e) => setName(e.target.value)}
                        />

                    </form>
                    
                </div>
                

                <p className = "comingSoon"> Coming Soon.. </p>
                <button className = "donateButton"> Setup Donations Portal </button>
            </div>
    
        </div>
    )
}