<script lang="ts">
	import ContactList from "$lib/components/feed/ContactList.svelte";
	import FeedInput from "$lib/components/feed/FeedInput.svelte";
  import NotificationsAndProfile from "$lib/components/feed/NotificationsAndProfile.svelte";
  import { notifications } from "$lib/notifications";
  import type { Notification } from "$lib/notifications";

  let showNotifications = false;

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

  .feed-container {
    display: flex;
    flex-wrap: wrap; 
    gap: 20px;
  }

  .feed {
    flex: 2;
    max-width: 70%;
  }

  .contact-list-container {
    flex: 1;
    max-width: 30%;
    margin-top: 3%;
  }

  .post-header {
  max-width: 600px; /* Match FeedInput */
  margin: 10px auto; /* Spacing below FeedInput */
  background-color: white;
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-header .profile {
  display: flex;
  align-items: center;
}

.post-header .profile img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.post-header .profile .details {
  display: flex;
  flex-direction: column;
}

.post-header .profile .details .name {
  font-weight: bold;
  font-size: 14px;
}

.post-header .profile .details .timestamp {
  font-size: 12px;
  color: #555;
}

.post-header .actions {
  display: flex;
  gap: 10px;
  font-size: 20px;
  color: #555;
  cursor: pointer;
}

.post-header .actions i:hover {
  color: #1877f2;
}

  @media (max-width: 768px) {
    .feed-container {
      flex-direction: column;
      gap: 10px; 
    }

    .feed {
      max-width: 100%; 
    }

    .contact-list-container {
      max-width: 100%; 
    }
  }

  @media (max-width: 480px) {
    .navbar-left .logo {
      font-size: 20px; 
    }

    .navbar-center .coffee-btn {
      font-size: 12px; 
    }
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

<div class="feed-container">
  <div class="feed">
    <FeedInput {inputText} bindInputText={(value: string) => { inputText = value; }} />
  
    <div class="post-header">
      <div class="profile">
        <img src="/eminem.jpg" alt="Profile Picture" />
        <div class="details">
          <span class="name">Clarissa Doll</span>
          <span class="timestamp">November 27 at 8:59 AM · <i class="bi bi-globe"></i></span>
        </div>
      </div>
      <div class="actions">
        <i class="bi bi-three-dots"></i>
        <i class="bi bi-x"></i>
      </div>
    </div>
  </div>
  

  <div class="contact-list-container">
    <ContactList />
  </div>
</div>