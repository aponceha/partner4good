/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_CAUSE } from '../../utils/queries';
import TripleCard from '../../components/TripleCard/TripleCard';

import c0 from '../../assets/c0.png';
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';
import placeholder from '../../assets/placeholder.png';
import './Cause.css';

export default function Cause() {
    const { causeId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_CAUSE, {
        variables: { causeId: causeId },
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    let imgSrc = placeholder;

    if (data.cause.name == 'Plant With Purpose') {
        imgSrc = c0;
    }
    else if (data.cause.name == 'The Inclusion Project') {
        imgSrc = c1;
    }
    else if (data.cause.name == 'The Canadian Alliance to End Homelessness') {
        imgSrc = c3;
    }
    else if (data.cause.name == 'Food Secure Canada') {
        imgSrc = c4;
    }
    else if (data.cause.name == 'CAMH') {
        imgSrc = c5;
    }
    else if (data.cause.name == 'Egale') {
        imgSrc = c2;
    }

    return (
        <div className="aboutContainer">
            <div className="mainContainer">
                <div className="mainGrid">
                    <div className="imgDivTainer">
                        <img className="imgPartner" src={imgSrc} alt="placeholder" />
                    </div>
                    <div className="dataList">
                        <div className="columnOne">
                            <h2 className="h2Name underlinedH2">{data.cause.name}</h2>
                            <li>Headquarters: <span className="textData">{data.cause.headquarters}</span></li>
                            <li>Contact: <span className="textData">{data.cause.contactName}</span></li>
                            <li>Email: <span className="textData">{data.cause.contactEmail}</span></li>
                            <li>Website: <a className="textData causeSiteLink"
                                href={data.cause.websiteLink}>View Site</a></li>
                            <li>Cause Category: <span className="textData boldedText">{data.cause.category.name} </span></li>
                        </div>
                        <div className="columnTwo">

                        </div>
                    </div>
                </div>
                <p className="descriptionDiv">
                    {data.cause.description}
                </p>

                <p className="comingSoon"> Coming Soon.. </p>
                <button className="donateButton"> Donate Now </button>
            </div>

            <h3 className="h1FYPp">Check out more Causes</h3>
            <TripleCard />
        </div>
    )
}