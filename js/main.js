// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate On Scroll) library for scroll animations
  AOS.init({
    delay: 200, // Delay in ms before animation starts
    duration: 1500, // Animation duration in ms
    once: false, // Whether animation should happen only once while scrolling down
    mirror: false, // Whether elements should animate out while scrolling past them
  });

  /**
   * toggleNavbar - Toggles the visibility of the navigation menu.
   *
   * @param {string} collapseID - The ID of the nav element to toggle.
   */
  function toggleNavbar(collapseID) {
    const navbar = document.getElementById(collapseID);
    if (!navbar) {
      console.error(`No element found with ID: ${collapseID}`);
      return;
    }
    // Toggle between 'hidden' and 'block' classes to show/hide the menu
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("block");
  }

  // Expose toggleNavbar to the global scope so it can be called inline in the HTML
  window.toggleNavbar = toggleNavbar;
});
