<script>
	import { goto } from "$app/navigation";

  let email = "";
  let password = "";
  let errorMessage = "";
  let successMessage = "";

  const handleLogin = async () => {
    if (!email || !password) {
      errorMessage = "Please fill in both email and password.";
      return;
    }

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      successMessage = data.message;
      errorMessage = '';
      goto('/feed');

    } else {
      errorMessage = data.message || 'An error occurred. Please try again.';
      successMessage = '';
    }
  };
</script>

<div class="container">
  <div class="left-section">
    <h1>rxconnect</h1>
    <p>rxconnect helps you connect and share with pharmacists.</p>
  </div>

  <div class="right-section">
    <input
      type="email"
      placeholder="Email address"
      bind:value={email}
      required
    />
    <input
      type="password"
      placeholder="Password"
      bind:value={password}
      required
    />
    {#if errorMessage}
      <p class="error-message">{errorMessage}</p>
    {/if}
    {#if successMessage}
      <p class="success-message">{successMessage}</p>
    {/if}
    <button on:click={handleLogin}>Log in</button>
    <a href="#">Forgotten password?</a>
    <div class="create-account">
      <button>Create new account</button>
    </div>
  </div>
</div>
  
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      gap: 2rem; 
      background-color: #f2f4f7;
    }
  
    .left-section {
      flex: 1;
      max-width: 500px; 
      text-align: left;
      padding: 20px;
    }
  
    .left-section h1 {
      font-size: 3rem;
      color: #1877f2;
      margin-bottom: 10px;
      font-weight: bold;
    }
  
    .left-section p {
      font-size: 1.5rem;
      color: #606770;
      font-family: Helvetica, Arial, sans-serif;
      font-weight: 400;
    }
  
    .right-section {
      flex: 1;
      max-width: 400px;
      background: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  
    .right-section input {
      width: 100%;
      padding: 14px;
      margin-bottom: 14px;
      border: 1px solid #dddfe2;
      border-radius: 5px;
      font-size: 1rem;
    }
  
    .right-section button {
      width: 100%;
      padding: 14px;
      margin-top: 10px;
      background-color: #1877f2;
      color: white;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .right-section button:hover {
      background-color: #155ab6;
    }
  
    .right-section a {
      color: #1877f2;
      font-size: 0.9rem;
      text-decoration: none;
      display: inline-block;
      margin-top: 10px;
    }
  
    .right-section a:hover {
      text-decoration: underline;
    }
  
    .create-account {
      margin-top: 20px;
      text-align: center;
    }
  
    .create-account button {
      width: auto;
      padding: 12px 20px;
      background-color: #42b72a;
      color: white;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .create-account button:hover {
      background-color: #36a420;
    }

    .error-message {
    color: red;
    font-size: 0.9rem;
    margin-top: 10px;
  }

  .success-message {
    color: green;
    font-size: 0.9rem;
    margin-top: 10px;
  }
  
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        padding: 10px;
        gap: 1rem;
      }
  
      .left-section {
        text-align: center;
      }
  
      .right-section {
        width: 100%;
        max-width: 100%;
      }
    }
  </style>