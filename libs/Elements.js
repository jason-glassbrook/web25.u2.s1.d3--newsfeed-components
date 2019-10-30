/***********************************************************
  HTML Elements
***********************************************************/

const splitClassStrings = (classStrings) => {
  return (classStrings.map ((el) => (el.split (" "))).flat ());
};

const newElem =
  (tag) => (document.createElement (tag));

Element.prototype.hasClass = function (...args) {
  /// return ///
  return (this.classList.contains (...args));
};

Element.prototype.upClass = function (...args) {
  /// modify ///
  this.classList.add (...splitClassStrings(args));
  /// return new class list ///
  return (this.classList);
};

Element.prototype.dnClass = function (...args) {
  /// modify ///
  this.classList.remove (...splitClassStrings(args));
  /// return new class list ///
  return (this.classList);
};

Element.prototype.toggleClass = function (...args) {
  /// modify ///
  this.classList.toggle (...splitClassStrings(args));
  /// return new class list ///
  return (this.classList);
};

Element.prototype.swapClass = function (oldClass , newClass) {
  /// modify ///
  /* this.classList.replace (oldClass , newClass); */
  this.dnClass (oldClass);
  this.upClass (newClass);
  /// return new class list ///
  return (this.classList);
};
