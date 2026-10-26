import React, { useState } from 'react';
import { Plus, Search, Eye } from 'lucide-react';
import { StatisticsCards } from './StatisticsCards';

interface Country {
  id: string;
  name: string;
  nameGeo: string;
  flag: string;
  articlesCount: number;
}

const countries: Country[] = [
  { id: 'de', name: 'Germany', nameGeo: 'გერმანია', flag: '🇩🇪', articlesCount: 24 },
  { id: 'ge', name: 'Georgia', nameGeo: 'საქართველო', flag: '🇬🇪', articlesCount: 18 },
  { id: 'us', name: 'United States', nameGeo: 'შეერთებული შტატები', flag: '🇺🇸', articlesCount: 32 },
  { id: 'uk', name: 'United Kingdom', nameGeo: 'გაერთიანებული სამეფო', flag: '🇬🇧', articlesCount: 21 },
  { id: 'fr', name: 'France', nameGeo: 'საფრანგეთი', flag: '🇫🇷', articlesCount: 15 },
  { id: 'es', name: 'Spain', nameGeo: 'ესპანეთი', flag: '🇪🇸', articlesCount: 12 }
];

export function LegalContentEditor() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(countries[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [articleTitle, setArticleTitle] = useState('Visa Requirements for Georgia');
  const [articleContent, setArticleContent] = useState('All foreign nationals need a valid passport to enter Georgia. Citizens of many countries can stay visa-free for up to 365 days.');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.nameGeo.includes(searchQuery)
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white m-0" style={{ fontSize: '32px', fontWeight: '700' }}>
          იურიდიული კონტენტი
        </h1>
        <p className="text-white/60 m-0 mt-2" style={{ fontSize: '14px' }}>
          Legal Content Management
        </p>
      </div>

      {/* Statistics Cards */}
      <StatisticsCards />

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6 mt-8">
        {/* Country List */}
        <div className="col-span-3">
          <div 
            className="rounded-2xl p-5"
            style={{ 
              backgroundColor: '#0D1117',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white m-0" style={{ fontSize: '16px', fontWeight: '600' }}>
                ქვეყნები / Countries
              </h3>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" 
                size={16} 
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search countries..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border-0"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '13px'
                }}
              />
            </div>

            {/* Country List */}
            <div className="space-y-1 max-h-[600px] overflow-y-auto">
              {filteredCountries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border-0 cursor-pointer transition-all"
                  style={{
                    backgroundColor: selectedCountry?.id === country.id 
                      ? 'rgba(220, 20, 60, 0.15)' 
                      : 'transparent',
                    borderLeft: selectedCountry?.id === country.id 
                      ? '3px solid #DC143C' 
                      : '3px solid transparent'
                  }}
                >
                  <span style={{ fontSize: '24px' }}>{country.flag}</span>
                  <div className="flex-1 text-left">
                    <div className="text-white" style={{ fontSize: '13px', fontWeight: '600' }}>
                      {country.nameGeo}
                    </div>
                    <div className="text-white/50" style={{ fontSize: '11px' }}>
                      {country.name}
                    </div>
                  </div>
                  <div 
                    className="px-2 py-1 rounded"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      fontSize: '11px',
                      color: 'white'
                    }}
                  >
                    {country.articlesCount}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="col-span-6">
          <div 
            className="rounded-2xl p-6"
            style={{ 
              backgroundColor: '#0D1117',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Header with Add Button */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white m-0" style={{ fontSize: '18px', fontWeight: '600' }}>
                  რედაქტორი / Editor
                </h3>
                <p className="text-white/50 m-0 mt-1" style={{ fontSize: '12px' }}>
                  {selectedCountry?.flag} {selectedCountry?.nameGeo}
                </p>
              </div>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-0 cursor-pointer transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#DC143C',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: '600'
                }}
              >
                <Plus size={16} />
                <span>ახალი სტატია / Add Article</span>
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-white/70 mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                  სათაური / Article Title
                </label>
                <input
                  type="text"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-0"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div>
                <label className="block text-white/70 mb-2" style={{ fontSize: '12px', fontWeight: '600' }}>
                  კონტენტი / Content
                </label>
                <textarea
                  value={articleContent}
                  onChange={(e) => setArticleContent(e.target.value)}
                  rows={12}
                  className="w-full px-4 py-3 rounded-lg border-0 resize-none"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '14px',
                    lineHeight: '1.6'
                  }}
                />
              </div>

              <div className="flex gap-3">
                <button
                  className="flex-1 py-3 rounded-lg border-0 cursor-pointer transition-all hover:opacity-90"
                  style={{
                    backgroundColor: '#DC143C',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  შენახვა / Save
                </button>
                <button
                  className="px-6 py-3 rounded-lg border cursor-pointer transition-all hover:bg-white/5"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  გაუქმება / Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Preview */}
        <div className="col-span-3">
          <div 
            className="rounded-2xl p-5"
            style={{ 
              backgroundColor: '#0D1117',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Eye className="text-white/60" size={16} />
              <h3 className="text-white m-0" style={{ fontSize: '14px', fontWeight: '600' }}>
                პრევიუ / Preview
              </h3>
            </div>

            {/* Mobile Card Preview */}
            <div 
              className="rounded-xl p-4 border"
              style={{ 
                backgroundColor: '#152238',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <span style={{ fontSize: '32px' }}>{selectedCountry?.flag}</span>
                <div className="flex-1">
                  <h4 className="text-white m-0" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.3' }}>
                    {articleTitle}
                  </h4>
                  <p className="text-white/50 m-0 mt-1" style={{ fontSize: '11px' }}>
                    {selectedCountry?.nameGeo}
                  </p>
                </div>
              </div>
              <p className="text-white/80 m-0" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                {articleContent.substring(0, 120)}...
              </p>
              <button
                className="mt-3 w-full py-2 rounded-lg border-0 cursor-pointer"
                style={{
                  backgroundColor: 'rgba(220, 20, 60, 0.2)',
                  color: '#DC143C',
                  fontSize: '12px',
                  fontWeight: '600'
                }}
              >
                Read More
              </button>
            </div>

            <p className="text-white/40 mt-4 m-0 text-center" style={{ fontSize: '11px' }}>
              Mobile card appearance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
