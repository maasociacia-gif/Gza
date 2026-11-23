import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export interface ServiceItem {
  id: string;
  name: string;
  tag: string;
  desc: string;
  color: string;
  tagBg: string;
  tagColor: string;
  borderColor: string;
  comingSoon?: boolean;
}

interface SendMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService?: (serviceId: string) => void;
  services?: ServiceItem[];
  bottomNavHeight?: number;
}

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: 'moneygram',
    name: 'MoneyGram',
    tag: 'პოპულარული',
    desc: 'სწრაფი გზავნილები Cash / Bank',
    color: 'bg-red-600 hover:bg-red-500 text-white',
    tagBg: 'bg-red-500/15',
    tagColor: 'text-red-300',
    borderColor: 'border-red-500/30 hover:border-red-400/60 bg-red-500/[0.04]',
  },
  {
    id: 'western-union',
    name: 'Western Union',
    tag: 'ახალი',
    desc: 'გლობალური ქსელი Cash / Bank',
    color: 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold',
    tagBg: 'bg-amber-500/15',
    tagColor: 'text-amber-300',
    borderColor: 'border-amber-500/30 hover:border-amber-400/60 bg-amber-500/[0.04]',
  },
  {
    id: 'profee',
    name: 'Profee',
    tag: 'ყველაზე იაფი ბარათზე',
    desc: 'პირდაპირ ქართულ ბარათზე',
    color: 'bg-emerald-600 hover:bg-emerald-500 text-white',
    tagBg: 'bg-emerald-500/15',
    tagColor: 'text-emerald-300',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400/60 bg-emerald-500/[0.04]',
  },
  {
    id: 'wise',
    name: 'Wise',
    tag: 'საუკეთესო კურსი',
    desc: 'ოფიციალური შუა-საბაზრო კურსი',
    color: 'bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold',
    tagBg: 'bg-sky-500/15',
    tagColor: 'text-sky-300',
    borderColor: 'border-sky-500/30 hover:border-sky-400/60 bg-sky-500/[0.04]',
  },
  {
    id: 'paysend',
    name: 'Paysend',
    tag: 'Card to Card',
    desc: 'მომენტალური გადარიცხვა',
    color: 'bg-purple-600 hover:bg-purple-500 text-white',
    tagBg: 'bg-purple-500/15',
    tagColor: 'text-purple-300',
    borderColor: 'border-purple-500/30 hover:border-purple-400/60 bg-purple-500/[0.04]',
  },
  {
    id: 'currency-exchange',
    name: 'ფულის გადაცვლა',
    tag: '*მალე',
    desc: 'ვალუტის კონვერტაცია მალე დაემატება',
    color: 'bg-slate-700/70 text-slate-400 cursor-not-allowed',
    tagBg: 'bg-amber-500/15',
    tagColor: 'text-amber-300',
    borderColor: 'border-slate-700/80 bg-slate-800/40 opacity-85',
    comingSoon: true,
  },
];

export const SendMoneyModal: React.FC<SendMoneyModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  services = DEFAULT_SERVICES,
  bottomNavHeight = 68,
}) => {
  const [comingSoonMsg, setComingSoonMsg] = useState<string | null>(null);

  if (!isOpen || typeof document === 'undefined') return null;

  const handleServiceClick = (item: ServiceItem) => {
    if (item.comingSoon) {
      setComingSoonMsg(`${item.name} (*მალე) — ეს ფუნქცია მალე ჩაირთვება.`);
      return;
    }
    setComingSoonMsg(null);
    if (onSelectService) onSelectService(item.id);
    onClose();
  };

  return createPortal(
    <div
      style={{ paddingBottom: `${bottomNavHeight + 10}px` }}
      className="fixed inset-0 z-40 flex items-end sm:items-center justify-center bg-black/65 backdrop-blur-xs px-3 pt-3 transition-opacity"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div
        style={{ maxHeight: `calc(100vh - ${bottomNavHeight + 28}px)` }}
        className="relative z-10 w-full max-w-xl overflow-y-auto bg-[#121b24] border border-slate-700/80 text-slate-100 rounded-t-2xl sm:rounded-2xl p-4 shadow-2xl transition-transform animate-in fade-in slide-in-from-bottom duration-200"
      >
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-800">
          <h2 className="text-base sm:text-lg font-bold text-white">ფულის გაგზავნა</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="დახურვა"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {services.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between p-3 rounded-xl border transition-all ${item.borderColor}`}
            >
              <div>
                <span
                  className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold mb-1.5 ${item.tagBg} ${item.tagColor}`}
                >
                  {item.tag}
                </span>
                <h3 className="text-sm font-extrabold text-white leading-snug mb-0.5">
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate-300/85 mb-2.5 min-h-[28px] leading-snug">
                  {item.desc}
                </p>
              </div>

              <button
                type="button"
                disabled={item.comingSoon}
                onClick={() => handleServiceClick(item)}
                className={`w-full py-1.5 px-2.5 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 transition-colors ${item.color}`}
              >
                {item.comingSoon ? (
                  <span>*მალე</span>
                ) : (
                  <>
                    <span>გაგზავნა</span>
                    <span aria-hidden="true">➔</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {comingSoonMsg && (
          <div className="mt-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-[11px] text-amber-200">
            {comingSoonMsg}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default SendMoneyModal;