function Highlights() {
  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design Esportivo</h2>
          <p className="text-xl text-gray-400">
            O design da Porsche é famoso pela silhueta icônica.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../src/assets/images/Pvermelha.jfif"
              alt=""
            />
            <h3 className="font-bold mb-2 text-3xl">Essência</h3>
            <p className="text-gray-300">aerodinâmica e linhas atemporais</p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../src/assets/images/Porsche 911 22_.jfif"
              alt=""
            />
            <h3 className="font-bold mb-2 text-3xl">Inovação moderna</h3>
            <p className="text-gray-300">herança clássica desde o modelo 356</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
          <h3 className="text-4xl font-bold mb-6 text-gradient">Performance</h3>
          <p className="text-gray-300 mb-6 font-bold">
            A Porsche oferece uma engenharia de desempenho incomparável
          </p>
          <img
            className="w-full rounded-2xl mb-4"
            src="../src/assets/images/PGT3.jfif"
            alt=""
          />

          <ul className="space-y-3 text-gray-400">
            <li>Motorização híbrida</li>
            <li>711 cv</li>
            <li>0 a 100 km/h em 2,5 segundos</li>
            <li>Programa Porsche Track Experience</li>
          </ul>
        </div>

        <div className="text-center" id="motor">
          <h3 className="text-4xl font-bold mb-10">Motores incomparáveis</h3>
        </div>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 hover:bg-gray-800 cursor-pointer transition-all duration-300">
            <div className="text-4xl font-bold text-amber-500 mb-4">911</div>
            <h4 className="text-xl font-semibold mb-2">Boxer</h4>
            <p className="text-gray-400">6 cilindros</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 hover:bg-gray-800 cursor-pointer transition-all duration-300">
            <div className="text-4xl font-bold text-red-800 mb-4">SUVs</div>
            <h4 className="text-xl font-semibold mb-2">Opções V6 e V8</h4>
            <p className="text-gray-400">Cayenne e Panamera</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 hover:bg-gray-800 cursor-pointer transition-all duration-300">
            <div className="text-4xl font-bold text-amber-500 mb-4">Taycan</div>
            <h4 className="text-xl font-semibold mb-2">Elétrica</h4>
            <p className="text-gray-400">Performance e eficiência</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
