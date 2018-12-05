import { h, app } from 'hyperapp'

export default function SpecialMenu({ state, actions }) {
  return (
    <section id="SpecialMenu" class="SpecialMenu section">
      <div class="container">
        <h5>Special Menu</h5>

        <h2>Delicious flavors of Autumn</h2>

        <div class="SpecialMenu__col-3 card-column-layout">
          <div class="SpecialMenu__call-out call-out__1 call-out">
            <div class="SpecialMenu__media media">
              <div class="SpecialMenu__media__left media__left">
                <img src="../img/production/special_menu_section/eggs.jpg" />
              </div>

              <div class="SpecialMenu__media__price__outter">
                <div class="SpecialMenu__media__price__inner">
                  $25
                  </div>
              </div>

              <div class="SpecialMenu__media__right media__right">

                <h4>Super BBQ grill no smoke</h4>

                <p>Fried eggs, bacon, toast, fresh tomato, salad, cup of coffee or tea</p>
              </div>
            </div>
          </div>

          <div class="SpecialMenu__call-out call-out__2 call-out">
            <div class="SpecialMenu__media media">
              <div class="SpecialMenu__media__left media__left">
                <img src="../img/production/special_menu_section/chicken-wings.jpg" />
              </div>

              <div class="SpecialMenu__media__price__outter">
                <div class="SpecialMenu__media__price__inner">
                  $42
                  </div>
              </div>

              <div class="SpecialMenu__media__right media__right">
                <h4>Queen of autumn</h4>

                <p>Warm chicken wings, portobello mushrooms, fresh mozzarella, cup of coffee or tea</p>
              </div>
            </div>
          </div>

          <div class="SpecialMenu__call-out call-out__3 call-out">
            <div class="SpecialMenu__media media">
              <div class="SpecialMenu__media__left media__left">
                <img src="../img/production/special_menu_section/fried-chicken.jpg" />
              </div>

              <div class="SpecialMenu__media__price__outter">
                <div class="SpecialMenu__media__price__inner">
                  $30
                  </div>
              </div>

              <div class="SpecialMenu__media__right media__right">

                <h4>Royal Fried chicken</h4>

                <p>Grilled chicken, roasted red potatoes with rosemary, mushroom sauce, wine</p>
              </div>
            </div>
          </div>
        </div>

        <a class="btn--third" href="#!">View full menu</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions} />
// <Button state={state} actions={actions}/>
