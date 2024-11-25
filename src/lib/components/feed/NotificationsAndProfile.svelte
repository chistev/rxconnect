<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import NotificationsDropdown from "$lib/components/feed/NotificationsDropdown.svelte";
  
  export let notifications: { id: number; text: string; time: string; viewed: boolean; profilePic: string }[] = [];
  export let showNotifications: boolean = false;
  export let handleNotificationClick: (notification: any) => void = () => {};
  
  const dispatch = createEventDispatcher();
  
  const toggleNotifications = () => {
    dispatch("toggleNotifications", !showNotifications);
  };

  let showProfileDropdown: boolean = false;

  const toggleProfileDropdown = () => {
    showProfileDropdown = !showProfileDropdown;
  };

  // Function to handle click outside
  const handleClickOutside = (event: MouseEvent) => {
    const dropdown = document.querySelector(".profile-dropdown");
    const profileIcon = document.querySelector(".profile");

    // Check if profileIcon is not null before calling contains
    if (dropdown && profileIcon && 
        !dropdown.contains(event.target as Node) && 
        !profileIcon.contains(event.target as Node)) {
      showProfileDropdown = false;
    }
  };

  // Adding event listener on mount and removing it on destroy
  onMount(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onDestroy(() => {
    document.removeEventListener("click", handleClickOutside);
  });
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

  .profile-dropdown {
    position: absolute;
    top: 60px;
    right: 0;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 250px;
    z-index: 100;
    overflow: hidden;
  }

  .profile-dropdown-item {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .profile-dropdown-item:hover {
    background-color: #f0f2f5;
  }

  .profile-dropdown-item i {
    font-size: 18px;
    color: #606770;
  }

  .icon {
    position: relative;
  }

  .icon .active {
    color: #1877f2;
  }
</style>

<div class="navbar-right">
  <!-- Notifications Icon -->
  <div class="icon" on:click={() => (showNotifications = !showNotifications)}>
    <i class="bi bi-bell-fill" class:active={showNotifications}></i>

    {#if showNotifications}
      <NotificationsDropdown notifications={notifications} onNotificationClick={handleNotificationClick} />
    {/if}
  </div>

  <!-- Profile Image -->
  <div class="profile" on:click={toggleProfileDropdown}>
    <img src="/eminem.jpg" alt="Profile Picture" />
  </div>

  <!-- Profile Dropdown -->
  {#if showProfileDropdown}
    <div class="profile-dropdown">
      <div class="profile-dropdown-item">
        <i class="bi bi-person-circle"></i>
        <span>Stephen Owabie</span>
      </div>
      <hr>
      <div class="profile-dropdown-item">
        <i class="bi bi-gear-fill"></i>
        <span>Settings & Privacy</span>
      </div>
      <div class="profile-dropdown-item">
        <i class="bi bi-question-circle"></i>
        <span>Help & Support</span>
      </div>
      <div class="profile-dropdown-item">
        <i class="bi bi-moon-fill"></i>
        <span>Display & Accessibility</span>
      </div>
      <div class="profile-dropdown-item">
        <i class="bi bi-box-arrow-right"></i>
        <span>Log Out</span>
      </div>
    </div>
  {/if}
</div>
