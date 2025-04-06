---
layout: interest
title: Music
subtitle: Explore my performances, compositions, and musical experiences
permalink: /music/
order: 1
---

<div class="row mt-5">
  <div class="col-md-6">
    <h2 class="section-heading">My Approach to Music</h2>
    <p>Music has been a central part of my life, allowing me to express emotions and connect with others in unique ways. My musical journey began with classical training and has evolved through years of practice, study, and performance.</p>
    <p>I believe that music is a universal language that transcends cultural barriers and speaks directly to the human experience.</p>
  </div>
  <div class="col-md-6">
    <img src="/assets/img/music/piano.jpg" alt="James Chang performing" class="img-fluid rounded">
  </div>
</div>

<div class="row mt-5">
  <div class="col-12">
    <h2 class="section-heading">What I Do</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">Performances</h3>
            <p class="card-text">I perform regularly at various venues, sharing my passion for music with audiences.</p>
            <a href="{{ '/tabs/performances' | relative_url }}" class="btn btn-primary">Watch Performances</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">Compositions</h3>
            <p class="card-text">I compose original pieces that reflect my musical influences and creative vision.</p>
            <a href="/music/compositions/" class="btn btn-primary">Listen to Compositions</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">Teaching</h3>
            <p class="card-text">I share my knowledge and experience with students who are passionate about learning music.</p>
            <a href="#contact" class="btn btn-primary">Inquire About Lessons</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row mt-5">
  <div class="col-12">
    <h2 class="section-heading">Featured Performance</h2>
    <div class="embed-responsive">
      {% include embed.html id="R5u5MzPYIL4" type="youtube" %}
    </div>
    <h5 class="mt-2">Classical Piano Performance</h5>
    <p>My interpretation of a beloved classical piece, performed at [Venue] in [Date].</p>
  </div>
</div>

<div class="row mt-5" id="contact">
  <div class="col-12">
    <h2 class="section-heading">Contact for Music Inquiries</h2>
    <p>For booking performances, lesson inquiries, or collaboration opportunities, please contact me at <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>.</p>
  </div>
</div>