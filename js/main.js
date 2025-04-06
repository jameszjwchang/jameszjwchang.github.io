document.addEventListener('DOMContentLoaded', function() {
  // Fetch and display recent blog posts on homepage
  if (document.getElementById('blog-posts')) {
    fetchRecentBlogPosts();
  }
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize any Bootstrap tooltips
  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }
});

// Function to fetch recent blog posts
function fetchRecentBlogPosts() {
  const blogPostsContainer = document.getElementById('blog-posts');
  
  // In a real implementation, you might fetch this data from an API
  // For now, we'll manually add some recent posts
  
  const posts = [
    {
      title: 'Hello World',
      date: 'March 6, 2025',
      excerpt: 'Hello! This is my first blog post.',
      url: '/blog/posts/hello-world/'
    },
    // You could add more posts here
  ];
  
  if (posts.length === 0) {
    blogPostsContainer.innerHTML = '<p>No recent posts found.</p>';
    return;
  }
  
  let html = '';
  posts.forEach(post => {
    html += `
      <article class="mb-4">
        <h3><a href="${post.url}">${post.title}</a></h3>
        <p class="text-muted">${post.date}</p>
        <p>${post.excerpt}</p>
        <a href="${post.url}" class="btn btn-sm btn-outline-primary">Read More</a>
      </article>
      <hr>
    `;
  });
  
  blogPostsContainer.innerHTML = html;
}
