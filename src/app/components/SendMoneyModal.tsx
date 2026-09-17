import React from 'react';
import { createPortal } from 'react-dom';

interface SendMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService?: (serviceId: string) => void;
}

const SERVICES = [
  {
    id: 'moneygram',
    name: 'MoneyGram',
    tag: 'პოპულარული',
    desc: 'სწრაფი გზავნილები Cash / Bank',
    color: 'bg-red-600 hover:bg-red-700',
    tagBg: 'bg-red-100',
    tagColor: 'text-red-700',
    borderColor: 'border-red-200 hover:border-red-500',
  },
  {
    id: 'profee',
    name: 'Profee',
    tag: 'ყველაზე იაფი ბარათზე',
    desc: 'პირდაპირ ქართულ ბარათზე',
    color: 'bg-emerald-600 hover:bg-emerald-700',
    tagBg: 'bg-emerald-100',
    tagColor: 'text-emerald-700',
    borderColor: 'border-emerald-200 hover:border-emerald-500',
  },
  {
    id: 'wise',
    name: 'Wise',
    tag: 'საუკეთესო კურსი',
    desc: 'ოფიციალური შუა-საბაზრო კურსი',
    color: 'bg-sky-500 hover:bg-sky-600',
    tagBg: 'bg-sky-100',
    tagColor: 'text-sky-700',
    borderColor: 'border-sky-200 hover:border-sky-500',
  },
  {
    id: 'paysend',
    name: 'Paysend',
    tag: 'Card to Card',
    desc: 'მომენტალური გადარიცხვა',
    color: 'bg-purple-600 hover:bg-purple-700',
    tagBg: 'bg-purple-100',
    tagColor: 'text-purple-700',
    borderColor: 'border-purple-200 hover:border-purple-500',
  },
];

export const SendMoneyModal: React.FC<SendMoneyModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
      {/* Overlay backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Bottom Sheet Card */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl transition-transform animate-in fade-in slide-in-from-bottom duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">ფულის გაგზავნა</h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-3.5 max-h-[70vh] overflow-y-auto p-1">
          {SERVICES.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between p-4 rounded-2xl border-2 transition-all shadow-sm ${item.borderColor}`}
            >
              <div>
                <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-semibold mb-2 ${item.tagBg} ${item.tagColor}`}>
                  {item.tag}
                </span>
                <h3 className="text-lg font-extrabold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4 min-h-[32px] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onSelectService) onSelectService(item.id);
                  onClose();
                }}
                className={`w-full py-2 px-3 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors ${item.color}`}
              >
                გაგზავნა ➔
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SendMoneyModal;