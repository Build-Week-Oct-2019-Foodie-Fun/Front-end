import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (evt) => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    const { username, password } = this.state

    this.props.login(username, password)
      .then(() => {
        this.props.history.push('/')
      })
      .catch((err) => {
        console.error(err.error)
      })
  }

  render() {
    const { username, password } = this.state
    const { isLoading, error } = this.props

    return (
      <div className='register'>
        <h1>FoodieFun</h1>
        <p className="P">
            A place for foodies to share and rate their favorite spots, dishes,
            and overall dining experience
        </p>

        <form className='registerForm' onSubmit={this.handleSubmit}>
          {error && <><p className='error'>{error}</p><br /> <p className='error'>Or create a new account.</p></>}

          <input type='text' name='username' placeholder='Username' value={username} onChange={this.handleChange} /><br />
          <input type='password' name='password' placeholder='Password' value={password} onChange={this.handleChange} /><br />

          {isLoading ? <p> One momment please,...</p> : <button className='registerButton' type='submit'>LOGIN</button>}
        </form>
        <p className='loginLink'>Not a member? Click <Link to='/register'>HERE</Link> to create an account.</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
})

const mapDispatchToProps = {
  login,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Login)
)