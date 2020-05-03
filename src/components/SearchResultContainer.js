import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchList();
  }

  searchList = () => {
    var res = API.search()
    this.setState({ results: res })
  };

  sortSalary = () => {
    var res = API.search()
    var sortie = res.sort(function(a, b){
      return a.salary - b.salary;
    });
    console.log(sortie)
    this.setState({ results: sortie })
  }
  searchDept = dept => {
    var res = API.search()
    var filtered = res.filter(function checkDept(el){
      return  el.department === dept
    })
    console.log(filtered)
    this.setState({ results: filtered })
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDept(this.state.search);
    console.log(this.state.search)
  };
  
  handleSort = event => {
    event.preventDefault();
    this.sortSalary()
  }


  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleSort={this.handleSort}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;


