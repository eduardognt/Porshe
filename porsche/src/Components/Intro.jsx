function Intro() {
  const specs = [
    { value: "Version", label: "Black Edition", color: "text-amber-500" },
    { value: "V8 4.0", label: "Motor", color: "text-red-700" },
    { value: "HP", label: "470", color: "text-amber-500" },
    { value: "2026", label: "Model", color: "text-red-700" },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">Porsche Taycan</h1>
        <p className="text-2xl md:text-4xl mb-4 text-gradient font-bold">
          Black Edition Model 2026
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          A Taycan tem desempenho superior e uma longa autonomia.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
        <button className="bg-amber-500 hover:bg-red-800 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-800/50 cursor-pointer">
          Compre agora
        </button>
        <button className="border-2 border-white rounded-full px-8 py-4 hover:bg-white hover:text-black text-white cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/50">
          Saiba mais
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-5xl text-center">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            <p className={`text-3xl font-bold ${spec.color} `}>{spec.value}</p>
            <p>{spec.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Intro;
