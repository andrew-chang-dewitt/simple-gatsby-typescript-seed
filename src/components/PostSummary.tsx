import React from 'react'
import { Link } from 'gatsby'

export interface Post {
  id: string
  title: string
  date: string
  slug: string
  excerpt: string
}

interface Props {
  post: Post
}

export const PostSummary = (props: Props) => (
  <Link to={props.post.slug}>
    <h3>
      {props.post.title} - {props.post.date}
    </h3>
    <p>{props.post.excerpt}</p>
  </Link>
)
