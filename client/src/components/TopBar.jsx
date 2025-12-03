import React from 'react'
import { Button } from './ui/button'
import SearchBar from './SearchBar'

const TopBar = () => {
    return (
        <div className='flex w-full fixed z-40 p-2 justify-between border-b items-center'>
            <div>
                <h1 className='text-xl font-extrabold'><span className="text-blue-800">सााहित्यिक</span> <span className="text-red-600">सँघार</span></h1>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default TopBar