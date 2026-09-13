import React, { useState } from 'react';
import { Check, ArrowRight, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface PricingScreenProps {
  onSkip?: () => void; // ფუნქცია მთავარ გვერდზე გადასასვლელად
}

const plans = [
  {
    id: 'free',
    name: 'უფასო',
    price: '0',
    currency: '€',
    period: '/ თვე',
    description: 'საბაზისო წვდომა პლატფორმის დათვალიერებისთვის',
    features: [
      'საიტისა და რუკის დათვალიერება',
      'დაფარული საკონტაქტო მონაცემები',
      'სკანერის 1-ჯერადი გამოყენება',
    ],
    buttonText: 'მიმდინარე ტარიფი',
    popular: false,
  },
  {
    id: 'standard',
    name: 'სტანდარტი',
    price: '3.99',
    currency: '€',
    period: '/ თვე',
    description: 'სრული წვდომა კონტაქტებსა და სერვისებზე',
    features: [
      'ყველა ნომრისა და დასახელების გახსნა',
      'რუკაზე სრული ინფორმაციის ნახვა',
      'სკანერის ულიმიტო გამოყენება',
      '5 აქტიური განცხადების დამატება',
    ],
    buttonText: 'Standard-ის არჩევა',
    popular: true,
  },
  {
    id: 'premium',
    name: 'VIP / პრემიუმი',
    price: '12.99',
    currency: '€',
    period: '/ თვე',
    description: 'მაქსიმალური შესაძლებლობები და ბიზნეს პრიორიტეტი',
    features: [
      'Standard-ის ყველა უპირატესობა',
      'ულიმიტო განცხადებები',
      'VIP ბეჯი და პრიორიტეტი რუკასა და ძიებაში',
      'პირდაპირი Чატის ფუნქციონალი',
    ],
    buttonText: 'VIP-ის არჩევა',
    popular: false,
  },
];

export const PricingScreen: React.FC<PricingScreenProps> = ({ onSkip }) => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSelectPlan = async (planId: string) => {
    if (planId === 'free') {
      if (onSkip) onSkip();
      return;
    }
    setLoading(planId);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('გთხოვთ გაიაროთ ავტორიზაცია');

      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 30);

      const { error } = await supabase
        .from('profiles')
        .update({
          subscription_plan: planId,
          subscription_expires_at: expiresAt.toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;
      alert(`ტარიფი წარმატებით განახლდა: ${planId.toUpperCase()}`);
      if (onSkip) onSkip();
    } catch (err: any) {
      alert(err.message || 'შეცდომა ტარიფის არჩევისას');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="relative py-12 px-4 max-w-6xl mx-auto transition-colors duration-200">
      {/* ზედა მარჯვენა გამოტოვების X ღილაკი */}
      {onSkip && (
        <button
          onClick={onSkip}
          className="absolute top-4 right-4 flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <span>გამოტოვება</span>
          <X className="w-4 h-4" />
        </button>
      )}

      <div className="text-center mb-12 mt-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          აირჩიე შენზე მორგებული ტარიფი
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          მიიღე სრული წვდომა კონტაქტებსა და პლატფორმის შესაძლებლობებზე
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl p-6 transition-all duration-200 ${
              plan.popular
                ? 'bg-white dark:bg-gray-800 border-2 border-emerald-500 shadow-xl scale-105 z-10'
                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm'
            } flex flex-col justify-between`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                ყველაზე პოპულარული
              </span>
            )}

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{plan.description}</p>

              <div className="my-6">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                  {plan.price} {plan.currency}
                </span>
                <span className="text-gray-500 dark:text-gray-400 font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleSelectPlan(plan.id)}
              disabled={loading === plan.id}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                plan.popular
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading === plan.id ? 'მუშავდება...' : plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* ქვედა გამოტოვების/უფასოდ გაგრძელების ღილაკი */}
      <div className="text-center mt-10">
        <button
          onClick={onSkip}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
        >
          <span>გაგრძელება უფასო ტარიფით</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};