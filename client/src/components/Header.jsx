

const Header=()=> {
  return (
    <>
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[300px] flex justify-content items-center">
       <div className="text-center">
        <h1 className="text-white text-5xl">welcome app</h1>
        <p className="text-white text-2xl">find your favourite</p>
        <form action="" className="flex mt-2">
            <input 
            type="text"
            className="w-full rounded-md border border-gray-300 py-2 text-gray-700 shadow-md"
            placeholder="search asia countries" />
            <button className="inline-flex item-center mx-2 px-4 py-2 rounded-md bg-green-500 text-white shadow-m type='submit'">Search</button>
        </form>

       </div>
      </header>
    </>
  )
}

export default Header
