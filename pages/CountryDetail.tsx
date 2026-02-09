import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COUNTRIES } from '../constants';
import { Clock, Zap, Coins, Plane, CheckCircle2, AlertTriangle, FileText, ExternalLink, Calendar, MapPin, BedDouble, ChevronLeft } from 'lucide-react';
import { Country } from '../types';

const CountryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'entry' | 'city' | 'hotel'>('entry');
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const found = COUNTRIES.find(c => c.id === id);
    if (found) {
      setCountry(found);
    }
    window.scrollTo(0,0);
  }, [id]);

  if (!country) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  // Helper for quick stats
  const StatItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex flex-col items-center justify-center p-4 border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-2 mb-1 text-premium-muted">
        <Icon size={14} />
        <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
      </div>
      <span className="text-white font-semibold text-sm">{value}</span>
    </div>
  );

  return (
    <div className="bg-premium-dark min-h-screen pb-20">
      
      {/* 1. Immersive Hero */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src={country.imageUrl} 
          alt={country.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-dark via-premium-dark/50 to-transparent" />
        
        {/* Back Button */}
        <Link to="/" className="absolute top-24 left-6 md:left-10 p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all">
          <ChevronLeft size={24} />
        </Link>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <span className="text-6xl md:text-8xl mr-4 drop-shadow-2xl inline-block transform hover:scale-110 transition-transform duration-300 cursor-default">{country.flag}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mt-2">
              {country.name}
            </h1>
            <p className="text-xl text-premium-muted font-medium mt-2 tracking-widest uppercase">{country.engName}</p>
          </div>
        </div>
      </div>

      {/* 2. Stats & Tabs Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        
        {/* Quick Stats Bar (Glassmorphism) */}
        <div className="bg-premium-card/80 backdrop-blur-xl rounded-2xl border border-white/5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 shadow-2xl mb-8">
          <StatItem icon={Clock} label="Time" value={country.timeDiff} />
          <StatItem icon={Zap} label="Voltage" value={country.voltage} />
          <StatItem icon={Coins} label="Currency" value={country.currency} />
          <StatItem icon={Plane} label="Flight" value={country.flightTime} />
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-white/10 mb-8">
          <div className="flex gap-8">
            {[
              { id: 'entry', label: 'Entry Guide' },
              { id: 'city', label: 'City Tips' },
              { id: 'hotel', label: 'Hotels' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-2 border-b-2 font-bold text-sm tracking-widest uppercase transition-colors ${
                  activeTab === tab.id 
                    ? 'border-premium-accent text-white' 
                    : 'border-transparent text-premium-muted hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Content Area */}
        {activeTab === 'entry' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in-up">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Visa Status Card */}
              <div className="bg-premium-card rounded-3xl p-8 border border-white/5 relative overflow-hidden">
                <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-20 ${country.visaStatus.includes('무비자') ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className={`p-2 rounded-lg ${country.visaStatus.includes('무비자') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                    <CheckCircle2 size={20} />
                  </span>
                  Visa Requirement
                </h2>

                <div className="space-y-6">
                  {/* Status Big Text */}
                  <div>
                    <h3 className={`text-3xl md:text-4xl font-black ${country.visaDetailTitle.includes('FREE') ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {country.visaDetailTitle}
                    </h3>
                    <p className="text-premium-muted mt-2 leading-relaxed text-lg">
                      {country.visaDetailDesc}
                    </p>
                  </div>

                  {/* Passport Bar */}
                  <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between text-xs font-bold text-premium-muted mb-2 uppercase tracking-wide">
                      <span>Passport Validity</span>
                      <span className="text-white">6 Months+</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-premium-accent w-3/4 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-premium-card rounded-3xl p-8 border border-white/5">
                <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-white/5 text-white">
                    <Calendar size={20} />
                  </span>
                  Timeline
                </h2>

                <div className="space-y-8 relative pl-4">
                  <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-white/10" />
                  
                  {country.timeline.map((step, index) => (
                    <div key={index} className="relative pl-10">
                      <div className="absolute left-3 top-1.5 w-3 h-3 rounded-full bg-premium-dark border-2 border-premium-accent z-10 shadow-[0_0_0_4px_rgba(30,41,59,1)]" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                        <div>
                          <span className="inline-block text-premium-accent text-xs font-bold mb-1 uppercase tracking-wider">
                            {step.day}
                          </span>
                          <h3 className="text-lg font-bold text-white mb-1">
                            {step.label}
                          </h3>
                          <p className="text-premium-muted text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>

                        {step.actionLabel && (
                          <a 
                            href={step.actionUrl} 
                            className="self-start sm:self-center shrink-0 px-4 py-2 bg-white text-black font-bold text-xs rounded-full hover:bg-premium-accent hover:text-white transition-all"
                            onClick={(e) => e.preventDefault()}
                          >
                            {step.actionLabel}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="space-y-6">
              
              {/* Alerts */}
              <div className="bg-rose-500/10 rounded-3xl p-6 border border-rose-500/20">
                <h3 className="text-rose-400 font-bold flex items-center gap-2 mb-4">
                  <AlertTriangle size={20} />
                  Alerts
                </h3>
                <ul className="space-y-3">
                  {country.alerts.map((alert, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-rose-200/80 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      {alert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Checklist */}
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-6 border border-white/5 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-4 text-white">Checklist</h3>
                  <div className="space-y-3">
                    {['여권 사본 저장', '숙소 바우처', '리턴 티켓'].map((item, idx) => (
                      <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center group-hover:border-premium-accent transition-colors">
                          <div className="w-3 h-3 bg-premium-accent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm font-medium text-premium-muted group-hover:text-white transition-colors">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
        
        {/* Placeholders for other tabs */}
        {activeTab !== 'entry' && (
           <div className="py-20 text-center text-premium-muted bg-premium-card rounded-3xl border border-white/5">
             <p className="text-lg">Preparing {activeTab === 'city' ? 'City Guide' : 'Hotel'} content...</p>
           </div>
        )}

      </div>
    </div>
  );
};

export default CountryDetail;