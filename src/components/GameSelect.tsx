import { motion } from 'motion/react';

export const GameSelect = ({ onSelect }: { onSelect: (game: string) => void }) => {
  const games = [
    { id: 'blooket', name: 'Blooket', currency: 'Tokens', img: 'https://i.ibb.co/Swxr52Fd/tokens.png', color: 'from-blue-400 to-cyan-300', shadow: 'shadow-cyan-500/50' },
    { id: 'gimkit', name: 'Gimkit', currency: 'Gimbucks', img: 'https://i.postimg.cc/0j2HmbQT/GimBucks.webp', color: 'from-purple-600 to-pink-500', shadow: 'shadow-purple-500/50' },
    { id: 'prodigy', name: 'Prodigy Math', currency: 'Magicoins', img: 'https://i.postimg.cc/pd0qSSTz/Magicoin.webp', color: 'from-amber-400 to-orange-500', shadow: 'shadow-orange-500/50' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-white mb-12 text-center">Select Target Game</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {games.map((game, idx) => (
          <motion.button key={game.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} whileHover={{ scale: 1.05, y: -10 }} whileTap={{ scale: 0.95 }} onClick={() => onSelect(game.id)} className={`relative p-8 rounded-3xl bg-slate-900 border border-slate-700 shadow-xl hover:${game.shadow} transition-all group overflow-hidden flex flex-col items-center`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
            <img src={game.img} alt={game.name} className="w-32 h-32 object-contain mb-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
            <p className="text-slate-400 font-medium">Generate Free {game.currency}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
