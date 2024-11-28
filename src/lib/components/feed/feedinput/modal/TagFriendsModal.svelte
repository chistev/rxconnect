<script lang="ts">
    export let closeTagModal: () => void;
  
    let friends = [
      { name: "Nmeri Alphonsus", profilePic: "/eminem.jpg" },
      { name: "Chukwuemeka Okocha", profilePic: "/eminem.jpg" },
      { name: "Les Luka", profilePic: "/eminem.jpg" },
      { name: "Fortune Aguma", profilePic: "/eminem.jpg" },
      { name: "Anthony Faber", profilePic: "/eminem.jpg" },
    ];
  </script>
  
  <style>
    .tag-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
  
    .tag-modal-content {
      background: white;
      border-radius: 10px;
      max-width: 400px;
      width: 90%;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
  
    .modal-header h2 {
      font-size: 16px;
      margin: 0;
    }
  
    .modal-header button {
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
    }
  
    .friends-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  
    .friend-item {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      padding: 10px;
      border-radius: 8px;
      transition: background 0.2s;
    }
  
    .friend-item:hover {
      background-color: #f0f0f0;
    }
  
    .friend-item img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  
    .friend-item span {
      font-size: 14px;
    }
  </style>
  
  <div class="tag-modal" on:click={closeTagModal}>
    <div class="tag-modal-content" on:click|stopPropagation>
      <div class="modal-header">
        <h2>Tag People</h2>
        <button on:click={closeTagModal}>&times;</button>
      </div>
      <div class="friends-list">
        {#each friends as friend}
          <div class="friend-item">
            <img src={friend.profilePic} alt="Friend" />
            <span>{friend.name}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
  