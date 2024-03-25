"use client"
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import data from "../lib/kjv_bible.json";
import Link from 'next/link';


export default function Search() {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [filteredData, setFilteredData] = useState(data);

    // const handleInputChange = (event) => {
    //   const searchTerm = event.target.value;
    //   setSearchTerm(value);

    // const filterItems = data.filter((data) => 
    // data.fields.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setFilteredData(filterItems);
    // }

  return (
    <div>
      <div className="border rounded-full p-2 w-72 flex items-center">
        <input
          type="text"
          className="w-full outline-none"
          // value={searchTerm}
          // onChange={handleInputChange}
          placeholder="Search Book..."
        />
        <CiSearch className="text-2xl font-bold" />
      </div>
      <div className="hidden fixed ml-4 bg-white mt-16 top-0 w-50 p-2 max-h-[50vh] overflow-y-scroll shadow-xl mx-auto flex-col">
       
      </div>
    </div>
  );
}
