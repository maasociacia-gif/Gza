import React, { useState } from 'react';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface SubscriptionPageProps {
  onBack: () => void;
}

interface Plan {
  id: string;
  nameGeo: string;
  nameEng: string;
  price: string;
  priceDetail: string;
  color: string;
  borderColor: string;
  bgGradient: string;
  badge?: string;
  badgeGeo?: string;
  features: string[];
  recommended?: boolean;
}

const plans: Plan[] = [
  {
    id: 'free',
    nameGeo: 'შემოიხედე',
    nameEng: 'Take a Look',
    price: 'უფასო',
    priceDetail: 'Free',
    color: '#9CA3AF',
    borderColor: 'rgba(156, 163, 175, 0.3)',
    bgGradient: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
    features: [
      'Access to Community Hub',
      'Basic Job Listings',
      'Public Forums'
    ]
  },
  {
    id: 'standard',
    nameGeo: 'აქტიური წევრი',
    nameEng: 'Active Member',
    price: '€2',
    priceDetail: 'per month',
    color: '#C0C0C0',
    borderColor: 'rgba(192, 192, 192, 0.4)',
    bgGradient: 'linear-gradient(135deg, #374151 0%, #1F2937 100%)',
    features: [
      'All Free features',
      'Priority Job Applications',
      'Document Scanner',
      'Basic Legal Assistance',
      'Email Support'
    ]
  },
  {
    id: 'premium',
    nameGeo: 'პრემიუმ ექსპერტი',
    nameEng: 'Premium Expert',
    price: '€5',
    priceDetail: 'per month',
    color: '#DC143C',
    borderColor: '#DC143C',
    bgGradient: 'linear-gradient(135deg, #DC143C 0%, #A01028 100%)',
    badge: 'Most Popular',
    badgeGeo: 'ყველაზე პოპულარული',
    features: [
      'All Standard features',
      '24/7 Emergency Support',
      'Expert Legal Consultation',
      'Premium Job Matches',
      'Family Care Services',
      'Verified Expert Badge',
      'Priority Map Visibility'
    ],
    recommended: true
  }
];

export function SubscriptionPage({ onBack }: SubscriptionPageProps) {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  return (
    <div className="min-h-screen pb-32" style={{ backgroundColor: '#0D1B2A' }}>
      {/* Top Navigation */}
      <div className="px-4 py-4 flex items-center justify-between sticky top-0 z-10" style={{ backgroundColor: '#0D1B2A' }}>
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <ArrowLeft className="text-white" size={24} />
        </button>
        <h1 className="text-white m-0" style={{ fontSize: '20px', fontWeight: '600' }}>
          გამოწერა / Subscription
        </h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Header */}
      <div className="px-4 pt-4 pb-6 text-center">
        <h2 className="text-white m-0" style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.2' }}>
          აირჩიე შენი გეგმა
        </h2>
        <p className="text-white/70 mt-2 m-0" style={{ fontSize: '15px' }}>
          Choose Your Plan
        </p>
      </div>

      {/* Subscription Cards */}
      <div className="px-4 space-y-4 pb-6">
        {plans.map((plan, index) => {
          const isSelected = selectedPlan === plan.id;
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedPlan(plan.id)}
                className="w-full text-left relative rounded-3xl p-6 border-2 cursor-pointer transition-all"
                style={{
                  background: plan.id === 'premium' 
                    ? 'linear-gradient(135deg, rgba(220, 20, 60, 0.15) 0%, rgba(160, 16, 40, 0.1) 100%)'
                    : plan.id === 'standard'
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                  borderColor: isSelected ? plan.borderColor : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: isSelected 
                    ? `0 8px 32px ${plan.color}40, 0 0 0 1px ${plan.borderColor}`
                    : '0 4px 12px rgba(0, 0, 0, 0.2)',
                  transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full flex items-center gap-1"
                    style={{
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                      boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)'
                    }}
                  >
                    <Star size={12} fill="#000" stroke="#000" />
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#000' }}>
                      {plan.badgeGeo}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="m-0" style={{ fontSize: '20px', fontWeight: '700', color: plan.color, lineHeight: '1.2' }}>
                      {plan.nameGeo}
                    </h3>
                    <p className="text-white/60 m-0 mt-1" style={{ fontSize: '13px' }}>
                      {plan.nameEng}
                    </p>
                  </div>
                  
                  {/* Selection Circle */}
                  <div 
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: isSelected ? plan.color : 'rgba(255, 255, 255, 0.3)',
                      backgroundColor: isSelected ? plan.color : 'transparent'
                    }}
                  >
                    {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-white" style={{ fontSize: '36px', fontWeight: '700', lineHeight: '1' }}>
                      {plan.price}
                    </span>
                    {plan.priceDetail !== 'Free' && (
                      <span className="text-white/60" style={{ fontSize: '14px' }}>
                        / {plan.priceDetail}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ 
                          backgroundColor: plan.id === 'premium' 
                            ? 'rgba(220, 20, 60, 0.2)'
                            : 'rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <Check 
                          size={12} 
                          style={{ color: plan.id === 'premium' ? '#DC143C' : '#9CA3AF' }}
                          strokeWidth={3}
                        />
                      </div>
                      <span 
                        className="text-white/90"
                        style={{ fontSize: '14px', lineHeight: '1.4' }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Subscribe Button */}
      <div className="fixed bottom-20 left-0 right-0 px-4 mx-auto max-w-[480px] lg:max-w-[1200px]">
        <motion.button
          className="w-full py-4 rounded-2xl border-0 cursor-pointer transition-all"
          style={{
            backgroundColor: '#DC143C',
            color: 'white',
            fontSize: '18px',
            fontWeight: '700',
            boxShadow: '0 8px 24px rgba(220, 20, 60, 0.4)'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          გამოწერა / Subscribe
        </motion.button>
        
        <p className="text-white/50 text-center mt-3 m-0" style={{ fontSize: '12px' }}>
          გაუქმება ნებისმიერ დროს / Cancel anytime
        </p>
      </div>
    </div>
  );
}
