import React from 'react'
import { useNavigate } from "react-router-dom";

import music_img from './good.webp'

import {useState} from 'react'

export default function Login() {
    const navigate = useNavigate();
    const [user , Setuser] = useState({email: "", password: ""})

    const handleSetvalue = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        Setuser({...user, [name] : value})
        console.log(user)
    }

    const handlePosttoServer = async (e) => {
        e.preventDefault();
        //console.log(`${user.name} Thank you to be our new user`)
        const {email, password} = user;

        const res = await fetch('http://localhost:5000/login', {
            method : 'POST',
            headers : {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        // -------------------to be done yet ---------------------------------------------------
        const data = await res.json();
        
        console.log(data)
        console.log(res.status)
        if (res.status === 401){

            //console.log("Trying to redict the page")
            window.alert(res.message)
            return navigate("/");
        
        }else if (res.status == 200) {
            return navigate("/search");
        }else {
            window.alert("Somthing going wrong")
        }
        return null;
    }


  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-12 w-auto"
                    src={music_img}
                    alt="Nova usic"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Login to your account
                </h2>
            </div>
            
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="/" method="POST"/>
                    <div className='py-4'>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={user.email}
                                onChange={handleSetvalue}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 block w-full p-1.5 border-gray-600 placeholder-gray-400 text-gray-700 focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com"/>
                            </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={user.password}
                            onChange={handleSetvalue}
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 block w-full p-1.5 border-gray-600 placeholder-gray-400 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                            />
                    </div>

                    <div className='py-3.5'>
                        <button
                            type="submit"
                            onClick={handlePosttoServer}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Log in
                        </button>
                    </div>
            
            </div>

                    
            </div>
        </div>

        
    </>
  )
}