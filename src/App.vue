<template>
  <div id="app">
    <AppHeader /> <!-- Include the header component -->

    <!-- Home Section with Introductory Message and Call to Action -->
    <section id="home" class="text-center">
      <div class="intro-message">
        <h1>Hello, I'm Dan Louie Villanueva !</h1>
        <p class="lead">
          I have always had a passion for continuous learning and thrive in environments where I can step outside my comfort zone. Whether it’s working on projects that involve back-end development, exploring product management, or diving into user experience design, I am ready to adapt and embrace new challenges. I believe that my technical background, combined with my eagerness to learn and contribute in diverse ways, makes me an excellent fit for a wide range of opportunities.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// Import the AppHeader component
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style scoped>
/* Home section styles */
#home {
  padding: 220px 0 100px;
  background-image: url('/src/assets/images/BxWMuseum.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.intro-message h1 {
  font-size: 3.5rem; 
  font-weight: bold;
  color: #FFFFF0; 
}

.intro-message p {
  margin: 0 80px;
  font-size: 1.25rem; 
  color: #FFFFF0; 
}
</style>
