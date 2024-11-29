<script lang="ts">
  export let profileImage: string;
  export let profileName: string;
  export let timestamp: string;
</script>

<style>
  .post-header {
    max-width: 600px;
    margin: 10px auto;
    background-color: white;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile {
    display: flex;
    align-items: center;
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

  .actions {
    display: flex;
    gap: 10px;
    font-size: 20px;
    color: #555;
    cursor: pointer;
  }

  .actions i:hover {
    color: #1877f2;
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
  <div class="actions">
    <i class="bi bi-three-dots"></i>
    <i class="bi bi-x"></i>
  </div>
</div>
