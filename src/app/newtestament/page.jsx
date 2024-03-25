import Link from 'next/link';
import data from "@/lib/kjv_bible.json";

const NewTestament = () => {
  return (
    <div className="p-2 flex flex-col gap-2 h-full overflow-y-hidden">
      <h1 className="text-4xl font-extrabold border-b-4 mt-2 p-1">
        New Testament
      </h1>
      <p className="text-2xl font-sans">Pick a Book</p>
      <div className="flex flex-col">
        {data.map((book) =>
          book.fields.is_new_testament ? ( // Check for `false` using logical negation
            <Link key={book.pk} href={`/book/${book.fields.slug}`}>
              {book.fields.name}
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}

export default NewTestament;