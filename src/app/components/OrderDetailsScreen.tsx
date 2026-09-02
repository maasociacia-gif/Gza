import React from 'react';
import { ArrowLeft, MapPin, Phone, Clock, Package, CheckCircle, User } from 'lucide-react';
import { motion } from 'motion/react';

interface OrderDetailsScreenProps {
  onBack: () => void;
  orderId: string;
}

export function OrderDetailsScreen({ onBack, orderId }: OrderDetailsScreenProps) {
  // Mock order data
  const order = {
    id: orderId,
    customerName: 'Giorgi Beridze',
    customerNameGeo: 'გიორგი ბერიძე',
    phone: '+995 555 12 34 56',
    product: 'Georgian Wine Set',
    productGeo: 'ქართული ღვინის ნაკრები',
    quantity: 2,
    amount: '₾185',
    status: 'preparing',
    orderDate: 'April 16, 2026',
    orderTime: '14:30',
    address: '12 Rustaveli Avenue, Apt 45, Tbilisi',
    addressGeo: 'რუსთაველის გამზ. 12, ბინა 45, თბილისი',
    coordinates: { lat: 41.6938, lng: 44.8015 },
    notes: 'Please call before delivery',
    notesGeo: 'გთხოვთ დარეკოთ მიწოდებამდე'
  };

  const statusSteps = [
    {
      key: 'pending',
      label: 'Pending',
      labelGeo: 'მიღებული',
      icon: Clock,
      completed: true
    },
    {
      key: 'preparing',
      label: 'Preparing',
      labelGeo: 'მზადდება',
      icon: Package,
      completed: true,
      active: true
    },
    {
      key: 'delivered',
      label: 'Delivered',
      labelGeo: 'მიწოდებული',
      icon: CheckCircle,
      completed: false
    }
  ];

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
              Order {order.id}
            </h1>
            <p className="text-white/50" style={{ fontSize: '13px', marginTop: '2px' }}>
              შეკვეთა {order.id}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex-1 px-4 py-6 pb-24 space-y-5">
        {/* Status Stepper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl p-5"
          style={{
            backgroundColor: 'rgba(21, 34, 56, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <h2 className="text-white mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>
            Order Status • სტატუსი
          </h2>

          <div className="space-y-4">
            {statusSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === statusSteps.length - 1;

              return (
                <div key={step.key} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        backgroundColor: step.active
                          ? '#2ECC71'
                          : step.completed
                            ? 'rgba(46, 204, 113, 0.2)'
                            : 'rgba(255, 255, 255, 0.05)',
                        border: step.active ? 'none' : '2px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: step.active ? '0 4px 12px rgba(46, 204, 113, 0.4)' : 'none'
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{
                          color: step.completed || step.active ? 'white' : 'rgba(255, 255, 255, 0.3)'
                        }}
                      />
                    </div>
                    {!isLast && (
                      <div
                        className="w-0.5 h-12 transition-all duration-500"
                        style={{
                          backgroundColor: step.completed
                            ? 'rgba(46, 204, 113, 0.3)'
                            : 'rgba(255, 255, 255, 0.05)'
                        }}
                      />
                    )}
                  </div>

                  <div className="flex-1 pb-4">
                    <p
                      className="transition-all duration-500"
                      style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: step.active ? '#2ECC71' : step.completed ? 'white' : 'rgba(255, 255, 255, 0.4)'
                      }}
                    >
                      {step.label}
                    </p>
                    <p className="text-white/40" style={{ fontSize: '12px', marginTop: '2px' }}>
                      {step.labelGeo}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Customer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl p-5"
          style={{
            backgroundColor: 'rgba(21, 34, 56, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <h2 className="text-white mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>
            Customer Details • მყიდველი
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(46, 204, 113, 0.15)' }}
              >
                <User className="w-5 h-5" style={{ color: '#2ECC71' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white" style={{ fontSize: '15px', fontWeight: 500 }}>
                  {order.customerName}
                </p>
                <p className="text-white/50" style={{ fontSize: '13px', marginTop: '2px' }}>
                  {order.customerNameGeo}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(46, 204, 113, 0.15)' }}
              >
                <Phone className="w-5 h-5" style={{ color: '#2ECC71' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white" style={{ fontSize: '15px', fontWeight: 500 }}>
                  {order.phone}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Delivery Address & Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: 'rgba(21, 34, 56, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="p-5 pb-4">
            <h2 className="text-white mb-3" style={{ fontSize: '16px', fontWeight: 600 }}>
              Delivery Address • მისამართი
            </h2>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(46, 204, 113, 0.15)' }}
              >
                <MapPin className="w-5 h-5" style={{ color: '#2ECC71' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white" style={{ fontSize: '14px', fontWeight: 500, lineHeight: '1.5' }}>
                  {order.address}
                </p>
                <p className="text-white/50" style={{ fontSize: '13px', marginTop: '4px', lineHeight: '1.5' }}>
                  {order.addressGeo}
                </p>
              </div>
            </div>
          </div>

          {/* Mini Map */}
          <div
            className="relative w-full overflow-hidden"
            style={{ height: '160px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-emerald-900/20" />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(46, 204, 113, 0.1) 0%, transparent 50%)',
              }}
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: '#2ECC71',
                    boxShadow: '0 0 0 0 rgba(46, 204, 113, 0.4)'
                  }}
                >
                  <MapPin className="w-6 h-6 text-white" fill="white" />
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: '#2ECC71'
                  }}
                />
              </div>
            </div>

            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
          </div>
        </motion.div>

        {/* Order Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-2xl p-5"
          style={{
            backgroundColor: 'rgba(21, 34, 56, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <h2 className="text-white mb-4" style={{ fontSize: '16px', fontWeight: 600 }}>
            Order Details • დეტალები
          </h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-white/60" style={{ fontSize: '14px' }}>Product</span>
              <span className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>
                {order.product}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white/60" style={{ fontSize: '14px' }}>Quantity</span>
              <span className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>
                {order.quantity}x
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white/60" style={{ fontSize: '14px' }}>Order Date</span>
              <span className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>
                {order.orderDate}
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white/60" style={{ fontSize: '14px' }}>Time</span>
              <span className="text-white" style={{ fontSize: '14px', fontWeight: 500 }}>
                {order.orderTime}
              </span>
            </div>
            <div
              className="flex items-center justify-between py-3 mt-2"
              style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
            >
              <span className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>Total Amount</span>
              <span className="text-white" style={{ fontSize: '20px', fontWeight: 700, color: '#2ECC71' }}>
                {order.amount}
              </span>
            </div>
          </div>

          {order.notes && (
            <div
              className="mt-4 pt-4 rounded-xl p-3"
              style={{
                backgroundColor: 'rgba(255, 176, 32, 0.1)',
                border: '1px solid rgba(255, 176, 32, 0.2)'
              }}
            >
              <p className="text-white/90" style={{ fontSize: '13px', fontWeight: 500 }}>
                📝 {order.notes}
              </p>
              <p className="text-white/50" style={{ fontSize: '12px', marginTop: '4px' }}>
                {order.notesGeo}
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-0 left-0 right-0 p-4 flex gap-3"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(13, 27, 42, 0.95) 20%, rgba(13, 27, 42, 1) 100%)'
        }}
      >
        <button
          className="flex-1 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <Phone className="w-4 h-4 text-white" />
          <span className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>
            Call
          </span>
        </button>

        <button
          className="flex-1 py-3.5 rounded-xl transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
            boxShadow: '0 8px 24px rgba(46, 204, 113, 0.3)'
          }}
        >
          <span className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>
            Mark as Delivered
          </span>
        </button>
      </motion.div>
    </div>
  );
}
