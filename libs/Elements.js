/***********************************************************
  HTML Elements
***********************************************************/

const newElem =
  (tag) => (document.createElement (tag));

Element.prototype.hasClass = function (...args) {
  return (this.classList.contains (...args));
};

Element.prototype.upClass = function (...args) {
  // modify
  this.classList.add (...args);
  // return new class list
  return (this.classList);
};

Element.prototype.dnClass = function (...args) {
  // modify
  this.classList.remove (...args);
  // return new class list
  return (this.classList);
};

Element.prototype.toggleClass = function (...args) {
  // modify
  this.classList.toggle (...args);
  // return new class list
  return (this.classList);
};

Element.prototype.swapClass = function (...args) {
  // modify
  this.classList.replace (...args);
  // return new class list
  return (this.classList);
};
