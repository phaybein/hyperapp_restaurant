import { h, app } from 'hyperapp'

export default function Review({ state, actions }) {

  const data = state.reviews_data[state.review_status.current_review];

  let review = state.review_status.current_review;
  console.log(data, review)
  let current_review = () => {
    return (
      <div class="Review__right__data">

        <p class="Review__right__description description">
          {data.review}
        </p>

        <p class="Review__right__author author"><strong>{data.author}</strong> <span> - {data.position}</span></p>
      </div >
    )
  };

  const decrease_button = () => {
    if (review === 0) {
      console.log('nothing');
    } else {
      actions.review_status_decrease()
    }
  };

  const increase_button = () => {
    if (review === (state.reviews_data.length) - 1) {
      console.log('nothing');
    } else {
      actions.review_status_increase()
    }
  };


  return (
    <section id="Review" class="Review section">
      <div class="container">
        <div class="Review__two-columns two-columns">
          <div class="Review__left two-columns__left">
            <img class="Review__left__background-image" src="../img/production/our_story_section/pattern-gray-dots.jpg" />

            <img class="Review__left__main-image" src="../img/production/review_section/female-chef.png" alt="fresh vegetables in a basket" />

          </div>

          <div class="Review__right two-columns__right">
            <h5>Reviews</h5>

            <h2>The foods masters say about us</h2>

            {current_review()}

            <div class="page-controls">
              <i
                onclick={decrease_button}
                class={`fas fa-arrow-left ${(review > 0) ? 'ready' : ''}`}></i>

              <i
                onclick={increase_button}
                class={`fas fa-arrow-right ${(review === (state.reviews_data.length) - 1) ? '' : 'ready'}`}></i>
            </div >
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
