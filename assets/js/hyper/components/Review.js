import { h, app } from 'hyperapp'

export default function Review({ state, actions }) {
  return (
    <section id="Review" class="Review section">
      <div class="container">
        <div class="Review__two-columns two-columns">
          <div class="Review__left two-columns__left">
            <img class="Review__left__background-image" src="../img/production/our_story_section/pattern-gray-dots.jpg" />

            <img class="Review__left__main-image" src="../img/production/review_section/female-chef.png" alt="fresh vegetables in a basket" />

          </div>

          <div class="Review__right two-columns__right">
            <h5>Review</h5>

            <h2>The foods masters say about us</h2>

            <p class="Review__right__description description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero maiores esse commodi error aliquid distinctio doloribus? Fuga veniam adipisci quidem corporis obcaecati maxime! Quaerat quam nisi accusantium facere cumque.
            </p>

            <p class="Review__right__author author"><strong>Joe Bastianich</strong> <span> - Winner Master Chef 2016</span></p>

            <div class="page-controls">
              <i class="fas fa-arrow-left"></i>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
