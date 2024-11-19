<script>
    import { onMount } from 'svelte';

    let message = '';

    onMount(async () => {
        try {
            const res = await fetch('/api/hello'); // Proxy will route to Express
            const data = await res.json();
            message = data.message;
        } catch (error) {
            console.error('Error fetching from Express:', error);
            message = 'Failed to connect to the backend';
        }
    });
</script>

<h1>SvelteKit Frontend</h1>
<p>Message from Backend: {message}</p>
