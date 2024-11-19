<script>
	import { goto } from "$app/navigation";


    let firstName = '';
    let surname = '';
    let dateOfBirth = { day: '', month: '', year: '' };
    let gender = '';
    let email = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';

    const handleRegister = async () => {
        const userData = {
            firstName,
            surname,
            dateOfBirth,
            gender,
            email,
            password
        };

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                successMessage = 'Registration successful!';
                errorMessage = ''; 

                setTimeout(() => {
                    goto('/login');
                }, 3000);

            } else {
                errorMessage = data.message;
                successMessage = ''; 
            }
        } catch (error) {
            errorMessage = 'There was an error connecting to the server. Please try again later.';
            successMessage = ''; 
        }
    };
</script>

<div class="container">
    <div class="card">
        <h1>Create a new account</h1>
        <p>It's quick and easy.</p>
        <form on:submit|preventDefault={handleRegister}>
            <div class="input-group">
                <input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    bind:value={firstName}
                    class="input"
                    required
                />
                <input
                    type="text"
                    id="surname"
                    placeholder="Surname"
                    bind:value={surname}
                    class="input"
                    required
                />
            </div>

            <label class="label" for="dateOfBirthDay">Date of birth</label>
            <div class="input-group">
                <select bind:value={dateOfBirth.day} id="dateOfBirthDay" class="input" required>
                    <option value="" disabled selected>Day</option>
                    {#each Array(31).fill(0).map((_, i) => i + 1) as day}
                        <option value={day}>{day}</option>
                    {/each}
                </select>
                <select bind:value={dateOfBirth.month} id="dateOfBirthMonth" class="input" required>
                    <option value="" disabled selected>Month</option>
                    {#each ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as month}
                        <option value={month}>{month}</option>
                    {/each}
                </select>
                <select bind:value={dateOfBirth.year} id="dateOfBirthYear" class="input" required>
                    <option value="" disabled selected>Year</option>
                    {#each Array(120).fill(new Date().getFullYear() - 120).map((startYear, i) => startYear + i) as year}
                        <option value={year}>{year}</option>
                    {/each}
                </select>
            </div>

            <label class="label" for="gender">Gender</label>
            <div class="radio-group">
                <label for="female">
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        bind:group={gender}
                        required
                    />
                    Female
                </label>
                <label for="male">
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        bind:group={gender}
                        required
                    />
                    Male
                </label>
            </div>

            <input
                type="email"
                id="email"
                placeholder="Email address"
                bind:value={email}
                class="input"
                required
            />

            <input
                type="password"
                id="password"
                placeholder="New password"
                bind:value={password}
                class="input"
                required
            />

            <button type="submit" class="submit-button">Sign Up</button>
        </form>

        {#if errorMessage}
            <div class="error-message">{errorMessage}</div>
        {/if}

        {#if successMessage}
            <div class="success-message">{successMessage}</div>
        {/if}

        <a href="/login" class="link">Already have an account?</a>
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
    padding: 1rem;
    width: 100%;
    max-width: 400px;
    text-align: center;
}

h1 {
    font-size: 25px;
    line-height: 32px;
    margin-bottom: 1rem;
    color: #1c1e21;
    font-family: SFProDisplay-Bold, Helvetica, Arial, sans-serif;
    font-weight: 600;
}

p {
    font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
    font-size: 16px;
    color: #606770;
    margin-bottom: 1.5rem;
    line-height: 1.5;
}

.input-group {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.input {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.input:focus {
    outline: none;
    border-color: #1877f2;
    box-shadow: 0 0 4px rgba(24, 119, 242, 0.2);
}

.label {
    font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #606770;
    margin-bottom: 0.5rem;
    display: block;
    text-align: left;
}

.radio-group {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
}

label {
    font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #1c1e21;
    cursor: pointer;
}

input[type="radio"] {
    margin-right: 0.5rem;
}

.submit-button {
    background: #00a400;
    color: #fff;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 50%;
    font-weight: bold;
}

.submit-button:hover {
    background: #0056c1;
}

.link {
    display: block;
    margin-top: 1rem;
    font-size: 14px;
    color: #1877f2;
    text-decoration: none;
    font-family: SFProText-Semibold, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
}

.input[type="email"] {
    margin-bottom: 1.5rem;
}

.submit-button {
    margin-top: 10px;
}

.error-message {
    color: red;
    margin-top: 1rem;
    font-size: 14px;
}

.success-message {
    color: green;
    margin-top: 1rem;
    font-size: 14px;
}
</style>
