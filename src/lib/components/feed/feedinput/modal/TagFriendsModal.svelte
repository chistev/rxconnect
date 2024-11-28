<script lang="ts">
    import { onMount } from 'svelte';
    import { users, userId } from '../../../../../stores/users';
    import type { User } from '../../../../../stores/users';
	import FriendItem from './tagfriendsmodal/FriendItem.svelte';
	import TaggedFriendItem from './tagfriendsmodal/TaggedFriendItem.svelte';

    export let closeTagModal: () => void;

    let searchQuery = "";
    let loggedInUserId: string | null = null;

    let taggedFriends: User[] = [];

    onMount(() => {
        const unsubscribe = userId.subscribe((id: string | null) => {
            loggedInUserId = id;
        });

        return () => {
            unsubscribe();
        };
    });

    $: filteredFriends = $users.filter(
        (user: User) =>
            user._id !== loggedInUserId &&
            !taggedFriends.some((tagged) => tagged._id === user._id) &&
            `${user.firstName} ${user.surname}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    function tagFriend(friend: User) {
        taggedFriends = [...taggedFriends, friend];
    }

    function untagFriend(friend: User) {
        taggedFriends = taggedFriends.filter((tagged) => tagged._id !== friend._id);
    }
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

    .tagged-friends {
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
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

        <div class="tagged-friends">
            {#each taggedFriends as friend (friend._id)}
            <TaggedFriendItem {friend} untag={() => untagFriend(friend)} /> 
            {/each}
        </div>

        <div class="friends-list">
            {#each filteredFriends as friend (friend._id)}
            <FriendItem {friend} onTag={() => tagFriend(friend)} />
            {/each}
        </div>
    </div>
</div>