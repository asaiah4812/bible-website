"use client"
import book from '@/lib/kjv_bible.json'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const BookList = () => {
  const { slug } = useParams();

  // const { dom, setDom } = useDomValue();

  const selectedBook = book.filter((book,i) => {
    return slug === String(book.fields.slug)
  })

  // useEffect(() => {
  //   const saveDom = localStorage.getItem(`dom${selectedBook[0].slug}`)
  //   // if (saveDom){
  //   //   setDom(JSON.parse(saveDom))
  //   // }
  // }, [])

  if (!selectedBook.length) return <p>Book not found</p>
  return (
    <div>
      <div className='grid grid-cols-10 gap-6 mx-auto items-center'>
            <div className='py-4 px-6 text-2xl hover:bg-gray-100 rounded-md shadow-lg '>{selectedBook.fields.chapter}</div>
      </div>
    </div>
  );
}

export default BookList;