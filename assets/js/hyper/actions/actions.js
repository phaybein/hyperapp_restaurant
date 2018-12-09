export const actions = {
  review_status_decrease,
  review_status_increase,
  intro,
  showMenu
}

function review_status_decrease(state, actions) {
  return (
    {
      review_status: {
        current_review: state.review_status.current_review - 1
      }
    }
  )
}

function review_status_increase(state, actions) {
  return (
    {
      review_status: {
        current_review: state.review_status.current_review + 1
      }
    }
  )
}

function showMenu() {
}

function intro(state, actions) {
  console.log('Just ran my first action')
  return (
    { count: state.count + 1 }
  )
}
