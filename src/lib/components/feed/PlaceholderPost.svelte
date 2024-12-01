<script lang="ts">
  export let profileImage: string;
  export let profileName: string;
  export let timestamp: string;
  export let postText: string;

  let isExpanded = false;
  let likes = 62;
  let comments = 10;
  let showLikesModal = false;

  const previewText = postText.slice(0, 480);

  function togglePostText() {
    isExpanded = !isExpanded;
  }

  function toggleLikesModal() {
    showLikesModal = !showLikesModal;
  }

  let likedBy = [
    { name: "Candace Fulton", image: "eminem.jpg" },
    { name: "Darius Troutman", image: "eminem.jpg" },
    { name: "Erika Coleman", image: "eminem.jpg" },
    { name: "Bacari Hunter", image: "eminem.jpg" },
  ];
</script>

<style>
  .post-header {
    max-width: 600px;
    margin: 10px auto;
    background-color: white;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative; 
  }

  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .profile .details {
    display: flex;
    flex-direction: column;
  }

  .profile .details .name {
    font-weight: bold;
    font-size: 14px;
  }

  .profile .details .timestamp {
    font-size: 12px;
    color: #555;
  }

  .post-text {
    font-size: 14px;
    color: #333;
    line-height: 1.5;
    margin-top: 10px;
    white-space: pre-wrap;
  }

  .see-more {
    font-weight: bold;
    color: #333333;
    cursor: pointer;
  }

  .actions {
    position: absolute; 
    top: 10px; 
    right: 15px; 
    display: flex;
    gap: 10px;
    font-size: 20px;
    color: #555;
    cursor: pointer;
  }

  .actions i:hover {
    color: #1877f2;
  }

  .post-image {
    margin-top: 15px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: block; 
    object-fit: cover;
  }

  .reaction-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    font-size: 14px;
    color: #555;
    padding: 10px 15px;
    border-top: 1px solid #ddd;
  }

  .reactions {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .reactions i {
    font-size: 18px;
    cursor: pointer;
    color: #f44336;
  }

  .comments {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .comments i {
    font-size: 18px;
    color: #555;
  }

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

<div class="post-header">
  <div class="profile">
    <img src={profileImage} alt="Profile Picture" />
    <div class="details">
      <span class="name">{profileName}</span>
      <span class="timestamp">{timestamp} · <i class="bi bi-globe"></i></span>
    </div>
  </div>

  <div class="post-text">
    {#if isExpanded}
      {postText}
    {:else}
      {previewText}... <span class="see-more" on:click={togglePostText}>See More</span>
    {/if}
  </div>

  <img class="post-image" src="https://nypost.com/wp-content/uploads/sites/2/2019/10/gettyimages-187596325.jpg?quality=75&strip=all&w=744" alt="Post image" />

  <div class="reaction-bar">
    <div class="reactions" on:click={toggleLikesModal}>
      <i class="bi bi-hand-thumbs-up-fill"></i> {likes}
    </div>
    <div class="comments">
      <i class="bi bi-chat-fill"></i> {comments}
    </div>
  </div>

  <div class="actions">
    <i class="bi bi-three-dots"></i>
    <i class="bi bi-x"></i>
  </div>
</div>

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