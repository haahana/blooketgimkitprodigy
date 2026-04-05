import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LogOut, Gamepad2 } from 'lucide-react';
import { Landing } from './components/Landing';
import { GameSelect } from './components/GameSelect';
import { BlooketGenerator } from './components/BlooketGenerator';
import { GimkitGenerator } from './components/GimkitGenerator';
import { ProdigyGenerator } from './components/ProdigyGenerator';

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function App() {
  const [step, setStep] = useState<'landing' | 'game_select' | 'generator'>('landing');
  const [user, setUser] = useState<UserData | null>(null);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('eduboost_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setStep('game_select');
    }
  }, []);

  const handleProceed = (userData: UserData) => {
    setUser(userData);
    localStorage.setItem('eduboost_user', JSON.stringify(userData));
    setStep('game_select');
  };

  const handleGameSelect = (game: string) => {
    setSelectedGame(game);
    setStep('generator');
  };

  const handleLogout = () => {
    localStorage.removeItem('eduboost_user');
    setUser(null);
    setStep('landing');
    setSelectedGame(null);
  };

  return (
    <div className="font-sans antialiased min-h-screen bg-slate-50">
      {user && step !== 'landing' && (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105" onClick={() => setStep('game_select')}>
              <div className="bg-indigo-600 p-2 rounded-lg shadow-md shadow-indigo-600/20">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">EduBoost</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-white py-1.5 px-1.5 pr-4 rounded-full border border-slate-200 shadow-sm">
                <img 
                  src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=4f46e5&color=fff&bold=true`} 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full shadow-sm"
                />
                <span className="text-sm font-bold text-slate-700 hidden sm:block">{user.firstName} {user.lastName}</span>
              </div>
              <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all" title="Logout">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      )}
      
      <div className={user && step !== 'landing' ? "pt-16" : ""}>
        <AnimatePresence mode="wait">
          {step === 'landing' && (
            <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Landing onProceed={handleProceed} />
            </motion.div>
          )}
          {step === 'game_select' && (
            <motion.div key="game_select" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <GameSelect onSelect={handleGameSelect} />
            </motion.div>
          )}
          {step === 'generator' && selectedGame === 'blooket' && (
            <motion.div key="blooket" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <BlooketGenerator />
            </motion.div>
          )}
          {step === 'generator' && selectedGame === 'gimkit' && (
            <motion.div key="gimkit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <GimkitGenerator />
            </motion.div>
          )}
          {step === 'generator' && selectedGame === 'prodigy' && (
            <motion.div key="prodigy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ProdigyGenerator />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
