let endpoints = {
    login: '/api/auth',
    me: '/api/user'
};

if (window && (window.location.hostname === 'localhost' || /0\.0\./.test(window.location.hostname))) {
    for (let e in endpoints) {
        if (endpoints.hasOwnProperty(e)) {
            endpoints[e] = `http://localhost:8001${endpoints[e]}`;
        }
    }
}

export const AppConfig = {
    apiEndpoints: endpoints
};
