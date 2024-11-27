<script lang="ts">
    export let loggedInUserProfilePic: string = '';
    export let inputText: string;
    export let bindInputText: (value: string) => void;
    export let closeModal: () => void;
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
          placeholder="What's on your mind?"
          bind:value={inputText}
        />
      </div>
    </div>
  </div>
  