import { h, app } from 'hyperapp'

export default function OurStory({ state, actions }) {
  return (
    <section id="OurStory" class="OurStory section">
      <div class="container">
        <div class="OurStory__two-columns two-columns">
          <div class="OurStory__left two-columns__left">
            <h5>Our Story</h5>

            <h2>Cooking is the art of adjustment</h2>

            <p class="OurStory__left__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime! Quaerat quam nisi accusantium facere cumque.
            </p>

            <p class="OurStory__left__author"><strong>Thomas Eggsy</strong> - Master Chef at Al Restaurant</p>

            <a class="btn--secondary" href="#!"> Reservation</a>
          </div>

          <div class="two-columns__right">
            <img class="OurStory__right__background-image" src="" />

            <img class="OurStory__right__main-image" src="" />
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
