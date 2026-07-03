function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute top-16 left-0 right-0 bottom-0 z-0">
        <img
          src="../src/assets/images/HERO1.jfif"
          className="w-full h-full object-cover opacity-85"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent"></div>
      <div className="absolute bottom-8 left-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
