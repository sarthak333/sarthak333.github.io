import React, { Component } from 'react'
import './../stylesheets/category.scss'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={this.props.hovering ? "category-base perfect-center hovering" : "category-base perfect-center"}>
        asdgasg
      </div>
    )
  }
}

export default Category;