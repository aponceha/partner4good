import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import ph from '../../assets/placeholder.png';
import './MyCause.css';

// import UserContext from '../../providers/userContext';

export default function MyCausePage() {
    const { loading, data } = useQuery(QUERY_ME);
    console.log(data);

    const cause = data?.myCause || [];
    console.log(cause);
    // const { user } = useContext(UserContext);
    // console.log(user);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="aboutContainer">
            <div className="mainContainer">
                <div className="mainGrid">

                    <div className="container m-0 p-0 ">
                        <img className="imgPartner mx-auto" src={ph} alt="placeholder" />
                        <div className="middle">
                            <button className="imgUpload rounded p-3">Coming soon!</button>
                        </div>
                    </div>
                    {/* {data.myCause ?
                        <div>
                            <button className="editButton rightFloat"
                                onClick={() => window.location.href = '/editcause'}> Edit My Cause </button>
                            <div className="dataList">

                                <div className="m-2">
                                    <h2 className="h2Name" placeholder="Name">{cause.name}</h2>
                                </div>
                                <h4>Headquarters: {cause.headquarters}</h4>
                                <h4>Contact: {cause.contactName}</h4>
                                <div className="d-flex">
                                    <h4>Email: </h4>
                                    <a className="mx-3" href={cause.contactEmail}>View Site</a>
                                </div>

                                <div className="d-flex">
                                    <h4>Website</h4>
                                    <a className="mx-3" href={cause.websiteLink}>View Site</a>
                                </div>
                                <h4>Category: {cause.category.name}</h4>
                                {/* <p className="descriptionDiv"></p> */}
                                {/* <h4>Category: {cause.description}</h4>
                            </div>
                        </div> : */}
                        <div>
                            {/* display this if user hasn't yet created a cause */}
                            <button className="editButton rightFloat"
                                onClick={() => window.location.href = '/addcause'}
                            > Add My Cause </button>
                            <h4>you did it!!</h4>
                        </div>
                        {/* } */}


                </div>

            </div>
        </div>
    )
}