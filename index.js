
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

//ES6 version
class EventedThing {
  constructor () {
    this._listen = {};
    //this.name = name;
  }

  on (e, callback) {
    this._listen[e] = callback;
  }

  trigger (e, ...args) {
    if (this._listen[e]) return this._listen[e](...args);
  }
}

//Pseudo-classical version

function EventedThingV2 () {
  this._listen = {};
}

EventedThingV2.prototype.on = function (e, callback) {
  this._listen[e] = callback;
};
EventedThingV2.prototype.trigger = function (e, ...args) {
  if (this._listen[e]) return this._listen[e](...args);
};

module.exports = new EventedThing();

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