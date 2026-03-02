function navigate(page) {
    const content = document.getElementById("content");
  
    // if (page === "home") {
    //     content.innerHTML = `
    //       <h1>Hello, I'm Namrata 👋</h1>
    //       <p>Creative & Data-Driven Digital Marketing Fresher</p>
    //       <button class="btn">View My Work</button>
    //     `;
    //   }

    if (page === "home") {
      content.innerHTML = `
        <h1>Hello, I'm Namrata 👋</h1>
        <p>Creative | Aspiring Digital Marketing Executive</p>
      `;
    }
  
    if (page === "about") {
      content.innerHTML = `
        <h1>About Me</h1>
        <p>Passionate about SEO, Social Media Marketing, and Content Creation.</p>
      `;
    }
  
    if (page === "skills") {
      content.innerHTML = `
        <h1>Skills</h1>
        <ul>
          <li>SEO Basics</li>
          <li>Social Media Marketing</li>
          <li>Google Ads</li>
          <li>Content Writing</li>
          <li>Email Marketing</li>
        </ul>
      `;
    }
  
    if (page === "projects") {
      content.innerHTML = `
        <h1>Projects</h1>
        <p>Instagram growth campaign (college project)</p>
        <p>SEO optimization practice website</p>
      `;
    }
  
    if (page === "contact") {
      content.innerHTML = `
        <h1>Contact Me</h1>
        <p>Email: namrata@email.com</p>
        <p>LinkedIn: linkedin.com/in/namrata</p>
      `;
    }
  }
  
  navigate("home");