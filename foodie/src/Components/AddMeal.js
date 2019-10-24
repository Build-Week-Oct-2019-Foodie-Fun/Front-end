import React from 'react'
import { withRouter } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import { addMeal } from '../actions'
import { yellow } from 'ansi-colors'

class AddMeal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
      restaurant_name: '',
      restaurant_type: '',
      item_photo: '',
      item_name: '',
      food_rating: 0,
      item_comment: '',
      wait_time: '',
      date_visited: '',
    }
  }

  newMeal = evt => {
    evt.preventDefault()
    const { restaurant_name,
      restaurant_type,
      item_photo,
      item_name,
      food_rating,
      item_comment,
      wait_time,
      date_visited
    } = this.state


    const payload = {
      restaurant_name,
      restaurant_type,
      item_photo,
      item_name,
      food_rating,
      item_comment,
      wait_time,
      date_visited
    }
    this.props.addMeal(payload)

    this.setState({
      restaurant_name: '',
      restaurant_type: '',
      item_photo: '',
      item_name: '',
      food_rating: '',
      item_comment: '',
      wait_time: '',
      date_visited: '',
    })
    this.forceUpdate()
    this.props.history.push('/')
  }

  changeHandler = evt => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  onStarClick = (next,prev,name) => {
    this.setState({
      food_rating: next,
    })
  }

  render() {
    const {
      restaurant_name,
      restaurant_type,
      item_photo,
      item_name,
      food_rating,
      item_comment,
      wait_time,
      date_visited
    } = this.state
    return (
      <form className='addMeal' onSubmit={this.newMeal}>
        <h2 className='addMealHeader'>How was your meal?..Awesome?..Note it down so you wont forget!!</h2>
        <input className='restNameInput' type='text' name='restaurant_name' placeholder='Restaurant Name' value={restaurant_name} required onChange={this.changeHandler} /><br />
        <input className='restTypeInput' type='text' name='restaurant_type' placeholder='Type of Restaurant' value={restaurant_type} required onChange={this.changeHandler} /><br />
        <div className='itemPhotoContainer'>
          <input className='itemPhotoInput' id='item_photo' type='text' placeholder='Photo Link' name='item_photo' accept='image/*' value={item_photo} onChange={this.changeHandler} /><br />
        </div>
        <input className='itemNameInput' type='text' name='item_name' placeholder='Name of the Meal' value={item_name} onChange={this.changeHandler} required /><br />
        <StarRatingComponent className='rating' name={'rating'} starCount={5} value={food_rating} onStarClick={this.onStarClick} emptyStarColor={'RGBA(255,205,80,0.5)'} renderStarIcon={() => <span role='img' aria-label='burger'><i className="fas fa-hamburger"></i></span>} /><br />      
        <input className='commentInput' type='text' name='item_comment' placeholder=' Comments..?' value={item_comment} required onChange={this.changeHandler} /><br />
        <input className='waitTimeInput' type='text' name='wait_time' placeholder='Wait time?' value={wait_time} required onChange={this.changeHandler} /><br />
        <div className='visitDateContainer'>
          <label className='dateLabel' htmlFor='date_visited'>The Date of Visit:</label><br />
          <input className='visitDateInput' type='date' id='date_visited' name='date_visited' value={date_visited} required onChange={this.changeHandler} /><br />
        </div>
        <button className='addButton' type='submit'>Add Meal</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  addMeal,
}

export default withRouter(connect(null,mapDispatchToProps)(AddMeal))