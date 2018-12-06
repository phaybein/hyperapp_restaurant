webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Nav = __webpack_require__(6);

var _Nav2 = _interopRequireDefault(_Nav);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _Quote = __webpack_require__(8);

var _Quote2 = _interopRequireDefault(_Quote);

var _Review = __webpack_require__(9);

var _Review2 = _interopRequireDefault(_Review);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Nav2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Quote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Review2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions })
  );
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", "class": "ContactUs section background_pattern" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        null,
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "We are always here to help you"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "ContactUs__two-columns two-columns" },
        (0, _hyperapp.h)(
          "div",
          { "class": "ContactUs__column__left column__left" },
          (0, _hyperapp.h)(
            "h3",
            null,
            "Oceanside, ",
            (0, _hyperapp.h)(
              "span",
              null,
              "California"
            )
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "ContactUs__address" },
            "123 Main St, ",
            (0, _hyperapp.h)("br", null),
            "Oceanside, CA 90210"
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "ContactUs__email" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Email"
            ),
            " ",
            (0, _hyperapp.h)(
              "span",
              null,
              ": info@restaurant.com"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "ContactUs__column__right column__right" },
          (0, _hyperapp.h)(
            "p",
            { "class": "ContactUs__call" },
            "Call directly:"
          ),
          (0, _hyperapp.h)(
            "h2",
            { "class": "ContactUs__phone" },
            "(760) 268 9209"
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "ContactUs__service" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Lunch Service:"
            )
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "ContactUs__time" },
            "Friday, Saturday and Sunday: Bookings from 12pm - 1:30pm"
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "ContactUs__service" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Dinner Service:"
            )
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "ContactUs__time" },
            "Daily: Bookings from 6pm - 9:30pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions} />
