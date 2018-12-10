import { h, app } from 'hyperapp'

export default function Header({ state, actions }) {
  let company = state.company;
  return (
    < header id="header" class="header header__main" >
      <div class="container">
        <div class="welcome header__welecome">
          <h6>welcome</h6>

          <h1>{company.site.header.title}</h1>
        </div>

        <div class="contact-info header__contact-info">
          <p class="contact-info__book">
            Book a table directly
          </p>
          <a href="tel:+17604122222">
            <h3 class="contact-info__phone">
              {company.phone_number}
            </h3>
          </a>
          <p class="contact-info__hours">
            <strong> Mon - Fri</strong>: {company.hours.weekday.open}am - {company.hours.weekday.close}pm <strong> Weekend</strong>: {company.hours.weekend.open}am - {company.hours.weekend.close}0pm
          </p>
        </div>
      </div>
    </header >
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
