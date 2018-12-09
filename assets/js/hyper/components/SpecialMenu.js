import { h, app } from 'hyperapp'

export default function SpecialMenu({ state, actions }) {

  let loop_menu = function () {
    return state.special_menu.map(function (item) {

      return (
        <div class="SpecialMenu__call-out call-out__1 call-out">
          <div class="SpecialMenu__media media">
            <div class="SpecialMenu__media__left media__left">
              <img src={item.img} />
            </div>

            <div class="SpecialMenu__media__price__outter">
              <div class="SpecialMenu__media__price__inner">
                ${item.price}
              </div>
            </div>

            <div class="SpecialMenu__media__right media__right">

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        </div>
      )
    })
  };

  return (
    <section id="SpecialMenu" class="SpecialMenu section">
      <div class="container">
        <h5>Special Menu</h5>

        <h2>{state.company.site.special_menu.title}</h2>

        <div class="SpecialMenu__col-3 card-column-layout">

          {loop_menu()}

        </div>

        <a class="btn--third" href="#!">View full menu</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions} />
// <Button state={state} actions={actions}/>
