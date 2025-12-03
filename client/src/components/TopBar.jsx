import React from 'react'
import { Button } from './ui/button'
import SearchBar from './SearchBar'
import logo from '@/assets/logo.png'

const TopBar = () => {
    return (
        <div className='flex w-full fixed z-40 px-5  justify-between border-b items-center h-16 bg-white'>
            <div>
                <img src={logo} alt='logo' className='h-12'/>
            </div>
            <div className='w-[500px]'>
                <SearchBar />
            </div>
            <div>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default TopBar