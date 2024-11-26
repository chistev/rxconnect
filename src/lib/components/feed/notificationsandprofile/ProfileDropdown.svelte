<script lang="ts">
  import HelpAndSupport from "./profiledropdown/HelpAndSupport.svelte";

  export let username: string = "Stephen Owabie";
  export let onLogout: () => void = () => {};

  let showProfileDropdown = true;   
  let showHelpSupport = false;

  function toggleHelpSupport() {
    console.log('Toggling Help & Support');
    showHelpSupport = !showHelpSupport;
    console.log('showHelpSupport after toggle:', showHelpSupport);
  }

  function closeHelpSupport() {
    console.log('Closing Help & Support');
    showHelpSupport = false;
    console.log('showHelpSupport after close:', showHelpSupport);
  }

  function logout() {
    console.log('Logging out');
    fetch('/api/logout', { method: 'POST' })
      .then((response) => {
        if (response.ok) {
          console.log('Logged out successfully');
          onLogout();
          showProfileDropdown = false;
          window.location.href = '/login'; 
        } else {
          console.log('Logout failed');
        }
      })
      .catch((err) => {
        console.error('Error logging out:', err);
      });
  }
</script>

<style>
  .profile-dropdown {
    position: absolute;
    top: 60px;
    right: 0;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 250px;
    z-index: 100;
    overflow: hidden;
  }

  .profile-dropdown-item {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .profile-dropdown-item:hover {
    background-color: #f0f2f5;
  }

  .profile-dropdown-item i {
    font-size: 18px;
    color: #606770;
  }

  .profile-dropdown-text {
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>

<div>
  {#if showProfileDropdown}
    {#if showHelpSupport}
      <HelpAndSupport onClose={closeHelpSupport} />
    {:else}
      <div class="profile-dropdown">
        <div class="profile-dropdown-item">
          <div class="profile-dropdown-text">
            <i class="bi bi-person-circle"></i>
            <strong>{username}</strong>
          </div>
        </div>
        <hr>
        <div class="profile-dropdown-item" on:click={toggleHelpSupport}>
          <div class="profile-dropdown-text">
            <i class="bi bi-question-circle"></i>
            <span>Help & Support</span>
          </div>
          <i class="bi bi-chevron-right"></i>
        </div>
        <div class="profile-dropdown-item" on:click={logout}>
          <div class="profile-dropdown-text">
            <i class="bi bi-box-arrow-right"></i>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    {/if}
  {/if}
</div>
