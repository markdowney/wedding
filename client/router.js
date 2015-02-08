Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {

    this.route('home', { path: '/', template: 'home' });
    this.route('transport', { path: '/transport', template: 'transport' });
    this.route('programme', { path: '/programme', template: 'programme' });
    this.route('hotels', { path: '/hotels', template: 'hotels', data : { hotels : hotels, chambres : chambres } });
    this.route('rsvp', { path: '/rsvp', template: 'rsvp' });

});