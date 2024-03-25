"use client"
import React, { useEffect, useState } from 'react'
// import newbible from '@/lib/en_kjv.json'

const NewBible = () => {
    const [bibleData, setBibleData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(newbible); // Replace with your API endpoint
          const data = await response.json();
          setBibleData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle errors (display an error message, retry logic, etc.)
        }
      };

      fetchData();
    }, []);
  return (
    <div>
        {bibleData ? (
        <>
          <h1>Book: {bibleData.abbrev}</h1>
          {/* ... display content using bibleData */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default NewBible