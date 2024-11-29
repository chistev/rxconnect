<script lang="ts">
    export let username = "Clarissa Doll";
    export let date = "November 27 at 8:59 AM";
    export let content = `
      🚨 Update on my mini weight-loss journey! 🚨 I reached a milestone! My current goal weight! 😌 
      I dedicated time in the middle of summer, woke up early and stayed disciplined! 
      For those who didn’t know, I was once 215 due to depression and other factors going on in my life at the time, 
      and I made a vow to myself that I would stay healthy! And as soon as I seen I was falling back into old habits, 
      I took control of the situation, and I got a trainer then started lifting heavier weights...`;
    export let imageUrl = "/path-to-placeholder-weight-image.jpg"; // Update this with the correct image path
  </script>
  
  <style>
    .post {
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 15px;
      margin-bottom: 20px;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .post-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }
  
    .profile-pic {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #ccc; /* Placeholder for profile picture */
    }
  
    .post-header .username {
      font-weight: bold;
      font-size: 14px;
    }
  
    .post-header .date {
      font-size: 12px;
      color: gray;
    }
  
    .post-content {
      margin: 10px 0;
      font-size: 14px;
      line-height: 1.6;
    }
  
    .post-image {
      width: 100%;
      border-radius: 10px;
      margin-top: 10px;
    }
  </style>
  
  <div class="post">
    <div class="post-header">
      <div class="profile-pic"></div>
      <div>
        <div class="username">{username}</div>
        <div class="date">{date}</div>
      </div>
    </div>
    <div class="post-content">{content}</div>
    <img src={imageUrl} alt="Post image" class="post-image" />
  </div>
  