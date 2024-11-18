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
      color: #1877f2; /* Facebook blue color */
      cursor: pointer;
    }
  
    .search-bar {
      display: flex;
      align-items: center;
      background-color: #f0f2f5;
      padding: 5px 10px;
      border-radius: 20px;
      gap: 5px;
      flex: 1;
    }
  
    .search-bar input {
      border: none;
      outline: none;
      background: none;
      width: 100%;
      font-size: 16px;
    }
  
    .navbar-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  
    .navbar-right .icon, .navbar-right .profile {
      width: 48px; /* Increased size */
      height: 48px; /* Increased size */
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #f0f2f5; /* Gray background color */
      cursor: pointer;
    }
  
    .navbar-right .icon i {
      font-size: 24px; /* Increased icon size */
      color: #606770; /* Icon color for visibility */
    }
  
    .navbar-right .icon:hover, .navbar-right .profile:hover {
      background-color: #e0e0e0; /* Slightly darker gray on hover */
    }
  
    .navbar-right .profile img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  </style>cd 
  
  <div class="navbar">
    <!-- Left section -->
    <div class="navbar-left">
      <div class="logo">RxConnect</div>
    </div>
  
    <!-- Right section -->
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
  