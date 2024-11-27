<script lang="ts">
  import { userId, users } from "../../../stores/users";
  import { onMount } from "svelte";

  export let inputText: string;
  export let bindInputText: (value: string) => void;

  let loggedInUserProfilePic: string = '';
  let showModal: boolean = false; 

  onMount(() => {
    const unsubscribeUserId = userId.subscribe((id) => {
      if (id) {
        const unsubscribeUsers = users.subscribe((usersData) => {
          const user = usersData.find((u) => u._id === id);
          if (user) {
            loggedInUserProfilePic = user.profilePic;
          }
        });

        return () => {
          unsubscribeUsers();
        };
      }
    });

    return () => {
      unsubscribeUserId();
    };
  });

  const openModal = () => {
    showModal = true; 
  };

  const closeModal = () => {
    showModal = false;
  };
</script>

<style>
  .feed-input {
    max-width: 600px;
    margin: 20px auto;
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .feed-input img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .feed-input .input-container {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 20px;
    cursor: text;
    transition: border-color 0.2s;
  }

  .feed-input .input-container:focus-within {
    border-color: #1877f2;
  }

  .feed-input input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    color: #333;
  }

  .feed-input .options {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

  .feed-input .options .option {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #555;
    cursor: pointer;
    transition: color 0.3s;
  }

  .feed-input .options .option:hover {
    color: #1877f2;
  }

  .modal {
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

  .modal-content {
    background: white;
    border-radius: 10px;
    max-width: 600px;
    width: 100%;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .modal-header h2 {
    margin: 0;
    font-size: 18px;
  }

  .modal-header button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  .modal-body {
    display: flex;
    align-items: center;
  }

  .modal-body img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .modal-body input {
    flex: 1;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 20px;
    padding: 10px;
    font-size: 14px;
  }

  .modal-body input:focus {
    border-color: #1877f2;
  }
</style>

<div class="feed-input">
  <div class="input-container" on:click={openModal}>
    <img src={loggedInUserProfilePic} alt="Profile Picture" />
    <input
      type="text"
      placeholder="What's on your mind?"
      bind:value={inputText}
    />
  </div>
  <div class="options">
    <div class="option">
      <i class="bi bi-camera-video-fill" style="color: red;"></i>
      <span>Live video</span>
    </div>
    <div class="option">
      <i class="bi bi-image" style="color: green;"></i>
      <span>Photo/video</span>
    </div>
    <div class="option">
      <i class="bi bi-emoji-smile" style="color: orange;"></i>
      <span>Feeling/activity</span>
    </div>
  </div>

  {#if showModal}
  <div class="modal" on:click={closeModal}>
    <div class="modal-content" on:click|stopPropagation>
      <div class="modal-header">
        <h2>Create Post</h2>
        <button on:click={closeModal}>&times;</button>
      </div>
      <div class="modal-body">
        <img src={loggedInUserProfilePic} alt="Profile Picture" />
        <input
          type="text"
          placeholder="What's on your mind, Stephen?"
          bind:value={inputText}
        />
      </div>
    </div>
  </div>
  {/if}
</div>
