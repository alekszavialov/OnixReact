import React, { Component } from 'react';

export default function withAPIData(WrappedComponent, url) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        apiData: null,
        errorLoadingData: null
      };
    }

    componentDidMount() {
      this.fetchData();
    }

    fetchData = () => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw Error('Oops, try again later');
        })
        .then((data) => this.setState({ apiData: data }))
        .catch((error) => this.setState({
          errorLoadingData: error.message
        }));
    };

    render() {
      const { apiData, errorLoadingData } = this.state;
      return (
        <WrappedComponent
          apiData={apiData}
          errorLoadingData={errorLoadingData}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...this.props}
        />
      );
    }
  };
}
