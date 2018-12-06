import { h, app } from 'hyperapp'

export default function OurStory({ state, actions }) {
  return (
    <section id="Quote" class="Quote section">
      <div class="container">

        <i class="fas fa-quote-left"></i>

        <h2>I love cooking for my family and for myself.</h2>

        <p class="quote">- Al Roker -</p>
      </div>
    </section>
  )
}