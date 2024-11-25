<script lang="ts">
    export let activeTab: "All" | "Unread";
    export let setActiveTab: (tab: "All" | "Unread") => void;
  </script>
  
  <style>
    .tabs {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      background: #f0f2f5;
      padding: 5px 10px;
    }
  
    .tab {
      flex: 1;
      text-align: center;
      padding: 8px 0;
      cursor: pointer;
      font-size: 14px;
      color: #555;
    }
  
    .tab.active {
      border-bottom: 2px solid #007bff;
      font-weight: bold;
      color: #007bff;
    }
  </style>
  
  <div class="tabs">
    <div 
      class="tab {activeTab === 'All' ? 'active' : ''}" 
      on:click={() => setActiveTab('All')}>
      All
    </div>
    <div 
      class="tab {activeTab === 'Unread' ? 'active' : ''}" 
      on:click={() => setActiveTab('Unread')}>
      Unread
    </div>
  </div>
  