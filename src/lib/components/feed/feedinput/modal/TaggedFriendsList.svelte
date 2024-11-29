<script lang="ts">
    export let taggedFriends: any[] = [];
    export let untagFriend: (friend: any) => void;
  </script>
  
  <style>
    .friend-thumbnail {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      gap: 10px;
    }
  
    .friend-thumbnail img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  
    .friend-thumbnail .remove-button {
      background: none;
      border: none;
      color: red;
      cursor: pointer;
      font-size: 14px;
      margin-left: 10px;
    }
  </style>
  
  {#if taggedFriends.length > 0}
    <div class="tagged-friends">
      {#each taggedFriends as friend (friend._id)}
        <div class="friend-thumbnail">
          <img src={friend.profilePic} alt="Friend" />
          <span>{friend.firstName} {friend.surname}</span>
          <button class="remove-button" on:click={() => untagFriend(friend)}>×</button>
        </div>
      {/each}
    </div>
  {/if}
  