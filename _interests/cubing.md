---
layout: interest
title: Cubing
subtitle: Techniques, records, and speedcubing experiences
permalink: /cubing/
order: 5
---

<div class="row mt-5">
  <div class="col-md-6">
    <h2 class="section-heading">My Cubing Journey</h2>
    <p>My adventure with the Rubik's cube and other twisty puzzles began [when you started], and has since grown into a passionate pursuit of faster solving times and deeper understanding of these mechanical puzzles.</p>
    <p>What started as curiosity has developed into a skill that combines memory, pattern recognition, finger dexterity, and algorithmic thinking.</p>
  </div>
  <div class="col-md-6">
    <img src="/assets/img/cubing/solving.jpg" alt="James Chang solving a cube" class="img-fluid rounded">
  </div>
</div>

<div class="row mt-5">
  <div class="col-12">
    <h2 class="section-heading">My Cubing Activities</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">Speed Solving</h3>
            <p class="card-text">My personal records, progress, and competition results.</p>
            <a href="/cubing/records/" class="btn btn-primary">View Records</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">Collection</h3>
            <p class="card-text">My collection of different cubes and twisty puzzles.</p>
            <a href="/cubing/collection/" class="btn btn-primary">View Collection</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title">Tutorials</h3>
            <p class="card-text">Guides and tips for improving your cubing skills.</p>
            <a href="/cubing/tutorials/" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row mt-5">
  <div class="col-12">
    <h2 class="section-heading">Personal Records</h2>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Puzzle</th>
            <th>Single</th>
            <th>Average of 5</th>
            <th>Average of 12</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3x3</td>
            <td>[Time]</td>
            <td>[Time]</td>
            <td>[Time]</td>
          </tr>
          <tr>
            <td>2x2</td>
            <td>[Time]</td>
            <td>[Time]</td>
            <td>[Time]</td>
          </tr>
          <tr>
            <td>4x4</td>
            <td>[Time]</td>
            <td>[Time]</td>
            <td>[Time]</td>
          </tr>
          <tr>
            <td>5x5</td>
            <td>[Time]</td>
            <td>[Time]</td>
            <td>[Time]</td>
          </tr>
          <tr>
            <td>Pyraminx</td>
            <td>[Time]</td>
            <td>[Time]</td>
            <td>[Time]</td>
          </tr>
          <tr>
            <td>Megaminx</td>
            <td>[Time]</td>
            <td>[Time]</td>
            <td>[Time]</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div class="row mt-5">
  <div class="col-12">
    <h2 class="section-heading">Featured Solve</h2>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">My Best 3x3 Solve</h3>
        <p class="text-muted">[Time] - [Date/Event if applicable]</p>
        
        <div class="embed-responsive">
          <!-- You can embed a video of your solve here -->
          {% include embed.html id="your-youtube-video-id" type="youtube" %}
        </div>
        
        <div class="mt-3">
          <h4>Solve Breakdown:</h4>
          <ul>
            <li><strong>Inspection:</strong> [What you saw]</li>
            <li><strong>Cross:</strong> [Moves/time]</li>
            <li><strong>F2L:</strong> [Moves/time]</li>
            <li><strong>OLL:</strong> [Algorithm used]</li>
            <li><strong>PLL:</strong> [Algorithm used]</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row mt-5">
  <div class="col-12">
    <h2 class="section-heading">My Method</h2>
    <p>I currently use the [method name] method for 3x3 solving, with a focus on [particular aspect of solving]. For other puzzles, I employ [methods for other puzzles].</p>
    
    <h4 class="mt-4">My Favorite Algorithms</h4>
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-header">PLL - T Perm</div>
          <div class="card-body">
            <p class="card-text font-monospace">R U R' U' R' F R2 U' R' U' R U R' F'</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-header">OLL - Sune</div>
          <div class="card-body">
            <p class="card-text font-monospace">R U R' U R U2 R'</p>
          </div>
        </div>
      </div>
      <!-- Add more algorithms as needed -->
    </div>
  </div>
</div>

<div class="row mt-5" id="contact">
  <div class="col-12">
    <h2 class="section-heading">Cubing Connect</h2>
    <p>Interested in discussing cubing techniques, sharing algorithms, or participating in local events? Contact me at <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>.</p>
  </div>
</div>