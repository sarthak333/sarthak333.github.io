import React from 'react'
import Icon from 'react-web-vector-icons';
import './../stylesheets/sidebar.scss'

const Sidebar = (props) => {
  return (
    <div
      className="sidebar"
      onMouseEnter={() => props.onHover(true)}
      onMouseLeave={() => props.onHover(false)}
    >
      <div className="option perfect-center">
        <Icon
          name='home'
          font='Octicons'
        />
      </div>
      <div className="option perfect-center">
        <Icon
          name='user'
          font='AntDesign'
        />
      </div>
      <div className="option perfect-center">
        <Icon
          name='lab-flask'
          font='Entypo'
        />
      </div>
      <div className="option perfect-center">
        <Icon
          name='phone'
          font='SimpleLineIcons'
        />
      </div>
    </div>
  )
}

export default React.memo(Sidebar);