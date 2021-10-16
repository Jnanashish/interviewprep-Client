let cacheData = "appV1";

// add the file to cache (install service worker)
this.addEventListener('install', (event) =>{
    event.waitUntil(
        caches.open(cacheData)
        .then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/vendors~main.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/'
            ])
        })
    )
})

// fectch from cache (Listen for request)
this.addEventListener("fetch",(event) => {
    if(!navigator.onLine){
        event.respondWith(
        caches.match(event.request).then((res) => {
            if(res){ 
                return res;
            }
            let reqUrl = event.request.clone();
            fetch(reqUrl);
        })
        )
    }
})


// Activate the sw
this.addEventListener("activate",(event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(cacheData);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)){
                    return caches.delete(cacheName);
                }
            })
        ))
    )
})