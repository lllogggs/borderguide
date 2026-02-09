import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { COUNTRIES } from '../constants';
import CountryCard from '../components/CountryCard';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = COUNTRIES.filter(country => 
    country.name.includes(searchTerm) || 
    country.engName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Modern Typography Hero Section */}
      <section className="relative pt-32 pb-10 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 animate-fade-in-up">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 rounded-full border border-premium-accent/30 text-premium-accent text-xs font-bold bg-premium-accent/5 backdrop-blur-sm flex items-center gap-1.5">
                <Sparkles size={12} />
                <span>2026 VISA GUIDE</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
              Travel <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Without</span> <br/>
              Borders.
            </h1>
          </div>
          
          <div className="w-full md:w-auto">
            <p className="text-premium-muted text-sm md:text-base mb-6 max-w-xs leading-relaxed">
              대한민국 여권으로 떠나는 가장 자유로운 여행. <br/>
              전 세계 입국 규정을 한눈에 확인하세요.
            </p>
            
            {/* Minimal Search Input */}
            <div className="relative group w-full md:w-80">
              <input 
                type="text" 
                placeholder="Where to next?" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-premium-card/50 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-premium-accent/50 focus:bg-premium-card transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-premium-accent transition-colors" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-4 pb-24 w-full max-w-7xl mx-auto">
        {filteredCountries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCountries.map((country) => (
              <div key={country.id} className="animate-fade-in-up">
                <CountryCard country={country} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
             <p className="text-premium-muted text-lg">찾으시는 국가가 없습니다.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;