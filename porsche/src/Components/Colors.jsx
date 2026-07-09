import { useState } from "react";

function Colors() {
  const colors = [
    {
      id: "purple",
      name: "Lorettapurple",
      image: "../src/assets/images/purple.png",
      colorClass: "bg-purple-900",
    },
    {
      id: "orange",
      name: "Cadimiumorange",
      image: "../src/assets/images/morange.png",
      colorClass: "bg-amber-700",
    },
    {
      id: "green",
      name: "Acidgreen",
      image: "../src/assets/images/limegreen.png",
      colorClass: "bg-lime-400",
    },
  ];

  const models = [
    { name: "Taycan", motor: "460cv Hybrid", model: "2026" },
    { name: "911 s", motor: "711cv Turbo", model: "25/26" },
  ];

  const [selectedColor, setSelectedColor] = useState("purple");

  return (
    <section id="colors" className="bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb:text-6xl font-bold mb-4">
            Escolha sua cor
          </h2>
          <p className="text-xl text-gray-400">
            Acabamentos que voce encontra apenas aqui
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center `min-h-500px`">
              <img
                src={colors.find((color) => color.id === selectedColor).image}
                className="max-w-2xl mx-auto rounded-2xl"
              />
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                <h3 className="text-2xl font-semibold">
                  {colors.find((color) => color.id === selectedColor).name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`relative transition-all duration-300 cursor-pointer animate-pulse`}
            >
              <div
                className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectedColor === color.id ? "border-white" : "border-gray-700"}`}
              ></div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 mt-20 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800"
            >
              <div className="font-bold text-3xl porsche-font text-gradient">
                {model.name}
              </div>
              <p>{model.motor}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-amber-500 hover:bg-red-800 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-800/50 cursor-pointer">
            Importe agora a partir de R$ 1.324.000
          </button>
          <p className="text-gray-400">Ou em 48x de R$ 27.800</p>
        </div>
      </div>
    </section>
  );
}

export default Colors;
