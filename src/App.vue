<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <!-- Logo/Brand name -->
        <router-link class="navbar-brand" to="/">Portfolio</router-link>
  
        <!-- Hamburger icon on mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#resume">Resume</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
// Import the components here

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* Ensure it stays on top of other content */
    width: 100%; /* Make sure the header takes up the full width of the screen */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow to give it a floating effect */
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-brand {
    font-weight: bold;
    color: #FFFFF0;
  }

  .navbar-toggler {
    border: none;
  }

  .navbar-collapse {
    flex-grow: 0;
    font-weight: 600;
  }
</style>
