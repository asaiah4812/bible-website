import data from '@/lib/kjv_bible.json'
import Link from 'next/link';
import { Suspense } from 'react';
import { FaBookMedical } from "react-icons/fa6";


export default function Home() {
  return (
    <Suspense fallback={<>Loading....</>}>
    <main className="w-full h-full pr-2 border-t-1">
      <h1 className="font-bold text-4xl pt-6 leading">
        WELCOME TO THE BIBLE <br />
        APP CHOOSE A VERSION
      </h1>
      <div className="grid grid-cols-2 gap-5 pt-10">
        <div className="border gap-4 p-2 flex flex-col justify-between h-fit">
          <Link
            className="text-2xl font-medium hover:underline"
            href={"oldtestament/"}
          >
            Old Testament
          </Link>
          <div className="flex justify-between h-fit">
            <p className="text-sm ">
              <b>Romans 8:28:</b> "And we know that in all things God works for
              the good of those who love him, who have been called according to
              his purpose."
            </p>
          </div>
        </div>
        <div className="border p-2 flex flex-col justify-between h-fit gap-4">
          <Link
            className="text-2xl font-medium hover:underline"
            href={"newtestament/"}
          >
            New Testament
          </Link>
          <div className="flex justify-between">
            <p className="text-sm ">
              <b>Psalm 23:1-3:</b> "The Lord is my shepherd; I shall not want.
              He maketh me to lie down in green pastures: he leadeth me beside
              the still waters. "
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 w-1/2 flex flex-col gap-2">
        <h3 className="text-3xl font-sans ">Bible Verse of the Week</h3>
        <i className="font-light">
          For God so love world that he gave Us his only son that who so ever
          believed him shall not perish but have everlasting Life...
        </i>
        <small className="block font-bold">John.3:16</small>
      </div>
    </main>
    </Suspense>
  );
}
