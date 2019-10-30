/***********************************************************
  DATA
***********************************************************/

/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/***********************************************************
  COMPONENT BUILDER
***********************************************************/

/* 
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const buildMenu = function (data) {
  /// create elements ///
  const menu = newElem ("div");
  const list = newElem ("ul");
  const items = repeat (data.length , () => (newElem ("li")));

  /// add structure ///

  /// add classes ///

  /// add content ///

  /// add events ///

  // exit
  return (menu);
};

/***********************************************************
  BUILD
***********************************************************/

const menuContainer = document.querySelector ("div.header");
// -- WTH
// We aren't using <header>?
// We're doing <div class="header">.
// Way to be semantic...

const menu = buildMenu (menuItems);

menuContainer.append (menu);
