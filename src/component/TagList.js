import { Link } from 'gatsby'
import React from 'react'
import setupTags from '../utils/setupTags'
const slugify = require('slugify')
const TagList = ({recipes}) => {
  const newTags = setupTags(recipes)
  return (
    <div>
        <div className="tag-container"></div>
        <h4>recipes</h4>
        <div className="tags-list">
        {newTags.map((tag, index) => {
            const [text, value]  = tag
            const slug = slugify(text, {lower: true})
            return <Link to={`tags/${slug}`} key={index}> {text} ( {value}) </Link>
        })}
        </div>

    </div>
  )
}

export default TagList
