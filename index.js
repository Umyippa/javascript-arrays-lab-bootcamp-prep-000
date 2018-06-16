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