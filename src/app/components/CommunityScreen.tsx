import React, { useState } from 'react';
import { ArrowLeft, Plus, Heart, MessageCircle, Share2, Search, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface CommunityScreenProps {
  onBack: () => void;
}

interface Post {
  id: string;
  authorName: string;
  authorFlag: string;
  timeAgo: string;
  category: string;
  categoryColor: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  liked: boolean;
}

const initialPosts: Post[] = [
  {
    id: '1',
    authorName: 'გიორგი ბ.',
    authorFlag: '🇩🇪',
    timeAgo: '2 საათის წინ',
    category: 'ვიზა',
    categoryColor: '#4A90E2',
    title: 'გერმანიაში ვიზის გაგრძელება — როგორ?',
    content: 'გამარჯობა! ვინმე იცის გერმანიაში ვიზის გაგრძელების პროცედურა? რა დოკუმენტები მჭირდება და სად უნდა მივიდე?',
    likes: 24,
    comments: 8,
    liked: false
  },
  {
    id: '2',
    authorName: 'ნინო კ.',
    authorFlag: '🇫🇷',
    timeAgo: '5 საათის წინ',
    category: 'საცხოვრებელი',
    categoryColor: '#43E97B',
    title: 'პარიზში ბინის ქირაობა',
    content: 'გამარჯობა ყველას! პარიზში ვეძებ ბინას 2 ადამიანზე. რომელი უბანი გირჩევთ? ბიუჯეტი €800-1000 თვეში.',
    likes: 15,
    comments: 12,
    liked: true
  },
  {
    id: '3',
    authorName: 'დავით მ.',
    authorFlag: '🇺🇸',
    timeAgo: '1 დღის წინ',
    category: 'სამუშაო',
    categoryColor: '#F5A623',
    title: 'IT სამუშაო ნიუ-იორკში',
    content: 'IT სპეციალისტი ვარ, 5 წლის გამოცდილებით. ვეძებ სამუშაოს ნიუ-იორკში. ვინმეს გაქვს კონტაქტები ან რჩევა?',
    likes: 31,
    comments: 19,
    liked: false
  },
  {
    id: '4',
    authorName: 'მარიამ გ.',
    authorFlag: '🇮🇹',
    timeAgo: '2 დღის წინ',
    category: 'განათლება',
    categoryColor: '#DC143C',
    title: 'იტალიური ენის კურსები რომში',
    content: 'გამარჯობა! ვეძებ კარგ იტალიური ენის კურსებს რომში. ვინმეს გაქვს გამოცდილება? რომელ სკოლას გირჩევთ?',
    likes: 18,
    comments: 7,
    liked: false
  }
];

const categories = ['ყველა', 'ვიზა', 'საცხოვრებელი', 'სამუშაო', 'განათლება', 'სხვა'];

export function CommunityScreen({ onBack }: CommunityScreenProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [activeCategory, setActiveCategory] = useState('ყველა');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleNewPost = () => {
    if (!newTitle.trim() || !newContent.trim()) return;
    const newPost: Post = {
      id: Date.now().toString(),
      authorName: 'შენ',
      authorFlag: '🇬🇪',
      timeAgo: 'ახლახანს',
      category: 'სხვა',
      categoryColor: '#9CA3AF',
      title: newTitle,
      content: newContent,
      likes: 0,
      comments: 0,
      liked: false
    };
    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewContent('');
    setShowNewPost(false);
  };

  const filteredPosts = posts.filter(post => {
    const matchCategory = activeCategory === 'ყველა' || post.category === activeCategory;
    const matchSearch = post.title.includes(searchQuery) || post.content.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: '#0D1B2A' }}>

      {/* Header */}
      <div className="px-4 py-4 sticky top-0 z-20"
        style={{
          backgroundColor: 'rgba(13, 27, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
        <div className="flex items-center gap-3 mb-3">
          <button onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <ArrowLeft className="text-white" size={22} />
          </button>
          <div className="flex-1">
            <h1 className="text-white m-0" style={{ fontSize: '20px', fontWeight: '700' }}>
              თემი
            </h1>
            <p className="text-white/50 m-0" style={{ fontSize: '12px' }}>Community</p>
          </div>
          <button onClick={() => setShowNewPost(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{ backgroundColor: '#DC143C', border: 'none', cursor: 'pointer' }}>
            <Plus size={16} className="text-white" />
            <span className="text-white" style={{ fontSize: '13px', fontWeight: '600' }}>პოსტი</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
          <input
            type="text"
            placeholder="ძებნა... / Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border-0 outline-none"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'white', fontSize: '14px' }}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className="flex-shrink-0 px-4 py-2 rounded-full border-0 cursor-pointer"
            style={{
              backgroundColor: activeCategory === cat ? '#DC143C' : 'rgba(255,255,255,0.06)',
              color: 'white',
              fontSize: '13px',
              fontWeight: activeCategory === cat ? '600' : '400'
            }}>
            {cat}
          </button>
        ))}
      </div>

      {/* New Post Form */}
      {showNewPost && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mb-4 rounded-2xl p-4"
          style={{ backgroundColor: '#152238', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 className="text-white mb-3 m-0" style={{ fontSize: '16px', fontWeight: '600' }}>
            ახალი პოსტი
          </h3>
          <input
            type="text"
            placeholder="სათაური / Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-0 outline-none mb-3"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'white', fontSize: '14px' }}
          />
          <textarea
            placeholder="შეკითხვა ან თემა... / Your question or topic..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-0 outline-none resize-none mb-3"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'white', fontSize: '14px' }}
          />
          <div className="flex gap-2">
            <button onClick={handleNewPost}
              className="flex-1 py-3 rounded-xl border-0 cursor-pointer"
              style={{ backgroundColor: '#DC143C', color: 'white', fontSize: '14px', fontWeight: '600' }}>
              გამოქვეყნება / Post
            </button>
            <button onClick={() => setShowNewPost(false)}
              className="px-4 py-3 rounded-xl border cursor-pointer"
              style={{ backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '14px' }}>
              გაუქმება
            </button>
          </div>
        </motion.div>
      )}

      {/* Posts */}
      <div className="px-4 space-y-3">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl p-4"
            style={{ backgroundColor: '#152238', border: '1px solid rgba(255,255,255,0.05)' }}>

            {/* Post Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#DC143C' }}>
                <span className="text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                  {post.authorName.charAt(0)}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-white" style={{ fontSize: '14px', fontWeight: '600' }}>
                    {post.authorName}
                  </span>
                  <span style={{ fontSize: '16px' }}>{post.authorFlag}</span>
                </div>
                <span className="text-white/40" style={{ fontSize: '12px' }}>{post.timeAgo}</span>
              </div>
              <div className="px-2 py-1 rounded-full"
                style={{ backgroundColor: `${post.categoryColor}20` }}>
                <span style={{ fontSize: '11px', fontWeight: '600', color: post.categoryColor }}>
                  {post.category}
                </span>
              </div>
            </div>

            {/* Post Content */}
            <h3 className="text-white mb-2 m-0" style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.3' }}>
              {post.title}
            </h3>
            <p className="text-white/70 m-0 mb-3" style={{ fontSize: '13px', lineHeight: '1.5' }}>
              {post.content}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-3"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <button onClick={() => handleLike(post.id)}
                className="flex items-center gap-1.5 border-0 cursor-pointer"
                style={{ background: 'none', color: post.liked ? '#DC143C' : 'rgba(255,255,255,0.4)' }}>
                <Heart size={16} fill={post.liked ? '#DC143C' : 'none'} />
                <span style={{ fontSize: '13px' }}>{post.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 border-0 cursor-pointer"
                style={{ background: 'none', color: 'rgba(255,255,255,0.4)' }}>
                <MessageCircle size={16} />
                <span style={{ fontSize: '13px' }}>{post.comments} კომენტარი</span>
              </button>
              <button className="flex items-center gap-1.5 border-0 cursor-pointer ml-auto"
                style={{ background: 'none', color: 'rgba(255,255,255,0.4)' }}>
                <Share2 size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}