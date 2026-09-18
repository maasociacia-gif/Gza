import React, { useState } from 'react';

import SendMoneyModal from './SendMoneyModal';

import { ArrowLeft, DollarSign, Package, Car, Truck, MessageSquare, Bike, Plane, Shield, ChevronRight } from 'lucide-react';

import { motion } from 'framer-motion';



interface ServicesListScreenProps {

  onBack: () => void;

}



interface ServiceCard {

  id: string;

  icon: React.ReactNode;

  titleGeo: string;

  titleEng: string;

  color: string;

}



export function ServicesListScreen({ onBack }: ServicesListScreenProps) {

  const [isSendMoneyOpen, setIsSendMoneyOpen] = useState(false);



  const services: ServiceCard[] = [

    {

      id: 'money-transfer',

      icon: <DollarSign size={28} strokeWidth={1.5} />,

      titleGeo: 'ფულის გადარიცხვა',

      titleEng: 'Money Transfer',

      color: '#43E97B'

    },

    {

      id: 'send-parcel',

      icon: <Package size={28} strokeWidth={1.5} />,

      titleGeo: 'ამანათის გაგზავნა',

      titleEng: 'Send a Parcel',

      color: '#667eea'

    },

    {

      id: 'ship-car',

      icon: <Car size={28} strokeWidth={1.5} />,

      titleGeo: 'მანქანის გადაზიდვა',

      titleEng: 'Ship a Car',

      color: '#FFA726'

    },

    {

      id: 'cargo-shipping',

      icon: <Truck size={28} strokeWidth={1.5} />,

      titleGeo: 'ტვირთის გადაზიდვა',

      titleEng: 'Cargo Shipping',

      color: '#DC143C'

    },

    {

      id: 'translator',

      icon: <MessageSquare size={28} strokeWidth={1.5} />,

      titleGeo: 'თარჯიმნის სერვისი',

      titleEng: 'Translator Services',

      color: '#00D9FF'

    },

    {

      id: 'courier',

      icon: <Bike size={28} strokeWidth={1.5} />,

      titleGeo: 'კურიერული სერვისი',

      titleEng: 'Courier Service',

      color: '#F06292'

    },

    {

      id: 'airport-pickup',

      icon: <Plane size={28} strokeWidth={1.5} />,

      titleGeo: 'აეროპორტიდან გადაყვანა',

      titleEng: 'Airport Pickup',

      color: '#9C27B0'

    },

    {

      id: 'home-security',

      icon: <Shield size={28} strokeWidth={1.5} />,

      titleGeo: 'სახლის უსაფრთხოება',

      titleEng: 'Home Security Systems',

      color: '#4CAF50'

    }

  ];



  return (

    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0D1B2A' }}>

      {/* Header */}

      <div

        className="px-5 py-4 sticky top-0 z-20"

        style={{

          backgroundColor: 'rgba(13, 27, 42, 0.95)',

          backdropFilter: 'blur(20px)',

          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'

        }}

      >

        <div className="flex items-center gap-3">

          <button

            onClick={onBack}

            className="w-10 h-10 rounded-xl flex items-center justify-center border-0 cursor-pointer transition-all hover:bg-white/5"

            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}

          >

            <ArrowLeft size={20} strokeWidth={1.5} className="text-white" />

          </button>

          <div className="flex-1">

            <h1 className="text-white m-0" style={{ fontSize: '22px', fontWeight: '600', lineHeight: '1.2' }}>

              სერვისები

            </h1>

            <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '13px' }}>

              Services

            </p>

          </div>

        </div>

      </div>



      {/* Services List */}

      <div className="flex-1 overflow-y-auto px-5 py-6 pb-28">

        <div className="flex flex-col gap-3">

          {services.map((service, index) => (

            <motion.button

              key={service.id}

              onClick={() => {

                if (service.id === 'money-transfer') {

                  setIsSendMoneyOpen(true);

                }

              }}

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ delay: index * 0.05 }}

              className="w-full border-0 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"

              style={{

                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',

                border: '1px solid rgba(255, 255, 255, 0.1)',

                borderRadius: '20px',

                padding: '0',

                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'

              }}

            >

              <div className="flex items-center gap-4 px-5 py-5">

                <div

                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"

                  style={{

                    background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`,

                    border: `1px solid ${service.color}40`,

                    color: service.color

                  }}

                >

                  {service.icon}

                </div>



                <div className="flex-1 text-left">

                  <p className="text-white m-0" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.3' }}>

                    {service.titleGeo}

                  </p>

                  <p className="text-white/50 m-0 mt-1" style={{ fontSize: '13px', lineHeight: '1.2' }}>

                    {service.titleEng}

                  </p>

                </div>



                <div className="flex-shrink-0">

                  <ChevronRight size={20} strokeWidth={1.5} className="text-white/40" />

                </div>

              </div>

            </motion.button>

          ))}

        </div>



        <div className="mt-8 text-center">

          <p className="text-white/30 m-0" style={{ fontSize: '12px' }}>

            რომელი სერვისი გჭირდებათ?

          </p>

          <p className="text-white/20 m-0 mt-1" style={{ fontSize: '11px' }}>

            Which service do you need?

          </p>

        </div>

      </div>



      {/* Modal */}

      <SendMoneyModal

        isOpen={isSendMoneyOpen}

        onClose={() => setIsSendMoneyOpen(false)}

      />

    </div>

  );

}



export default ServicesListScreen; 

