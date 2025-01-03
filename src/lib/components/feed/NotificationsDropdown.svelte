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
  import NotificationItem from "./notificationsdropdown/NotificationItem.svelte";
	import Tabs from "./notificationsdropdown/Tabs.svelte";

  export let notifications: Notification[] = [];
  export let onNotificationClick: (notification: Notification) => void = () => {};

  let showMoreOptions = false;
  let activeTab: "All" | "Unread" = "All";

  function markAllAsRead() {
    notifications = notifications.map((n) => ({ ...n, viewed: true }));
    showMoreOptions = false; 
  }

  function toggleMoreOptions(event: MouseEvent) {
    event.stopPropagation(); 
    showMoreOptions = !showMoreOptions;
  }

  function closeDropdown() {
    showMoreOptions = false;
  }

  function setActiveTab(tab: "All" | "Unread") {
    activeTab = tab;
  }

  function filteredNotifications() {
    if (activeTab === "Unread") {
      return notifications.filter((n) => !n.viewed);
    }
    return notifications;
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

  <Tabs {activeTab} {setActiveTab} />

  {#each filteredNotifications() as notification (notification.id)}
    <NotificationItem
      {notification}
      onNotificationClick={onNotificationClick}
    />
  {/each}
</div>