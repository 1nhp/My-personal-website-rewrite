if (window.matchMedia('(min-width: 761px)').matches) {
    const articleFrame = document.getElementById('article-frame');
    const articleTitle = document.getElementById('article-title');

    const linkclick = (e) => {
        e.preventDefault();
        const link = e.currentTarget;
        articleFrame.src = link.href;
        articleTitle.innerHTML = link.innerHTML;
    };

    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', linkclick);
    });
}    