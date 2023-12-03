// SignUp.jsx
import React, { useState } from 'react';

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // You can send this data to your backend API for further processing
    };

    return (
        <div className='w-[30%] h-[85%] bg-white rounded-lg shadow-lg flex flex-row justify-center items-center'>
            <div className='header'>
                <div className='text-center p-10 text-3xl'>MoneyMinder</div>
            </div>
            <div className='items-center flex flex-col justify-center'>
                <div className=' p-5 flex items-center space-x-5  w-fit'>
                    <img src={user_icon} alt="" classname='' />
                    <input type="text" name="" id="" className=' border-2 p-1' placeholder='Enter Name' />
                </div>
                <div className=' p-5 flex items-center space-x-5  w-fit'>
                    <img src={email_icon} alt="" />
                    <input type="email" name="" id="" className='border p-1' placeholder='Enter E-mail' />
                </div>
                <div className=' p-5 flex items-center space-x-5  w-fit'>
                    <img src={password_icon} alt="" />
                    <input type="password" name="" id="" className='border p-1' placeholder='Enter Password' />
                </div>
            </div>
            <div className='pt-8 bg-red-50'>
                <button className='rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-2xl p-3 px-4 text-white-100'>Sign-Up</button>
            </div>
        </div>

    );
}

export default SignUp;
