---
layout: page
title: Setup Guide
permalink: /setup/
---

# Hướng dẫn Setup Blog AI 

Đây là hướng dẫn chi tiết để setup các tính năng tương tác cho blog AI.

## 1. Setup Utterances (Comments)

### Bước 1: Cài đặt Utterances App
1. Truy cập [utterances.app](https://utterances.app)
2. Click "Install utterances" 
3. Chọn repository o-hoang-kh4ng/vo-hoang-kh4ng.github.io
4. Cấu hình:
   - **Blog Post  Issue Mapping**: Pathname
   - **Issue Label**: utterances
   - **Theme**: GitHub Light

### Bước 2: Thêm script vào posts
`html
<script src="https://utteranc.es/client.js"
        repo="vo-hoang-kh4ng/vo-hoang-kh4ng.github.io"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
`

## 2. Setup Formspree (Subscribe)

### Bước 1: Tạo tài khoản Formspree
1. Truy cập [formspree.io](https://formspree.io)
2. Đăng ký tài khoản miễn phí
3. Tạo form mới
4. Copy Form ID

### Bước 2: Cập nhật form
Thay YOUR_FORM_ID trong file subscribe.markdown bằng Form ID thực tế.

## 3. Setup Firebase Auth (Login)

### Bước 1: Tạo Firebase Project
1. Truy cập [Firebase Console](https://console.firebase.google.com)
2. Tạo project mới
3. Enable Authentication
4. Cấu hình Sign-in methods:
   - Email/Password
   - Google
   - GitHub

### Bước 2: Cấu hình Firebase
1. Vào Project Settings
2. Copy config object
3. Thay thế trong file ssets/firebase-auth.js:

`javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
`

### Bước 3: Cấu hình OAuth
- **Google**: Tạo OAuth client trong Google Cloud Console
- **GitHub**: Tạo OAuth app trong GitHub Settings

## 4. Setup Like System (Tùy chọn)

### Option 1: Firebase Realtime Database
`javascript
// Thêm vào firebase-auth.js
import { getDatabase, ref, set, get } from 'firebase/database';

function likePost(postId) {
  const db = getDatabase();
  const likeRef = ref(db, 'likes/' + postId);
  
  get(likeRef).then((snapshot) => {
    const currentLikes = snapshot.val() || 0;
    set(likeRef, currentLikes + 1);
  });
}
`

### Option 2: Supabase
`javascript
// Sử dụng Supabase thay vì Firebase
const { createClient } = supabase;
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);
`

## 5. Setup Newsletter (Tùy chọn)

### Option 1: Mailchimp
1. Tạo tài khoản Mailchimp
2. Tạo audience
3. Tạo signup form
4. Embed form vào subscribe page

### Option 2: ConvertKit
1. Tạo tài khoản ConvertKit
2. Tạo form
3. Copy embed code
4. Thay thế form hiện tại

## 6. Deploy và Test

### Bước 1: Commit changes
`ash
git add .
git commit -m "Add interactive features"
git push origin main
`

### Bước 2: Test các tính năng
1. **Comments**: Test comment trên bài viết
2. **Subscribe**: Test đăng ký newsletter
3. **Login**: Test đăng nhập với Google/GitHub
4. **Like**: Test like bài viết (nếu có)

## 7. Troubleshooting

### Lỗi thường gặp:
1. **Utterances không hiển thị**: Kiểm tra repo permissions
2. **Formspree không gửi**: Kiểm tra Form ID
3. **Firebase Auth lỗi**: Kiểm tra config và domain
4. **CORS errors**: Thêm domain vào Firebase settings

### Debug:
- Mở Developer Tools (F12)
- Kiểm tra Console tab
- Xem Network tab cho API calls

## 8. Tối ưu hóa

### Performance:
- Lazy load comments
- Minify CSS/JS
- Optimize images
- Enable caching

### SEO:
- Thêm meta tags
- Sitemap
- Schema markup
- Social sharing

---

*Nếu gặp vấn đề, hãy tạo issue trên GitHub repository!*
