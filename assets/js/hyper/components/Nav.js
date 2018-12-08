import { h, app } from 'hyperapp'

export default function Nav({ state, actions }) {
  let company = state.company;
  return (
    <nav id="nav" class="nav nav__main">
      <div class="container">
        <a class="logo nav__link--1 nav__main__link" href="#!">
          {company.name.first}<span>{company.name.second}</span>
        </a>
        <a class="nav__link--2 nav__main__link" href="#!">{company.site.nav.nav_option_1}</a>
        <a class="nav__link--3 nav__main__link" href="#!">{company.site.nav.nav_option_2}</a>
        <a class="nav__link--4 nav__main__link" href="#!">{company.site.nav.nav_option_3}</a>
        <a class="nav__link--5 nav__main__link" href="#!">{company.site.nav.nav_option_4}</a>
        <a class="nav__link--6 nav__main__link" href="#!">{company.site.nav.nav_option_5} <i class="fas fa-angle-right"></i></a>
      </div>
    </nav>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
