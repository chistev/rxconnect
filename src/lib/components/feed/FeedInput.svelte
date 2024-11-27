<script lang="ts">
  import { userId, users } from "../../../stores/users";
  import { onMount } from "svelte";
  import Modal from "../feed/feedinput/Modal.svelte";

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
    <Modal
      loggedInUserProfilePic={loggedInUserProfilePic}
      inputText={inputText}
      bindInputText={bindInputText}
      closeModal={closeModal}
    />
  {/if}
</div>
