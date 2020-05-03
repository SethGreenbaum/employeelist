import React from "react";

function ResultList(props) {
  return (
    <table>
           <thead>
              <tr>
                <th>Name</th>
                <th>Dept</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
            {props.results.map(result =>
                <tr key={result.id}>
                  <td>{result.name}</td>
                  <td>{result.department}</td>
                  <td>{result.salary}</td>
                </tr>
              )}
            </tbody>
    </table>
  );
}

export default ResultList;
