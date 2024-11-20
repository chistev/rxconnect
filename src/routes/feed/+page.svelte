<script>
	import ChatDropdown from "$lib/components/feed/ChatDropdown.svelte";


  let showChatDropdown = false;
  let searchQuery = ''; 

  // Example mock data for chat feed
  let chats = [
    { name: "Beky Aggrey", lastMessage: "Cool", time: "3w", img: "/eminem.jpg" },
    { name: "Damilola Owolafe", lastMessage: "Hi", time: "3w", img: "/eminem.jpg" },
    { name: "Fidelity Bank Plc", lastMessage: "Thank you for reaching out...", time: "4w", img: "/eminem.jpg" },
    { name: "PalmPay Nigeria", lastMessage: "Hello, Stephen Owabie...", time: "5w", img: "/eminem.jpg" },
    { name: "Kuda App", lastMessage: "Please select one of...", time: "5w", img: "/eminem.jpg" }
  ];

  function toggleChatDropdown() {
    showChatDropdown = !showChatDropdown;
  }
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

  .navbar-center {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }

  .navbar-left .logo {
    font-size: 24px;
    font-weight: bold;
    color: #1877f2;
    cursor: pointer;
  }

  .navbar-center .coffee-btn {
    background-color: #1877f2;  
    color: white;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    transition: background-color 0.3s;
  }

  .navbar-center .coffee-btn:hover {
    background-color: #145dbf;  
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

  <div class="navbar-center">
    <a href="https://www.buymeacoffee.com/chistev12" target="_blank" class="coffee-btn">
      <i class="bi bi-cup-hot"></i>
      Buy me a coffee
    </a>
  </div>

  <div class="navbar-right">
    <div class="icon" on:click={toggleChatDropdown}>
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

<ChatDropdown 
  {showChatDropdown} 
  {searchQuery} 
  {chats} 
/>
