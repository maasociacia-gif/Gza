import React, { useState } from 'react';
import { Globe, Bell, LogOut, ChevronRight, Shield, Sun, Moon, Laptop } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme, type Theme } from '@/context/ThemeContext';

type LangCode = 'ka' | 'en' | 'de';

const translations: Record<LangCode, Record<string, string>> = {
  ka: {
    title: 'პარამეტრები', subtitle: 'Settings',
    language: 'ენა / LANGUAGE',
    notifications: 'შეტყობინებები / NOTIFICATIONS',
    pushNotif: 'შეტყობინებები', pushNotifSub: 'Push Notifications',
    docExpiry: 'დოკუმენტის ვადა', docExpirySub: 'Document Expiry Reminder',
    emergency: 'გადაუდებელი გაფრთხილება', emergencySub: 'Emergency Alerts',
    theme: 'გარეგნობა / APPEARANCE',
    themeDark: 'მუქი', themeLight: 'ნათელი', themeAuto: 'ავტო',
    logout: 'გასვლა', logoutSub: 'Logout',
    version: 'Gza App Version 1.0.0',
  },
  en: {
    title: 'Settings', subtitle: 'პარამეტრები',
    language: 'LANGUAGE', notifications: 'NOTIFICATIONS',
    pushNotif: 'Notifications', pushNotifSub: 'Push Notifications',
    docExpiry: 'Document Expiry', docExpirySub: 'Document Expiry Reminder',
    emergency: 'Emergency Alerts', emergencySub: 'Critical warnings',
    theme: 'APPEARANCE',
    themeDark: 'Dark', themeLight: 'Light', themeAuto: 'Auto',
    logout: 'Logout', logoutSub: 'გასვლა',
    version: 'Gza App Version 1.0.0',
  },
  de: {
    title: 'Einstellungen', subtitle: 'პარამეტრები',
    language: 'SPRACHE', notifications: 'BENACHRICHTIGUNGEN',
    pushNotif: 'Benachrichtigungen', pushNotifSub: 'Push-Benachrichtigungen',
    docExpiry: 'Dokumentablauf', docExpirySub: 'Erinnerung an Dokumentablauf',
    emergency: 'Notfallwarnung', emergencySub: 'Kritische Warnungen',
    theme: 'ERSCHEINUNGSBILD',
    themeDark: 'Dunkel', themeLight: 'Hell', themeAuto: 'Auto',
    logout: 'Abmelden', logoutSub: 'გასვლა',
    version: 'Gza App Version 1.0.0',
  },
};

