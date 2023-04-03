/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react';

const UserContext = createContext();


export const UserProvider = ({children}) => {
    const [user, setUserState] = useState({id: '', email: 'a@b.ca'});

    return (
        <UserContext.Provider value={{ user, setUserState }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserContext;

