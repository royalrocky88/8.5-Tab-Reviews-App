// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  reviewsDetails = detail => {
    const {imgUrl, username, companyName, description} = detail

    return (
      <div className="review-card">
        <img src={imgUrl} className="profile-card" alt={username} />
        <p className="name-card">{username}</p>
        <p className="company-card">{companyName}</p>
        <p className="describe-card">{description}</p>
      </div>
    )
  }

  isLeftArrow = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props
    if (activeId > (reviewsList.length === 0)) {
      this.setState(oldValue => ({
        activeId: oldValue.activeId - 1,
      }))
    }
  }

  isRightArrow = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props
    if (activeId < reviewsList.length - 1) {
      this.setState(oldValue => ({
        activeId: oldValue.activeId + 1,
      }))
    }
  }

  render() {
    const {activeId} = this.state
    const {reviewsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="header-card">Reviews</h1>
          <div className="card-detail">
            <button
              type="button"
              className="btn"
              data-testid="leftArrow"
              onClick={this.isLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-card"
              />
            </button>
            {this.reviewsDetails(reviewsList[activeId])}
            <button
              type="button"
              className="btn"
              data-testid="rightArrow"
              onClick={this.isRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-card"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
