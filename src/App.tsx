/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Waves, 
  Trophy, 
  Clock, 
  MapPin, 
  Calendar, 
  Search,
  Globe,
  Edit2,
  Check,
  X
} from 'lucide-react';
import { SWIMMING_RECORDS, SwimRecord } from './data';

type Gender = 'men' | 'women';

export default function App() {
  const [gender, setGender] = useState<Gender>('men');
  const [searchQuery, setSearchQuery] = useState('');
  const [discipline, setDiscipline] = useState('All');
  const [localRecords, setLocalRecords] = useState(SWIMMING_RECORDS);

  const currentRecords = localRecords[gender];
  const disciplines = ['All', 'Freestyle', 'Butterfly'];

  const filteredRecords = currentRecords.filter(record => {
    const matchesSearch = record.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.athlete.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.nationality.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDiscipline = discipline === 'All' || record.event.includes(discipline);
    
    return matchesSearch && matchesDiscipline;
  });

  const handleUpdateAthlete = (id: string, newName: string) => {
    setLocalRecords(prev => ({
      ...prev,
      [gender]: prev[gender].map(r => r.id === id ? { ...r, athlete: newName } : r)
    }));
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      {/* Header Navigation */}
      <header className="h-20 bg-blue-800 shrink-0 flex items-center justify-between px-6 md:px-10 shadow-md z-20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
            <Waves size={24} className="text-blue-800" />
          </div>
          <span className="text-white font-bold text-2xl tracking-tight uppercase">AquaStats</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-blue-100 font-medium uppercase text-[10px] tracking-widest">
          <a href="#" className="text-white border-b-2 border-white pb-1 transition-colors">Elite Performers</a>
          <a href="#" className="hover:text-white transition-colors">NCAA / SCY</a>
          <a href="#" className="hover:text-white transition-colors">World Aquatics</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </nav>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 bg-white border-r border-slate-200 flex-col shrink-0">
          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Course</h3>
              <div className="flex flex-col space-y-2">
                <button className="text-left px-4 py-2 bg-blue-50 text-blue-700 font-bold text-xs rounded-sm border-l-4 border-blue-600 transition-all">
                  Short Course Yards (25y)
                </button>
                <button className="text-left px-4 py-2 text-slate-500 hover:bg-slate-50 text-xs font-semibold rounded-sm transition-colors opacity-50 cursor-not-allowed">
                  Long Course (50m)
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Focus Discipline</h3>
              <div className="flex flex-col space-y-1">
                {disciplines.map(d => (
                  <button 
                    key={d}
                    onClick={() => setDiscipline(d)}
                    className={`text-left px-4 py-2 text-xs font-bold transition-colors rounded-sm ${
                      discipline === d ? 'text-blue-600 bg-blue-50/50' : 'text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <div className="p-4 bg-slate-900 rounded-sm text-white space-y-4">
                <div>
                  <h4 className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-2">Search Database</h4>
                  <div className="relative group">
                    <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input 
                      type="text" 
                      placeholder="Quick filter..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-800 border-none text-[10px] font-bold py-2 pl-9 pr-3 rounded-sm focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-2">Active Filters</h4>
                  <div className="text-[10px] text-slate-400 font-medium">
                    {discipline !== 'All' && (
                      <div className="flex items-center justify-between mb-1">
                        <span>Stroke:</span>
                        <span className="text-white">{discipline}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span>Course:</span>
                      <span className="text-white">SCY (25y)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto p-8 bg-slate-50 border-t border-slate-200">
            <p className="text-[9px] text-slate-400 leading-tight uppercase font-black tracking-wider">
              Featuring:<br/>Gretchen Walsh<br/>Caeleb Dressel
            </p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col bg-white overflow-hidden p-6 md:p-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 border-b-4 border-blue-800 pb-4 shrink-0 gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase leading-none mb-2">
                Top Performances
              </h1>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                Featuring the Fastest {gender === 'men' ? "Men" : "Women"} in Swimming history <span className="text-blue-600 block sm:inline">• Short Course Yards</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  (e.currentTarget.querySelector('input') as HTMLInputElement)?.blur();
                }}
                className="relative w-full sm:w-72 group"
              >
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search athlete, event, or country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-300 text-xs font-bold py-2.5 pl-9 pr-10 rounded-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400 placeholder:font-medium shadow-sm"
                />
                {searchQuery && (
                  <button 
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </form>
              <div className="flex space-x-2 shrink-0">
                <GenderToggle active={gender === 'men'} label="MEN" onClick={() => setGender('men')} />
                <GenderToggle active={gender === 'women'} label="WOMEN" onClick={() => setGender('women')} />
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 overflow-hidden border border-slate-200 shadow-sm rounded-sm">
            <div className="grid grid-cols-12 bg-slate-100 text-[9px] font-black text-slate-500 uppercase tracking-widest p-4 border-b border-slate-200 shrink-0">
              <div className="col-span-3 md:col-span-2">Event</div>
              <div className="col-span-2">Time</div>
              <div className="col-span-7 md:col-span-4">Athlete (Click to edit)</div>
              <div className="hidden md:block md:col-span-2">Date</div>
              <div className="hidden md:block md:col-span-2 text-right">Location</div>
            </div>
            
            <div className="flex-1 overflow-y-auto no-scrollbar divide-y divide-slate-100 bg-white">
              <AnimatePresence mode="popLayout">
                {filteredRecords.map((record, index) => (
                  <RecordRow 
                    key={record.id} 
                    record={record} 
                    index={index}
                    onUpdateAthlete={handleUpdateAthlete}
                  />
                ))}
              </AnimatePresence>

              {filteredRecords.length === 0 && (
                <div className="p-20 text-center">
                  <Search size={40} className="mx-auto text-slate-200 mb-4" />
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">No matching results</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0">
            <div className="md:col-span-2 bg-slate-900 text-white p-5 rounded-sm flex items-center justify-between group overflow-hidden relative border-l-4 border-blue-500">
              <div className="relative z-10">
                <h4 className="text-blue-400 uppercase text-[9px] font-black tracking-widest mb-1">Elite Focus</h4>
                <p className="text-xl md:text-2xl font-black group-hover:text-blue-200 transition-colors">
                  {gender === 'men' ? "Caeleb Dressel" : "Gretchen Walsh"}
                </p>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-tight">
                   American Record Holders • SCY Dominance
                </p>
              </div>
              <div className="text-right border-l border-slate-700 pl-6 relative z-10">
                <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Status</p>
                <div className="text-xl md:text-2xl font-black text-blue-500 uppercase">Legends</div>
              </div>
            </div>
            
            <div className="bg-blue-600 p-5 rounded-sm text-white flex flex-col justify-center items-center shadow-lg">
              <span className="text-3xl md:text-4xl font-black">{filteredRecords.length}</span>
              <span className="text-[9px] uppercase font-black tracking-widest mt-1 opacity-80">Visible Entries</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function GenderToggle({ active, label, onClick }: { active: boolean, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-1.5 text-[10px] font-black rounded-full transition-all tracking-widest ${
        active 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-600'
      }`}
    >
      {label}
    </button>
  );
}

interface RecordRowProps {
  record: SwimRecord;
  index: number;
  onUpdateAthlete: (id: string, name: string) => void;
  key?: string | number;
}

function RecordRow({ record, index, onUpdateAthlete }: RecordRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(record.athlete);

  useEffect(() => {
    setEditValue(record.athlete);
  }, [record.athlete]);

  const handleSubmit = () => {
    onUpdateAthlete(record.id, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(record.athlete);
    setIsEditing(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.02 }}
      className={`grid grid-cols-12 p-4 items-center group transition-colors hover:bg-blue-50/50 ${
        index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
      }`}
    >
      <div className="col-span-3 md:col-span-2 font-black text-blue-800 text-xs md:text-sm">
        {record.event.split(' (')[0]}
      </div>
      <div className="col-span-2 font-mono text-base md:text-lg font-black tracking-tighter text-slate-900">
        {record.time}
      </div>
      <div className="col-span-7 md:col-span-4 flex items-center space-x-3">
        <div className={`w-2 h-2 rounded-sm shrink-0 ${index === 0 ? 'bg-yellow-400' : 'bg-blue-400'}`} />
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                autoFocus
                className="w-full bg-blue-50 border border-blue-200 text-xs font-black p-1 uppercase rounded outline-none ring-1 ring-blue-500"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSubmit();
                  if (e.key === 'Escape') handleCancel();
                }}
              />
              <button onClick={handleSubmit} className="text-green-600 p-1 hover:bg-green-50 rounded">
                <Check size={14} />
              </button>
              <button onClick={handleCancel} className="text-red-600 p-1 hover:bg-red-50 rounded">
                <X size={14} />
              </button>
            </div>
          ) : (
            <div 
              className="group/name flex items-center gap-2 cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <div className="font-black text-xs md:text-sm uppercase tracking-tight truncate">
                {record.athlete}
              </div>
              <Edit2 size={10} className="text-slate-300 opacity-0 group-hover/name:opacity-100 transition-opacity" />
            </div>
          )}
          <div className="text-[9px] font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1">
             {record.nationality}
          </div>
        </div>
      </div>
      <div className="hidden md:block md:col-span-2 text-slate-500 font-bold text-[10px] uppercase">
        {new Date(record.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
      </div>
      <div className="hidden md:block md:col-span-2 text-right text-slate-400 font-semibold text-[10px] uppercase leading-tight">
        {record.location}
      </div>
    </motion.div>
  );
}

