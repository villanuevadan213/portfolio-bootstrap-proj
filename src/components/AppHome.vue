<template>
  <div class="home intro-message">
    <h2>Hello, I am</h2>
    <h1>Dan Louie Villanueva</h1>
    <div class="social-medias d-flex justify-content-start align-items-center">
        <a href="https://www.facebook.com/louiskyx213" target="_blank">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/louiskyx213" target="_blank">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="mailto:villanuevadan213@gmail.com">
            <i class="fab fa-google"></i>
        </a>
        <a href="https://www.linkedin.com/in/dan-louie-villanueva-828b51169/" target="_blank">
            <i class="fab fa-linkedin"></i>
        </a>
    </div>
    <div class="cv-container">
        <a href="/src//assets//VillanuevaDanLouie.pdf" download>
        <button class="btn btn-success">Download CV</button>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHome'
}
</script>

<style scoped>
.home {
    height: 100vh;
    background-image: url('/src/assets/images/BxWMuseum.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 50px;
    gap: 5px;
}

h1, h2 {
    display: flex;
    margin: 0;
}

.intro-message h1 {
    font-size: 5.9vw;
    font-weight: bold;
    color: #FFFFF0;
}

.intro-message h2,
.intro-message .social-medias {
    font-size: 3.0vh;
    font-weight: bold;
    color: #FFFFF0;
}

.intro-message .social-medias {
    gap: 10px;
}

.social-medias a {
    color: #FFFFF0;
}

.cv-container a {
    height: 100px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
}
</style>
