// Firebase Authentication for AI Blog

// Firebase configuration
const firebaseConfig = {
  // Thay thế bằng config của bạn từ Firebase Console
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Sign In
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log('Đăng nhập thành công:', user);
      showSuccessMessage('Đăng nhập thành công!');
      // Redirect to home page
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    })
    .catch((error) => {
      console.error('Lỗi đăng nhập:', error);
      showErrorMessage('Đăng nhập thất bại: ' + error.message);
    });
}

// GitHub Sign In
function signInWithGitHub() {
  const provider = new firebase.auth.GithubAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log('Đăng nhập thành công:', user);
      showSuccessMessage('Đăng nhập thành công!');
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    })
    .catch((error) => {
      console.error('Lỗi đăng nhập:', error);
      showErrorMessage('Đăng nhập thất bại: ' + error.message);
    });
}

// Email/Password Sign In
function signInWithEmail(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      const user = result.user;
      console.log('Đăng nhập thành công:', user);
      showSuccessMessage('Đăng nhập thành công!');
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    })
    .catch((error) => {
      console.error('Lỗi đăng nhập:', error);
      showErrorMessage('Đăng nhập thất bại: ' + error.message);
    });
}

// Password Reset
function resetPassword() {
  const email = prompt('Nhập email để khôi phục mật khẩu:');
  if (email) {
    auth.sendPasswordResetEmail(email)
      .then(() => {
        showSuccessMessage('Email khôi phục đã được gửi!');
      })
      .catch((error) => {
        showErrorMessage('Lỗi gửi email: ' + error.message);
      });
  }
}

// Sign Out
function signOut() {
  auth.signOut()
    .then(() => {
      console.log('Đăng xuất thành công');
      showSuccessMessage('Đăng xuất thành công!');
    })
    .catch((error) => {
      console.error('Lỗi đăng xuất:', error);
    });
}

// Check Auth State
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('User đã đăng nhập:', user);
    updateUIForLoggedInUser(user);
  } else {
    console.log('User chưa đăng nhập');
    updateUIForLoggedOutUser();
  }
});

// Update UI for logged in user
function updateUIForLoggedInUser(user) {
  const loginBtn = document.querySelector('.login-btn');
  if (loginBtn) {
    loginBtn.innerHTML =  ;
    loginBtn.onclick = signOut;
  }
  
  // Show user info
  const userInfo = document.createElement('div');
  userInfo.className = 'user-info';
  userInfo.innerHTML = 
    <p>Xin chào, <strong></strong>!</p>
    <button onclick="signOut()" class="signout-btn">Đăng xuất</button>
  ;
  
  const form = document.querySelector('.login-form');
  if (form) {
    form.style.display = 'none';
    form.parentNode.insertBefore(userInfo, form);
  }
}

// Update UI for logged out user
function updateUIForLoggedOutUser() {
  const form = document.querySelector('.login-form');
  if (form) {
    form.style.display = 'block';
  }
  
  const userInfo = document.querySelector('.user-info');
  if (userInfo) {
    userInfo.remove();
  }
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('emailLoginForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      signInWithEmail(email, password);
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
  const messageDiv = document.createElement('div');
  messageDiv.className = message ;
  messageDiv.textContent = message;
  
  document.body.appendChild(messageDiv);
  
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

// CSS for messages
const style = document.createElement('style');
style.textContent = 
  .message {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    z-index: 1000;
  }
  
  .message.success {
    background-color: #28a745;
  }
  
  .message.error {
    background-color: #dc3545;
  }
  
  .user-info {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .signout-btn {
    background: #dc3545;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .signout-btn:hover {
    background: #c82333;
  }
  
  .social-login {
    margin-bottom: 30px;
  }
  
  .google-login, .github-login {
    display: block;
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .google-login {
    background: #db4437;
    color: white;
  }
  
  .google-login:hover {
    background: #c23321;
  }
  
  .github-login {
    background: #333;
    color: white;
  }
  
  .github-login:hover {
    background: #555;
  }
;
document.head.appendChild(style);
