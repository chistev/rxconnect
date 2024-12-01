<script lang="ts">
    export let likedBy: { name: string; image: string }[] = [];
    export let showLikesModal: boolean = false;
    export let toggleLikesModal: () => void;
  </script>
  
  <style>
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  
    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 10px;
      width: 90%;
      max-width: 500px;
      max-height: 80%;
      overflow-y: auto;
    }
  
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
  
    .modal-header h3 {
      margin: 0;
      font-size: 18px;
    }
  
    .close-btn {
      font-size: 20px;
      cursor: pointer;
    }
  
    .user-list {
      list-style: none;
      padding: 0;
    }
  
    .user-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .user-item img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  
    .user-item .details {
      display: flex;
      flex-direction: column;
    }
  
    .user-item .name {
      font-weight: bold;
      font-size: 14px;
    }
  
    .user-item .mutual-friends {
      font-size: 12px;
      color: #555;
    }
  </style>
  
  {#if showLikesModal}
    <div class="modal" on:click={toggleLikesModal}>
      <div class="modal-content" on:click|stopPropagation>
        <div class="modal-header">
          <h3>People who liked this post</h3>
          <span class="close-btn" on:click={toggleLikesModal}>×</span>
        </div>
        <ul class="user-list">
          {#each likedBy as user}
            <li class="user-item">
              <img src={user.image} alt="{user.name}'s profile picture" />
              <div class="details">
                <span class="name">{user.name}</span>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
  