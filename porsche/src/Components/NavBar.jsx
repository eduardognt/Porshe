function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto gap-6 py-4 flex items-center justify-center font-bold">
        <a href="#design" className="hover:text-gray-300">
          Design
        </a>
        <a href="#motor" className="hover:text-gray-300">
          Motor
        </a>
        <a href="#performance" className="hover:text-gray-300">
          Performance
        </a>
        <a href="#cores" className="hover:text-gray-300">
          Cores
        </a>
        <button className="bg-amber-500 hover:bg-red-800 cursor-pointer px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-800/50">
          Comprar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
