import React from 'react';

interface SendMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService?: (serviceId: string, link: string) => void;
}

interface ServiceItem {
  id: string;
  name: string;
  slogan: string;
  buttonText: string;
  affiliateLink?: string;
  color: string;
  borderColor: string;
  isUpcoming?: boolean; // ინდიკატორი "მალე" სერვისისთვის
}

const SERVICES: ServiceItem[] = [
  {
    id: 'exchange',
    name: 'გადაცვალე ფული',
    slogan: '🔄 ვალუტის კონვერტაცია საუკეთესო კურსით',
    buttonText: 'მალე ➔',
    color: 'bg-gray-600 cursor-not-allowed opacity-60',
    borderColor: 'border-gray-600/40',
    isUpcoming: true,
  },
  {
    id: 'moneygram',
    name: 'MoneyGram',
    slogan: '⚡️ სწრაფი განაღდება cash-ით ან ბანკში',
    buttonText: 'გაგზავნა MoneyGram-ით ➔',
    affiliateLink: 'https://www.moneygram.com',
    color: 'bg-red-600 hover:bg-red-700',
    borderColor: 'border-red-500/30 hover:border-red-500',
  },
  {
    id: 'wise',
    name: 'Wise',
    slogan: '🎯 რეალური საბაზრო კურსი (დიდ თანხებზე)',
    buttonText: 'გაგზავნა Wise-ით ➔',
    affiliateLink: 'https://wise.com',
    color: 'bg-sky-500 hover:bg-sky-600',
    borderColor: 'border-sky-500/30 hover:border-sky-500',
  },
  {
    id: 'profee',
    name: 'Profee',
    slogan: '💳 ყველაზე დაბალი საკომისიო ბარათზე',
    buttonText: 'გაგზავნა Profee-თი ➔',
    affiliateLink: 'https://www.profee.com',
    color: 'bg-emerald-600 hover:bg-emerald-700',
    borderColor: 'border-emerald-500/30 hover:border-emerald-500',
  },
  {
    id: 'paysend',
    name: 'Paysend',
    slogan: '🚀 Card-to-Card სწრაფი გადარიცხვა',
    buttonText: 'გაგზავნა Paysend-ით ➔',
    affiliateLink: 'https://paysend.com',
    color: 'bg-purple-600 hover:bg-purple-700',
    borderColor: 'border-purple-500/30 hover:border-purple-500',
  },
  {
    id: 'western-union',
    name: 'Western Union',
    slogan: '🌍 ყველაზე ფართო ფილიალების ქსელი',
    buttonText: 'გაგზავნა Western Union-ით ➔',
    affiliateLink: 'https://www.westernunion.com',
    color: 'bg-amber-500 hover:bg-amber-600',
    borderColor: 'border-amber-500/30 hover:border-amber-500',
  },
];

export const SendMoneyModal: React.FC<SendMoneyModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  if (!isOpen) return null;

  const handleAction = (item: ServiceItem) => {
    if (item.isUpcoming) return; // თუ "მალე" სერვისია, არაფერი მოხდეს

    if (onSelectService && item.affiliateLink) {
      onSelectService(item.id, item.affiliateLink);
    } else if (item.affiliateLink) {
      window.open(item.affiliateLink, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
      {/* Background Overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Bottom Sheet Card */}
      <div className="relative z-10 w-full max-w-lg bg-[#111827] text-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl transition-transform border border-gray-800">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">ფულის გაგზავნა</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-3 max-h-[65vh] overflow-y-auto pr-1">
          {SERVICES.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-[#1F2937] border transition-all gap-3 ${item.borderColor}`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-extrabold text-white">
                    {item.name}
                  </h3>
                  {item.isUpcoming && (
                    <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                      მალე
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.slogan}
                </p>
              </div>

              {/* Action Button */}
              <button
                disabled={item.isUpcoming}
                onClick={() => handleAction(item)}
                className={`py-2.5 px-4 rounded-xl text-white text-xs font-bold transition-all whitespace-nowrap shadow-md ${item.color}`}
              >
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SendMoneyModal;