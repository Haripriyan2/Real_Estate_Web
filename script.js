// Toggle dropdown visibility when "Housify" is clicked
document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent link from navigating
    const submenu = document.querySelector('.submenu'); // Select the dropdown menu

    // Toggle the visibility of the submenu
    submenu.classList.toggle('show-menu');
});
