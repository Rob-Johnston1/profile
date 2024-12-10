function toggleDetails(node) {
    const details = node.querySelector('.details');
    const content = node.querySelector('.timeline-content');
    const allDetails = document.querySelectorAll('.details');
    const allContents = document.querySelectorAll('.timeline-content');
    
    // Close all other expanded items first
    allDetails.forEach(detail => {
        if (detail !== details && detail.style.maxHeight) {
            detail.style.maxHeight = null;
            detail.style.opacity = '0';
        }
    });
    
    allContents.forEach(cont => {
        if (cont !== content) {
            cont.classList.remove('expanded');
        }
    });
    
    // Toggle the clicked item
    if (details.style.maxHeight) {
        details.style.maxHeight = null;
        details.style.opacity = '0';
        content.classList.remove('expanded');
    } else {
        details.style.opacity = '1';
        details.style.maxHeight = details.scrollHeight + "px";
        content.classList.add('expanded');
    }
}

// Add smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
