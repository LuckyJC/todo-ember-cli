import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "Learn Ember.js",
            isCompleted: false
        },
        {
            id: 2,
            title: "Go to the gym",
            isCompleted: true
        },
        {
            id: 3,
            title: "Give Cecile a kiss!",
            isCompleted: false
        }
    ]
});