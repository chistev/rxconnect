<script>
    import { onMount } from 'svelte';

    let securityCode = '';
    let email = '';

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        email = urlParams.get('email') || '';
    });

    const handleSubmit = () => {
        alert(`Entered code: ${securityCode}`);
    };
</script>

<div class="container">
    <div class="card">
        <h1>Enter security code</h1>
        <p>
            Please check your emails for a message with your code. Your code is 6 numbers long.
        </p>
        <p>
            We sent your code to: <b>{email}</b>
        </p>
        <form on:submit|preventDefault={handleSubmit}>
            <input
                type="number"
                placeholder="Enter code"
                bind:value={securityCode}
                class="input"
                required
            />
            <div class="button-group">
                <button type="button" class="cancel-button">Cancel</button>
                <button type="submit" class="search-button">Continue</button>
            </div>
        </form>
        <a href="#" class="resend-link">Didn’t get a code?</a>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #e9ebee;
        padding: 1rem;
    }

    .card {
        background: #ffffff; 
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        width: 100%;
        max-width: 400px;
        text-align: center;
    }

    h1 {
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 1rem;
        color: #162643;
        font-family: SFProDisplay-Bold, Helvetica, Arial, sans-serif;
        font-weight: 600;
    }

    p {
        font-family: SFProDisplay-Bold, Helvetica, Arial, sans-serif;
        font-size: 17px;
        color: #1c1e21;
        margin-bottom: 1.5rem;
        font-weight: 400;
        line-height: 20px;
    }

    .input {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 1.5rem;
        box-sizing: border-box;
    }

    .input:focus {
        outline: none;
        border-color: #1877f2; 
        box-shadow: 0 0 4px rgba(24, 119, 242, 0.2);
    }

    .button-group {
        display: flex;
        justify-content: space-between;
    }

    .cancel-button, .search-button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        flex: 1;
        margin: 0 0.25rem;
    }

    .cancel-button {
        background: #f0f0f0;
        color: #333;
    }

    .cancel-button:hover {
        background: #e0e0e0;
    }

    .search-button {
        background: #1877f2;
        color: #fff;
    }

    .search-button:hover {
        background: #0056c1;
    }

    .resend-link {
        display: block;
        margin-top: 1rem;
        font-size: 14px;
        color: #1877f2;
        text-decoration: none;
    }

    .resend-link:hover {
        text-decoration: underline;
    }

    @media (max-width: 480px) {
        .button-group {
            flex-direction: column;
            gap: 0.5rem;
        }

        .cancel-button, .search-button {
            margin: 0;
        }
    }
</style>
