<script lang="ts">
  export let selectedFiles: File[] = [];
  export let removeFile: (index: number) => void;
</script>

<style>
  .file-thumbnails {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .file-thumbnail {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #ddd;
  }

  .file-thumbnail img,
  .file-thumbnail video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .remove-file {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
    font-size: 14px;
  }
</style>

{#if selectedFiles.length > 0}
  <div class="file-thumbnails">
    {#each selectedFiles as file, index}
      <div class="file-thumbnail">
        {#if file.type.startsWith('image')}
          <img src={URL.createObjectURL(file)} alt="thumbnail" />
        {:else if file.type.startsWith('video')}
          <video src={URL.createObjectURL(file)} autoplay loop muted />
        {/if}
        <button class="remove-file" on:click={() => removeFile(index)}>×</button>
      </div>
    {/each}
  </div>
{/if}
