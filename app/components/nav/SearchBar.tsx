'use client'

const SearchBar = () => {
    return(
    <div className="flex items-center">
      <input type="text" autoComplete="off" placeholder="Explore Trinity Sols." className="p-2 border-grey-300 rounded-1-md focus:outline-none focus:bourder-[0.5px] focus:border-slate-500 w-80"/>
      
      <button className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md">Search</button>
    </div>  );
}
export default SearchBar;