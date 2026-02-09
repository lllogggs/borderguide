import React from 'react';
import { Link } from 'react-router-dom';
import { Country } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const isVisaFree = country.visaStatus.includes('무비자');

  return (
    <Link 
      to={`/country/${country.id}`}
      className="group relative block w-full aspect-[3/4] overflow-hidden rounded-3xl bg-premium-card transition-all duration-500 hover:shadow-2xl hover:shadow-premium-accent/10"
    >
      {/* Background Image - Full Bleed */}
      <img 
        src={country.imageUrl} 
        alt={country.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 opacity-80 group-hover:opacity-90 transition-opacity" />
      
      {/* Active State Overlay (Darken slightly on hover) */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Badge: Status */}
      <div className="absolute top-4 left-4">
        <div className={`px-3 py-1.5 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider border flex items-center gap-1.5 shadow-lg
          ${isVisaFree 
            ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300' 
            : 'bg-amber-500/20 border-amber-500/30 text-amber-300'
          }`}
        >
          <div className={`w-1.5 h-1.5 rounded-full ${isVisaFree ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`} />
          {country.visaStatus}
        </div>
      </div>

      {/* Floating Action Button (Top Right) */}
      <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75">
        <div className="p-2 bg-white text-black rounded-full shadow-lg">
          <ArrowUpRight size={16} strokeWidth={3} />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-baseline gap-2 mb-1 opacity-80">
           <span className="text-xs font-medium tracking-widest uppercase text-premium-muted">{country.engName}</span>
        </div>
        <h2 className="text-3xl font-black text-white leading-none tracking-tight mb-2">
          {country.name}
        </h2>
        
        {/* Hidden Detail revealed on hover */}
        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
           <p className="text-sm text-gray-300 font-medium pt-2 border-t border-white/20 mt-2">
             {country.entryRequirement}
           </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;