import React, { useState } from 'react';
import { ArrowLeft, Plus, TrendingUp, Package, Clock, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BusinessDashboardProps {
  onBack: () => void;
  onAddProduct: () => void;
  onOrderDetails: (orderId: string) => void;
}

interface Order {
  id: string;
  customerName: string;
  customerNameGeo: string;
  product: string;
  productGeo: string;
  status: 'pending' | 'preparing' | 'delivered';
  amount: string;
  time: string;
}

export function BusinessDashboard({ onBack, onAddProduct, onOrderDetails }: BusinessDashboardProps) {
  const [activeOrders] = useState<Order[]>([
    {
      id: 'ORD-2847',
      customerName: 'Giorgi Beridze',
      customerNameGeo: 'გიორგი ბერიძე',
      product: 'Georgian Wine Set',
      productGeo: 'ქართული ღვინის ნაკრები',
      status: 'pending',
      amount: '₾185',
      time: '12 min ago'
    },
    {
      id: 'ORD-2846',
      customerName: 'Nino Kvaratskhelia',
      customerNameGeo: 'ნინო კვარაცხელია',
      product: 'Handmade Churchkhela',
      productGeo: 'ხელნაკეთი ჩურჩხელა',
      status: 'preparing',
      amount: '₾45',
      time: '1 hour ago'
    },
    {
      id: 'ORD-2845',
      customerName: 'David Lomidze',
      customerNameGeo: 'დავით ლომიძე',
      product: 'Traditional Spices',
      productGeo: 'ტრადიციული სანელებლები',
      status: 'preparing',
      amount: '₾67',
      time: '2 hours ago'
    },
    {
      id: 'ORD-2844',
      customerName: 'Mariam Gelashvili',
      customerNameGeo: 'მარიამ გელაშვილი',
      product: 'Chacha Gift Pack',
      productGeo: 'ჭაჭის საჩუქარი',
      status: 'delivered',
      amount: '₾120',
      time: '5 hours ago'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return '#FFB020';
      case 'preparing': return '#2ECC71';
      case 'delivered': return '#3498DB';
      default: return '#95A5A6';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'preparing': return <Package className="w-4 h-4" />;
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return { eng: 'New Order', geo: 'ახალი შეკვეთა' };
      case 'preparing': return { eng: 'Preparing', geo: 'მზადდება' };
      case 'delivered': return { eng: 'Delivered', geo: 'მიწოდებული' };
      default: return { eng: 'Unknown', geo: 'უცნობი' };
    }
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
        <div className="flex items-center gap-3 mb-4">
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
              Business Center
            </h1>
            <p className="text-white/50" style={{ fontSize: '13px', marginTop: '2px' }}>
              ბიზნეს ცენტრი
            </p>
          </div>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(46, 204, 113, 0.15)' }}>
            <TrendingUp className="w-5 h-5" style={{ color: '#2ECC71' }} />
          </div>
        </div>
      </motion.div>

      {/* Balance Cards */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl p-4 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
              boxShadow: '0 8px 24px rgba(46, 204, 113, 0.25)'
            }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)'
              }}
            />
            <p className="text-white/90" style={{ fontSize: '12px', fontWeight: 500, marginBottom: '8px' }}>
              Business Balance
            </p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-white" style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.5px' }}>
                ₾14,280
              </span>
            </div>
            <p className="text-white/70" style={{ fontSize: '11px' }}>
              ბალანსი
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl p-4 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #FFB020 0%, #F39C12 100%)',
              boxShadow: '0 8px 24px rgba(255, 176, 32, 0.25)'
            }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)'
              }}
            />
            <p className="text-white/90" style={{ fontSize: '12px', fontWeight: 500, marginBottom: '8px' }}>
              New Orders
            </p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-white" style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.5px' }}>
                {activeOrders.filter(o => o.status === 'pending').length}
              </span>
            </div>
            <p className="text-white/70" style={{ fontSize: '11px' }}>
              ახალი შეკვეთები
            </p>
          </motion.div>
        </div>
      </div>

      {/* Add Product Button */}
      <div className="px-4 pb-5">
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileTap={{ scale: 0.97 }}
          onClick={onAddProduct}
          className="w-full rounded-2xl py-4 flex items-center justify-center gap-2 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(39, 174, 96, 0.15) 100%)',
            border: '2px dashed rgba(46, 204, 113, 0.4)'
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: '#2ECC71' }}
          >
            <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <p className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>
              Add New Product
            </p>
            <p className="text-white/50" style={{ fontSize: '12px' }}>
              დაამატეთ ახალი პროდუქტი
            </p>
          </div>
        </motion.button>
      </div>

      {/* Active Orders */}
      <div className="flex-1 px-4 pb-24">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-white" style={{ fontSize: '18px', fontWeight: 600 }}>
              Active Orders
            </h2>
            <p className="text-white/50" style={{ fontSize: '13px', marginTop: '2px' }}>
              აქტიური შეკვეთები
            </p>
          </div>
          <div className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(46, 204, 113, 0.15)' }}>
            <span className="text-white/90" style={{ fontSize: '13px', fontWeight: 600 }}>
              {activeOrders.filter(o => o.status !== 'delivered').length}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {activeOrders.map((order, index) => (
            <motion.button
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.05 }}
              onClick={() => onOrderDetails(order.id)}
              className="w-full rounded-2xl p-4 text-left transition-all duration-300"
              style={{
                backgroundColor: 'rgba(21, 34, 56, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/90" style={{ fontSize: '14px', fontWeight: 600 }}>
                      {order.id}
                    </span>
                    <div
                      className="px-2 py-0.5 rounded-full flex items-center gap-1"
                      style={{ backgroundColor: `${getStatusColor(order.status)}20` }}
                    >
                      <span style={{ color: getStatusColor(order.status) }}>
                        {getStatusIcon(order.status)}
                      </span>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: getStatusColor(order.status)
                        }}
                      >
                        {getStatusLabel(order.status).eng}
                      </span>
                    </div>
                  </div>

                  <p className="text-white mb-1" style={{ fontSize: '15px', fontWeight: 500 }}>
                    {order.customerName}
                  </p>
                  <p className="text-white/50 mb-2" style={{ fontSize: '12px' }}>
                    {order.customerNameGeo}
                  </p>

                  <p className="text-white/70" style={{ fontSize: '13px' }}>
                    {order.product}
                  </p>

                  <div className="flex items-center justify-between mt-3 pt-3"
                    style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
                  >
                    <span className="text-white" style={{ fontSize: '17px', fontWeight: 700 }}>
                      {order.amount}
                    </span>
                    <span className="text-white/40" style={{ fontSize: '12px' }}>
                      {order.time}
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-white/30 mt-1 flex-shrink-0" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
