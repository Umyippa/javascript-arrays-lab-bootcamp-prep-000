const app = "I don't do much."

var kittens = ["milo", "Otis", "Garfield"]
//var Kitten = "Ralph"

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var newKitten = [...name];
  appendKitten(name);
  return kittens;
}








