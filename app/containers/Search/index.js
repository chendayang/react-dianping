import React from 'react'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'
class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const params = this.props.match.params
    console.log('p:', params)
    return (
      <div>
        <SearchHeader keyword={params.keyword || ''} />
        <SearchList category={params.category} keyword={params.keyword} />
      </div>
    )
  }
}

export default Search
