import React, { Component } from 'react'
import Link from './Link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends Component {
  render() {
    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.feedQuery && this.props.feedQuery.error) {
      return <div>Error</div>
    }

    const linksToRender = this.props.feedQuery.feed.links

    console.log(linksToRender);

    return (
      <div>{linksToRender.map(link => <Link key={link.id} link={link} />)}</div>
    )
  }
}

// 1
const FEED_QUERY = gql`
  # 2
  query FeedQuery {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

// 3
export default graphql(FEED_QUERY, { name: 'feedQuery' }) (LinkList)
