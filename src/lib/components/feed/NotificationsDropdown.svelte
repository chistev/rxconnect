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
  
  let showMoreOptions = false;

  // Function to mark all notifications as read
  function markAllAsRead() {
    notifications = notifications.map((n) => ({ ...n, viewed: true }));
    showMoreOptions = false; // Close the dropdown
  }

  // Toggle dropdown menu
  function toggleMoreOptions(event: MouseEvent) {
    event.stopPropagation(); // Prevent the event from propagating to parent elements
    showMoreOptions = !showMoreOptions;
  }

  // Close the dropdown if clicked outside
  function closeDropdown() {
    showMoreOptions = false;
  }
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

  .notifications-header {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    background-color: #f0f2f5;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
    position: relative;
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

  .more-options {
    font-size: 18px;
    cursor: pointer;
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    top: 40px;
    right: 10px;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 150px;
    z-index: 20;
  }

  .dropdown-menu-item {
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    text-align: left;
  }

  .dropdown-menu-item:hover {
    background-color: #f0f2f5;
  }
</style>

<!-- Add a click handler to the outer container to close the dropdown -->
<div class="notifications-dropdown" on:click={closeDropdown}>
  <div class="notifications-header">
    Notifications
    <i
      class="bi bi-three-dots more-options"
      on:click={toggleMoreOptions}
    ></i>
    {#if showMoreOptions}
      <div class="dropdown-menu">
        <div class="dropdown-menu-item" on:click={markAllAsRead}>
          ✓ Mark all as read
        </div>
      </div>
    {/if}
  </div>
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
