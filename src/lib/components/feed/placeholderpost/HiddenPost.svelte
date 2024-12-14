<script lang="ts">
    export let profileName: string;
    export let showPost: boolean;
    export let setShowPost: (value: boolean) => void;
  </script>
  
  <style>
    .hidden-card {
      max-width: 600px;
      margin: 10px auto;
      background-color: #f7f7f7;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      text-align: left;
    }
  
    .hidden-card p {
      margin: 5px 0;
      color: #333;
      font-size: 14px;
    }
  
    .hidden-card .hidden-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
    }
  
    .hidden-card .action {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      color: #555;
      cursor: pointer;
    }
  
    .hidden-card .action i {
      font-size: 18px;
      color: #555;
    }
  
    .hidden-card .undo-button {
      background-color: #1877f2;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 12px;
      font-size: 14px;
      cursor: pointer;
    }
  
    .hidden-card .undo-button:hover {
      background-color: #145dbf;
    }
  </style>
  
  <div class="hidden-card">
    <p><strong>Hidden</strong></p>
    <p>Hiding posts helps personalize your feed.</p>
    <button on:click={() => setShowPost(true)} class="undo-button">Undo</button>
  
    <div class="hidden-actions">
      <div class="action">
        <i class="bi bi-clock"></i> Snooze {profileName} for 30 days
      </div>
      <div class="action">
        <i class="bi bi-flag"></i> Report post
      </div>
    </div>
  </div>
  