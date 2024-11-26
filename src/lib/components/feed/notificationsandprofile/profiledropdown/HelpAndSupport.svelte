<script lang="ts"> 
    export let onClose: () => void = () => {};
  
    console.log('HelpAndSupport component loaded');
  </script>
  
  <style>
    .help-support-menu {
      position: absolute;
      top: 60px;
      right: 0;
      background: #fff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      width: 250px;
      z-index: 101;
      overflow: hidden;
    }
    
    .menu-item {
      padding: 12px 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .menu-item:hover {
      background-color: #f0f2f5;
    }
    
    .menu-item i {
      font-size: 18px;
      color: #606770;
    }
  </style>
  
  <div class="help-support-menu">
    <div class="menu-item" on:click={() => { 
      onClose(); 
    }}>
      <i class="bi bi-arrow-left"></i>
      <strong>Help & Support</strong>
    </div>
    <hr>
    <div class="menu-item" on:click={() => { 
      window.location.href = 'mailto:chistev12@gmail.com';
    }}>
      <i class="bi bi-envelope"></i>
      <span>Support Inbox</span>
    </div>
  </div>
  