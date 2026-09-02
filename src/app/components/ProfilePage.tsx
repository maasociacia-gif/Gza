import React, { useState } from 'react';
import { ArrowLeft, Camera, User } from 'lucide-react';

interface ProfilePageProps {
  onBack: () => void;
}

export function ProfilePage({ onBack }: ProfilePageProps) {
  const [showOnMap, setShowOnMap] = useState(false);
  const [readyToAdvise, setReadyToAdvise] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Ana Machabeli',
    country: 'Georgia',
    city: 'Tbilisi',
    email: 'ana.machabeli@email.com',
    profession: 'Software Engineer',
    citizenship: 'Georgian',
    status: 'Permanent Resident'
  });

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
        
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#DC143C', border: 'none', cursor: 'pointer' }}
        >
          <User className="text-white" size={20} />
        </button>
      </div>

      {/* Profile Photo Section */}
      <div className="flex flex-col items-center pt-4 pb-8">
        <div className="relative">
          <div 
            className="w-28 h-28 rounded-full flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: '#1A2942', border: '3px solid rgba(255, 255, 255, 0.1)' }}
          >
            <User className="text-white/40" size={48} />
          </div>
          <button
            className="absolute bottom-0 right-0 w-9 h-9 rounded-full flex items-center justify-center border-0 cursor-pointer shadow-lg"
            style={{ backgroundColor: '#DC143C' }}
          >
            <Camera className="text-white" size={16} />
          </button>
        </div>
        <h2 className="text-white mt-4 mb-0" style={{ fontSize: '24px', fontWeight: '600' }}>
          Ana Machabeli
        </h2>
      </div>

      {/* Form Section */}
      <div className="px-4 space-y-4">
        {/* Country and City - Two Column Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-white/70 mb-2 block" style={{ fontSize: '13px', fontWeight: '500' }}>
              ქვეყანა / Country
            </label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-0 outline-none"
              style={{ backgroundColor: 'white', fontSize: '15px' }}
            />
          </div>
          <div>
            <label className="text-white/70 mb-2 block" style={{ fontSize: '13px', fontWeight: '500' }}>
              ქალაქი / City
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-0 outline-none"
              style={{ backgroundColor: 'white', fontSize: '15px' }}
            />
          </div>
        </div>

        {/* Show on Map Toggle */}
        <div 
          className="flex items-center justify-between p-4 rounded-xl"
          style={{ backgroundColor: '#152238' }}
        >
          <span className="text-white" style={{ fontSize: '15px', fontWeight: '500' }}>
            რუკაზე ჩვენება / Show me on the map
          </span>
          <button
            onClick={() => setShowOnMap(!showOnMap)}
            className="relative w-12 h-7 rounded-full transition-colors border-0 cursor-pointer"
            style={{ backgroundColor: showOnMap ? '#DC143C' : '#4A5568' }}
          >
            <div
              className="absolute top-0.5 w-6 h-6 rounded-full bg-white transition-transform shadow-md"
              style={{ 
                transform: showOnMap ? 'translateX(22px)' : 'translateX(2px)',
                transition: 'transform 0.2s ease'
              }}
            />
          </button>
        </div>

        {/* Contact Email */}
        <div>
          <label className="text-white/70 mb-2 block" style={{ fontSize: '13px', fontWeight: '500' }}>
            ელ-ფოსტა / Contact Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-0 outline-none"
            style={{ backgroundColor: 'white', fontSize: '15px' }}
          />
        </div>

        {/* Profession */}
        <div>
          <label className="text-white/70 mb-2 block" style={{ fontSize: '13px', fontWeight: '500' }}>
            პროფესია / Profession
          </label>
          <input
            type="text"
            value={formData.profession}
            onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-0 outline-none"
            style={{ backgroundColor: 'white', fontSize: '15px' }}
          />
        </div>

        {/* Citizenship */}
        <div>
          <label className="text-white/70 mb-2 block" style={{ fontSize: '13px', fontWeight: '500' }}>
            მოქალაქეობა / Citizenship
          </label>
          <input
            type="text"
            value={formData.citizenship}
            onChange={(e) => setFormData({ ...formData, citizenship: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-0 outline-none"
            style={{ backgroundColor: 'white', fontSize: '15px' }}
          />
        </div>

        {/* Status Dropdown */}
        <div>
          <label className="text-white/70 mb-2 block" style={{ fontSize: '13px', fontWeight: '500' }}>
            სტატუსი / Status
          </label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-0 outline-none appearance-none cursor-pointer"
            style={{ 
              backgroundColor: 'white', 
              fontSize: '15px',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center'
            }}
          >
            <option value="Permanent Resident">Permanent Resident</option>
            <option value="Temporary Resident">Temporary Resident</option>
            <option value="Work Permit">Work Permit</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Citizen">Citizen</option>
          </select>
        </div>

        {/* Ready to Advise Toggle */}
        <div 
          className="flex items-center justify-between p-4 rounded-xl"
          style={{ 
            backgroundColor: '#152238',
            border: readyToAdvise ? '2px solid #DC143C' : '2px solid transparent'
          }}
        >
          <span className="text-white flex-1 mr-3" style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.4' }}>
            მზად ვარ რჩევა მივცე თანამოქალაქეებს / I am ready to provide advice to fellow citizens
          </span>
          <button
            onClick={() => setReadyToAdvise(!readyToAdvise)}
            className="relative w-12 h-7 rounded-full transition-colors border-0 cursor-pointer flex-shrink-0"
            style={{ backgroundColor: readyToAdvise ? '#DC143C' : '#4A5568' }}
          >
            <div
              className="absolute top-0.5 w-6 h-6 rounded-full bg-white transition-transform shadow-md"
              style={{ 
                transform: readyToAdvise ? 'translateX(22px)' : 'translateX(2px)',
                transition: 'transform 0.2s ease'
              }}
            />
          </button>
        </div>

        {/* Save Changes Button */}
        <div className="pt-6 pb-4">
          <button
            className="w-full py-4 rounded-xl border-0 cursor-pointer transition-opacity hover:opacity-90 active:opacity-80"
            style={{ 
              backgroundColor: '#DC143C',
              color: 'white',
              fontSize: '17px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(220, 20, 60, 0.3)'
            }}
          >
            ცვლილებების შენახვა / Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
