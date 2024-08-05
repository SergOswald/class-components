import { Component } from 'react';
import SearchComponent from './SearchComponent';
import ResultsComponent from './ResultsComponent';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      results: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchResults(localStorage.getItem('searchTerm') || '');
  }

  fetchResults = (searchTerm: string) => {
    const page=1;

    const apiUrl = searchTerm
      ? `https://swapi.dev/api/people/?page=${page}&name=${searchTerm}`
      : 'https://swapi.dev/api/people/results';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ results: data.results }))
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ error });
      });
  }

  handleSearch = (searchTerm) => {
    this.fetchResults(searchTerm);
  }

  throwError = () => {
    throw new Error('Test error');
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong.</p>;
    }

    return (
      <ErrorBoundary>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' , width: '100vw' }}>
          <div style={{ flex: '1' }}>
            <SearchComponent onSearch={this.handleSearch} />
          </div>
          <div style={{ flex: '3', overflowY: 'auto' }}>
            <ResultsComponent results={this.state.results} />
          </div>
          <button onClick={this.throwError}>Throw Error</button>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;