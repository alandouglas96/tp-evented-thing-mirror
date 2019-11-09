
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


function EventedThing (word) {
  this._listen = {};
  this.word = word;
  EventedThing.on = function (word) {
    // eslint-disable-next-line no-console
    console.log(word + ' working');
  };


}

const methods = {

};

module.exports = new EventedThing;

//EventedThing.prototype.printTest = function (word) {

// eslint-disable-next-line no-console
//console.log(word + ' working');
//};

//eventedThing.on('meet', function (name) {
//console.log('Nice to meet you, ' + name + '.');
//});
//eventedThing.trigger('meet', 'Sarah');
//eventedThing.trigger('whatever');

//EventedThing.printTest('machine');