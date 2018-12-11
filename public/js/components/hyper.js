webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var review_status_decrease = function review_status_decrease(state, actions) {
  return {
    review_status: {
      current_review: state.review_status.current_review - 1
    }
  };
};

var review_status_increase = function review_status_increase(state, actions) {
  return {
    review_status: {
      current_review: state.review_status.current_review + 1
    }
  };
};

var actions = exports.actions = {
  review_status_decrease: review_status_decrease,
  review_status_increase: review_status_increase
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Nav = __webpack_require__(7);

var _Nav2 = _interopRequireDefault(_Nav);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _OurStory = __webpack_require__(8);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(11);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _Quote = __webpack_require__(9);

var _Quote2 = _interopRequireDefault(_Quote);

var _Review = __webpack_require__(10);

var _Review2 = _interopRequireDefault(_Review);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

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
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var company = {
  name: {
    first: 'Brand',
    second: 'Logo'
  },
  address: {
    street: "123 Main St",
    city: "Oceanside",
    state: "CA",
    zip: "90210"
  },
  phone_number: "(760) 412-2222",
  hours: {
    weekday: {
      open: '9:00',
      close: '9:00'
    },
    weekend: {
      open: '9:00',
      close: '10:00'
    }
  },
  site: {
    nav: {
      nav_option_1: 'Menu',
      nav_option_2: 'Party Platters',
      nav_option_3: 'Locations',
      nav_option_4: 'Rewards',
      nav_option_5: 'reservations'
    },
    header: {
      title: 'Prime Time Restaurant'
    },
    our_story: {
      title: 'Cooking Is The Art Of Adjustment',
      caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime! Quaerat quam nisi accusantium facere cumque.',
      name: 'Thomas Eggsy',
      position: 'Master Chef At Al Restaurant'
    },
    special_menu: {
      title: 'Delicious Flavors Of Autumn'
    }
  }
};

var special_menu = [{
  img: '/img/production/special_menu_section/eggs.jpg',
  title: 'Super BBQ Grill No Smoke',
  description: 'Fried eggs, bacon, toast, fresh tomato, salad, cup of coffee or tea',
  price: 25
}, {
  img: '/img/production/special_menu_section/chicken-wings.jpg',
  title: 'Queen Of Autumn',
  description: 'Warm chicken wings, portobello mushrooms, fresh mozzarella, cup of coffee or tea',
  price: 42
}, {
  img: '/img/production/special_menu_section/fried-chicken.jpg',
  title: 'Royal Fried Chicken',
  description: 'Grilled chicken, roasted red potatoes with rosemary, mushroom sauce, wine',
  price: 30
}];

var random_quote_data = [{
  author: 'Al roker',
  quote: 'I love cooking for my family and for myself'
}, {
  author: 'Johnny b',
  quote: 'Flavors are carefully mixed and combined. Bring me back!'
}];

var reviews_data = [{
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime! Quaerat quam nisi accusantium facere cumque.',
  author: 'Joe Bastianich',
  position: 'Winner master chef 2016'
}, {
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime!',
  author: 'Michael Smith',
  position: 'The food network'
}, {
  review: 'Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime! Quaerat quam nisi accusantium facere cumque.',
  author: 'Jacob Ramirez',
  position: 'Chopped'
}, {
  review: 'Lorem ipsum, dolor sit obcaecati maxime! Quaerat quam nisi accusantium facere cumque.',
  author: 'Sandra Moreno',
  position: 'Blazzin'
}, {
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit obcaecati maxime! Quaerat quam nisi accusantium facere cumque.',
  author: 'Erica Sanchez',
  position: 'Telefood'
}];

var globalState = exports.globalState = {
  company: company,
  special_menu: special_menu,
  reviews_data: reviews_data,
  random_quote_data: random_quote_data,
  review_status: {
    current_review: 0
  }
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

  var company = state.company;
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
            company.address.city,
            ", ",
            (0, _hyperapp.h)(
              "span",
              null,
              company.address.state
            )
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "ContactUs__address" },
            company.address.street,
            ", ",
            (0, _hyperapp.h)("br", null),
            company.address.city,
            ", ",
            company.address.state,
            " ",
            company.address.zip
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "ContactUs__email" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Email"
            ),
            (0, _hyperapp.h)(
              "a",
              { href: "mailto:" },
              (0, _hyperapp.h)(
                "span",
                null,
                ": info@restaurant.com"
              )
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
            "a",
            { href: "tel:+17602689209" },
            (0, _hyperapp.h)(
              "h2",
              { "class": "ContactUs__phone" },
              company.phone_number
            )
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
            "Friday, Saturday and Sunday: ",
            (0, _hyperapp.h)("br", null),
            "From 12pm - 1:30pm"
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
            "Daily: ",
            (0, _hyperapp.h)("br", null),
            "From 6pm - 9:30pm"
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
    { id: "Footer", "class": "Footer Footer__main" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)("img", { src: "../../img/logo-prod.png" }),
      (0, _hyperapp.h)(
        "div",
        { "class": "Footer__nav" },
        (0, _hyperapp.h)(
          "a",
          null,
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          null,
          "Functions"
        ),
        (0, _hyperapp.h)(
          "a",
          null,
          "Contact"
        ),
        (0, _hyperapp.h)(
          "a",
          null,
          "Reviews & Media"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "Footer__social" },
        (0, _hyperapp.h)(
          "a",
          { href: "//facebook.com", target: "_blank" },
          (0, _hyperapp.h)("i", { "class": "fab fa-facebook-square" })
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "//instagram.com", target: "_blank" },
          (0, _hyperapp.h)("i", { "class": "fab fa-instagram" })
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "//twitter.com", target: "_blank" },
          (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
        )
      ),
      (0, _hyperapp.h)(
        "p",
        { "class": "Footer__company" },
        "\xA9 Ai Restaurant"
      ),
      (0, _hyperapp.h)(
        "p",
        { "class": "Footer__design" },
        "Design by Mauro M. All Rights reserved"
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
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var company = state.company;
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
          company.site.header.title
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
          { href: "tel:+17604122222" },
          (0, _hyperapp.h)(
            "h3",
            { "class": "contact-info__phone" },
            company.phone_number
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
          ": ",
          company.hours.weekday.open,
          "am - ",
          company.hours.weekday.close,
          "pm ",
          (0, _hyperapp.h)(
            "strong",
            null,
            " Weekend"
          ),
          ": ",
          company.hours.weekend.open,
          "am - ",
          company.hours.weekend.close,
          "0pm"
        )
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
exports.default = Nav;

var _hyperapp = __webpack_require__(0);

function Nav(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var company = state.company;
  return (0, _hyperapp.h)(
    "nav",
    { id: "nav", "class": "nav nav__main" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "a",
        { "class": "logo nav__link--1 nav__main__link", href: "#!" },
        company.name.first,
        (0, _hyperapp.h)(
          "span",
          null,
          company.name.second
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "nav__link--2 nav__main__link", href: "#!" },
        company.site.nav.nav_option_1
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "nav__link--3 nav__main__link", href: "#!" },
        company.site.nav.nav_option_2
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "nav__link--4 nav__main__link", href: "#!" },
        company.site.nav.nav_option_3
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "nav__link--5 nav__main__link", href: "#!" },
        company.site.nav.nav_option_4
      ),
      (0, _hyperapp.h)(
        "a",
        { "class": "nav__link--6 nav__main__link", href: "#!" },
        company.site.nav.nav_option_5,
        " ",
        (0, _hyperapp.h)("i", { "class": "fas fa-angle-right" })
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

  var company = state.company.site.our_story;
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
            company.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "OurStory__left__description description" },
            company.caption
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "OurStory__left__author author" },
            (0, _hyperapp.h)(
              "strong",
              null,
              company.name
            ),
            " ",
            (0, _hyperapp.h)(
              "span",
              null,
              " - ",
              company.position
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
/* 9 */
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
/* 10 */
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


  var data = state.reviews_data[state.review_status.current_review];

  var review = state.review_status.current_review;

  var current_review = function current_review() {
    return (0, _hyperapp.h)(
      "div",
      { "class": "Review__right__data" },
      (0, _hyperapp.h)(
        "p",
        { "class": "Review__right__description description" },
        data.review
      ),
      (0, _hyperapp.h)(
        "p",
        { "class": "Review__right__author author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          data.author
        ),
        " ",
        (0, _hyperapp.h)(
          "span",
          null,
          " - ",
          data.position
        )
      )
    );
  };

  var decrease_button = function decrease_button() {
    if (review === 0) {
      return;
    } else {
      actions.review_status_decrease();
    }
  };

  var increase_button = function increase_button() {
    if (review === state.reviews_data.length - 1) {
      return;
    } else {
      actions.review_status_increase();
    }
  };

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
            "Reviews"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "The foods masters say about us"
          ),
          current_review(),
          (0, _hyperapp.h)(
            "div",
            { "class": "page-controls" },
            (0, _hyperapp.h)("i", {
              onclick: decrease_button,
              "class": "fas fa-arrow-left " + (review > 0 ? 'ready' : '') }),
            (0, _hyperapp.h)("i", {
              onclick: increase_button,
              "class": "fas fa-arrow-right " + (review === state.reviews_data.length - 1 ? '' : 'ready') })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
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


  var loop_menu = function loop_menu() {
    return state.special_menu.map(function (item) {

      return (0, _hyperapp.h)(
        "div",
        { "class": "SpecialMenu__call-out call-out__1 call-out" },
        (0, _hyperapp.h)(
          "div",
          { "class": "SpecialMenu__media media" },
          (0, _hyperapp.h)(
            "div",
            { "class": "SpecialMenu__media__left media__left" },
            (0, _hyperapp.h)("img", { src: item.img })
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "SpecialMenu__media__price__outter" },
            (0, _hyperapp.h)(
              "div",
              { "class": "SpecialMenu__media__price__inner" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "SpecialMenu__media__right media__right" },
            (0, _hyperapp.h)(
              "h4",
              null,
              item.title
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              item.description
            )
          )
        )
      );
    });
  };

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
        state.company.site.special_menu.title
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "SpecialMenu__col-3 card-column-layout" },
        loop_menu()
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
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
    load: function load(state, actions) {}
  }
});

/***/ })
],[12]);