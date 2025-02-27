<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <!-- Logo/Brand name -->
        <a class="navbar-brand" href="#">Portfolio</a>
  
        <!-- Hamburger icon on mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resume">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
  };
  </script>
  
  <style scoped>
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
  