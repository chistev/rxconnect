<script lang="ts">
  import ChatItem from "./chatdropdown/ChatItem.svelte";

  type Chat = {
    name: string;
    lastMessage: string;
    time: string;
    img: string;
  };

  export let showChatDropdown: boolean = false;
  export let searchQuery: string = '';
  export let chats: Chat[] = [];

  let hoveredChat: string | null = null; // Tracks which chat is being hovered
  let activeMenuIndex: number | null = null; // Index of the chat with the open context menu

  function filteredChats() {
    return chats.filter(chat =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  function toggleMenu(index: number) {
    // Toggle the context menu for the clicked chat
    activeMenuIndex = activeMenuIndex === index ? null : index;
  }
</script>

<style>
  .chat-dropdown {
    position: absolute;
    top: 60px;
    right: 10px;
    width: 300px;
    max-height: 400px;
    overflow-y: auto;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
    display: none;
    overflow-x: hidden;
  }

  .chat-dropdown.show {
    display: block;
  }

  .chat-search {
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: #f9f9f9;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px solid #ddd;
    width: 90%;
  }

  .chat-search input {
    width: 100%;
    padding: 8px 30px 8px 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 25px;
    outline: none;
  }

  .chat-search input:focus {
    border-color: #1877f2;
  }

  .chat-search .search-icon {
    position: absolute;
    right: 30px;
    font-size: 16px;
    color: #606770;
  }
</style>

<div class={`chat-dropdown ${showChatDropdown ? 'show' : ''}`}>
  <div class="chat-search">
    <input
      type="text"
      placeholder="Search Messenger"
      bind:value={searchQuery}
    />
    <i class="bi bi-search search-icon"></i>
  </div>

  {#each filteredChats() as chat, index}
    <ChatItem
      {chat}
      {hoveredChat}
      onHover={(name) => (hoveredChat = name)}
      menuActive={activeMenuIndex === index} 
      onToggleMenu={() => toggleMenu(index)}
    />
  {/each}
</div>
