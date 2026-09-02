import React, { useState } from 'react';
import { ArrowLeft, Heart, Sparkles, Gift, Plus, X, Calendar, DollarSign, Package, Car, Truck, MessageSquare, Bike, Plane, Shield, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CareForHomeScreenProps {
  onBack: () => void;
}

interface CalendarEvent {
  day: string;
  dayGeo: string;
  date: number;
  hasEvent: boolean;
  eventName?: string;
  eventNameEng?: string;
}

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  titleGeo: string;
  titleEng: string;
  color: string;
}

export function CareForHomeScreen({ onBack }: CareForHomeScreenProps) {
  const [selectedDate, setSelectedDate] = useState(15);
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [eventNameGeo, setEventNameGeo] = useState('');
  const [selectedEventDate, setSelectedEventDate] = useState(15);
  const [sendGift, setSendGift] = useState(false);

  // Calendar dates with events - Full month
  const [calendarDates, setCalendarDates] = useState<CalendarEvent[]>([
    { day: 'Mon', dayGeo: 'ორშ', date: 1, hasEvent: false },
    { day: 'Tue', dayGeo: 'სამ', date: 2, hasEvent: false },
    { day: 'Wed', dayGeo: 'ოთხ', date: 3, hasEvent: false },
    { day: 'Thu', dayGeo: 'ხუთ', date: 4, hasEvent: false },
    { day: 'Fri', dayGeo: 'პარ', date: 5, hasEvent: false },
    { day: 'Sat', dayGeo: 'შაბ', date: 6, hasEvent: false },
    { day: 'Sun', dayGeo: 'კვი', date: 7, hasEvent: false },
    { day: 'Mon', dayGeo: 'ორშ', date: 8, hasEvent: false },
    { day: 'Tue', dayGeo: 'სამ', date: 9, hasEvent: false },
    { day: 'Wed', dayGeo: 'ოთხ', date: 10, hasEvent: false },
    { day: 'Thu', dayGeo: 'ხუთ', date: 11, hasEvent: false },
    { day: 'Fri', dayGeo: 'პარ', date: 12, hasEvent: false },
    { day: 'Sat', dayGeo: 'შაბ', date: 13, hasEvent: false },
    { day: 'Sun', dayGeo: 'კვი', date: 14, hasEvent: false },
    { day: 'Mon', dayGeo: 'ორშ', date: 15, hasEvent: true, eventName: 'დედას დაბადების დღე', eventNameEng: "Mother's Birthday" },
    { day: 'Tue', dayGeo: 'სამ', date: 16, hasEvent: false },
    { day: 'Wed', dayGeo: 'ოთხ', date: 17, hasEvent: false },
    { day: 'Thu', dayGeo: 'ხუთ', date: 18, hasEvent: false },
    { day: 'Fri', dayGeo: 'პარ', date: 19, hasEvent: false },
    { day: 'Sat', dayGeo: 'შაბ', date: 20, hasEvent: false },
    { day: 'Sun', dayGeo: 'კვი', date: 21, hasEvent: false },
    { day: 'Mon', dayGeo: 'ორშ', date: 22, hasEvent: true, eventName: 'გიორგობა', eventNameEng: 'St. George Day' },
    { day: 'Tue', dayGeo: 'სამ', date: 23, hasEvent: false },
    { day: 'Wed', dayGeo: 'ოთხ', date: 24, hasEvent: false },
    { day: 'Thu', dayGeo: 'ხუთ', date: 25, hasEvent: false },
    { day: 'Fri', dayGeo: 'პარ', date: 26, hasEvent: false },
    { day: 'Sat', dayGeo: 'შაბ', date: 27, hasEvent: false },
    { day: 'Sun', dayGeo: 'კვი', date: 28, hasEvent: false },
  ]);

  const handleAddEvent = () => {
    if (!eventNameGeo) return;

    setCalendarDates(prev => prev.map(date => 
      date.date === selectedEventDate
        ? { ...date, hasEvent: true, eventName: eventNameGeo, eventNameEng: eventNameGeo }
        : date
    ));

    // Reset form and keep the selected date
    setEventNameGeo('');
    setSendGift(false);
    setShowAddEventForm(false);
  };

  // Services List
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
        className="px-5 py-4"
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
              ზრუნვა სამშობლოში
            </h1>
            <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '13px' }}>
              Care for Home
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-28">
        
        {/* Family Calendar Widget - PROMINENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="px-5 pt-6 pb-4"
        >
          <div
            className="rounded-3xl p-5 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Soft glow */}
            <div 
              className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-3xl"
              style={{ background: 'linear-gradient(135deg, #E8B4B8 0%, #DC143C 100%)' }}
            />

            <div className="relative z-10">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(232, 180, 184, 0.3) 0%, rgba(220, 20, 60, 0.2) 100%)',
                      border: '1px solid rgba(232, 180, 184, 0.4)'
                    }}
                  >
                    <Heart size={22} strokeWidth={1.5} style={{ color: '#E8B4B8' }} />
                  </div>
                  <div>
                    <h3 className="text-white m-0" style={{ fontSize: '17px', fontWeight: '600' }}>
                      ოჯახის კალენდარი
                    </h3>
                    <p className="text-white/50 m-0" style={{ fontSize: '12px' }}>
                      February 2026
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAddEventForm(true)}
                  className="flex items-center justify-center border-0 cursor-pointer transition-all hover:scale-[1.05]"
                  style={{ 
                    backgroundColor: 'transparent',
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(232, 180, 184, 0.25) 0%, rgba(220, 20, 60, 0.2) 100%)',
                    border: '1.5px solid rgba(232, 180, 184, 0.4)',
                    boxShadow: '0 4px 12px rgba(232, 180, 184, 0.3)'
                  }}
                >
                  <Plus size={24} strokeWidth={2} style={{ color: '#E8B4B8' }} />
                </button>
              </div>

              {/* Horizontal Scrolling Dates */}
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1" style={{ scrollbarWidth: 'none' }}>
                {calendarDates.map((dateItem) => (
                  <button
                    key={`${dateItem.date}-${dateItem.day}`}
                    onClick={() => setSelectedDate(dateItem.date)}
                    className="flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-2xl border-0 cursor-pointer transition-all hover:scale-[1.05]"
                    style={{
                      minWidth: '68px',
                      background: selectedDate === dateItem.date
                        ? 'linear-gradient(135deg, rgba(232, 180, 184, 0.4) 0%, rgba(220, 20, 60, 0.3) 100%)'
                        : dateItem.hasEvent
                        ? 'linear-gradient(135deg, rgba(232, 180, 184, 0.25) 0%, rgba(220, 20, 60, 0.15) 100%)'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: selectedDate === dateItem.date
                        ? '1.5px solid rgba(232, 180, 184, 0.6)'
                        : dateItem.hasEvent
                        ? '1px solid rgba(232, 180, 184, 0.4)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: selectedDate === dateItem.date
                        ? '0 4px 20px rgba(232, 180, 184, 0.4)'
                        : dateItem.hasEvent
                        ? '0 2px 12px rgba(232, 180, 184, 0.2)'
                        : 'none'
                    }}
                  >
                    <span 
                      className="text-white/60"
                      style={{ fontSize: '11px', fontWeight: '500' }}
                    >
                      {dateItem.dayGeo}
                    </span>
                    <span 
                      style={{ 
                        fontSize: '22px', 
                        fontWeight: '700',
                        color: selectedDate === dateItem.date || dateItem.hasEvent ? '#E8B4B8' : 'white'
                      }}
                    >
                      {dateItem.date}
                    </span>
                    {dateItem.hasEvent && (
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: '#E8B4B8', boxShadow: '0 0 8px rgba(232, 180, 184, 0.8)' }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Event Display */}
              {calendarDates.find(d => d.date === selectedDate)?.hasEvent && !showAddEventForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4"
                  style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
                >
                  <div 
                    className="rounded-2xl p-4 flex items-center gap-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(232, 180, 184, 0.2) 0%, rgba(220, 20, 60, 0.15) 100%)',
                      border: '1px solid rgba(232, 180, 184, 0.3)'
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ 
                        backgroundColor: 'rgba(232, 180, 184, 0.3)',
                        border: '1px solid rgba(232, 180, 184, 0.5)'
                      }}
                    >
                      <Heart size={18} strokeWidth={2} style={{ color: '#E8B4B8' }} fill="#E8B4B8" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white m-0" style={{ fontSize: '14px', fontWeight: '600' }}>
                        {calendarDates.find(d => d.date === selectedDate)?.eventName}
                      </p>
                      <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '11px' }}>
                        {calendarDates.find(d => d.date === selectedDate)?.eventNameEng}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Add Event Form - Inside Calendar Widget */}
              <AnimatePresence>
                {showAddEventForm && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4"
                    style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
                  >
                    {/* Form Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} strokeWidth={1.5} style={{ color: '#E8B4B8' }} />
                        <p className="text-white m-0" style={{ fontSize: '14px', fontWeight: '600' }}>
                          ახალი დღესასწაული
                        </p>
                      </div>
                      <button
                        onClick={() => setShowAddEventForm(false)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center border-0 cursor-pointer transition-all hover:bg-white/5"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                      >
                        <X size={16} strokeWidth={1.5} className="text-white/70" />
                      </button>
                    </div>

                    {/* Date Selection */}
                    <div className="mb-3">
                      <label className="text-white/60 m-0 mb-2 block" style={{ fontSize: '11px', fontWeight: '500' }}>
                        აირჩიე თარიღი
                      </label>
                      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1" style={{ scrollbarWidth: 'none' }}>
                        {calendarDates.map((dateItem) => (
                          <button
                            key={`form-${dateItem.date}`}
                            onClick={() => setSelectedEventDate(dateItem.date)}
                            className="flex-shrink-0 flex flex-col items-center gap-1 p-2 rounded-xl border-0 cursor-pointer transition-all hover:scale-[1.05]"
                            style={{
                              minWidth: '52px',
                              background: selectedEventDate === dateItem.date
                                ? 'linear-gradient(135deg, rgba(232, 180, 184, 0.4) 0%, rgba(220, 20, 60, 0.3) 100%)'
                                : 'rgba(255, 255, 255, 0.05)',
                              border: selectedEventDate === dateItem.date
                                ? '1.5px solid rgba(232, 180, 184, 0.6)'
                                : '1px solid rgba(255, 255, 255, 0.08)'
                            }}
                          >
                            <span 
                              className="text-white/60"
                              style={{ fontSize: '10px', fontWeight: '500' }}
                            >
                              {dateItem.dayGeo}
                            </span>
                            <span 
                              style={{ 
                                fontSize: '16px', 
                                fontWeight: '700',
                                color: selectedEventDate === dateItem.date ? '#E8B4B8' : 'white'
                              }}
                            >
                              {dateItem.date}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Event Name Georgian */}
                    <div className="mb-3">
                      <label className="text-white/60 m-0 mb-2 block" style={{ fontSize: '11px', fontWeight: '500' }}>
                        დღესასწაულის სახელი (ქართულად)
                      </label>
                      <input
                        type="text"
                        value={eventNameGeo}
                        onChange={(e) => setEventNameGeo(e.target.value)}
                        placeholder="მაგ. დედის დაბადების დღე"
                        className="w-full px-3 py-2.5 rounded-xl border-0 text-white"
                        style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          fontSize: '13px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Gift Suggestion Checkbox */}
                    <div className="mb-4">
                      <button
                        onClick={() => setSendGift(!sendGift)}
                        className="w-full flex items-center gap-3 p-3 rounded-xl border-0 cursor-pointer transition-all hover:bg-white/5"
                        style={{
                          background: sendGift ? 'rgba(67, 233, 123, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                          border: sendGift ? '1px solid rgba(67, 233, 123, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        <div 
                          className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                          style={{
                            background: sendGift ? 'linear-gradient(135deg, #43E97B 0%, #38f9d7 100%)' : 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          {sendGift && <Gift size={12} strokeWidth={2.5} className="text-white" />}
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-white m-0" style={{ fontSize: '12px', fontWeight: '500' }}>
                            გაუგზავნე საჩუქარი
                          </p>
                          <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '10px' }}>
                            Send a gift reminder
                          </p>
                        </div>
                      </button>
                    </div>

                    {/* Save Button */}
                    <button
                      onClick={handleAddEvent}
                      disabled={!eventNameGeo}
                      className="w-full py-3 rounded-xl border-0 cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                      style={{
                        background: (!eventNameGeo)
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'linear-gradient(135deg, #E8B4B8 0%, #DC143C 100%)',
                        boxShadow: (!eventNameGeo) 
                          ? 'none' 
                          : '0 4px 16px rgba(232, 180, 184, 0.4)',
                        opacity: (!eventNameGeo) ? 0.5 : 1,
                        cursor: (!eventNameGeo) ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <Heart size={16} strokeWidth={2} className="text-white" />
                      <span className="text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                        ამატება
                      </span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* AI Smart Suggestion */}
        {calendarDates.find(d => d.date === selectedDate)?.hasEvent && !showAddEventForm && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-5 pb-4"
          >
            <div
              className="rounded-2xl p-4 flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, rgba(67, 233, 123, 0.15) 0%, rgba(67, 233, 123, 0.08) 100%)',
                border: '1px solid rgba(67, 233, 123, 0.3)',
                boxShadow: '0 4px 16px rgba(67, 233, 123, 0.2)'
              }}
            >
              <div className="flex-shrink-0">
                <Sparkles size={20} strokeWidth={1.5} style={{ color: '#43E97B' }} />
              </div>
              <div className="flex-1">
                <p className="text-white m-0" style={{ fontSize: '13px', fontWeight: '500' }}>
                  ხომ არ გსურს საჩუქრის გაგზავნა?
                </p>
                <p className="text-white/50 m-0 mt-0.5" style={{ fontSize: '11px' }}>
                  Would you like to send a gift?
                </p>
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 rounded-xl border-0 cursor-pointer transition-all hover:scale-[1.05] flex items-center gap-1.5"
                style={{
                  background: 'linear-gradient(135deg, #43E97B 0%, #38f9d7 100%)',
                  boxShadow: '0 4px 12px rgba(67, 233, 123, 0.3)'
                }}
              >
                <Gift size={16} strokeWidth={2} className="text-white" />
                <span className="text-white" style={{ fontSize: '12px', fontWeight: '600' }}>
                  გაგზავნა
                </span>
              </button>
            </div>
          </motion.div>
        )}
        
        {/* Services Section - Full Width Cards */}
        <div className="px-5 pb-6">
          <div className="mb-4">
            <h3 className="text-white m-0" style={{ fontSize: '18px', fontWeight: '600' }}>
              სერვისები სამშობლოსთვის
            </h3>
            <p className="text-white/50 m-0 mt-1" style={{ fontSize: '13px' }}>
              Services for Home
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.05) }}
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
                  {/* Icon Container */}
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

                  {/* Text Content */}
                  <div className="flex-1 text-left">
                    <p className="text-white m-0" style={{ fontSize: '16px', fontWeight: '600', lineHeight: '1.3' }}>
                      {service.titleGeo}
                    </p>
                    <p className="text-white/50 m-0 mt-1" style={{ fontSize: '13px', lineHeight: '1.2' }}>
                      {service.titleEng}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0">
                    <ChevronRight size={20} strokeWidth={1.5} className="text-white/40" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Bottom Helper Text */}
          <div className="mt-6 text-center">
            <p className="text-white/30 m-0" style={{ fontSize: '12px' }}>
              შენი ოჯახისთვის საუკეთესო სერვისები
            </p>
            <p className="text-white/20 m-0 mt-1" style={{ fontSize: '11px' }}>
              Best services for your family
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}