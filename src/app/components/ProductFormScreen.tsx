import React, { useState } from 'react';
import { ArrowLeft, Upload, Image as ImageIcon, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductFormScreenProps {
  onBack: () => void;
}

export function ProductFormScreen({ onBack }: ProductFormScreenProps) {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const categories = [
    { value: 'food', label: 'Food & Beverages', labelGeo: 'საკვები და სასმელი' },
    { value: 'handmade', label: 'Handmade Crafts', labelGeo: 'ხელნაკეთი ნაკეთობები' },
    { value: 'textiles', label: 'Textiles & Clothing', labelGeo: 'ტექსტილი და ტანსაცმელი' },
    { value: 'souvenirs', label: 'Souvenirs', labelGeo: 'სუვენირები' },
    { value: 'wine', label: 'Wine & Spirits', labelGeo: 'ღვინო და სპირტიანი სასმელები' },
    { value: 'other', label: 'Other', labelGeo: 'სხვა' }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Handle product submission
    console.log({ productName, category, price, inStock, imagePreview });
    onBack();
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0D1B2A' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 px-4 py-4"
        style={{
          background: 'linear-gradient(180deg, rgba(13, 27, 42, 0.98) 0%, rgba(13, 27, 42, 0.95) 100%)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(46, 204, 113, 0.1)'
        }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white tracking-tight" style={{ fontSize: '22px', fontWeight: 600 }}>
              Add Product
            </h1>
            <p className="text-white/50" style={{ fontSize: '13px', marginTop: '2px' }}>
              დაამატეთ პროდუქტი
            </p>
          </div>
        </div>
      </motion.div>

      {/* Form Content */}
      <div className="flex-1 px-4 py-6 pb-24">
        <div className="space-y-6">
          {/* Image Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block mb-3">
              <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>
                Product Image
              </span>
              <span className="text-white/50 ml-2" style={{ fontSize: '12px' }}>
                პროდუქტის სურათი
              </span>
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />

            <label
              htmlFor="image-upload"
              className="block w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                height: '200px',
                backgroundColor: 'rgba(21, 34, 56, 0.6)',
                border: '2px dashed rgba(46, 204, 113, 0.3)',
                borderColor: imagePreview ? 'rgba(46, 204, 113, 0.5)' : 'rgba(46, 204, 113, 0.3)'
              }}
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(46, 204, 113, 0.15)' }}
                  >
                    <Upload className="w-7 h-7" style={{ color: '#2ECC71' }} />
                  </div>
                  <div className="text-center">
                    <p className="text-white/90" style={{ fontSize: '14px', fontWeight: 500 }}>
                      Tap to upload image
                    </p>
                    <p className="text-white/40" style={{ fontSize: '12px', marginTop: '4px' }}>
                      დააჭირეთ სურათის ასატვირთად
                    </p>
                  </div>
                </div>
              )}
            </label>
          </motion.div>

          {/* Product Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block mb-3">
              <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>
                Product Name
              </span>
              <span className="text-white/50 ml-2" style={{ fontSize: '12px' }}>
                პროდუქტის სახელი
              </span>
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
              className="w-full px-4 py-3.5 rounded-xl text-white placeholder:text-white/30 transition-all duration-200 outline-none"
              style={{
                backgroundColor: 'rgba(21, 34, 56, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '15px'
              }}
            />
          </motion.div>

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block mb-3">
              <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>
                Category
              </span>
              <span className="text-white/50 ml-2" style={{ fontSize: '12px' }}>
                კატეგორია
              </span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl text-white transition-all duration-200 outline-none appearance-none"
              style={{
                backgroundColor: 'rgba(21, 34, 56, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '15px',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'8\' viewBox=\'0 0 12 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1.5L6 6.5L11 1.5\' stroke=\'rgba(255,255,255,0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 16px center'
              }}
            >
              <option value="" disabled>Select category</option>
              {categories.map(cat => (
                <option key={cat.value} value={cat.value} style={{ backgroundColor: '#152238' }}>
                  {cat.label} • {cat.labelGeo}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block mb-3">
              <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>
                Price
              </span>
              <span className="text-white/50 ml-2" style={{ fontSize: '12px' }}>
                ფასი
              </span>
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4" style={{ color: '#2ECC71' }} />
                <span className="text-white/70" style={{ fontSize: '15px', fontWeight: 500 }}>₾</span>
              </div>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="w-full pl-16 pr-4 py-3.5 rounded-xl text-white placeholder:text-white/30 transition-all duration-200 outline-none"
                style={{
                  backgroundColor: 'rgba(21, 34, 56, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '15px'
                }}
              />
            </div>
          </motion.div>

          {/* In Stock Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl p-4 flex items-center justify-between"
            style={{
              backgroundColor: 'rgba(21, 34, 56, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <div>
              <p className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>
                In Stock
              </p>
              <p className="text-white/50" style={{ fontSize: '12px', marginTop: '2px' }}>
                მარაგშია
              </p>
            </div>
            <button
              onClick={() => setInStock(!inStock)}
              className="relative w-14 h-8 rounded-full transition-all duration-300"
              style={{ backgroundColor: inStock ? '#2ECC71' : 'rgba(255, 255, 255, 0.1)' }}
            >
              <motion.div
                animate={{ x: inStock ? 26 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg"
              />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="fixed bottom-0 left-0 right-0 p-4"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(13, 27, 42, 0.95) 20%, rgba(13, 27, 42, 1) 100%)'
        }}
      >
        <button
          onClick={handleSubmit}
          disabled={!productName || !category || !price}
          className="w-full py-4 rounded-2xl transition-all duration-300 disabled:opacity-40"
          style={{
            background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
            boxShadow: '0 8px 24px rgba(46, 204, 113, 0.3)'
          }}
        >
          <span className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>
            Add Product • დაამატეთ პროდუქტი
          </span>
        </button>
      </motion.div>
    </div>
  );
}
