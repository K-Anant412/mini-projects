import React, { creatContext, useState, useEffect } from 'react';
import { authService } from '../service/api'; 

export const AuthContext = creatContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [lodaing, setLodaing] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if ( savedUser && token ){
            setUser(JSON.parse(savedUser));
        }
        setLodaing(false);
    }, []);

    const loginUser = async ( email, password ) => {
        try{

            const response = await authService.login( email, password );
            const { access_token, user: userData } = response.data;
            
            localStorage.setItem('token', access_token);
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
            
            return {success:true};
        }catch ( error ){
            return {
                success: false,
                error: error.response?.data?.error || 'Authentication failes'
            };
        }
    };

    const logoutUser = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        setUser(null);
    };

    return(
        <AuthContext.Provider value={{ user, loading, loginUser, logoutUser }}>
            { !loading && children }
        </AuthContext.Provider>
    );
};