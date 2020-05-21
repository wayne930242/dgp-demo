import React, { Component } from 'react'
import '../i18n'
import { Translation, i18n } from 'react-i18next'

import { Form, FormControl } from 'react-bootstrap'

import {Link} from 'gatsby'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Axios from "axios"
import * as JsSearch from "js-search"

import En from '../JSON/en.json'
import Zh from '../JSON/en.json'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      search: [],
      searchResults: [],
      isLoading: true,
      isError: false,
      searchQuery: ""
    };
    this.rebuildIndex = this.rebuildIndex.bind(this);
    this.searchData = this.searchData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
//'+i18n.language+'
  componentDidMount(){
    const json = Zh;
    this.setState({ dataList: json.contents });
    this.rebuildIndex();
  }

  rebuildIndex = () => {
    const { dataList } = this.state;
    const dataToSearch = new JsSearch.Search("content");
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("content");
    dataToSearch.addIndex("title");
    dataToSearch.addIndex("url");
    dataToSearch.addDocuments(dataList);
    this.setState({ search: dataToSearch, isLoading: false });
  }

  searchData = (e) => {
    const { search } = this.state;
    const queryResult = search.search(e.target.value);
    this.setState({ searchQuery: e.target.value, searchResults: queryResult });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }
//{(t, { i18n }) => t("search")} resultData.data
  render() {
    const { searchResults, searchQuery } = this.state;
    const queryResults = searchQuery === "" ? [] : searchResults;
    return (
      <Form htmlFor="search-bar" onSubmit={(e) =>this.handleSubmit} inline>
        <FormControl
          type="text"
          id="search-bar"
          value={searchQuery}
          onChange={(e) => this.searchData}
          placeholder="search..."
        />
        <FontAwesomeIcon id="search-icon" icon={faSearch} />
        <div className="search-result">
          <p>Number of items: {queryResults.length}</p>
          {queryResults.map(item => {
              return (
                <div key={`row-${item.title}`}>
                  <Link to={item.url}><h4>{item.title}</h4>
                  <p>{item.content}</p></Link>
                </div>
              )
            })
          }
        </div>
      </Form>
    )
  }
}

export default Search