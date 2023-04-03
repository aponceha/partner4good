/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ph from '../../assets/placeholder.png';
import './MyCause.css';
import CloudinaryUploadWidget from '../../CloudinaryUploadWidget';
import myCauseContext from '../../providers/myCauseContext';

export default function MyCausePage() {
    const { myCause } = useContext(myCauseContext);

    return (
        <div className="aboutContainer">
            <div className="mainContainer">
                <div className="mainGrid">

                    <div className="container m-0 p-0 ">
                        <img className="imgPartner mx-auto" src={ph} alt="placeholder" />
                        <div className="middle">
                            <button className="imgUpload rounded p-3">Coming Soon!</button>
                            <CloudinaryUploadWidget />
                        </div>

                    </div>
                    {myCause.ifCause ?
                        <div>
                            <button className="editButton rightFloat"
                                onClick={() => window.location.href = '/editcause'}> Edit My Cause </button>
                            <div className="dataList">

                                <div className="m-2">
                                    <h2 className="h2Name" placeholder="Name">{myCause.myCauseData.myCause.name}</h2>
                                </div>
                                <h4>Headquarters: {myCause.myCauseData.myCause.headquarters}</h4>
                                <h4>Contact: {myCause.myCauseData.myCause.contactName}</h4>
                                <div className="d-flex">
                                    <h4>Email: </h4>
                                    <a className="mx-3" href={myCause.myCauseData.myCause.contactEmail}>View Site</a>
                                </div>

                                <div className="d-flex">
                                    <h4>Website</h4>
                                    <a className="mx-3" href={myCause.myCauseData.myCause.websiteLink}>View Site</a>
                                </div>
                                <h4>Category: {myCause.myCauseData.myCause.category.name}</h4>
                                <div>
                                    <h4>Description: </h4>
                                    <p className="descriptionDiv">{myCause.myCauseData.myCause.description}</p>
                                </div>
                            </div>
                        </div>
                        : <div>
                            <button className="editButton rightFloat"
                                onClick={() => window.location.href = '/addcause'}
                            > Add My Cause </button>
                            <h4>you did it!!</h4>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}