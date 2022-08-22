self.addEventListener('install', event => {
    console.log('sw ./ => installing...');

    // cache a cat SVG
    event.waitUntil(
        caches.open('static-v1').then(cache => cache.add('/wagtartaruga.svg'))
    );
    
    console.log("sw ./ =>  O ontem é história, o amanhã é um mistério, mas hoje é uma dádiva. É por isso que se chama Java");
    
});


self.addEventListener('activate', event => {
    console.log('sw ./ => Evento Wabner ocorreu, agora pronto pra interceptar fetches');
});


self.addEventListener('fetch', event => {
    console.log("sw ./ => Detectei um evento Wabner para o recurso abaixo:");
    console.log("sw ./ => "+event.request.url);
    
    const url = new URL(event.request.url);
    
    // serve the cat SVG from the cache if the request is
    // same-origin and the path is '/dog.svg'
    if (url.origin == location.origin && url.pathname == '/Wagner.svg') {
        event. respondWith(caches.match('/wagtartaruga.svg'));
    }
});


