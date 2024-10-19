import React, {createContext, useState, useEffect, ReactNode} from 'react';
import baseRequest from "../utils/baseApi";
import {User} from "../store/users/types.ts";
// Create UserContext



interface UserContextType {
    users: User[];
    deleteUser: (id: number) => void;  // Add deleteUser function type
    editUser: (updatedUser: User) => void;  // Add editUser function type
}

export const UserContext = createContext<UserContextType|undefined>();

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider:React.FC<UserProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const deleteUser = (id: number) => {
        console.log('deelt')
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    };

    // Function to edit a user
    const editUser = (updatedUser: User) => {
        setUsers(prevUsers =>
            prevUsers.map(user => (user.id === updatedUser.id ? updatedUser : user))
        );
        console.log(users)
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await baseRequest<User[]>('GET', 'users');
            setUsers(result?.data || []);
        };
        fetchData();
    }, []);


    return (
        <UserContext.Provider value={{users,editUser,deleteUser}}>
            {children}

        </UserContext.Provider>
    );
};

// Use this in your main app to wrap components
