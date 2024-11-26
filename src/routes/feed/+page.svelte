<script lang="ts">
	import FeedInput from "$lib/components/feed/FeedInput.svelte";
  import NotificationsAndProfile from "$lib/components/feed/NotificationsAndProfile.svelte";

  let showNotifications = false;

  interface Notification {
    id: number;
    text: string;
    time: string;
    viewed: boolean;
    profilePic: string;
  }

  let notifications: Notification[] = [
    { 
      id: 1, 
      text: "Nnaemeka Valentine likes your post: \"Don't attribute to malice what can be...\"", 
      time: "2w", 
      viewed: false, 
      profilePic: "/eminem.jpg" 
    },
    { 
      id: 2, 
      text: "Raymond Mezieaneke likes your post: \"I've got big dreams for me, man. Nobody...\"", 
      time: "3w", 
      viewed: true, 
      profilePic: "/eminem.jpg" 
    },
    { 
      id: 3, 
      text: "Princess Nite reacted to your comment: \"Princess Nite\".", 
      time: "4w", 
      viewed: false, 
      profilePic: "/eminem.jpg" 
    },
    { 
      id: 4, 
      text: "Ogaga Michael Oghenegare commented on your post.", 
      time: "4w", 
      viewed: true, 
      profilePic: "/eminem.jpg" 
    },
    { 
      id: 5, 
      text: "Nahum Oscar Cfc likes your post: \"Play stupid games, win stupid prizes.\"", 
      time: "4w", 
      viewed: true, 
      profilePic: "/eminem.jpg" 
    }
  ];

  function handleNotificationClick(notification: Notification) {
    notification.viewed = true;
  }

  function toggleNotifications(value: boolean) {
    showNotifications = value;
  }

  let inputText = "";
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

  <NotificationsAndProfile 
    {notifications} 
    {showNotifications} 
    on:toggleNotifications={event => toggleNotifications(event.detail)} 
    {handleNotificationClick} 
  />
</div>

<FeedInput {inputText} bindInputText={(value: string) => { inputText = value; }} />