if (window.matchMedia('(min-width: 640px)').matches) {
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const title = this.textContent;
            const url = this.getAttribute('href');
            document.getElementById('article-frame').src = url;
            document.getElementById('article-title').textContent = title;
            console.log("showing article!")
        });
    });
}
