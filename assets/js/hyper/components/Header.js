import { h, app } from 'hyperapp'

export default function Header({ state, actions }) {
  return (
    <header id="header" class="header header__main">
      <div class="container">
        <div class="welcome header__welecome">
          <h6>welcome</h6>

          <h1>Prime Steak Restaurant</h1>
        </div>

        <div class="contact-info header__contact-info">
          <p class="contact-info__book">
            Book a table directly
          </p>
          <a href="tel:+7602222222">
            <h3 class="contact-info__phone">
              (760) 222-2222
            </h3>
          </a>
          <p class="contact-info__hours">
            <strong> Mon - Fri</strong>: 9:00am - 9:00pm <strong> Weekend</strong>: 9:00am - 10:00pm
          </p>
        </div>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
