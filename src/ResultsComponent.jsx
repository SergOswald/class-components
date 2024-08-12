import React from 'react';

const ResultsComponent = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index}>
            <h3>{result.name}</h3>
            <p>{result.mass}</p>
            <p>{result.hair_color}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default ResultsComponent;