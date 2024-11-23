<script lang="ts">
  import { onMount } from "svelte";
	import ContextMenu from "./chatitem/ContextMenu.svelte";
  
  export let chat: {
    name: string;
    lastMessage: string;
    time: string;
    img: string;
  };

  export let hoveredChat: string | null;
  export let onHover: (name: string | null) => void;

  export let menuActive: boolean; // Track whether the menu should be active
  export let onToggleMenu: () => void; // Function to toggle the menu

  let showMenu = menuActive;

  function toggleMenu(event: MouseEvent) {
    event.stopPropagation(); // Prevents bubbling
    onToggleMenu(); // Notify parent to toggle menu state
  }

  function closeMenu() {
    showMenu = false;
  }

  onMount(() => {
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  });

  // Update the local state when the parent changes the menu state
  $: menuActive, showMenu = menuActive;

  // Menu action handlers
  function markAsUnread() {
    console.log("Mark as unread clicked");
  }

  function muteNotifications() {
    console.log("Mute notifications clicked");
  }

  function audioCall() {
    console.log("Audio call clicked");
  }

  function videoChat() {
    console.log("Video chat clicked");
  }

  function block() {
    console.log("Block clicked");
  }
</script>

<style>
  .chat-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: background-color 0.2s;
    position: relative; /* Necessary for positioning the context menu */
  }

  .chat-item:hover {
    background-color: #f9f9f9;
  }

  .chat-item img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .chat-item .details {
    flex-grow: 1;
  }

  .chat-item .details .name {
    font-weight: bold;
    font-size: 14px;
    color: #333;
  }

  .chat-item .details .message {
    font-size: 12px;
    color: #606770;
  }

  .chat-item .time {
    font-size: 12px;
    color: #999;
  }

  .three-dots {
    font-size: 18px;
    color: #606770;
    margin-left: auto;
    visibility: hidden;

    background-color: white;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .chat-item:hover .three-dots {
    visibility: visible;
  }
</style>

<div
  class="chat-item"
  on:mouseenter={() => onHover(chat.name)}
  on:mouseleave={() => onHover(null)}
>
  <img src={chat.img} alt={chat.name} />
  <div class="details">
    <div class="name">{chat.name}</div>
    <div class="message">{chat.lastMessage}</div>
  </div>
  <div class="time">{chat.time}</div>
  <i class="bi bi-three-dots three-dots" on:click={toggleMenu}></i>

  {#if showMenu}
    <ContextMenu
      onMarkAsUnread={markAsUnread}
      onMuteNotifications={muteNotifications}
      onAudioCall={audioCall}
      onVideoChat={videoChat}
      onBlock={block}
    />
  {/if}
</div>
