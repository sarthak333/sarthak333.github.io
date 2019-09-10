import React, { Component } from 'react';
import Sidebar from './sidebar';
import Category from './category';

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDisplayCategory: 'welcome',
      hovering: false,
    }
  }

  changeDisplayCategory = (value) => {
    this.setState({ currentDisplayCategory: value })
  }

  onHover = (value) => {
    this.setState({ hover: value })
  }

  render() {
    return (
      <div className="base">
        <Sidebar changeCategory={this.changeDisplayCategory} onHover={this.onHover} />
        <Category display={this.state.currentDisplayCategory} hovering={this.state.hover} />
      </div>
    )
  }
}

export default Root;