import React, { Component, PropTypes } from 'react';

export default class InputSearch extends Component {

  handleKeyPress(event) {
    const { search } = this.props;
    if (event.charCode == 13) {
      search(event.target.value);
    }
  }

  render() {
    const { searchBy } = this.props;
    return (
      <input
        onKeyPress={(e) => this.handleKeyPress(e)}
        type="text"
        className="field"
        placeholder={`Search by ${searchBy}`} />
    );
  }
}

InputSearch.propTypes = {
  search: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired
};
