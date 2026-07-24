import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../service/api'; 
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                console.error("Failed to parse user from localStorage", e);
                localStorage.removeItem('user'); 
            }
            
        setLoading(false);
    }, []);

    const loginUser = async ( email, password ) => {
        try{

            const response = await authService.login( email, password );
            const { access_token, user: userData } = response.data;
            
            localStorage.setItem('token', access_token);
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
            navigate('/home');
            
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