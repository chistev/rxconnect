<script lang="ts">
  import { onMount } from "svelte";

  export let chat: {
    name: string;
    lastMessage: string;
    time: string;
    img: string;
  };

  export let hoveredChat: string | null;
  export let onHover: (name: string | null) => void;

  // To track which context menu is visible
  let showMenu = false;

  // Handle context menu visibility
  function toggleMenu(event: MouseEvent) {
    event.stopPropagation(); // Prevents bubbling
    showMenu = !showMenu;
  }

  function closeMenu() {
    showMenu = false;
  }

  // Close the menu if clicked outside
  onMount(() => {
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  });
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

    /* Add circle background */
    background-color: white;
    border-radius: 50%; /* Makes it circular */
    padding: 5px; /* Space around the icon */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Add a subtle shadow for better visibility */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .chat-item:hover .three-dots {
    visibility: visible;
  }

  /* Context menu styles */
  .context-menu {
    position: absolute;
    top: 100%;
    right: 10px;
    transform: translateY(-50%);
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 5px;
    white-space: nowrap; /* Prevents text wrapping */
  }

  .context-menu button {
    background: none;
    border: none;
    text-align: left;
    padding: 5px;
    font-size: 14px;
    cursor: pointer;
    color: #333;
  }

  .context-menu button:hover {
    background-color: #f9f9f9;
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

  <!-- Context menu -->
  {#if showMenu}
    <div class="context-menu">
      <button on:click={() => console.log("Mark as unread clicked")}>
        Mark as unread
      </button>
      <button on:click={() => console.log("Mute notifications clicked")}>
        Mute notifications
      </button>
      <button on:click={() => console.log("View profile clicked")}>
        View profile
      </button>
      <button on:click={() => console.log("Audio call clicked")}>
        Audio call
      </button>
      <button on:click={() => console.log("Video chat clicked")}>
        Video chat
      </button>
      <button on:click={() => console.log("Block clicked")}>Block</button>
    </div>
  {/if}
</div>
