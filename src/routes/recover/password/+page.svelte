<script lang="ts">
    import { goto } from "$app/navigation";

    let newPassword = '';
    let resetCode = new URLSearchParams(window.location.search).get('code');
    let errorMessage: string | null = null; // Allow errorMessage to be null initially

    // Define the validatePassword function with explicit types
    const validatePassword = (password: string): string | null => {
        const minLength = 6;
        const maxLength = 20;
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{6,20}$/;

        if (password.length < minLength || password.length > maxLength) {
            return `Password must be between ${minLength} and ${maxLength} characters long.`;
        }

        if (!regex.test(password)) {
            return 'Password must contain at least one number, one letter, and one special character.';
        }

        return null;
    };

    const handleSubmit = async () => {
        errorMessage = validatePassword(newPassword);
        if (errorMessage) {
            return;
        }

        const res = await fetch('/api/login/change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ resetCode, newPassword })
        });

        const data = await res.json();
        if (res.ok) {
            alert('Password updated successfully!');
            goto('/login');
        } else {
            alert(data.message || 'An error occurred');
        }
    };
</script>

<div class="container">
    <div class="card">
        <h1>Choose a New Password</h1>
        <p>Create a new password that is at least 6 characters long. A strong password has a combination of letters, digits, and punctuation marks.</p>
        
        {#if errorMessage}
            <div class="error">{errorMessage}</div>
        {/if}

        <form on:submit|preventDefault={handleSubmit}>
            <input 
                type="password" 
                placeholder="New password" 
                bind:value={newPassword} 
                class="input" 
                required
                minlength="6"
            />
            <div class="button-group">
                <button type="submit" class="continue-button">Continue</button>
            </div>
        </form>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f0f2f5;
        padding: 1rem;
    }

    .card {
        background: #fff;
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
        font-size: 16px;
        margin-bottom: 1.5rem;
        color: #606770;
    }

    .input {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-bottom: 1.5rem;
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

    .continue-button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        flex: 1;
        margin: 0 0.25rem;
    }

    .continue-button {
        background: #1877f2;
        color: #fff;
    }

    .continue-button:hover {
        background: #0056c1;
    }

    .error {
        color: #ff0000;
        margin-bottom: 1rem;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        .button-group {
            flex-direction: column;
            gap: 0.5rem;
        }

        .continue-button {
            margin: 0;
        }
    }
</style>
