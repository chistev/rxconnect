<script lang="ts">
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

  .feed-input {
    max-width: 600px;
    margin: 20px auto; /* Center horizontally */
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .feed-input img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .feed-input .input-container {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 20px;
    cursor: text;
    transition: border-color 0.2s;
  }

  .feed-input .input-container:focus-within {
    border-color: #1877f2;
  }

  .feed-input input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    color: #333;
  }

  .feed-input .options {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

  .feed-input .options .option {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #555;
    cursor: pointer;
    transition: color 0.3s;
  }

  .feed-input .options .option:hover {
    color: #1877f2;
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

<!-- Feed container -->
<div class="feed-input">
  <!-- Input area -->
  <div class="input-container">
    <img src="/eminem.jpg" alt="Profile Picture" />
    <input
      type="text"
      placeholder="What's on your mind, Stephen?"
      bind:value={inputText}
    />
  </div>

  <!-- Options -->
  <div class="options">
    <div class="option">
      <i class="bi bi-camera-video-fill" style="color: red;"></i>
      <span>Live video</span>
    </div>
    <div class="option">
      <i class="bi bi-image" style="color: green;"></i>
      <span>Photo/video</span>
    </div>
    <div class="option">
      <i class="bi bi-emoji-smile" style="color: orange;"></i>
      <span>Feeling/activity</span>
    </div>
  </div>
</div>