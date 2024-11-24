<script lang="ts">
    export let onMarkAsUnread: () => void;
    export let onMuteNotifications: () => void;
    export let onAudioCall: () => void;
    export let onVideoChat: () => void;
    export let onBlock: () => void;
  </script>
  
  <style>
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
      white-space: nowrap;
    }
  
    .context-menu button {
      background: none;
      border: none;
      text-align: left;
      padding: 5px;
      font-size: 14px;
      cursor: pointer;
      color: #333;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  
    .context-menu button:hover {
      background-color: #f9f9f9;
    }
  </style>
  
  <div class="context-menu">
    <button on:click={onMarkAsUnread}>
      <i class="bi bi-envelope-open"></i> Mark as unread
    </button>
    <button on:click={onMuteNotifications}>
      <i class="bi bi-volume-mute"></i> Mute notifications
    </button>
    <button on:click={onAudioCall}>
      <i class="bi bi-phone"></i> Audio call
    </button>
    <button on:click={onVideoChat}>
      <i class="bi bi-camera-video"></i> Video chat
    </button>
    <button on:click={onBlock}>
      <i class="bi bi-person-x"></i> Block
    </button>
  </div>
  