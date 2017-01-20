import React from 'react'
import { Link } from 'react-router'

import { items } from '../../public/things'
import { users } from '../../public/things'


export default React.createClass({
  getInitialState () {
    return {
      items: [],
      users: []
    }
  },

  componentDidMount () {
    this.setState({
      items: items,
      users: users
    })
  },

  render () {
    const filteredItems = this.state.items.filter(item => {
      return item.categoryId === Number(this.props.params.id)
    })
    const filteredUsers = this.state.users.filter(user => {
      return user.itemId === Number(this.props.params.id)
    })
    return (
      <div>
          <div className="card-deck content">
          {filteredItems.map(item => {
            return (

                <div key={item.id} className="card">
                    <div className="card-block">
                        <p className="card-text">{item.name}</p>
                    </div>
                    <img src={item.image} alt="Card image" width='200px' />
                    <div className="card-block">
                        <p className="card-text">Borrowed: {item.borrowed}</p>
                    </div>
                    {filteredUsers.map(user => {
                      return (
                      <div key={user.id} className="card-block">
                          <p className="card-text"> By:
                              <Link to={`/users/${user.id}`}>{item.by}</Link></p>
                      </div>
                      )
                      })}
                </div>

            )
          })}
          </div>
      </div>
    )
  }
})
