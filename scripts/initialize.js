// Create loading container
const loading = document.createElement('div');
loading.classList.add('loading');
document.body.appendChild(loading);
document.body.insertBefore(loading, document.body.firstChild);

// Create loading-text container
const loadingtext = document.createElement('div');
loadingtext.classList.add('loading-text');
loading.appendChild(loadingtext);

// Create loading image
const loadingimg = document.createElement('img');
loadingimg.src = 'images/PFP_PNG.png';
loadingimg.classList.add('loading-img')
loadingtext.appendChild(loadingimg);
loadingimg

// Create h1 element
const h1 = document.createElement('h1');
h1.textContent = 'Loading...';
loadingtext.appendChild(h1);