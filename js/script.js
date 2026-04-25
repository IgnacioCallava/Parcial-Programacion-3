fetch('../pages/header.html')
    .then(res => res.text())
    .then(html => document.getElementById('header').innerHTML = html); //usado para concetar el header, para todas las pages


fetch('../pages/footer.html')
    .then(res => res.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        document.getElementById('footer').innerHTML = doc.body.innerHTML;
    }); //usado para concetar el footer, para todas las pages