import BookList from "../components/BookList";

export default function Home() {

  return (

    //this is div for Welcome messages
    <div className="min-h-screen bg-black">

      <div className="px-6 pt-10 pb-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-pink-300">
          Hello, Readers
        </h1>
        <p className="text-pink-400/70 text-base mt-2 max-w-xl leading-relaxed">
         Welcome Book Readers, Explore More
        </p>

<p className="text-pink-400/60 text-xs mt-2">
  Browse books by category on the Browse Books page.
</p>
      </div>
      

    
        {/* {book list component for rendering book card} */}
      <BookList />

    </div>
  );
}