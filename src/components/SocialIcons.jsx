/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const SocialIcons = ({item}) => {
  return (
    <li>
    <a href="#" className="share">
        <i className={`bi ${item.icon}`}></i>
    </a>
</li>
  )
}

export default SocialIcons