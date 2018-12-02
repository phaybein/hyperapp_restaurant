import { h, app } from 'hyperapp'

export default function Nav({ state, actions }) {
  return (
    <nav id="nav" class="nav nav__main">
      <div class="container">
        <a class="logo nav__link--1 nav__main__link" href="#!">
          Brand<span>Logo</span>
        </a>
        <a class="nav__link--2 nav__main__link" href="#!">Menu</a>
        <a class="nav__link--3 nav__main__link" href="#!">Party Platters</a>
        <a class="nav__link--4 nav__main__link" href="#!">Locations</a>
        <a class="nav__link--5 nav__main__link" href="#!">Rewards</a>
        <a class="nav__link--6 nav__main__link" href="#!">Reservations <i class="fas fa-angle-right"></i></a>
      </div>
    </nav>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
