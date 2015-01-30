var emptyFn = function () {};
var emptyStringFn  = function () {
  return '';
};
var emptyObjectFn = function () {
  return undefined;
};

SimpleSchema = function () {
  constructor = emptyFn;
  extendOptions = emptyFn;
  _makeGeneric = emptyFn;
  addValidator = emptyFn;
  messages = emptyFn;
  messageForError = emptyFn;
  RegEx = {}
};

SimpleSchema.prototype = {
  constructor: SimpleSchema,
  condition: emptyFn,
  namedContext: emptyFn,
  addValidator: emptyFn,
  clean: emptyObjectFn,
  schema: emptyObjectFn,
  getDefinition: emptyObjectFn,
  keyIsInBlackBox: emptyObjectFn,
  label: emptyFn,
  allowsKey: emptyFn
};

Meteor.Collection.prototype.attachSchema = function () {};