<template>
    <div class="about-container container mt-5">
      <div class="row align-items-center">
        <!-- Image Section -->
        <div class="col-md-4">
          <img src="@/assets/images/MirrorSelfie.png" alt="Your Image" class="about-image img-fluid" />
        </div>
  
        <!-- Text Section -->
        <div class="col-md-8">
          <h2>About Me</h2>
          <p>
            A passionate web developer with a love for creating interactive and user-friendly web applications. 
            I have experience working with various technologies, including HTML, CSS, Javascript, PHP(Laravel),
            AngularJs, Vue.js, SQL, Node.js, API. I am always eager to learn new skills and tackle exciting
            challenges. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppAbout",
  };
  </script>
  
  <style scoped>
  .about-container {
    padding: 40px 0;
  }
  
  .about-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Optional: Add a round shape to the image */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Add shadow to the image */
  }
  
  h2 {
    font-size: 2rem;
    color: #FFFFF0; /* Dark color for the heading */
  }
  
  p {
    font-size: 1.2rem;
    color: #FFFFF0; /* Grayish color for the text */
  }
  </style>
  