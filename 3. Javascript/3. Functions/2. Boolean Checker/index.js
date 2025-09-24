function booWho(val) {
  if (typeof val === "boolean") {
    return true;
  } else {
    return false;
  }
}

console.log(booWho("blah"));
