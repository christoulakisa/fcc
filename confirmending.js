function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return target===str.substr( -target.length, target.length);
}

end("Bastian", "an");
