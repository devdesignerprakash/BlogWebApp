import React from 'react'
import { Input } from './ui/input'
import { IoIosSearch } from "react-icons/io";


const SearchBar = () => {
  return (
    <form className='flex items-center relative'>
        <IoIosSearch className='text-2xl absolute left-36'/>
        <Input placeholder="खोज्नुहोस..........."/>
    </form>
  )
}

export default SearchBar