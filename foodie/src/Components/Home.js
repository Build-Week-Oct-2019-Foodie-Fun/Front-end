import React from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import MealList from './MealList'
import StarRatingComponent from 'react-star-rating-component'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterInput: [],
      userData: this.props.userData,
    }
  }

  ratingFilter = evt => {
    let filtered = this.props.userData.filter(meal => meal.food_rating === parseInt(evt.target.value))
    console.log(filtered)
    if (filtered.length === 0) {
      console.log(filtered)
      this.setState({
        userData: this.props.userData,
        filterInput: ''
      })
    }
    else {
      this.setState({
        filterInput: evt.target.value,
        userData: filtered,
      })
    }
  }

  typeFilter = evt => {
    let filtered = this.props.userData.filter(meal => meal.restaurant_type.toLowerCase() === evt.target.value.toLowerCase())
    
    if (filtered.length === 0) {
      console.log(filtered)
      this.setState({
        userData: this.props.userData,
        filterInput: ''
      })
    }
    else {
      this.setState({
        filterInput: evt.target.value,
        userData: filtered,
      })
    }
  }

  oneOfEach = () => {
    const items = this.props.userData.map(item => item.restaurant_type)
    const oneOfEachItem = [...new Set(items)]
    return oneOfEachItem
  }

  render() {
    const { isLoading } = this.props
    const { userData, filterInput } = this.state
    console.log(userData)
    console.log(isLoading)

    if (isLoading) {
      return <p>Meals are loading...</p>
    }
    else if (userData.length === 0) {
      return <Link to='/add'><h1 className='pleaseAdd'>Click here to get started!</h1></Link>
    }

    return (
      <section className='home'>
        
        <div className='tableContainer'>
         <div className="mealCard2">
           {this.props.userData.map(meal => {

const {
  restaurant_name,
  restaurant_type,
  item_photo,
  item_name,
  food_rating,
  item_comment,
  wait_time,
  date_visited,
  id
} = meal

return (
  <div className='mealRow' key={id}>
    <div>   
       <p className='tablePhoto'><Link to={`/meal/${id}`}><img className='itemImg' src={`${item_photo}`} alt='A Meal' /></Link></p>
   </div>
   <div className='here'>
    {/* <p className='tableR'><Link to={`/meal/${id}`}><StarRatingComponent className='rating' name={'rating'} starCount={5} value={food_rating} emptyStarColor={'RGBA(255,205,80,0.5)'} renderStarIcon={() => <span role='img' aria-label='burger'><i className="fas fa-hamburger"></i></span>} /></Link></p> */}
    <p className='tableR'>RESTAURANT : <Link to={`/meal/${id}`}>{restaurant_name}</Link></p>
    <p className='tableR'>FOOD TYPE : <Link to={`/meal/${id}`}>{restaurant_type}</Link></p>
    <p className='tableR'>MEAL NAME : <Link to={`/meal/${id}`}>{item_name}</Link></p>
    <p className='tableR'>WAIT TIME : <Link to={`/meal/${id}`}>{wait_time}</Link></p>
    <p className='tableR'>COMMENTS : <Link to={`/meal/${id}`}>{item_comment}</Link></p>
    <p className='tableR'>VISIT DATE: <Link to={`/meal/${id}`}>{date_visited}</Link></p>
  </div>
   
  </div>



  
)})
}

        </div>



          <section className='listRoute'>
            <Route exact path='/' render={props => <MealList {...props} />} />
          </section>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  isLoading: state.isLoading,
  mealChange: state.mealChange,
})

export default connect(mapStateToProps)(Home)