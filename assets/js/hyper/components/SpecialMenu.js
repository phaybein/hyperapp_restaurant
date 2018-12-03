import { h, app } from 'hyperapp'

export default function SpecialMenu({ state, actions }) {
  return (
    <section id="SpecialMenu" class="SpecialMenu section">
      <div class="container">
        <h5>Special Menu</h5>

        <h2>Delicious flavors of Autumn</h2>

        <div class="SpecialMenu__col-3 card-column-layout">
          <div class="SpecialMenu__call-out call-out__1 call-out">
            <h3>column 1</h3>
          </div>

          <div class="SpecialMenu__call-out call-out__2 call-out">
            <h3>column 1</h3>
          </div>

          <div class="SpecialMenu__call-out call-out__3 call-out">
            <h3>column 1</h3>
          </div>
        </div>

        <a class="btn--third" href="#!">View full menu</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
