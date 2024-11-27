<script lang="ts">
   import { users } from '../../../stores/users'
</script>

<style>
  .contact-list {
    width: 300px;
    max-height: 600px;
    overflow-y: auto;
    border-left: 1px solid #ddd;
    padding: 10px;
    background-color: #fff;
  }

  .header {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #333;
  }

  .contact {
    display: flex;
    align-items: center;
    padding: 8px 0;
    gap: 10px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .contact:hover {
    background-color: #f0f0f0;
  }

  .contact img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .contact .name {
    font-size: 14px;
    font-weight: 500;
  }

  .contact .online {
    width: 10px;
    height: 10px;
    background-color: #44b700;
    border-radius: 50%;
    margin-left: auto;
  }

  .contact .offline {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    margin-left: auto;
  }
</style>

<div class="contact-list">
  <div class="header">Users</div>
  {#each $users as user (user._id)}
    <div class="contact">
      <img src={user.profilePic} alt={user.firstName} />
      <div class="name">{user.firstName} {user.surname}</div>
      <!-- <div class={user.online ? "online" : "offline"}></div> -->
    </div>
  {/each}
</div>
