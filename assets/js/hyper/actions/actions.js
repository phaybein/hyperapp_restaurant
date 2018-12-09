
const review_status_decrease = (state, actions) => {
  return (
    {
      review_status: {
        current_review: state.review_status.current_review - 1
      }
    }
  )
}

const review_status_increase = (state, actions) => {
  return (
    {
      review_status: {
        current_review: state.review_status.current_review + 1
      }
    }
  )
}

export const actions = {
  review_status_decrease,
  review_status_increase
}