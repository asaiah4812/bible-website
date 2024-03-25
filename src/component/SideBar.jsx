import Link from "next/link";
import bible from "../lib/kjv_bible.json";
import { FaBookOpen } from "react-icons/fa";


const SideBar = () => {
  return (
    <div className="flex flex-col border-r-2 p-1 h-[94vh] overflow-y-scroll">
      <h1 className="text-3xl font-bold border-b-2 flex items-center gap-2">
        All Books <FaBookOpen />
      </h1>
      <div className="flex flex-col">
        {bible.map((book) => {
          if (!book.fields.slug) {
            // Handle missing slug (e.g., display an error message or conditionally render)
            return null;
          }
          return (
            <Link
              key={book.pk}
              className="py-2 pl-1"
              href={`/book/${book.fields.slug}`}
            >
              {book.fields.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;



