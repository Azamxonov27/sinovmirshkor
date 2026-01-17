
import React from 'react';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import { DISTRICT_STATS, OFFICIALS, LANDMARKS, FAMOUS_PEOPLE } from './constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const economyData = [
  { name: 'Paxtachilik', value: 45 },
  { name: 'G\'allachilik', value: 35 },
  { name: 'Chorvachilik', value: 15 },
  { name: 'Sanoat', value: 5 },
];

const COLORS = ['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd'];

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="hero-gradient text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Mirishkor Tumani
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Qashqadaryo viloyatining serhosil va boy tarixga ega bo'lgan nufuzli tumanlaridan biri.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#about" className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-blue-50 transition">
              Batafsil ma'lumot
            </a>
            <div className="flex items-center gap-2 bg-blue-800/50 backdrop-blur px-6 py-3 rounded-full border border-blue-400/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Bugungi harorat: +28°C</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Quick Stats */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">Aholi soni</p>
            <p className="text-3xl font-bold text-blue-600">{DISTRICT_STATS.population}</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">Umumiy maydon</p>
            <p className="text-3xl font-bold text-blue-600">{DISTRICT_STATS.area}</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">Mahallalar</p>
            <p className="text-3xl font-bold text-blue-600">{DISTRICT_STATS.mahallas}</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
            <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">Iqtisodiyot</p>
            <p className="text-lg font-bold text-blue-600 leading-tight">Qishloq xo'jaligi</p>
          </div>
        </section>

        {/* Administration */}
        <section id="administration">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Tuman Ma'muriyati</h2>
              <div className="w-20 h-1 bg-blue-600 mt-2"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICIALS.map((off, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img src={off.image} alt={off.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{off.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{off.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Economy Chart */}
        <section id="economy" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-blue-50/50 p-8 rounded-[3rem]">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Iqtisodiy Ko'rsatkichlar</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mirishkor tumani asosan qishloq xo'jaligiga ixtisoslashgan hudud bo'lib, paxta va g'alla yetishtirishda viloyatda yetakchi o'rinlardan birini egallaydi. So'nggi yillarda sanoat va tadbirkorlik ham jadal rivojlanmoqda.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">✓</span>
                <span className="text-gray-700">Yirik tekstil klasterlari mavjud</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">✓</span>
                <span className="text-gray-700">Chorvachilik mahsulotlari eksporti</span>
              </li>
            </ul>
          </div>
          <div className="h-80 bg-white p-6 rounded-3xl shadow-xl">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={economyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  cursor={{ fill: '#f8fafc' }}
                />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {economyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Landmarks */}
        <section id="landmarks">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Tarixiy Yodgorliklar</h2>
            <p className="text-gray-500 mt-2">Mirishkorning qadimiy o'tmishidan so'zlovchi maskanlar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LANDMARKS.map((land, idx) => (
              <div key={idx} className="relative group rounded-3xl overflow-hidden shadow-lg h-96">
                <img src={land.image} alt={land.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{land.name}</h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {land.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Famous People */}
        <section id="famous" className="py-12">
          <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Mashhur Shaxslar</h2>
            <div className="flex flex-wrap justify-center gap-12">
              {FAMOUS_PEOPLE.map((person, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-blue-50 group-hover:ring-blue-200 transition">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
                  <p className="text-gray-500 text-sm max-w-xs">{person.contribution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">M</div>
              <span className="text-white text-xl font-bold">Mirishkor.uz</span>
            </div>
            <p className="text-sm leading-relaxed">
              Mirishkor tumani hokimligi rasmiy axborot portali. Tuman hayoti, yangiliklar va interaktiv xizmatlar.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Foydali havolalar</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">Hokimiyat qarorlari</a></li>
              <li><a href="#" className="hover:text-white transition">Ochiq ma'lumotlar</a></li>
              <li><a href="#" className="hover:text-white transition">Tuman xaritasi</a></li>
              <li><a href="#" className="hover:text-white transition">Elektron murojaat</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Bog'lanish</h4>
            <p className="text-sm mb-4">📍 Mirishkor tumani, Yangi Mirishkor shaharchasi, Mustaqillik ko'chasi, 1-uy</p>
            <p className="text-sm mb-2">📞 +998 (75) 123-45-67</p>
            <p className="text-sm">📧 info@mirishkor.uz</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs">
          © {new Date().getFullYear()} Mirishkor Tumani Hokimligi. Barcha huquqlar himoyalangan.
        </div>
      </footer>

      {/* AI Assistant Floating Widget */}
      <ChatBot />
    </div>
  );
};

export default App;
