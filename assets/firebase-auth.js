// Firebase Authentication Configuration với Error Handling
console.log('Loading Firebase Auth...');

// Kiểm tra Firebase đã load chưa
if (typeof firebase === 'undefined') {
  console.error('Firebase SDK chưa được load!');
  document.addEventListener('DOMContentLoaded', function() {
    const googleBtn = document.getElementById('googleLoginBtn');
    if (googleBtn) {
      googleBtn.onclick = function() {
        alert('Firebase chưa được load. Vui lòng refresh trang và thử lại.');
      };
    }
  });
} else {
  console.log('Firebase SDK đã load thành công');
  
  // Firebase config - THAY THẾ BẰNG CONFIG THỰC TỪ FIREBASE CONSOLE
  const firebaseConfig = {
    apiKey: "AIzaSyBPxMJyzMaeMyzVgZyhSt9prZaZaV2KtFA",
    authDomain: "vo-hoang-kh4ng-blog.firebaseapp.com",
    projectId: "vo-hoang-kh4ng-blog",
    storageBucket: "vo-hoang-kh4ng-blog.firebasestorage.app",
    messagingSenderId: "17636698314",
    appId: "1:17636698314:web:7700b5c7e3c7705086ec33",
    measurementId: "G-G2T6BDPQEP"
  };

  // Kiểm tra config
  if (firebaseConfig.apiKey === "YOUR_API_KEY") {
    console.error('Firebase config chưa được cập nhật!');
    document.addEventListener('DOMContentLoaded', function() {
      const googleBtn = document.getElementById('googleLoginBtn');
      if (googleBtn) {
        googleBtn.onclick = function() {
          alert('Firebase chưa được cấu hình. Vui lòng cập nhật config trong firebase-auth.js');
        };
      }
    });
  } else {
    console.log('Firebase config đã được cập nhật');
    
    // Initialize Firebase
    try {
      firebase.initializeApp(firebaseConfig);
      console.log('Firebase initialized successfully');
      
      const auth = firebase.auth();
      const provider = new firebase.auth.GoogleAuthProvider();
      
      // Configure Google provider
      provider.addScope('email');
      provider.addScope('profile');
      
      // Auth state change listener
      firebase.auth().onAuthStateChanged((user) => {
        console.log('Auth state changed:', user ? 'User logged in' : 'User logged out');
        
        const userInfo = document.getElementById('user-info');
        const loginForm = document.getElementById('loginForm');
        const googleLoginBtn = document.getElementById('googleLoginBtn');
        
        if (user) {
          // User is signed in
          console.log('User details:', {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          });
          
          if (userInfo) {
            userInfo.style.display = 'block';
            userInfo.innerHTML = 
              <div class="user-profile">
                <img src="" alt="Profile" class="user-avatar" />
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
        console.log('Attempting email/password sign in...');
        return auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            console.log('Email/password sign in successful:', userCredential.user);
            return userCredential.user;
          })
          .catch((error) => {
            console.error('Email/password sign in error:', error);
            throw error;
          });
      }
      
      // Create User with Email/Password
      function createUserWithEmailAndPassword(email, password) {
        console.log('Attempting to create user...');
        return auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            console.log('User creation successful:', userCredential.user);
            return userCredential.user;
          })
          .catch((error) => {
            console.error('User creation error:', error);
            throw error;
          });
      }
      
      // Google Sign In
      function signInWithGoogle() {
        console.log('Attempting Google sign in...');
        return auth.signInWithPopup(provider)
          .then((result) => {
            console.log('Google sign in successful:', result.user);
            return result.user;
          })
          .catch((error) => {
            console.error('Google sign in error:', error);
            throw error;
          });
      }
      
      // Sign Out
      function signOut() {
        console.log('Attempting sign out...');
        return auth.signOut()
          .then(() => {
            console.log('Sign out successful');
          })
          .catch((error) => {
            console.error('Sign out error:', error);
            throw error;
          });
      }
      
      // Handle form submissions
      document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM loaded, setting up event listeners...');
        
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
          console.log('Login form found, adding event listener...');
          loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Login form submitted');
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            try {
              await signInWithEmailAndPassword(email, password);
              alert('Đăng nhập thành công!');
              window.location.href = '/';
            } catch (error) {
              console.error('Login error:', error);
              alert('Lỗi đăng nhập: ' + error.message);
            }
          });
        } else {
          console.log('Login form not found');
        }
        
        // Google login button
        const googleLoginBtn = document.getElementById('googleLoginBtn');
        if (googleLoginBtn) {
          console.log('Google login button found, adding event listener...');
          googleLoginBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            console.log('Google login button clicked');
            
            try {
              await signInWithGoogle();
              alert('Đăng nhập Google thành công!');
              window.location.href = '/';
            } catch (error) {
              console.error('Google login error:', error);
              alert('Lỗi đăng nhập Google: ' + error.message);
            }
          });
        } else {
          console.log('Google login button not found');
        }
        
        // Register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
          console.log('Register form found, adding event listener...');
          registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Register form submitted');
            
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
              console.error('Registration error:', error);
              alert('Lỗi tạo tài khoản: ' + error.message);
            }
          });
        } else {
          console.log('Register form not found');
        }
      });
      
    } catch (error) {
      console.error('Firebase initialization error:', error);
      document.addEventListener('DOMContentLoaded', function() {
        const googleBtn = document.getElementById('googleLoginBtn');
        if (googleBtn) {
          googleBtn.onclick = function() {
            alert('Lỗi khởi tạo Firebase: ' + error.message);
          };
        }
      });
    }
  }
}
