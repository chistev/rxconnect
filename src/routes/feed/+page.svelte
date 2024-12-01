<script lang="ts">
	import ContactList from "$lib/components/feed/ContactList.svelte";
	import FeedInput from "$lib/components/feed/FeedInput.svelte";
  import NotificationsAndProfile from "$lib/components/feed/NotificationsAndProfile.svelte";
	import PlaceholderPost from "$lib/components/feed/PlaceholderPost.svelte";
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
  
      <PlaceholderPost 
      profileImage="/eminem.jpg"
      profileName="Clarissa Doll"
      timestamp="November 27 at 8:59 AM"
      postText="🚨 Update on my mini weight-loss journey! 🚨 I reached a milestone! My current goal weight! 😊 I dedicated time in the middle of summer, woke up early and stayed disciplined! For those who didn’t know I was once 215 due to depression and other factors going on in my life at the time, and I made a vow to myself that I would stay healthy! And as soon as I seen I was falling back into old habits I took control of the situation, and I got a trainer then started lifting heavier weights..."
    />    
  </div>
  
  <div class="contact-list-container">
    <ContactList />
  </div>
</div>