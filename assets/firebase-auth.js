// Firebase Authentication Configuration
// Thay thế các giá trị này bằng config từ Firebase Console của bạn

const firebaseConfig = {
  apiKey: "AIzaSyBPxMJyzMaeMyzVgZyhSt9prZaZaV2KtFA",
  authDomain: "vo-hoang-kh4ng-blog.firebaseapp.com",
  projectId: "vo-hoang-kh4ng-blog",
  storageBucket: "vo-hoang-kh4ng-blog.firebasestorage.app",
  messagingSenderId: "17636698314",
  appId: "1:17636698314:web:7700b5c7e3c7705086ec33",
  measurementId: "G-G2T6BDPQEP"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  // Configure Google provider
  provider.addScope('email');
  provider.addScope('profile');
  
  // Auth state change listener
  firebase.auth().onAuthStateChanged((user) => {
    const userInfo = document.getElementById('user-info');
    const loginForm = document.getElementById('loginForm');
    const googleLoginBtn = document.getElementById('googleLoginBtn');
    
    if (user) {
      // User is signed in
      if (userInfo) {
        userInfo.style.display = 'block';
        userInfo.innerHTML = 
          <div class="user-profile">
            <img src="" alt="Profile" class="user-avatar">
            <div class="user-details">
              <h3>Xin chào, !</h3>
              <p>Email: </p>
              <button onclick="signOut()" class="btn-logout">Đăng xuất</button>
            </div>
          </div>
        ;
      }
      
      if (loginForm) loginForm.style.display = 'none';
      if (googleLoginBtn) googleLoginBtn.style.display = 'none';
    } else {
      // User is signed out
      if (userInfo) userInfo.style.display = 'none';
      if (loginForm) loginForm.style.display = 'block';
      if (googleLoginBtn) googleLoginBtn.style.display = 'block';
    }
  });
  
  // Email/Password Sign In
  function signInWithEmailAndPassword(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Đăng nhập thành công:', userCredential.user);
        return userCredential.user;
      })
      .catch((error) => {
        console.error('Lỗi đăng nhập:', error);
        throw error;
      });
  }
  
  // Create User with Email/Password
  function createUserWithEmailAndPassword(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Tạo tài khoản thành công:', userCredential.user);
        return userCredential.user;
      })
      .catch((error) => {
        console.error('Lỗi tạo tài khoản:', error);
        throw error;
      });
  }
  
  // Google Sign In
  function signInWithGoogle() {
    return auth.signInWithPopup(provider)
      .then((result) => {
        console.log('Đăng nhập Google thành công:', result.user);
        return result.user;
      })
      .catch((error) => {
        console.error('Lỗi đăng nhập Google:', error);
        throw error;
      });
  }
  
  // Sign Out
  function signOut() {
    return auth.signOut()
      .then(() => {
        console.log('Đăng xuất thành công');
      })
      .catch((error) => {
        console.error('Lỗi đăng xuất:', error);
        throw error;
      });
  }
  
  // Handle form submissions
  document.addEventListener('DOMContentLoaded', function() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
          await signInWithEmailAndPassword(email, password);
          alert('Đăng nhập thành công!');
          window.location.href = '/';
        } catch (error) {
          alert('Lỗi đăng nhập: ' + error.message);
        }
      });
    }
    
    // Google login button
    const googleLoginBtn = document.getElementById('googleLoginBtn');
    if (googleLoginBtn) {
      googleLoginBtn.addEventListener('click', async function() {
        try {
          await signInWithGoogle();
          alert('Đăng nhập Google thành công!');
          window.location.href = '/';
        } catch (error) {
          alert('Lỗi đăng nhập Google: ' + error.message);
        }
      });
    }
    
    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
          alert('Mật khẩu không khớp!');
          return;
        }
        
        try {
          await createUserWithEmailAndPassword(email, password);
          alert('Tạo tài khoản thành công!');
          window.location.href = '/';
        } catch (error) {
          alert('Lỗi tạo tài khoản: ' + error.message);
        }
      });
    }
  });
  
} else {
  console.error('Firebase SDK chưa được load. Vui lòng kiểm tra lại script tags.');
}
