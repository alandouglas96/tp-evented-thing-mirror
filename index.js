
// Evented thing (30 mins)

// Define the "EventedThing" class, so that its instances have
// an "on" and a "trigger" method to react to events. For example:
//
// eventedThing.on('meet', function (name) {
//  console.log('Nice to meet you, ' + name + '.');
// });
//
// eventedThing.trigger('meet', 'Sarah');
// -> 'Hi there!'
// -> 'Nice to meet you, Sarah.'
//
// eventedThing.trigger('whatever');
// -> nothing happens


function EventedThing () {
  this._listen = {};



}

module.exports = new EventedThing;

eventedThing.on('meet', function (name) {
  //console.log('Nice to meet you, ' + name + '.');
});
eventedThing.trigger('meet', 'Sarah');
eventedThing.trigger('whatever');