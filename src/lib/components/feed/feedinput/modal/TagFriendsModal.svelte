<script lang="ts">
	import { onMount } from 'svelte';
    import { users, userId } from '../../../../../stores/users';

    export let closeTagModal: () => void;

    let searchQuery = "";
    let loggedInUserId: string | null = null;

    onMount(() => {
        const unsubscribe = userId.subscribe((id: string | null) => {
            loggedInUserId = id; 
        });

        return () => {
            unsubscribe();
        };
    });

    $: filteredFriends = $users.filter(user =>
        user._id !== loggedInUserId && 
        `${user.firstName} ${user.surname}`.toLowerCase().includes(searchQuery.toLowerCase())
    );
</script>

<style>
    .tag-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .tag-modal-content {
        background: white;
        border-radius: 10px;
        max-width: 400px;
        width: 90%;
        padding: 20px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .modal-header h2 {
        font-size: 16px;
        margin: 0;
    }

    .search-done-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .search-bar {
        flex-grow: 1;
        margin-right: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 14px;
    }

    .done-button {
        padding: 8px 15px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
    }

    .done-button:hover {
        background-color: #0056b3;
    }

    .friends-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .friend-item {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        padding: 10px;
        border-radius: 8px;
        transition: background 0.2s;
    }

    .friend-item:hover {
        background-color: #f0f0f0;
    }

    .friend-item img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .friend-item span {
        font-size: 14px;
    }
</style>

<div class="tag-modal" on:click={closeTagModal}>
    <div class="tag-modal-content" on:click|stopPropagation>
        <div class="modal-header">
            <h2>Tag People</h2>
            <button on:click={closeTagModal}>&times;</button>
        </div>
        <div class="search-done-container">
            <input
                type="text"
                class="search-bar"
                placeholder="Search"
                bind:value={searchQuery}
            />
            <button class="done-button" on:click={closeTagModal}>Done</button>
        </div>
        <div class="friends-list">
            {#each filteredFriends as friend}
                <div class="friend-item">
                    <img src={friend.profilePic} alt="Friend" />
                    <span>{friend.firstName} {friend.surname}</span>
                </div>
            {/each}
        </div>
    </div>
</div>