// <Button state={state} actions={actions}/>

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    { id: "header", "class": "header header__main" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "welcome header__welecome" },
        (0, _hyperapp.h)(
          "h6",
          null,
          "welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          "Prime Steak Restaurant"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info header__contact-info" },
        (0, _hyperapp.h)(
          "p",
          { "class": "contact-info__book" },
          "Book a table directly"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "tel:+7602222222" },
          (0, _hyperapp.h)(
            "h3",
            { "class": "contact-info__phone" },
            "(760) 222-2222"
          )
        ),
        (0, _hyperapp.h)(
          "p",
          { "class": "contact-info__hours" },
          (0, _hyperapp.h)(
            "strong",
            null,
            " Mon - Fri"
          ),
          ": 9:00am - 9:00pm ",
          (0, _hyperapp.h)(
            "strong",
            null,
            " Weekend"
          ),
          ": 9:00am - 10:00pm"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Nav;

var _hyperapp = __webpack_require__(0);

function Nav(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "nav",
    { id: "nav", "class": "nav nav__main" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "a",
        { "class": "logo nav__link--1 nav__main__link", href: "#!" },
        "Brand",
        (0, _hyperapp.h)(
          "span",
          null,
          "Logo"
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "nav__link--2 nav__main__link", href: "#!" },
        "Menu"
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "nav__link--3 nav__main__link", href: "#!" },
        "Party Platters"
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "nav__link--4 nav__main__link", href: "#!" },
        "Locations"
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "nav__link--5 nav__main__link", href: "#!" },
        "Rewards"
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "nav__link--6 nav__main__link", href: "#!" },
        "Reservations ",
        (0, _hyperapp.h)("i", { "class": "fas fa-angle-right" })
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory", "class": "OurStory section" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "OurStory__two-columns two-columns" },
        (0, _hyperapp.h)(
          "div",
          { "class": "OurStory__left two-columns__left" },
          (0, _hyperapp.h)(
            "h5",
            null,
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "OurStory__left__description description" },
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime! Quaerat quam nisi accusantium facere cumque."
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "OurStory__left__author author" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Thomas Eggsy"
            ),
            " ",
            (0, _hyperapp.h)(
              "span",
              null,
              " - Master Chef at Al Restaurant"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { "class": "btn--secondary", href: "#!" },
            " Reservation"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "OurStory__right two-columns__right" },
          (0, _hyperapp.h)("img", { "class": "OurStory__right__background-image", src: "../img/production/our_story_section/pattern-gray-dots.jpg" }),
          (0, _hyperapp.h)("img", { "class": "OurStory__right__main-image", src: "../img/production/our_story_section/fresh.jpg", alt: "fresh vegetables in a basket" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Quote", "class": "Quote section" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)("i", { "class": "fas fa-quote-left" }),
      (0, _hyperapp.h)(
        "h2",
        null,
        "I love cooking for my family and for myself."
      ),
      (0, _hyperapp.h)(
        "p",
        { "class": "quote" },
        "- Al Roker -"
      )
    )
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Review;

var _hyperapp = __webpack_require__(0);

function Review(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Review", "class": "Review section" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "Review__two-columns two-columns" },
        (0, _hyperapp.h)(
          "div",
          { "class": "Review__left two-columns__left" },
          (0, _hyperapp.h)("img", { "class": "Review__left__background-image", src: "../img/production/our_story_section/pattern-gray-dots.jpg" }),
          (0, _hyperapp.h)("img", { "class": "Review__left__main-image", src: "../img/production/review_section/female-chef.png", alt: "fresh vegetables in a basket" })
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "Review__right two-columns__right" },
          (0, _hyperapp.h)(
            "h5",
            null,
            "Review"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "The foods masters say about us"
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "Review__right__description description" },
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime! Quaerat quam nisi accusantium facere cumque."
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "Review__right__author author" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Joe Bastianich"
            ),
            " ",
            (0, _hyperapp.h)(
              "span",
              null,
              " - Winner Master Chef 2016"
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "page-controls" },
            (0, _hyperapp.h)("i", { "class": "fas fa-arrow-left" }),
            (0, _hyperapp.h)("i", { "class": "fas fa-arrow-right" })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "SpecialMenu section" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        null,
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious flavors of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "SpecialMenu__col-3 card-column-layout" },
        (0, _hyperapp.h)(
          "div",
          { "class": "SpecialMenu__call-out call-out__1 call-out" },
          (0, _hyperapp.h)(
            "div",
            { "class": "SpecialMenu__media media" },
            (0, _hyperapp.h)(
              "div",
              { "class": "SpecialMenu__media__left media__left" },
              (0, _hyperapp.h)("img", { src: "../img/production/special_menu_section/eggs.jpg" })
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "SpecialMenu__media__price__outter" },
              (0, _hyperapp.h)(
                "div",
                { "class": "SpecialMenu__media__price__inner" },
                "$25"
              )
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "SpecialMenu__media__right media__right" },
              (0, _hyperapp.h)(
                "h4",
                null,
                "Super BBQ grill no smoke"
              ),
              (0, _hyperapp.h)(
                "p",
                null,
                "Fried eggs, bacon, toast, fresh tomato, salad, cup of coffee or tea"
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "SpecialMenu__call-out call-out__2 call-out" },
          (0, _hyperapp.h)(
            "div",
            { "class": "SpecialMenu__media media" },
            (0, _hyperapp.h)(
              "div",
              { "class": "SpecialMenu__media__left media__left" },
              (0, _hyperapp.h)("img", { src: "../img/production/special_menu_section/chicken-wings.jpg" })
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "SpecialMenu__media__price__outter" },
              (0, _hyperapp.h)(
                "div",
                { "class": "SpecialMenu__media__price__inner" },
                "$42"
              )
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "SpecialMenu__media__right media__right" },
              (0, _hyperapp.h)(
                "h4",
                null,
                "Queen of autumn"
              ),
              (0, _hyperapp.h)(
                "p",
                null,
                "Warm chicken wings, portobello mushrooms, fresh mozzarella, cup of coffee or tea"
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "SpecialMenu__call-out call-out__3 call-out" },
          (0, _hyperapp.h)(
            "div",
            { "class": "SpecialMenu__media media" },
            (0, _hyperapp.h)(
              "div",
              { "class": "SpecialMenu__media__left media__left" },
              (0, _hyperapp.h)("img", { src: "../img/production/special_menu_section/fried-chicken.jpg" })
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "SpecialMenu__media__price__outter" },
              (0, _hyperapp.h)(
                "div",
                { "class": "SpecialMenu__media__price__inner" },
                "$30"
              )
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "SpecialMenu__media__right media__right" },
              (0, _hyperapp.h)(
                "h4",
                null,
                "Royal Fried chicken"
              ),
              (0, _hyperapp.h)(
                "p",
                null,
                "Grilled chicken, roasted red potatoes with rosemary, mushroom sauce, wine"
              )
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "btn--third", href: "#!" },
        "View full menu"
      )
    )
  );
}
// <Header state={state} actions={actions} />
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[11]);