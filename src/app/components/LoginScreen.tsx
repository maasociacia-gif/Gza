import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export function LoginScreen() {
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError('');
    setLoading(true);
    try {
      const { error } = isLogin
        ? await signIn(email, password)
        : await signUp(email, password);
      if (error) setError(error.message);
    } catch (e) {
      setError('დაფიქსირდა შეცდომა');
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    const { error } = await signInWithGoogle();
    if (error) setError(error.message);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: '#0f0f0f' }}>
      
      {/* Logo */}
      <div className="mb-6 flex flex-col items-center text-center">
        <img 
          src="/logo.png" 
          alt="Gza Logo" 
          className="w-44 h-auto object-contain mb-1" 
        />
        <p className="text-gray-400 text-sm">ემიგრანტების პლატფორმა</p>
      </div>

      {/* Toggle */}
      <div className="flex bg-white/10 rounded-full p-1 mb-8 w-full max-w-xs">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${
            isLogin ? 'bg-white text-black' : 'text-gray-400'
          }`}>
          შესვლა
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${
            !isLogin ? 'bg-white text-black' : 'text-gray-400'
          }`}>
          რეგისტრაცია
        </button>
      </div>

      {/* Form */}
      <div className="w-full max-w-xs space-y-3">
        <input
          type="email"
          placeholder="ელ-ფოსტა"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full bg-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30 text-sm"
        />
        <input
          type="password"
          placeholder="პაროლი"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full bg-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/30 text-sm"
        />

        {error && (
          <p className="text-red-400 text-xs text-center">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-white text-black font-semibold py-3 rounded-xl text-sm hover:bg-gray-100 transition-all disabled:opacity-50">
          {loading ? '...' : isLogin ? 'შესვლა' : 'რეგისტრაცია'}
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6 w-full max-w-xs">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-gray-500 text-xs">ან</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Social */}
      <div className="w-full max-w-xs space-y-3">
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 text-white py-3 rounded-xl text-sm transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google-ით შესვლა
        </button>

        <button
          onClick={() => {/* Facebook later */}}
          className="w-full flex items-center justify-center gap-3 bg-[#1877F2]/20 hover:bg-[#1877F2]/30 text-white py-3 rounded-xl text-sm transition-all">
          <svg width="18" height="18" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook-ით შესვლა
        </button>
      </div>
    </div>
  );
}