<script lang="ts">
	import FileThumbnails from "./modal/FileThumbnails.svelte";
  import TagFriendsModal from "./modal/TagFriendsModal.svelte";

  export let loggedInUserProfilePic: string = '';
  export let loggedInUserFirstName: string = '';
  export let inputText: string;
  export let bindInputText: (value: string) => void;
  export let closeModal: () => void;
  
  // Store for selected files
  let selectedFiles: File[] = [];
  
  // Ref for the file input element
  let fileInput: HTMLInputElement;

  let isTagModalVisible = false;

  // Handle file selection
  const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      // Append newly selected files to the selectedFiles array
      selectedFiles = [...selectedFiles, ...Array.from(input.files)];
    }
  };

  // Remove file from selectedFiles
  const removeFile = (index: number) => {
    selectedFiles = selectedFiles.filter((_, i) => i !== index);
  };

  // Trigger file input click on button click
  const triggerFileInput = () => {
    fileInput.click();
  };
</script>

<style>
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
    max-width: 500px;
    width: 90%;
    padding: 15px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }

  .modal-header h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  .modal-header button {
    background: none;
    border: none;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .user-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .user-info .placeholder {
    font-size: 14px;
    font-weight: 500;
    color: #555;
  }

  .post-input {
    border: none;
    outline: none;
    resize: none;
    width: 100%;
    font-size: 16px;
    color: #333;
    height: 80px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
  }

  .post-input:focus {
    border-color: #1877f2;
    background-color: #fff;
  }

  .post-options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
  }

  .post-options button {
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #555;
  }

  .post-options button:hover {
    color: #1877f2;
  }

  .post-options .bi {
    font-size: 18px;
  }

  .post-button {
    background-color: #1877f2;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    margin-left: auto;
  }

  .post-button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
</style>

<div class="modal" on:click={closeModal}>
  <div class="modal-content" on:click|stopPropagation>
    <div class="modal-header">
      <h2>Create Post</h2>
      <button on:click={closeModal}>&times;</button>
    </div>

    <div class="modal-body">
      <div class="user-info">
        <img src={loggedInUserProfilePic} alt="User Profile" />
        <span class="placeholder">What's on your mind, {loggedInUserFirstName}?</span>
      </div>

      <textarea
        class="post-input"
        placeholder="Write something here..."
        bind:value={inputText}
      ></textarea>

      <div class="post-options">
        <button on:click={triggerFileInput}>
          <i class="bi bi-image"></i>
          Photo/Video
        </button>
        <button on:click={() => (isTagModalVisible = true)}>
          <i class="bi bi-person-plus"></i>
          Tag Friends
        </button>
        <button>
          <i class="bi bi-geo-alt"></i>
          Check-in
        </button>
        <button>
          <i class="bi bi-emoji-smile"></i>
          Feeling/Activity
        </button>
      </div>

      <FileThumbnails selectedFiles={selectedFiles} removeFile={removeFile} />

      <input
        type="file"
        accept="image/*,video/*"
        multiple
        on:change={handleFileChange}
        style="display: none"
        bind:this={fileInput}
      />
    </div>

    <button class="post-button" disabled={!inputText && selectedFiles.length === 0}>Post</button>
  </div>
  {#if isTagModalVisible}
    <TagFriendsModal closeTagModal={() => (isTagModalVisible = false)} />
  {/if}
</div>