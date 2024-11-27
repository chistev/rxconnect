<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import NotificationsDropdown from "$lib/components/feed/NotificationsDropdown.svelte";
  import ProfileDropdown from "./notificationsandprofile/ProfileDropdown.svelte";
  import { users, userId } from "../../../stores/users"; 
  import { writable } from "svelte/store";
  import type { User } from "../../../stores/users"; 

  export let notifications: { id: number; text: string; time: string; viewed: boolean; profilePic: string }[] = [];
  export let showNotifications: boolean = false;
  export let handleNotificationClick: (notification: any) => void = () => {};

  const dispatch = createEventDispatcher();
  
  const toggleNotifications = () => {
    dispatch("toggleNotifications", !showNotifications);
  };

  let showProfileDropdown: boolean = false;

  let loggedInUser = writable<User | null>(null); 

  const toggleProfileDropdown = () => {
    showProfileDropdown = !showProfileDropdown;
  };

  const handleLogout = () => {
    console.log("Logged out!");
  };

  const handleClickOutside = (event: MouseEvent) => {
    const dropdown = document.querySelector(".profile-dropdown");
    const profileIcon = document.querySelector(".profile");

    if (dropdown && profileIcon && 
        !dropdown.contains(event.target as Node) && 
        !profileIcon.contains(event.target as Node)) {
      showProfileDropdown = false;
    }
  };

  let userIdValue: string | null = null;  
  let usersList: User[] = []; 

  onMount(() => {
    const unsubscribeUserId = userId.subscribe((id) => {
      userIdValue = id;  
    });

    const unsubscribeUsers = users.subscribe((usersData) => {
      usersList = usersData;  
    });

    if (userIdValue) {
      const user = usersList.find(u => u._id === userIdValue);
      if (user) {
        loggedInUser.set(user);
      }
    }

    onDestroy(() => {
      unsubscribeUserId();
      unsubscribeUsers();
    });

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

  .icon {
    position: relative;
  }

  .icon .active {
    color: #1877f2;
  }
</style>

<div class="navbar-right">
  <div class="icon" on:click={() => (showNotifications = !showNotifications)}>
    <i class="bi bi-bell-fill" class:active={showNotifications}></i>

    {#if showNotifications}
      <NotificationsDropdown notifications={notifications} onNotificationClick={handleNotificationClick} />
    {/if}
  </div>

  <div class="profile" on:click={toggleProfileDropdown}>
    {#if $loggedInUser}
      <img src="{$loggedInUser.profilePic}" alt="Profile Picture" />
    {/if}
  </div>

  {#if showProfileDropdown && $loggedInUser}
    <ProfileDropdown username="{$loggedInUser.firstName} {$loggedInUser.surname}" onLogout={handleLogout} />
  {/if}
</div>
