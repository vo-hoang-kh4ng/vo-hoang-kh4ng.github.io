// Recent Posts JavaScript - Updated with new post

// Sample posts data - In production, this would come from Jekyll
const samplePosts = [
  {
    id: 1,
    title: "Từ GPT-2 đến GPT-4: Phân tích sự tiến hóa kiến trúc LLM",
    subtitle: "Khám phá sự tiến hóa của kiến trúc Large Language Models từ GPT-2 đến GPT-4",
    date: "JAN 28",
    author: "VO HOANG KHANG",
    thumbnail: "/assets/images/gpt-evolution-chart.svg",
    tags: ["llm-architecture", "gpt-4", "transformer", "research"],
    url: "/2025/01/28/gpt-evolution-analysis/",
    featured: true
  },
  {
    id: 2,
    title: "Machine Learning cơ bản - Bắt đầu từ đâu?",
    subtitle: "Hướng dẫn chi tiết về Machine Learning với Python và Scikit-learn",
    date: "JAN 27",
    author: "VO HOANG KHANG",
    thumbnail: "/assets/images/ml-basics.jpg",
    tags: ["machine-learning", "python", "tutorial"],
    url: "/2025/01/27/machine-learning-basics/",
    featured: false
  },
  {
    id: 3,
    title: "Deep Learning với TensorFlow - Hướng dẫn từ A đến Z",
    subtitle: "Tìm hiểu về Neural Networks, CNN, RNN và các ứng dụng thực tế",
    date: "JAN 27",
    author: "VO HOANG KHANG",
    thumbnail: "/assets/images/deep-learning.jpg",
    tags: ["deep-learning", "tensorflow", "neural-networks"],
    url: "/2025/01/27/deep-learning-tensorflow/",
    featured: false
  },
  {
    id: 4,
    title: "Computer Vision với OpenCV - Xử lý ảnh thông minh",
    subtitle: "Hướng dẫn sử dụng OpenCV để xử lý ảnh và video một cách thông minh",
    date: "JAN 26",
    author: "VO HOANG KHANG",
    thumbnail: "/assets/images/computer-vision.jpg",
    tags: ["computer-vision", "opencv", "image-processing"],
    url: "/2025/01/26/computer-vision-opencv/",
    featured: false
  },
  {
    id: 5,
    title: "Natural Language Processing với NLTK",
    subtitle: "Xử lý ngôn ngữ tự nhiên và phân tích văn bản với Python",
    date: "JAN 25",
    author: "VO HOANG KHANG",
    thumbnail: "/assets/images/nlp.jpg",
    tags: ["nlp", "nltk", "text-processing"],
    url: "/2025/01/25/nlp-nltk/",
    featured: false
  },
  {
    id: 6,
    title: "Chào mừng đến với Blog AI của tôi",
    subtitle: "Giới thiệu về blog AI và những gì bạn sẽ tìm thấy ở đây",
    date: "JAN 27",
    author: "VO HOANG KHANG",
    thumbnail: "/assets/images/ai-blog.jpg",
    tags: ["ai", "introduction", "blog"],
    url: "/2025/01/27/ai-blog-introduction/",
    featured: false
  },
  {
    id: 7,
    title: "Data Science với Pandas và NumPy",
    subtitle: "Phân tích dữ liệu và thống kê với Python",
    date: "JAN 24",
    author: "VO HOANG KHANG",
    thumbnail: "/assets/images/data-science.jpg",
    tags: ["data-science", "pandas", "numpy"],
    url: "/2025/01/24/data-science-pandas/",
    featured: false
  },
  {
    id: 8,
    title: "AI trong Y tế - Ứng dụng thực tế",
    subtitle: "Cách AI đang thay đổi ngành y tế và chẩn đoán",
    date: "JAN 23",
    author: "VO HOANG KHANG",
    thumbnail: "/assets/images/ai-healthcare.jpg",
    tags: ["ai-applications", "healthcare", "medical-ai"],
    url: "/2025/01/23/ai-healthcare/",
    featured: false
  }
];

// Load posts on page load
document.addEventListener('DOMContentLoaded', function() {
  loadRecentPosts();
  setupSearch();
});

// Load recent posts
function loadRecentPosts() {
  const postsGrid = document.getElementById('postsGrid');
  if (!postsGrid) return;
  
  // Show loading skeleton
  showLoadingSkeleton();
  
  // Simulate loading delay
  setTimeout(() => {
    renderPosts(samplePosts);
  }, 1000);
}