export function SettingsView() {
  const { theme, setTheme, isDark, colors } = useTheme();
  const [language, setLanguage] = useState<LangCode>('ka');
  const [langOpen, setLangOpen] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [docReminders, setDocReminders] = useState(true);
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);

  const t = translations[language];
  const languages = [
    { code: 'ka' as LangCode, label: 'ქართული', flag: 'GE' },
    { code: 'en' as LangCode, label: 'English', flag: 'GB' },
    { code: 'de' as LangCode, label: 'Deutsch', flag: 'DE' },
  ];
  const themeOptions: { value: Theme; icon: React.ReactNode; label: string }[] = [
    { value: 'dark', icon: <Moon size={15} />, label: t.themeDark },
    { value: 'light', icon: <Sun size={15} />, label: t.themeLight },
    { value: 'auto', icon: <Laptop size={15} />, label: t.themeAuto },
  ];
  const currentLang = languages.find(l => l.code === language)!;

  const cardShadow = isDark
    ? '0 2px 0 rgba(255,255,255,0.06), 0 6px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)'
    : `${colors.shadow}, inset 0 1px 0 rgba(255,255,255,0.9)`;

  const sectionLabel = (text: string) => (
    <p className="mb-2" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.2px', color: colors.textMuted }}>
      {text}
    </p>
  );

  return (
    <div className="min-h-screen w-full pb-24 transition-colors duration-300" style={{ backgroundColor: colors.bg }}>

      <div className="px-4 pt-6 pb-4">
        <h1 className="m-0" style={{ fontSize: '24px', fontWeight: '700', color: colors.text }}>{t.title}</h1>
        <p className="m-0 mt-1" style={{ fontSize: '13px', color: colors.textSub }}>{t.subtitle}</p>
      </div>

      {/* ენა */}
      <div className="px-4 mb-5">
        {sectionLabel(t.language)}
        <div className="relative">
          <motion.button
            onClick={() => setLangOpen(!langOpen)}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl border-0 cursor-pointer"
            style={{ backgroundColor: colors.card, boxShadow: cardShadow, border: `1px solid ${colors.borderStrong}` }}
          >
            <span className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: '#DC143C', boxShadow: '0 2px 8px rgba(220,20,60,0.5)' }}>
              {currentLang.flag}
            </span>
            <span className="flex-1 text-left font-medium" style={{ fontSize: '15px', color: colors.text }}>
              {currentLang.label}
            </span>
            <motion.div animate={{ rotate: langOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronRight size={18} style={{ color: colors.textSub, transform: 'rotate(90deg)' }} />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scaleY: 0.92 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -8, scaleY: 0.92 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 right-0 z-50 rounded-2xl overflow-hidden mt-2"
                style={{
                  backgroundColor: colors.card, transformOrigin: 'top',
                  boxShadow: isDark ? '0 8px 40px rgba(0,0,0,0.7)' : '0 8px 40px rgba(13,27,42,0.2)',
                  border: `1px solid ${colors.borderStrong}`,
                }}
              >
                {languages.map((lang, index) => (
                  <motion.button key={lang.code}
                    onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center gap-3 px-4 py-4 border-0 cursor-pointer transition-all"
                    style={{
                      backgroundColor: language === lang.code ? 'rgba(220,20,60,0.08)' : 'transparent',
                      borderBottom: index < languages.length - 1 ? `1px solid ${colors.border}` : 'none',
                    }}
                  >
                    <span className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{
                        backgroundColor: language === lang.code ? '#DC143C' : 'rgba(220,20,60,0.2)',
                        boxShadow: language === lang.code ? '0 2px 8px rgba(220,20,60,0.5)' : 'none',
                      }}>
                      {lang.flag}
                    </span>
                    <span className="flex-1 text-left font-medium" style={{ fontSize: '15px', color: colors.text }}>
                      {lang.label}
                    </span>
                    {language === lang.code && (
                      <div className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#DC143C', boxShadow: '0 2px 8px rgba(220,20,60,0.5)' }}>
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* თემა */}
      <div className="px-4 mb-5">
        {sectionLabel(t.theme)}
        <div className="flex gap-2 p-1.5 rounded-2xl"
          style={{ backgroundColor: colors.card, boxShadow: cardShadow, border: `1px solid ${colors.borderStrong}` }}>
          {themeOptions.map(opt => {
            const active = theme === opt.value;
            return (
              <motion.button key={opt.value} onClick={() => setTheme(opt.value)}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex flex-col items-center gap-1 py-3 rounded-xl border-0 cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor: active ? '#DC143C' : 'transparent',
                  color: active ? '#FFFFFF' : colors.textSub,
                  boxShadow: active ? colors.shadowRaised : 'none',
                  border: active ? '1px solid rgba(255,255,255,0.15)' : '1px solid transparent',
                }}
              >
                {opt.icon}
                <span style={{ fontSize: '11px', fontWeight: '700' }}>{opt.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* შეტყობინებები */}
      <div className="px-4 mb-5">
        {sectionLabel(t.notifications)}
        <div className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: colors.card, boxShadow: cardShadow, border: `1px solid ${colors.borderStrong}` }}>
          {[
            { icon: <Bell size={17} style={{ color: '#DC143C' }} />, bg: 'rgba(220,20,60,0.15)', label: t.pushNotif, sub: t.pushNotifSub, value: notifications, set: setNotifications },
            { icon: <Shield size={17} style={{ color: '#4A90E2' }} />, bg: 'rgba(74,144,226,0.15)', label: t.docExpiry, sub: t.docExpirySub, value: docReminders, set: setDocReminders },
            { icon: <Globe size={17} style={{ color: '#43E97B' }} />, bg: 'rgba(67,233,123,0.15)', label: t.emergency, sub: t.emergencySub, value: emergencyAlerts, set: setEmergencyAlerts },
          ].map((item, i, arr) => (
            <div key={i} className="flex items-center gap-3 px-4 py-4"
              style={{ borderBottom: i < arr.length - 1 ? `1px solid ${colors.border}` : 'none' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: item.bg }}>{item.icon}</div>
              <div className="flex-1">
                <p className="m-0 font-medium" style={{ fontSize: '15px', color: colors.text }}>{item.label}</p>
                <p className="m-0" style={{ fontSize: '12px', color: colors.textSub }}>{item.sub}</p>
              </div>
              <Toggle value={item.value} onChange={item.set} />
            </div>
          ))}
        </div>
      </div>

      {/* გასვლა */}
      <div className="px-4">
        <motion.button whileTap={{ scale: 0.97 }}
          className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl border-0 cursor-pointer"
          style={{
            backgroundColor: 'rgba(220,20,60,0.1)',
            border: '1px solid rgba(220,20,60,0.35)',
            boxShadow: '0 3px 0 rgba(140,0,20,0.4), 0 6px 20px rgba(220,20,60,0.15)',
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'rgba(220,20,60,0.2)' }}>
            <LogOut size={17} style={{ color: '#DC143C' }} />
          </div>
          <div className="flex-1 text-left">
            <p className="m-0 font-medium" style={{ fontSize: '15px', color: colors.text }}>{t.logout}</p>
            <p className="m-0" style={{ fontSize: '12px', color: colors.textSub }}>{t.logoutSub}</p>
          </div>
          <ChevronRight size={17} style={{ color: '#DC143C' }} />
        </motion.button>
      </div>

      <div className="px-4 mt-8 text-center">
        <p className="m-0" style={{ fontSize: '12px', color: colors.textMuted }}>{t.version}</p>
      </div>
    </div>
  );
}

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!value)} className="relative flex-shrink-0"
      style={{
        width: '48px', height: '28px', borderRadius: '14px',
        backgroundColor: value ? '#DC143C' : 'rgba(128,128,128,0.25)',
        border: 'none', cursor: 'pointer', transition: 'background-color 0.2s',
        boxShadow: value
          ? '0 2px 0 rgba(140,0,20,0.7), 0 4px 12px rgba(220,20,60,0.4)'
          : '0 2px 0 rgba(0,0,0,0.3), inset 0 1px 3px rgba(0,0,0,0.2)',
      }}
    >
      <div style={{
        position: 'absolute', top: '3px', left: value ? '23px' : '3px',
        width: '22px', height: '22px', borderRadius: '11px',
        backgroundColor: 'white', transition: 'left 0.2s',
        boxShadow: '0 2px 6px rgba(0,0,0,0.35)',
      }} />
    </button>
  );
}