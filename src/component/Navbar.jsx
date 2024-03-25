import Link from "next/link"
import { FaBookBible } from "react-icons/fa6";
import Search from "./Search";



const links = [
    {
        id: 1,
        name: "Devotional",
        url: "devotional/"
    },
    {
        id: 2,
        name: "About",
        url: "about/"
    },
    {
        id: 3,
        name: "Contact",
        url: "contact/"
    },
    {
        id: 4,
        name: "FAQS",
        url: "fqs/"
    },
]


const Navbar = () => {
  return (
    <nav className="w-full p-2 flex items-center justify-between border-b">
      <Link
        href={"/"}
        className="text-2xl text-white bg-slate-600 p-1  flex items-center gap-1"
      >
        STUDY BIBLE <FaBookBible />
      </Link>

      <Search/>

      <div className="flex items-center gap-2 sm:hidden md:flex">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar