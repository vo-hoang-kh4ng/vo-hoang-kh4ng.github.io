// Firebase Authentication for AI Blog - Production Ready

// Firebase configuration - Replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", // Replace with your API key
  authDomain: "ai-blog-vo-hoang-kh4ng.firebaseapp.com", // Replace with your domain
  projectId: "ai-blog-vo-hoang-kh4ng", // Replace with your project ID
  storageBucket: "ai-blog-vo-hoang-kh4ng.appspot.com", // Replace with your bucket
  messagingSenderId: "123456789012", // Replace with your sender ID
  appId: "1:123456789012:web:abcdef1234567890abcdef" // Replace with your app ID
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
} else {
  console.error('Firebase SDK not loaded');
}

// Google Sign In
function signInWithGoogle() {
  if (!auth) {
    showErrorMessage('Firebase chưa được khởi tạo. Vui lòng thử lại sau.');
    return;
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('email');
  provider.addScope('profile');
  
  showLoading('google-login');
  
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log('Đăng nhập thành công:', user);
      
      // Save user data to Firestore
      saveUserData(user);
      
      showSuccessMessage('Chào mừng ' + user.displayName + '! Đăng nhập thành công!');
      
      // Redirect to home page after 2 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    })
    .catch((error) => {
      console.error('Lỗi đăng nhập:', error);
      hideLoading('google-login');
      
      if (error.code === 'auth/popup-closed-by-user') {
        showErrorMessage('Đăng nhập bị hủy. Vui lòng thử lại.');
      } else if (error.code === 'auth/popup-blocked') {
        showErrorMessage('Popup bị chặn. Vui lòng cho phép popup và thử lại.');
      } else {
        showErrorMessage('Đăng nhập thất bại: ' + getErrorMessage(error.code));
      }
    });
}

// GitHub Sign In
function signInWithGitHub() {
  if (!auth) {
    showErrorMessage('Firebase chưa được khởi tạo. Vui lòng thử lại sau.');
    return;
  }

  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope('user:email');
  
  showLoading('github-login');
  
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log('Đăng nhập thành công:', user);
      
      // Save user data to Firestore
      saveUserData(user);
      
      showSuccessMessage('Chào mừng ' + (user.displayName || user.email) + '! Đăng nhập thành công!');
      
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    })
    .catch((error) => {
      console.error('Lỗi đăng nhập:', error);
      hideLoading('github-login');
      showErrorMessage('Đăng nhập thất bại: ' + getErrorMessage(error.code));
    });
}

// Email/Password Sign In
function signInWithEmail(email, password) {
  if (!auth) {
    showErrorMessage('Firebase chưa được khởi tạo. Vui lòng thử lại sau.');
    return;
  }

  showLoading('emailLoginForm');
  
  auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      const user = result.user;
      console.log('Đăng nhập thành công:', user);
      
      saveUserData(user);
      showSuccessMessage('Đăng nhập thành công!');
      
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    })
    .catch((error) => {
      console.error('Lỗi đăng nhập:', error);
      hideLoading('emailLoginForm');
      showErrorMessage('Đăng nhập thất bại: ' + getErrorMessage(error.code));
    });
}

// Email/Password Registration
function registerWithEmail(email, password, displayName) {
  if (!auth) {
    showErrorMessage('Firebase chưa được khởi tạo. Vui lòng thử lại sau.');
    return;
  }

  showLoading('registerForm');
  
  auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      const user = result.user;
      
      // Update display name
      return user.updateProfile({
        displayName: displayName
      }).then(() => {
        console.log('Đăng ký thành công:', user);
        saveUserData(user);
        showSuccessMessage('Đăng ký thành công! Chào mừng bạn đến với Blog AI!');
        
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      });
    })
    .catch((error) => {
      console.error('Lỗi đăng ký:', error);
      hideLoading('registerForm');
      showErrorMessage('Đăng ký thất bại: ' + getErrorMessage(error.code));
    });
}

// Password Reset
function resetPassword() {
  const email = prompt('Nhập email để khôi phục mật khẩu:');
  if (!email) return;
  
  if (!auth) {
    showErrorMessage('Firebase chưa được khởi tạo. Vui lòng thử lại sau.');
    return;
  }
  
  auth.sendPasswordResetEmail(email)
    .then(() => {
      showSuccessMessage('Email khôi phục mật khẩu đã được gửi! Vui lòng kiểm tra hộp thư.');
    })
    .catch((error) => {
      console.error('Lỗi gửi email:', error);
      showErrorMessage('Lỗi gửi email: ' + getErrorMessage(error.code));
    });
}

// Sign Out
function signOut() {
  if (!auth) {
    showErrorMessage('Firebase chưa được khởi tạo. Vui lòng thử lại sau.');
    return;
  }
  
  auth.signOut()
    .then(() => {
      console.log('Đăng xuất thành công');
      showSuccessMessage('Đăng xuất thành công!');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((error) => {
      console.error('Lỗi đăng xuất:', error);
      showErrorMessage('Đăng xuất thất bại: ' + error.message);
    });
}

// Save user data to Firestore
function saveUserData(user) {
  if (!db) return;
  
  const userData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    provider: user.providerData[0] ? user.providerData[0].providerId : 'email',
    lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  
  db.collection('users').doc(user.uid).set(userData, { merge: true })
    .then(() => {
      console.log('User data saved successfully');
    })
    .catch((error) => {
      console.error('Error saving user data:', error);
    });
}

// Check Auth State
if (typeof auth !== 'undefined') {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('User đã đăng nhập:', user);
      updateUIForLoggedInUser(user);
    } else {
      console.log('User chưa đăng nhập');
      updateUIForLoggedOutUser();
    }
  });
}

// Update UI for logged in user
function updateUIForLoggedInUser(user) {
  const loginBtn = document.querySelector('.login-btn');
  if (loginBtn) {
    loginBtn.innerHTML = ' ' + (user.displayName || user.email);
    loginBtn.onclick = signOut;
    loginBtn.style.background = 'var(--ai-danger)';
  }
  
  // Show user info
  const existingUserInfo = document.querySelector('.user-info');
  if (existingUserInfo) {
    existingUserInfo.remove();
  }
  
  const userInfo = document.createElement('div');
  userInfo.className = 'user-info';
  
  const avatarHtml = user.photoURL ? 
    '<img src="' + user.photoURL + '" alt="Avatar" style="width: 50px; height: 50px; border-radius: 50%; border: 3px solid white;">' : '';
  
  userInfo.innerHTML = 
    '<div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 1rem;">' +
      avatarHtml +
      '<div>' +
        '<h3 style="margin: 0; color: white;">Xin chào, ' + (user.displayName || user.email) + '!</h3>' +
        '<p style="margin: 0; opacity: 0.9; font-size: 0.9rem;">Đăng nhập thành công</p>' +
      '</div>' +
    '</div>' +
    '<button onclick="signOut()" class="signout-btn">Đăng xuất</button>';
  
  const form = document.querySelector('.login-form, .register-form');
  if (form) {
    form.style.display = 'none';
    form.parentNode.insertBefore(userInfo, form);
  }
  
  // Update navigation
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.href.includes('/login/')) {
      link.innerHTML = ' Profile';
      link.href = '#';
      link.onclick = (e) => {
        e.preventDefault();
        showUserProfile(user);
      };
    }
  });
}

// Update UI for logged out user
function updateUIForLoggedOutUser() {
  const form = document.querySelector('.login-form, .register-form');
  if (form) {
    form.style.display = 'block';
  }
  
  const userInfo = document.querySelector('.user-info');
  if (userInfo) {
    userInfo.remove();
  }
  
  // Reset navigation
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.innerHTML.includes('Profile')) {
      link.innerHTML = ' Login';
      link.href = '/login/';
      link.onclick = null;
    }
  });
}

// Show user profile modal
function showUserProfile(user) {
  const modal = document.createElement('div');
  modal.style.cssText = 
    'position: fixed;' +
    'top: 0;' +
    'left: 0;' +
    'width: 100%;' +
    'height: 100%;' +
    'background: rgba(0, 0, 0, 0.5);' +
    'display: flex;' +
    'align-items: center;' +
    'justify-content: center;' +
    'z-index: 1000;';
  
  const avatarHtml = user.photoURL ? 
    '<img src="' + user.photoURL + '" alt="Avatar" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 1rem; border: 3px solid var(--ai-primary);">' : '';
  
  modal.innerHTML = 
    '<div style="background: white; padding: 2rem; border-radius: 16px; max-width: 400px; width: 90%; text-align: center;">' +
      '<h2 style="margin-top: 0; color: var(--ai-gray-800);">Thông tin cá nhân</h2>' +
      avatarHtml +
      '<p><strong>Tên:</strong> ' + (user.displayName || 'Chưa cập nhật') + '</p>' +
      '<p><strong>Email:</strong> ' + user.email + '</p>' +
      '<p><strong>Provider:</strong> ' + (user.providerData[0] ? user.providerData[0].providerId : 'Email') + '</p>' +
      '<div style="margin-top: 2rem;">' +
        '<button onclick="signOut()" class="signout-btn" style="margin-right: 1rem;">Đăng xuất</button>' +
        '<button onclick="this.closest(\'div\').parentElement.remove()" style="background: var(--ai-gray-500); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; cursor: pointer;">Đóng</button>' +
      '</div>' +
    '</div>';
  
  document.body.appendChild(modal);
  
  // Close modal when clicking outside
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  };
}

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
  // Email login form
  const emailLoginForm = document.getElementById('emailLoginForm');
  if (emailLoginForm) {
    emailLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      signInWithEmail(email, password);
    });
  }
  
  // Registration form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const displayName = document.getElementById('name').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      
      if (password !== confirmPassword) {
        showErrorMessage('Mật khẩu xác nhận không khớp!');
        return;
      }
      
      if (password.length < 6) {
        showErrorMessage('Mật khẩu phải có ít nhất 6 ký tự!');
        return;
      }
      
      registerWithEmail(email, password, displayName);
    });
  }
});

// Utility functions
function showSuccessMessage(message) {
  showMessage(message, 'success');
}

function showErrorMessage(message) {
  showMessage(message, 'error');
}

function showMessage(message, type) {
  // Remove existing messages
  const existingMessages = document.querySelectorAll('.message');
  existingMessages.forEach(msg => msg.remove());
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message ' + type;
  messageDiv.textContent = message;
  
  document.body.appendChild(messageDiv);
  
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

function showLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = '<div class="loading"></div> Đang xử lý...';
    element.disabled = true;
  }
}

function hideLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    if (elementId === 'google-login') {
      element.innerHTML = '<i class="fab fa-google"></i> Đăng nhập với Google';
    } else if (elementId === 'github-login') {
      element.innerHTML = '<i class="fab fa-github"></i> Đăng nhập với GitHub';
    } else if (elementId === 'emailLoginForm') {
      element.innerHTML = 'Đăng nhập ';
    } else if (elementId === 'registerForm') {
      element.innerHTML = 'Đăng ký ngay! ';
    }
    element.disabled = false;
  }
}

function getErrorMessage(errorCode) {
  const errorMessages = {
    'auth/user-not-found': 'Không tìm thấy tài khoản với email này.',
    'auth/wrong-password': 'Mật khẩu không đúng.',
    'auth/email-already-in-use': 'Email này đã được sử dụng.',
    'auth/weak-password': 'Mật khẩu quá yếu. Vui lòng chọn mật khẩu mạnh hơn.',
    'auth/invalid-email': 'Email không hợp lệ.',
    'auth/user-disabled': 'Tài khoản này đã bị vô hiệu hóa.',
    'auth/too-many-requests': 'Quá nhiều yêu cầu. Vui lòng thử lại sau.',
    'auth/network-request-failed': 'Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet.',
    'auth/popup-closed-by-user': 'Đăng nhập bị hủy.',
    'auth/popup-blocked': 'Popup bị chặn. Vui lòng cho phép popup.',
    'auth/cancelled-popup-request': 'Yêu cầu đăng nhập bị hủy.',
    'auth/popup-blocked': 'Popup bị chặn bởi trình duyệt.',
    'auth/operation-not-allowed': 'Phương thức đăng nhập này không được phép.',
    'auth/account-exists-with-different-credential': 'Tài khoản đã tồn tại với thông tin đăng nhập khác.'
  };
  
  return errorMessages[errorCode] || 'Có lỗi xảy ra. Vui lòng thử lại.';
}

// Add Font Awesome for icons
if (!document.querySelector('link[href*="font-awesome"]')) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
  document.head.appendChild(link);
}
