import React, { Component } from "react";
import API from "../utils/API";
import Search from "./Search";

class RowData extends Component {
    // constructor(props) {
    //     super(props);
        // this.
    state = {
          error: null,
          // isLoaded: false,
          results: [],
          searchResults: [],
          search: ''
    };
      // }
    
    componentDidMount = () => {
      this.loadEmployees(); 
    }
   loadEmployees = () => {
        fetch('https://randomuser.me/api/?results=200&nat=us')
        .then(res => res.json())
        .then(
          (data) => {
            this.setState({
              // isLoaded: true,
              results: data.results
            });
          },
          (error) => {
            this.setState({
              // isLoaded: true,
              error
            });
          }
        )
    }
      
   render() {
      const { error, results } = this.state;
  
        return (
          <div className="container">
          <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container">
        <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name
        <svg className="bi bi-arrow-down-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={() => { this.handleDescend();}}>
          <path fillRule="evenodd" d="M4.646 7.646a.5.5 0 01.708 0L8 10.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M8 4.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5z" clipRule="evenodd"/>
        </svg>
          <svg className="bi bi-arrow-up-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={() => { this.handleAscend();}}>
          <path fillRule="evenodd" d="M8 5.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 5.707 5.354 8.354a.5.5 0 11-.708-.708l3-3z" clipRule="evenodd"/>
        </svg>
        </th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Birthday</th>
          </tr>
        </thead>
              <tbody>
                {results.map(result => (
                  <tr key={result.login.uuid}>
              <th scope="row"><img alt={result.name.first} src={result.picture.thumbnail}/></th>
                <td>{result.name.first} {result.name.last}</td>
                <td>{result.email}</td>
                <td>{result.cell}</td>
                <td>{result.dob.date}</td> 
              </tr> ))}
                </tbody>
            </table>
            </div>
            </div>
            )
   }
       
    }
export default RowData;