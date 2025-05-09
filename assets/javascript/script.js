const items = document.querySelectorAll(".accordion-item h2");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// swiper 
// sidebar 
document.addEventListener('DOMContentLoaded', function() {
  // Open the sidebar
  document.getElementById('openSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.right = '0';
  });

  // Close the sidebar
  document.getElementById('closeSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.right = '-200%';
  });
// close on click cancle 
document.getElementById('canclebar').addEventListener('click' , function(){
  document.getElementById('sidebar').style.right = '-200%';
})
  // Optional: Close the sidebar if clicked outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('#sidebar') && !event.target.closest('#openSidebar')) {
      document.getElementById('sidebar').style.right = '-200%';
    }
  });
});

// navbar 
  document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar-collapse'); 
    const toggleButton = document.querySelector('.navbar-toggler'); 
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickOnToggleButton = toggleButton.contains(event.target);
 
    if (!isClickInsideNavbar && !isClickOnToggleButton) {
      const navbarCollapse = new bootstrap.Collapse(navbar, { toggle: false });
      navbarCollapse.hide(); 
    }
  });