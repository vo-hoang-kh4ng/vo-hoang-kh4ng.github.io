---
layout: page
title: Debug Firebase Authentication
permalink: /debug-firebase/
---

# Debug Firebase Authentication

## Vấn đề: Nút "Đăng nhập với Google" không hoạt động

### Bước 1: Kiểm tra Console

1. Mở trang /login/
2. Nhấn **F12** để mở Developer Tools
3. Vào tab **Console**
4. Tìm các thông báo lỗi

### Bước 2: Các lỗi thường gặp

#### Lỗi 1: "Firebase SDK chưa được load"
`
Firebase SDK chưa được load!
`
**Giải pháp**: Kiểm tra script tags trong login.markdown

#### Lỗi 2: "Firebase config chưa được cập nhật"
`
Firebase config chưa được cập nhật!
`
**Giải pháp**: Cập nhật config trong ssets/firebase-auth.js

#### Lỗi 3: "This domain is not authorized"
`
Error: This domain is not authorized
`
**Giải pháp**: Thêm domain vào Firebase Console

#### Lỗi 4: "Invalid API key"
`
Error: Invalid API key
`
**Giải pháp**: Kiểm tra lại API key

### Bước 3: Kiểm tra từng bước

#### 3.1 Kiểm tra Firebase SDK
Trong Console, gõ:
`javascript
console.log(typeof firebase);
`
Kết quả phải là: "object"

#### 3.2 Kiểm tra Firebase Config
Trong Console, gõ:
`javascript
console.log(firebaseConfig);
`
Kết quả phải hiển thị config thực, không phải "YOUR_API_KEY"

#### 3.3 Kiểm tra Google Provider
Trong Console, gõ:
`javascript
console.log(provider);
`
Kết quả phải hiển thị GoogleAuthProvider object

### Bước 4: Test thủ công

#### 4.1 Test Google Sign-in
Trong Console, gõ:
`javascript
firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error));
`

#### 4.2 Test Auth State
Trong Console, gõ:
`javascript
firebase.auth().onAuthStateChanged(user => {
  console.log('Auth state:', user ? 'Logged in' : 'Logged out');
  if (user) console.log('User:', user.email);
});
`

### Bước 5: Các bước sửa lỗi

#### 5.1 Cập nhật Firebase Config
1. Vào Firebase Console
2. Copy config từ Project Settings
3. Thay thế trong ssets/firebase-auth.js

#### 5.2 Thêm Authorized Domains
1. Vào Firebase Console > Authentication > Settings
2. Thêm o-hoang-kh4ng.github.io
3. Thêm localhost (để test local)

#### 5.3 Kiểm tra OAuth Consent Screen
1. Vào Google Cloud Console
2. Chọn project Firebase
3. Vào APIs & Services > OAuth consent screen
4. Cấu hình OAuth consent screen

### Bước 6: Test lại

1. Refresh trang /login/
2. Mở Console
3. Click nút "Đăng nhập với Google"
4. Kiểm tra Console có lỗi gì không

### Bước 7: Nếu vẫn không hoạt động

#### 7.1 Kiểm tra Network
- Vào tab Network trong Developer Tools
- Refresh trang
- Tìm các request đến Firebase
- Kiểm tra có lỗi 404, 403 không

#### 7.2 Kiểm tra CORS
- Kiểm tra Console có lỗi CORS không
- Thêm domain vào Firebase Console

#### 7.3 Kiểm tra HTTPS
- Firebase yêu cầu HTTPS trong production
- Test trên https://vo-hoang-kh4ng.github.io

### Bước 8: Debug Script

Thêm script debug vào login.markdown:

`html
<script>
console.log('=== FIREBASE DEBUG ===');
console.log('Firebase loaded:', typeof firebase !== 'undefined');
console.log('Firebase config:', firebaseConfig);
console.log('Google provider:', provider);
console.log('Auth state:', firebase.auth().currentUser);
</script>
`

### Bước 9: Liên hệ hỗ trợ

Nếu vẫn không giải quyết được:
1. Chụp màn hình Console
2. Gửi lỗi chi tiết
3. Liên hệ qua GitHub Issues

---

**Lưu ý**: Đảm bảo đã cấu hình Firebase đúng cách trước khi test.
