---
layout: home
---

# Chào mừng đến với Blog AI của Vo Hoang Khang! 

Đây là nơi tôi chia sẻ những kiến thức, kinh nghiệm và góc nhìn về **Trí tuệ nhân tạo (AI)**, **Machine Learning** và **Deep Learning**.

## Về tôi

Tôi là Vo Hoang Khang, một người đam mê công nghệ và AI. Tôi viết blog này để chia sẻ những gì tôi học được và giúp đỡ những người khác trên hành trình khám phá AI.

## Chủ đề chính

-  **Machine Learning**: Thuật toán, thực hành, case studies
-  **Deep Learning**: Neural Networks, TensorFlow, PyTorch
-  **Computer Vision**: Image processing, Object Detection
-  **NLP**: Natural Language Processing, Text Analysis
-  **AI Applications**: Thực tế ứng dụng AI trong cuộc sống
-  **Data Science**: Data analysis, Visualization

## Recent Posts

<div class="recent-posts">
  <div class="recent-posts-header">
    <h2 class="recent-posts-title">Recent Posts</h2>
    <div class="recent-posts-actions">
      <svg class="search-icon" onclick="toggleSearch()" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <a href="/posts/" class="view-all-link">VIEW ALL</a>
    </div>
  </div>
  
  <div class="posts-grid" id="postsGrid">
    <!-- Posts will be loaded here -->
  </div>
</div>

## Tương tác với Blog

<div class="nav-links">
  <a href="/subscribe/"> Subscribe</a>
  <a href="/login/"> Login</a>
  <a href="/register/"> Register</a>
  <a href="/about/"> About</a>
  <a href="/firebase-setup/"> Firebase Setup</a>
</div>

## Tính năng tương tác

-  **Bình luận**: Sử dụng Utterances (GitHub Issues)
-  **Newsletter**: Đăng ký nhận tin mới qua Formspree
-  **Đăng nhập**: Firebase Auth với Google/GitHub
-  **Like**: Hệ thống like với Firebase (tùy chọn)

## UI/UX Features

-  **Modern Design**: Thiết kế hiện đại với gradient và animations
-  **Responsive**: Tối ưu cho mọi thiết bị
-  **Fast Loading**: Tối ưu performance
-  **Secure**: Bảo mật với Firebase Authentication

---

*Theo dõi blog để không bỏ lỡ những bài viết mới nhất!*

<!-- Search Bar -->
<div class="search-bar" id="searchBar">
  <input type="text" class="search-input" placeholder="Tìm kiếm bài viết..." id="searchInput">
  <button class="search-close" onclick="toggleSearch()"></button>
</div>

<!-- Include CSS and JS -->
<link rel="stylesheet" href="/assets/custom.css">
<link rel="stylesheet" href="/assets/recent-posts.css">
<script src="/assets/recent-posts.js"></script>
