// AI Blog Interactive Features

// Like functionality
function toggleLike(postId) {
  const likeBtn = document.getElementById('like-btn-' + postId);
  const likeCount = document.getElementById('like-count-' + postId);
  
  if (likeBtn.classList.contains('liked')) {
    // Unlike
    likeBtn.classList.remove('liked');
    likeBtn.innerHTML = '';
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
    
    // Save to localStorage
    localStorage.setItem('liked-' + postId, 'false');
  } else {
    // Like
    likeBtn.classList.add('liked');
    likeBtn.innerHTML = '';
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
    
    // Save to localStorage
    localStorage.setItem('liked-' + postId, 'true');
  }
}

// Comment functionality
function addComment(postId) {
  const commentText = document.getElementById('comment-text-' + postId).value;
  const commentAuthor = document.getElementById('comment-author-' + postId).value;
  
  if (commentText.trim() === '') {
    alert('Vui lòng nhập nội dung bình luận!');
    return;
  }
  
  if (commentAuthor.trim() === '') {
    alert('Vui lòng nhập tên của bạn!');
    return;
  }
  
  // Create comment element
  const commentDiv = document.createElement('div');
  commentDiv.className = 'comment-item';
  commentDiv.innerHTML = 
    <div class="comment-author"></div>
    <div class="comment-date"></div>
    <div class="comment-content"></div>
  ;
  
  // Add to comments list
  const commentsList = document.getElementById('comments-list-' + postId);
  commentsList.appendChild(commentDiv);
  
  // Clear form
  document.getElementById('comment-text-' + postId).value = '';
  document.getElementById('comment-author-' + postId).value = '';
  
  // Save to localStorage
  const comments = JSON.parse(localStorage.getItem('comments-' + postId) || '[]');
  comments.push({
    author: commentAuthor,
    content: commentText,
    date: new Date().toISOString()
  });
  localStorage.setItem('comments-' + postId, JSON.stringify(comments));
}

// Load saved data on page load
function loadSavedData(postId) {
  // Load likes
  const isLiked = localStorage.getItem('liked-' + postId) === 'true';
  if (isLiked) {
    const likeBtn = document.getElementById('like-btn-' + postId);
    if (likeBtn) {
      likeBtn.classList.add('liked');
      likeBtn.innerHTML = '';
    }
  }
  
  // Load comments
  const comments = JSON.parse(localStorage.getItem('comments-' + postId) || '[]');
  const commentsList = document.getElementById('comments-list-' + postId);
  if (commentsList) {
    commentsList.innerHTML = '';
    comments.forEach(comment => {
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment-item';
      commentDiv.innerHTML = 
        <div class="comment-author"></div>
        <div class="comment-date"></div>
        <div class="comment-content"></div>
      ;
      commentsList.appendChild(commentDiv);
    });
  }
}

// Form validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[required], select[required]');
  
  for (let input of inputs) {
    if (input.value.trim() === '') {
      alert('Vui lòng điền đầy đủ thông tin!');
      input.focus();
      return false;
    }
  }
  
  // Check password confirmation
  if (formId === 'registerForm') {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return false;
    }
  }
  
  return true;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to all like buttons
  const likeButtons = document.querySelectorAll('[id^="like-btn-"]');
  likeButtons.forEach(btn => {
    const postId = btn.id.replace('like-btn-', '');
    btn.addEventListener('click', () => toggleLike(postId));
    loadSavedData(postId);
  });
  
  // Add event listeners to all comment forms
  const commentForms = document.querySelectorAll('[id^="comment-form-"]');
  commentForms.forEach(form => {
    const postId = form.id.replace('comment-form-', '');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addComment(postId);
    });
  });
  
  // Add form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      if (!validateForm(form.id)) {
        e.preventDefault();
      }
    });
  });
});

// Smooth scrolling for anchor links
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

// Add loading animation
function showLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = '<div class="loading">Đang xử lý...</div>';
  }
}

// Remove loading animation
function hideLoading(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = content;
  }
}
