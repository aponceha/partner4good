/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const myCauseContext = createContext();

export const MyCauseProvider = ({ children }) => {

    const { data } = useQuery(QUERY_ME);

    const [myCause, setMyCause] = useState({ ifCause: false, myCauseData: {} });

    useEffect(() => {
        if (data) {
            if (data.myCause) {
                setMyCause({ ifCause: true, myCauseData: data });
            }
        }
    }, data);

    return (
        <myCauseContext.Provider value={{ myCause, setMyCause }}>
            {children}
        </myCauseContext.Provider>
    );
}

export default myCauseContext;