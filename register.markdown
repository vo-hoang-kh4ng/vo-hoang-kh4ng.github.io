---
layout: page
title: Register
permalink: /register/
---

# Đăng ký tài khoản mới! 

Chào mừng bạn đến với Blog AI! Đăng ký tài khoản để có thể tương tác đầy đủ với các bài viết.

## Đăng ký nhanh

<div class="social-login">
  <button class="google-login" id="google-login" onclick="signInWithGoogle()">
    <i class="fab fa-google"></i> Đăng ký với Google
  </button>
  
  <button class="github-login" id="github-login" onclick="signInWithGitHub()">
    <i class="fab fa-github"></i> Đăng ký với GitHub
  </button>
</div>

<div style="text-align: center; margin: 1.5rem 0; color: var(--ai-gray-500); font-size: 0.875rem;">
   hoặc 
</div>

## Hoặc đăng ký bằng email

<form class="register-form" id="registerForm">
  <div class="form-group">
    <label for="name">Họ và tên:</label>
    <input type="text" id="name" name="name" required placeholder="Họ và tên của bạn">
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required placeholder="your.email@example.com">
  </div>
  
  <div class="form-group">
    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required placeholder="Mật khẩu mạnh (ít nhất 6 ký tự)">
  </div>
  
  <div class="form-group">
    <label for="confirm-password">Xác nhận mật khẩu:</label>
    <input type="password" id="confirm-password" name="confirm-password" required placeholder="Nhập lại mật khẩu">
  </div>
  
  <div class="form-group">
    <label for="interests">Bạn quan tâm đến chủ đề nào?</label>
    <select id="interests" name="interests" multiple>
      <option value="machine-learning">Machine Learning</option>
      <option value="deep-learning">Deep Learning</option>
      <option value="computer-vision">Computer Vision</option>
      <option value="nlp">Natural Language Processing</option>
      <option value="data-science">Data Science</option>
      <option value="ai-applications">AI Applications</option>
    </select>
  </div>
  
  <div class="form-group">
    <label>
      <input type="checkbox" name="terms" required> Tôi đồng ý với <a href="/terms/" target="_blank" style="color: var(--ai-primary);">Điều khoản sử dụng</a>
    </label>
  </div>
  
  <div class="form-group">
    <label>
      <input type="checkbox" name="newsletter"> Nhận thông báo về bài viết mới qua email
    </label>
  </div>
  
  <button type="submit" class="register-btn">Đăng ký ngay! </button>
</form>

## Đã có tài khoản?

<a href="/login/" class="login-link" style="display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; background: var(--ai-gray-100); color: var(--ai-gray-700); text-decoration: none; border-radius: 8px; transition: all 0.3s ease;">Đăng nhập tại đây</a>

## Lợi ích khi đăng ký

-  **Like và bình luận**: Tương tác với các bài viết
-  **Lưu bài viết**: Lưu những bài viết yêu thích
-  **Thông báo**: Nhận thông báo khi có bình luận mới
-  **Hồ sơ cá nhân**: Quản lý thông tin và sở thích
-  **Nội dung cá nhân hóa**: Nhận nội dung phù hợp với sở thích

---

*Chào mừng bạn đến với cộng đồng AI!*

<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"></script>

<!-- Include CSS and JS -->
<link rel="stylesheet" href="/assets/custom.css">
<script src="/assets/firebase-auth.js"></script>
