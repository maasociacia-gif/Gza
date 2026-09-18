import React, { useState } from 'react';
import { SendMoneyModal } from './SendMoneyModal';

interface ServicesListScreenProps {
  onBack?: () => void;
  onSelectService?: (serviceId: string) => void;
}

export function ServicesListScreen({ onBack, onSelectService }: ServicesListScreenProps) {
  const [isSendMoneyOpen, setIsSendMoneyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A1628] text-white p-4 pb-24">
      <div className="flex items-center gap-3 mb-6">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            ←
          </button>
        )}
        <div>
          <h1 className="text-xl font-bold">ზრუნვა სამშობლოში</h1>
          <p className="text-xs text-white/60">აირჩიეთ სასურველი სერვისი</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-sky-500/50 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">💸</span>
              <span className="bg-sky-500/20 text-sky-400 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-sky-500/30">
                სწრაფი
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">სულის გადარიცხვა</h3>
            <p className="text-xs text-white/60 mb-4 leading-relaxed">
              გააგზავნეთ თანხა საქართველოში საუკეთესო კურსითა და დაბალი კომისიით.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsSendMoneyOpen(true)}
            className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25"
          >
            გადარიცხვა ➔
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">📦</span>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-emerald-500/30">
                ტრანსპორტირება
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">ამანათების გაგზავნა</h3>
            <p className="text-xs text-white/60 mb-4 leading-relaxed">
              ამანათების და ტვირთის უსაფრთხო ტრანსპორტირება საქართველოში.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectService && onSelectService('parcels')}
            className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
          >
            დეტალურად ➔
          </button>
        </div>
      </div>

      <SendMoneyModal
        isOpen={isSendMoneyOpen}
        onClose={() => setIsSendMoneyOpen(false)}
        onSelectService={onSelectService}
      />
    </div>
  );
}

export default ServicesListScreen;