// Show loading skeleton
function showLoadingSkeleton() {
  const postsGrid = document.getElementById('postsGrid');
  postsGrid.innerHTML = '';
  
  for (let i = 0; i < 8; i++) {
    const skeletonCard = document.createElement('div');
    skeletonCard.className = 'post-card-skeleton';
    skeletonCard.innerHTML = 
      <div class="skeleton-thumbnail"></div>
      <div class="skeleton-content">
        <div class="skeleton-title"></div>
        <div class="skeleton-subtitle"></div>
        <div class="skeleton-meta"></div>
      </div>
    ;
    postsGrid.appendChild(skeletonCard);
  }
}

// Render posts
function renderPosts(posts) {
  const postsGrid = document.getElementById('postsGrid');
  if (!postsGrid) return;
  
  postsGrid.innerHTML = '';
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Get first 8 posts
  const recentPosts = sortedPosts.slice(0, 8);
  
  recentPosts.forEach((post, index) => {
    const postCard = createPostCard(post, index === 0);
    postsGrid.appendChild(postCard);
  });
}

// Create post card element
function createPostCard(post, isFeatured = false) {
  const card = document.createElement('div');
  card.className = post-card ;
  
  const thumbnailHtml = post.thumbnail ? 
    <img src="" alt="" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"> :
    '';
  
  const placeholderHtml = 
    <div class="post-thumbnail-placeholder" style="display: ;">
      
    </div>
  ;
  
  const tagsHtml = post.tags.map(tag => 
    <a href="/tags//" class="post-tag"></a>
  ).join('');
  
  card.innerHTML = 
    <div class="post-thumbnail">
      
      
    </div>
    <div class="post-content">
      <h3 class="post-title">
        <a href="" style="color: inherit; text-decoration: none;"></a>
      </h3>
      <p class="post-subtitle"></p>
      <div class="post-meta">
        <div class="post-date">
          <span></span>
          <span></span>
        </div>
        <div class="post-author">
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="post-tags">
        
      </div>
    </div>
  ;
  
  // Add click handler for the entire card
  card.addEventListener('click', (e) => {
    if (!e.target.closest('a')) {
      window.location.href = post.url;
    }
  });
  
  return card;
}

// Setup search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  let searchTimeout;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(e.target.value);
    }, 300);
  });
  
  // Handle Enter key
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch(e.target.value);
    }
  });
}

// Perform search
function performSearch(query) {
  if (!query.trim()) {
    renderPosts(samplePosts);
    return;
  }
  
  const filteredPosts = samplePosts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
  
  renderPosts(filteredPosts);
}

// Toggle search bar
function toggleSearch() {
  const searchBar = document.getElementById('searchBar');
  const searchInput = document.getElementById('searchInput');
  
  if (searchBar.classList.contains('active')) {
    searchBar.classList.remove('active');
    searchInput.value = '';
    renderPosts(samplePosts);
  } else {
    searchBar.classList.add('active');
    searchInput.focus();
  }
}

// Close search on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const searchBar = document.getElementById('searchBar');
    if (searchBar && searchBar.classList.contains('active')) {
      toggleSearch();
    }
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe post cards for animation
document.addEventListener('DOMContentLoaded', () => {
  const postCards = document.querySelectorAll('.post-card');
  postCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Handle image loading errors
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.post-thumbnail img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      const placeholder = this.nextElementSibling;
      if (placeholder) {
        placeholder.style.display = 'flex';
      }
    });
  });
});

// Add loading states
function showLoading() {
  const postsGrid = document.getElementById('postsGrid');
  if (postsGrid) {
    postsGrid.innerHTML = '<div class="posts-loading">Loading posts...</div>';
  }
}

// Handle empty state
function showEmptyState() {
  const postsGrid = document.getElementById('postsGrid');
  if (postsGrid) {
    postsGrid.innerHTML = 
      <div class="empty-posts">
        <div class="empty-posts-icon"></div>
        <h3 class="empty-posts-title">Không tìm thấy bài viết</h3>
        <p class="empty-posts-description">Thử tìm kiếm với từ khóa khác hoặc xem tất cả bài viết.</p>
        <a href="/posts/" class="empty-posts-button">Xem tất cả bài viết</a>
      </div>
    ;
  }
}
