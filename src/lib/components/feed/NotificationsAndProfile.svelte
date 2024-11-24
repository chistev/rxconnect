<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import NotificationsDropdown from "$lib/components/feed/NotificationsDropdown.svelte";
    
    export let notifications: { id: number; text: string; time: string; viewed: boolean; profilePic: string }[] = [];
    export let showNotifications: boolean = false;
    export let handleNotificationClick: (notification: any) => void = () => {};
    
    const dispatch = createEventDispatcher();
    
    const toggleNotifications = () => {
      dispatch("toggleNotifications", !showNotifications);
    };
  </script>
  
  <style>
    .navbar-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  
    .icon, .profile {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #f0f2f5;
      cursor: pointer;
    }
  
    .icon i {
      font-size: 24px;
      color: #606770;
    }
  
    .icon:hover, .profile:hover {
      background-color: #e0e0e0;
    }
  
    .profile img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  
    .icon {
      position: relative;
    }
  
    .icon .active {
      color: #1877f2;
    }
  </style>
  
  <div class="navbar-right">
    <div class="icon" on:click={toggleNotifications}>
      <i class="bi bi-bell-fill" class:active={showNotifications}></i>
  
      {#if showNotifications}
        <NotificationsDropdown
          notifications={notifications}
          onNotificationClick={handleNotificationClick}
        />
      {/if}
    </div>
    <div class="profile">
      <img src="/eminem.jpg" alt="Profile Picture" />
    </div>
  </div>
  