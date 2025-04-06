---
layout: default
title: About Me
permalink: /about/
---

<div class="container my-5">
  <div class="row">
    <div class="col-lg-4 mb-4">
      <div class="profile-sidebar">
        <img src="{{ '/assets/img/avatars/profile.jpg' | relative_url }}" alt="James Chang" class="img-fluid rounded-circle mb-4">
        <h2>{{ site.author.name }}</h2>
        <p class="text-muted">{{ site.tagline }}</p>
        <div class="social-links mb-4">
          <a href="https://github.com/{{ site.github.username }}" target="_blank" class="me-2"><i class="bi bi-github"></i> GitHub</a>
          <a href="https://www.linkedin.com/in/your_linkedin" target="_blank" class="me-2"><i class="bi bi-linkedin"></i> LinkedIn</a>
          <a href="https://www.youtube.com/channel/your_channel" target="_blank"><i class="bi bi-youtube"></i> YouTube</a>
        </div>
        <div class="contact-info">
          <p><strong>Email:</strong> <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></p>
          <p><strong>Location:</strong> [Your Location]</p>
        </div>
      </div>
    </div>
    
    <div class="col-lg-8">
      <section class="mb-5">
        <h3 class="section-heading">About Me</h3>
        <p>Welcome to my personal website! I'm James Chang, a versatile individual with passions spanning music, technology, art, chess, Rubik's cubing, and literature. My diverse interests have shaped me into a multifaceted problem-solver who approaches challenges from unique perspectives.</p>
        <p>This website serves as a portfolio of my work and interests, showcasing the various dimensions of my life and creative pursuits.</p>
      </section>
      
      <section class="mb-5">
        <h3 class="section-heading">My Journey</h3>
        <div class="timeline">
          <!-- Add your journey milestones here -->
          <div class="timeline-item">
            <div class="timeline-date">2023</div>
            <div class="timeline-content">
              <h4>Milestone Title</h4>
              <p>Description of this milestone or achievement</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2021</div>
            <div class="timeline-content">
              <h4>Another Milestone</h4>
              <p>Description of this milestone or achievement</p>
            </div>
          </div>
          <!-- Add more timeline items as needed -->
        </div>
      </section>
      
      <section class="mb-5">
        <h3 class="section-heading">Skills & Expertise</h3>
        <div class="row">
          <div class="col-md-6">
            <h4>Music</h4>
            <ul>
              <li>Piano performance</li>
              <li>Music composition</li>
              <li>Music theory</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h4>Development</h4>
            <ul>
              <li>Web development (HTML, CSS, JavaScript)</li>
              <li>Python programming</li>
              <li>Data analysis</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h4>Art</h4>
            <ul>
              <li>Digital illustration</li>
              <li>Painting</li>
              <li>Design principles</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h4>Other Interests</h4>
            <ul>
              <li>Chess strategy</li>
              <li>Speed cubing techniques</li>
              <li>Literary analysis</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
