import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeContent } from './components/HomeContent';
import { BottomNav } from './components/BottomNav';
import { ProfilePage } from './components/ProfilePage';
import { EmergencyMapPage } from './components/EmergencyMapPage';
import { SubscriptionPage } from './components/SubscriptionPage';
import { AdminDashboard } from './components/AdminDashboard';
import { ChatScreen } from './components/ChatScreen';
import { UserProfileView } from './components/UserProfileView';
import { MyVaultScreen } from './components/MyVaultScreen';
import { JobsScreen } from './components/JobsScreen';
import { UserFlowCanvas } from './components/UserFlowCanvas';
import { AllScreensOverview } from './components/AllScreensOverview';
import { CareForHomeScreen } from './components/CareForHomeScreen';
import { AIScannerScreen } from './components/AIScannerScreen';
import { ServicesListScreen } from './components/ServicesListScreen';
import { ConsularLegalScreen } from './components/ConsularLegalScreen';
import { BusinessDashboard } from './components/BusinessDashboard';
import { ProductFormScreen } from './components/ProductFormScreen';
import { OrderDetailsScreen } from './components/OrderDetailsScreen';
import { ProfileSettingsScreen } from './components/ProfileSettingsScreen';
import { SettingsView } from './components/SettingsView';
import { CommunityScreen } from './components/CommunityScreen';
import { LoginScreen } from './components/LoginScreen';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedOrderId, setSelectedOrderId] = useState<string>('');
  const [historyStack, setHistoryStack] = useState<string[]>([]);
  const { colors } = useTheme();
  const { user, loading } = useAuth();

  const navigateTo = (nextTab: string) => {
    setActiveTab((prevTab) => {
      if (prevTab === nextTab) return prevTab;
      setHistoryStack((prevHistory) => [...prevHistory, prevTab]);
      return nextTab;
    });
  };

  const goBack = () => {
    setHistoryStack((prevHistory) => {
      if (prevHistory.length === 0) {
        setActiveTab('allscreens');
        return prevHistory;
      }
      const previousTab = prevHistory[prevHistory.length - 1];
      setActiveTab(previousTab);
      return prevHistory.slice(0, -1);
    });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        navigateTo('admin');
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'F') {
        e.preventDefault();
        navigateTo('flow');
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'O') {
        e.preventDefault();
        navigateTo('allscreens');
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'B') {
        e.preventDefault();
        navigateTo('business');
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--gza-page-bg)' }}>
      <div className="w-8 h-8 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--gza-border)', borderTopColor: 'var(--gza-crimson)' }} />
    </div>
  );

  if (!user) return <LoginScreen />;

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: colors.bg }}
    >
      {activeTab === 'allscreens' ? (
        <AllScreensOverview onNavigate={navigateTo} />
      ) : activeTab === 'flow' ? (
        <UserFlowCanvas />
      ) : activeTab === 'admin' ? (
        <AdminDashboard onBack={goBack} />
      ) : activeTab === 'community' ? (
        <CommunityScreen onBack={() => setActiveTab('home')} />
      ) : activeTab === 'chat' ? (
        <ChatScreen onBack={goBack} />
      ) : activeTab === 'userprofile' ? (
        <UserProfileView onBack={goBack} onVaultClick={() => navigateTo('vault')} />
      ) : activeTab === 'vault' ? (
        <MyVaultScreen onBack={goBack} />
      ) : activeTab === 'jobs' ? (
        <JobsScreen onBack={goBack} />
      ) : activeTab === 'serviceslist' ? (
        <ServicesListScreen onBack={goBack} />
      ) : activeTab === 'business' ? (
        <BusinessDashboard
          onBack={goBack}
          onAddProduct={() => navigateTo('productform')}
          onOrderDetails={(orderId) => {
            setSelectedOrderId(orderId);
            navigateTo('orderdetails');
          }}
        />
      ) : activeTab === 'productform' ? (
        <ProductFormScreen onBack={goBack} />
      ) : activeTab === 'orderdetails' ? (
        <OrderDetailsScreen onBack={goBack} orderId={selectedOrderId} />
      ) : activeTab === 'profilesettings' ? (
        <ProfileSettingsScreen
          onBack={goBack}
          onBusinessRegister={() => navigateTo('business')}
        />
      ) : (
        <>
          <div className="flex-1 flex flex-col max-w-[480px] mx-auto w-full lg:max-w-[1200px] overflow-hidden">
            {activeTab === 'profile' ? (
              <ProfilePage onBack={goBack} />
            ) : activeTab === 'services' ? (
              <EmergencyMapPage onNavigate={navigateTo} />
            ) : activeTab === 'subscription' ? (
              <SubscriptionPage onBack={goBack} />
            ) : activeTab === 'home' ? (
              <>
                <Header onProfileClick={() => navigateTo('userprofile')} />
                <HomeContent
                  onJobsClick={() => navigateTo('jobs')}
                  onScanClick={() => navigateTo('ai')}
                  onMapClick={() => navigateTo('services')}
                  onCommunityClick={() => navigateTo('community')}
                  onCareClick={() => navigateTo('careforhome')}
                  onLegalClick={() => navigateTo('consularlegal')}
                />
              </>
            ) : activeTab === 'ai' ? (
              <>
                <Header onProfileClick={() => navigateTo('userprofile')} />
                <AIScannerScreen onBack={goBack} />
              </>
            ) : activeTab === 'settings' ? (
              <>
                <Header onProfileClick={() => navigateTo('userprofile')} />
                <div className="flex-1 flex items-center justify-center">
                  <SettingsView />
                </div>
              </>
            ) : activeTab === 'careforhome' ? (
              <CareForHomeScreen onBack={goBack} />
            ) : activeTab === 'consularlegal' ? (
              <ConsularLegalScreen onBack={goBack} />
            ) : null}

            <BottomNav activeTab={activeTab} onTabChange={navigateTo} />
          </div>
        </>
      )}
    </div>
  );
}