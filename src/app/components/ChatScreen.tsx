import React, { useState } from 'react';
import { ArrowLeft, Phone, Video, Plus, Send, Languages, Check, CheckCheck, MapPin, FileText, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatScreenProps {
  onBack: () => void;
}

interface Message {
  id: string;
  text: string;
  textGeo?: string;
  sender: 'me' | 'other';
  timestamp: string;
  read?: boolean;
  translated?: boolean;
}

const messages: Message[] = [
  {
    id: '1',
    text: 'გამარჯობა! როგორ ხარ?',
    sender: 'other',
    timestamp: '10:23',
    textGeo: 'გამარჯობა! როგორ ხარ?'
  },
  {
    id: '2',
    text: 'Hello! I am doing well, thank you. How are you settling in Germany?',
    sender: 'me',
    timestamp: '10:25',
    read: true
  },
  {
    id: '3',
    text: 'ყველაფერი კარგად მიდის. უბრალოდ დოკუმენტებთან დამჭირდა დახმარება.',
    sender: 'other',
    timestamp: '10:27',
    textGeo: 'ყველაფერი კარგად მიდის. უბრალოდ დოკუმენტებთან დამჭირდა დახმარება.'
  },
  {
    id: '4',
    text: 'Of course! I can help you with that. What documents do you need?',
    sender: 'me',
    timestamp: '10:28',
    read: true
  },
  {
    id: '5',
    text: 'მჭირდება ვიზის გაგრძელების შესახებ ინფორმაცია',
    sender: 'other',
    timestamp: '10:30',
    textGeo: 'მჭირდება ვიზის გაგრძელების შესახებ ინფორმაცია'
  }
];

export function ChatScreen({ onBack }: ChatScreenProps) {
  const [messageText, setMessageText] = useState('');
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [translatedMessages, setTranslatedMessages] = useState<Set<string>>(new Set());

  const recipient = {
    name: 'Giorgi Beridze',
    nameGeo: 'გიორგი ბერიძე',
    country: 'Germany',
    countryGeo: 'გერმანია',
    flag: '🇩🇪',
    online: true,
    avatar: null
  };

  const handleTranslate = (messageId: string) => {
    const newTranslated = new Set(translatedMessages);
    if (newTranslated.has(messageId)) {
      newTranslated.delete(messageId);
    } else {
      newTranslated.add(messageId);
    }
    setTranslatedMessages(newTranslated);
  };

  const getTranslation = (message: Message) => {
    const translations: { [key: string]: string } = {
      '1': 'Hello! How are you?',
      '3': 'Everything is going well. I just needed help with documents.',
      '5': 'I need information about visa extension'
    };
    return translations[message.id] || message.text;
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0A0E1A' }}>
      {/* Top Bar */}
      <div 
        className="px-4 py-3 flex items-center justify-between sticky top-0 z-20"
        style={{ 
          backgroundColor: '#0D1117',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="flex items-center gap-3 flex-1">
          <button
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <ArrowLeft className="text-white" size={20} />
          </button>

          {/* Profile Picture with Flag Badge */}
          <div className="relative">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#DC143C' }}
            >
              <span className="text-white" style={{ fontSize: '16px', fontWeight: '600' }}>
                {recipient.name.charAt(0)}
              </span>
            </div>
            {/* Flag Badge */}
            <div 
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: '#0D1117',
                border: '2px solid #0D1117'
              }}
            >
              <span style={{ fontSize: '10px' }}>{recipient.flag}</span>
            </div>
            {/* Online Indicator */}
            {recipient.online && (
              <div 
                className="absolute top-0 right-0 w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: '#43E97B',
                  border: '2px solid #0D1117'
                }}
              />
            )}
          </div>

          {/* Name and Status */}
          <div className="flex-1">
            <div className="text-white" style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.2' }}>
              {recipient.nameGeo}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span 
                className="text-xs"
                style={{ color: recipient.online ? '#43E97B' : 'rgba(255, 255, 255, 0.5)' }}
              >
                {recipient.online ? 'ონლაინში • Online' : 'ოფლაინში • Offline'}
              </span>
            </div>
          </div>
        </div>

        {/* Call Icons */}
        <div className="flex items-center gap-2">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <Phone className="text-white/80" size={18} />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <Video className="text-white/80" size={18} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-4 py-6 overflow-y-auto space-y-4">
        {messages.map((message, index) => {
          const isMe = message.sender === 'me';
          const isTranslated = translatedMessages.has(message.id);
          const showTranslation = !isMe && isTranslated;

          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[75%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                {/* Message Bubble */}
                <div 
                  className="px-4 py-3 rounded-2xl relative"
                  style={{
                    backgroundColor: isMe ? '#DC143C' : '#1A2332',
                    borderBottomRightRadius: isMe ? '4px' : '16px',
                    borderBottomLeftRadius: isMe ? '16px' : '4px'
                  }}
                >
                  <p className="text-white m-0" style={{ fontSize: '15px', lineHeight: '1.4' }}>
                    {message.text}
                  </p>

                  {/* Translated Text */}
                  {showTranslation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-2 pt-2"
                      style={{ 
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <p className="text-white/70 m-0" style={{ fontSize: '13px', lineHeight: '1.4', fontStyle: 'italic' }}>
                        {getTranslation(message)}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Timestamp, Read Status, and Translate Button */}
                <div className="flex items-center gap-2 mt-1 px-1">
                  {!isMe && (
                    <button
                      onClick={() => handleTranslate(message.id)}
                      className="flex items-center gap-1 px-2 py-1 rounded transition-colors hover:bg-white/5"
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer',
                        color: isTranslated ? '#DC143C' : 'rgba(255, 255, 255, 0.4)'
                      }}
                    >
                      <Languages size={12} />
                      <span style={{ fontSize: '10px' }}>
                        {isTranslated ? 'Original' : 'Translate'}
                      </span>
                    </button>
                  )}
                  
                  <span className="text-white/40" style={{ fontSize: '11px' }}>
                    {message.timestamp}
                  </span>

                  {isMe && (
                    <div style={{ color: message.read ? '#43E97B' : 'rgba(255, 255, 255, 0.4)' }}>
                      {message.read ? <CheckCheck size={14} /> : <Check size={14} />}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Attachment Menu */}
      <AnimatePresence>
        {showAttachMenu && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="px-4 pb-3"
          >
            <div 
              className="rounded-2xl p-3"
              style={{ backgroundColor: '#1A2332' }}
            >
              <div className="flex items-center gap-3">
                <button
                  className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl transition-colors hover:bg-white/5"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(67, 233, 123, 0.2)' }}
                  >
                    <MapPin size={20} style={{ color: '#43E97B' }} />
                  </div>
                  <span className="text-white" style={{ fontSize: '11px' }}>
                    Location
                  </span>
                </button>

                <button
                  className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl transition-colors hover:bg-white/5"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(74, 144, 226, 0.2)' }}
                  >
                    <FileText size={20} style={{ color: '#4A90E2' }} />
                  </div>
                  <span className="text-white" style={{ fontSize: '11px' }}>
                    Document
                  </span>
                </button>

                <button
                  className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl transition-colors hover:bg-white/5"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(245, 166, 35, 0.2)' }}
                  >
                    <ImageIcon size={20} style={{ color: '#F5A623' }} />
                  </div>
                  <span className="text-white" style={{ fontSize: '11px' }}>
                    Photo
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Bar */}
      <div 
        className="px-4 py-3 border-t"
        style={{ 
          backgroundColor: '#0D1117',
          borderColor: 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="flex items-end gap-2">
          {/* Plus Button */}
          <button
            onClick={() => setShowAttachMenu(!showAttachMenu)}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all flex-shrink-0"
            style={{ 
              backgroundColor: showAttachMenu ? '#DC143C' : 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              cursor: 'pointer',
              transform: showAttachMenu ? 'rotate(45deg)' : 'rotate(0deg)'
            }}
          >
            <Plus className="text-white" size={20} />
          </button>

          {/* Input Field */}
          <div className="flex-1 relative">
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="მესიჯი... / Message..."
              rows={1}
              className="w-full px-4 py-3 rounded-2xl border-0 resize-none"
              style={{
                backgroundColor: '#1A2332',
                color: 'white',
                fontSize: '15px',
                maxHeight: '100px',
                outline: 'none'
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
            />
          </div>

          {/* Send Button */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all flex-shrink-0"
            style={{ 
              backgroundColor: messageText.trim() ? '#DC143C' : 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              cursor: messageText.trim() ? 'pointer' : 'default',
              opacity: messageText.trim() ? 1 : 0.5
            }}
            disabled={!messageText.trim()}
          >
            <Send className="text-white" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
