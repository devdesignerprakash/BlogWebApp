import React from 'react'
import { Input } from './ui/input'
import { IoIosSearch } from "react-icons/io";


const SearchBar = () => {
  return (
    <form className='flex items-center relative'>
        <IoIosSearch className='text-2xl absolute right-5'/>
        <Input placeholder="खोज्नुहोस..........." className='rounded-full h-9'/>
    </form>
  )
}

export default SearchBar