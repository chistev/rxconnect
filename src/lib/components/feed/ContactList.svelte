<script lang="ts">
    interface Contact {
      id: number;
      name: string;
      profilePic: string;
      online: boolean;
    }
  
    let contacts: Contact[] = [
      { id: 1, name: "Chukwuemeka Okocha", profilePic: "/eminem.jpg", online: true },
      { id: 2, name: "Fortune Aguma", profilePic: "/eminem.jpg", online: false },
      { id: 3, name: "Robin Eccles", profilePic: "/eminem.jpg", online: true },
      { id: 4, name: "Q Raps", profilePic: "/eminem.jpg", online: false },
      { id: 5, name: "Qow'te Qow'te Shaqur", profilePic: "/eminem.jpg", online: true },
      { id: 6, name: "Ibraheem Arsana Umar", profilePic: "/eminem.jpg", online: true },
      { id: 7, name: "Bill Walker", profilePic: "/eminem.jpg", online: false },
      { id: 8, name: "Mgbeahụrụ Chidi", profilePic: "/eminem.jpg", online: true },
      { id: 9, name: "Fred O'Grady", profilePic: "/eminem.jpg", online: false },
      { id: 10, name: "Opeyemi David Awotola", profilePic: "/eminem.jpg", online: true },
      { id: 11, name: "Waithera Macharia Ndiritu", profilePic: "/eminem.jpg", online: false },
      { id: 12, name: "Karuga Leonard", profilePic: "/eminem.jpg", online: true },
    ];
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
    {#each contacts as contact}
      <div class="contact">
        <img src={contact.profilePic} alt={contact.name} />
        <div class="name">{contact.name}</div>
        <div class={contact.online ? "online" : "offline"}></div>
      </div>
    {/each}
  </div>
  