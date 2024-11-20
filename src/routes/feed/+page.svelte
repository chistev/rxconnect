<script>
    // Any necessary script logic here
  </script>
  
  <style>
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      background-color: white;
      border-bottom: 1px solid #ddd;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .navbar-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  
    .navbar-left .logo {
      font-size: 24px;
      font-weight: bold;
      color: #1877f2;
      cursor: pointer;
    }
  
    .navbar-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  
    .navbar-right .icon, .navbar-right .profile {
      width: 48px; 
      height: 48px; 
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #f0f2f5; 
      cursor: pointer;
    }
  
    .navbar-right .icon i {
      font-size: 24px; 
      color: #606770; 
    }
  
    .navbar-right .icon:hover, .navbar-right .profile:hover {
      background-color: #e0e0e0;
    }
  
    .navbar-right .profile img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  </style>
  
  <div class="navbar">
    <div class="navbar-left">
      <div class="logo">RxConnect</div>
    </div>
  
    <div class="navbar-right">
      <div class="icon">
        <i class="bi bi-chat-dots-fill"></i>
      </div>
      <div class="icon">
        <i class="bi bi-bell-fill"></i>
      </div>
      <div class="profile">
        <img src="/eminem.jpg" alt="Profile Picture" />
      </div>
    </div>
  </div>
  