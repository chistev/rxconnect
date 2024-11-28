<script lang="ts">
    export let friend: { _id: string; firstName: string; surname: string; profilePic: string };
    export let onTag: () => void;
</script>

<div class="friend-item" on:click={onTag}>
    <img src={friend.profilePic} alt="Friend" />
    <span>{friend.firstName} {friend.surname}</span>
</div>

<style>
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
