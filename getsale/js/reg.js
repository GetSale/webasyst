$(document).ready(function () {
    (function (w, c) {
        w[c] = w[c] || [];
        w[c].push(function (getSale) {
            getSale.event('user-reg');
            console.log('user-reg');
        });
    })(window, 'getSaleCallbacks');
});