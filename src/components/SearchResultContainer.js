import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  //
  // When this component mounts, search the Giphy API for pictures of kittens
  // This method is built-in to React and automatically runs after the component 
  // is rendered for the first time. componentDidMount runs after a component and 
  // all of its children have been initially rendered and mounted to the DOM, 
  // and have no further expected initialization steps
  //
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

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDept(this.state.search);
    console.log(this.state.search)
  };
  
  handleSort = event => {
    event.preventDefault();
    this.sortSalary()
  }

  // render is a lifecycle event, but rather than only running once 
  // the render method is called every time our component's state is updated or 
  // anytime our component receives new props.
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


/*
Design pattern: Containers and Presentation components

1. Container components are primarily concerned with how things work and render very little, 
 any of their own markup. Instead they mostly render other components and pass down the logic 
 and data they need to work.

2. Presentational components are concerned with how things look and typically don't contain 
any logic that doesn't have to do with their own individual UI.

This pattern helps us build components with little to no coupling that can more easily be reused in different parts of app 
or even across applications. It also lets us stub out our applications appearance by writing presentational components first, 
and then writing container components once we're ready to make things work.
*/