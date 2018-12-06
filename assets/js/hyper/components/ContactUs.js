import { h, app } from 'hyperapp'

export default function ContactUs({ state, actions }) {
  return (
    <section id="ContactUs" class="ContactUs section background_pattern">
      <div class="container">
        <h5>Contact Us</h5>

        <h2>We are always here to help you</h2>

        <div class="ContactUs__two-columns two-columns">
          <div class="ContactUs__column__left column__left">
            <h3>Oceanside, <span>California</span></h3>

            <p class="ContactUs__address">123 Main St, <br />Oceanside, CA 90210</p>

            <p class="ContactUs__email"><strong>Email</strong> <span>: info@restaurant.com</span></p>
          </div>

          <div class="ContactUs__column__right column__right">
            <p class="ContactUs__call">Call directly:</p>

            <h2 class="ContactUs__phone">(760) 268 9209</h2>

            <p class="ContactUs__service"><strong>Lunch Service:</strong></p>

            <p class="ContactUs__time">Friday, Saturday and Sunday: Bookings from 12pm - 1:30pm</p>

            <p class="ContactUs__service"><strong>Dinner Service:</strong></p>

            <p class="ContactUs__time">Daily: Bookings from 6pm - 9:30pm</p>
          </div>
        </div>
      </div>
    </section >
  )
}
// <Header state={state} actions={actions} />
// <Button state={state} actions={actions}/>
