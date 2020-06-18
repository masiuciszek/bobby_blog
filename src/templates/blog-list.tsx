import * as React from 'react'
import { PageProps } from 'gatsby'

type Props = PageProps

const BlogList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {' '}
      <h1> BlogList </h1>{' '}
    </div>
  )
}
export default BlogList
