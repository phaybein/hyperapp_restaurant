import { h, app } from 'hyperapp'

export default function Header({ state, actions }) {
  return (
    <header id="Footer" class="Footer Footer__main">
      <div class="container">
        <img src="../../img/logo-prod.png" />

        <div class="Footer__nav">
          <a>Reservations</a>
          <a>Functions</a>
          <a>Contact</a>
          <a>Reviews & Media</a>
        </div>

        <div class="Footer__social">
          <a href="//facebook.com">
            <i class="fab fa-facebook-square"></i>
          </a>

          <a href="//instagram.com">
            <i class="fab fa-instagram"></i>
          </a>

          <a href="//twitter.com">
            <i class="fab fa-twitter"></i>
          </a>
        </div>

        <p class="Footer__company">&copy; Ai Restaurant</p>
        <p class="Footer__design">Design by Mauro M. All Rights reserved</p>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
