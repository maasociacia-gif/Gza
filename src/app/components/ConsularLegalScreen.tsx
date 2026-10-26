import React from 'react';
import { ArrowLeft, ChevronRight, ShieldCheck, Scale, BookOpen, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface ConsularLegalScreenProps {
  onBack: () => void;
}

interface ServiceSection {
  id: string;
  icon: React.ReactNode;
  titleGeo: string;
  titleEng: string;
  descriptionGeo: string;
  descriptionEng: string;
  color: string;
  onClick?: () => void;
}

export function ConsularLegalScreen({ onBack }: ConsularLegalScreenProps) {
  const sections: ServiceSection[] = [
    {
      id: 'embassy',
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      titleGeo: 'საელჩოსა და საკონსულოს სერვისები',
      titleEng: 'Embassy & Consular Services',
      descriptionGeo: 'პასპორტები, დოკუმენტების დამოწმება, ხელმოწერების ნოტარიზაცია და სახელმწიფო მხარდაჭერა',
      descriptionEng: 'Passports, document authentication, notarization, and official state support',
      color: '#B8860B',
      onClick: () => console.log('Embassy services clicked')
    },
    {
      id: 'legal',
      icon: <Scale size={32} strokeWidth={1.5} />,
      titleGeo: 'იურიდიული დახმარება და ადვოკატები',
      titleEng: 'Legal Aid & Lawyer Support',
      descriptionGeo: 'კონტრაქტები, ვიზები, დავები, სამუშაო უფლებები და იურიდიული კონსულტაციები',
      descriptionEng: 'Contracts, visas, disputes, labor rights, and legal consultations',
      color: '#9C27B0',
      onClick: () => console.log('Legal aid clicked')
    },
    {
      id: 'language',
      icon: <BookOpen size={32} strokeWidth={1.5} />,
      titleGeo: 'ენის კურსები და ინტეგრაცია',
      titleEng: 'Language Courses & Integration',
      descriptionGeo: 'გერმანული ენის კურსები (A1-C2), ინტეგრაციის კურსები და სერტიფიკატები',
      descriptionEng: 'German language courses (A1-C2), integration programs, and certification',
      color: '#00D9FF',
      onClick: () => console.log('Language courses clicked')
    },
    {
      id: 'education',
      icon: <GraduationCap size={32} strokeWidth={1.5} />,
      titleGeo: 'განათლება და დიპლომის აღიარება',
      titleEng: 'Education & Diploma Recognition',
      descriptionGeo: 'უნივერსიტეტები, დიპლომების აღიარება, პროფესიული გადამზადება და კარიერული ზრდა',
      descriptionEng: 'Universities, diploma recognition, vocational training, and career advancement',
      color: '#43E97B',
      onClick: () => console.log('Education clicked')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0D1B2A' }}>
      {/* Header */}
      <div 
        className="px-5 py-4 flex items-center gap-4 sticky top-0 z-50"
        style={{
          background: 'linear-gradient(180deg, #0D1B2A 0%, rgba(13, 27, 42, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl border-0 cursor-pointer transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <ArrowLeft size={20} className="text-white" strokeWidth={2} />
        </button>
        
        <div className="flex-1">
          <h1 className="text-white m-0" style={{ fontSize: '20px', fontWeight: '700' }}>
            საკონსულო და იურიდიული
          </h1>
          <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '13px' }}>
            Consular & Legal Support
          </p>
        </div>

        {/* Official Badge */}
        <div 
          className="px-3 py-1.5 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.15) 0%, rgba(184, 134, 11, 0.05) 100%)',
            border: '1px solid rgba(184, 134, 11, 0.3)'
          }}
        >
          <p className="text-white/80 m-0" style={{ fontSize: '10px', fontWeight: '600' }}>
            OFFICIAL
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="px-5 py-6"
        >
          <div 
            className="rounded-3xl p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.12) 0%, rgba(184, 134, 11, 0.04) 100%)',
              border: '1px solid rgba(184, 134, 11, 0.25)',
              boxShadow: '0 8px 32px rgba(184, 134, 11, 0.15)'
            }}
          >
            {/* Background glow */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(184, 134, 11, 0.25) 0%, transparent 70%)'
              }}
            />

            <div className="relative z-10 text-center">
              <div 
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.2) 0%, rgba(184, 134, 11, 0.1) 100%)',
                  border: '2px solid rgba(184, 134, 11, 0.4)',
                  boxShadow: '0 4px 20px rgba(184, 134, 11, 0.3)'
                }}
              >
                <ShieldCheck size={40} strokeWidth={1.5} className="text-[#B8860B]" />
              </div>

              <h2 className="text-white m-0 mb-2" style={{ fontSize: '22px', fontWeight: '700', lineHeight: '1.3' }}>
                ოფიციალური სახელმწიფო მხარდაჭერა
              </h2>
              <p className="text-white/60 m-0 mb-4" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                Official Government & Legal Support
              </p>
              <p className="text-white/50 m-0 max-w-md mx-auto" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                Access embassy services, legal assistance, language programs, and educational support—all in one place.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service Sections */}
        <div className="px-5">
          <div className="mb-4">
            <h3 className="text-white m-0" style={{ fontSize: '16px', fontWeight: '600' }}>
              სერვისების კატეგორიები
            </h3>
            <p className="text-white/40 m-0 mt-1" style={{ fontSize: '12px' }}>
              Service Categories
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.08) }}
                onClick={section.onClick}
                className="border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-start gap-4 p-5">
                  {/* Icon Container */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${section.color}20 0%, ${section.color}10 100%)`,
                      border: `1px solid ${section.color}40`,
                      boxShadow: `0 4px 12px ${section.color}20`
                    }}
                  >
                    <div style={{ color: section.color }}>
                      {section.icon}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-left pt-1">
                    <h4 className="text-white m-0 mb-1" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.3' }}>
                      {section.titleGeo}
                    </h4>
                    <p className="text-white/50 m-0 mb-2" style={{ fontSize: '12px', lineHeight: '1.2' }}>
                      {section.titleEng}
                    </p>
                    <p className="text-white/40 m-0" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                      {section.descriptionGeo}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 pt-1">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <ChevronRight size={18} strokeWidth={2} className="text-white/40" />
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Emergency Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="px-5 mt-6"
        >
          <div 
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.08) 0%, rgba(220, 20, 60, 0.02) 100%)',
              border: '1px solid rgba(220, 20, 60, 0.2)'
            }}
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#DC143C' }} />
              <div className="flex-1">
                <p className="text-white m-0 mb-1" style={{ fontSize: '13px', fontWeight: '600' }}>
                  გადაუდებელი დახმარება
                </p>
                <p className="text-white/50 m-0" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                  For urgent consular or legal emergencies, contact the Georgian Embassy 24/7 hotline: <span className="text-white font-semibold">+49 30 484 907 0</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <div className="px-5 mt-8 text-center pb-4">
          <p className="text-white/30 m-0" style={{ fontSize: '11px' }}>
            ყველა სერვისი ოფიციალური და გადამოწმებულია
          </p>
          <p className="text-white/20 m-0 mt-1" style={{ fontSize: '10px' }}>
            All services are official and verified
          </p>
        </div>
      </div>
    </div>
  );
}
