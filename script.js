// Fetch LinkedIn profile data (requires backend API for full implementation)
document.addEventListener('DOMContentLoaded', function() {
    // This is a simplified version - in production you'd need a backend service
    // to fetch LinkedIn API data due to CORS restrictions
    
    // Update connection count dynamically
    const connectionCount = document.querySelector('.connection-count');
    if (connectionCount) {
      // Simulate fetching data
      setTimeout(() => {
        connectionCount.textContent = '500+ connections';
      }, 1000);
    }
    
    // Add click tracking for LinkedIn button
    const linkedinButton = document.querySelector('.linkedin-button');
    if (linkedinButton) {
      linkedinButton.addEventListener('click', function() {
        // You can add analytics tracking here
        console.log('LinkedIn profile clicked');
      });
    }
  });