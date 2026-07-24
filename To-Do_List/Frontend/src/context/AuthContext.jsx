import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../service/api'; 

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

        console.log("Login user", email);   
        
        try{

            const response = await authService.login( email, password );
            console.log("Response:", response.data);
            console.log("after login");

            const { access_token, name, email: userEmail } = response.data.data;
            const userData = {
                name,
                email
            }
            console.log(userData);
            
            localStorage.setItem('token', access_token);
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
            
            return {success:true};
        }catch (error) {
    console.error("Full Error:", error);

    if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
    } else if (error.request) {
        console.log("No response received:", error.request);
    } else {
        console.log("Error message:", error.message);
    }

    return {
        success: false,
        error: error.response?.data?.error || error.message
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