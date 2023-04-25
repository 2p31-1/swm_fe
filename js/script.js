document.addEventListener('DOMContentLoaded', function() {
    const announcementHeaders = document.querySelectorAll('.notice-header');

    announcementHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('expanded');
        });
    });
});