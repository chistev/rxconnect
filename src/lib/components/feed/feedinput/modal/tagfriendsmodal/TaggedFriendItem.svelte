<script lang="ts">
    export let friend: { firstName: string; surname: string; _id: string };
    export let untag: () => void;
</script>

<style>
    .tagged-item {
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: #e9ecef;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 14px;
    }

    .tagged-item button {
        background: none;
        border: none;
        color: #ff0000;
        cursor: pointer;
        font-weight: bold;
    }
</style>

<div class="tagged-item">
    <span>{friend.firstName} {friend.surname}</span>
    <button on:click={untag}>×</button>
</div>
