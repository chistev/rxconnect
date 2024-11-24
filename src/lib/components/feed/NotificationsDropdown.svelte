<script lang="ts" context="module">
    export interface Notification {
      id: number;
      text: string;
      time: string;
      viewed: boolean;
      profilePic: string;
    }
  </script>
  
  <script lang="ts">
    export let notifications: Notification[] = [];
    export let onNotificationClick: (notification: Notification) => void = () => {};
  </script>
  
  <style>
    .notifications-dropdown {
      position: absolute;
      right: 0;
      top: 60px;
      width: 300px;
      max-height: 400px;
      overflow-y: auto;
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }
  
    .notification-item {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      border-bottom: 1px solid #f0f2f5;
      cursor: pointer;
    }
  
    .notification-item.unread {
      background-color: #f0f8ff;
    }
  
    .notification-item.read {
      background-color: white; 
    }
  
    .notification-item:hover {
      background-color: #f0f2f5;
    }
  
    .notification-profile-pic {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
      object-fit: cover;
    }
  
    .notification-text-container {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  
    .notification-text {
      font-size: 14px;
      color: #333;
    }
  
    .notification-time {
      font-size: 12px;
      color: #888;
      margin-top: 5px;
    }
  </style>
  
  <div class="notifications-dropdown">
    {#each notifications as notification (notification.id)}
      <div
        class="notification-item {notification.viewed ? 'read' : 'unread'}"
        on:click={() => onNotificationClick(notification)}
      >
        <img 
          src={notification.profilePic} 
          alt="Profile Picture" 
          class="notification-profile-pic" 
        />
        <div class="notification-text-container">
          <div class="notification-text">{notification.text}</div>
          <div class="notification-time">{notification.time}</div>
        </div>
      </div>
    {/each}
  </div>
  