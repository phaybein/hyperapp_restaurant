import { h, app } from 'hyperapp'

export default function Header({ state, actions }) {
  return (
    <header id="Footer" class="Footer Footer__main">
      <div class="container">
        <div class="welcome Footer__welecome">
          <h6>welcome</h6>

          <h1>Prime Steak Restaurant</h1>
        </div>

      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
