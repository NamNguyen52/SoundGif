import React, { Component, PropTypes } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import Actions from '../actions/creators';

class GifSearch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: 'Laser Cats'
    }
  }

  submitSearch(searchTerm) {
    this.setState({searchTerm});
    this.props.searchGiphy(searchTerm);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(searchTerm) => this.submitSearch(searchTerm)}
          value={this.state.searchTerm}
          style={styles.searchInput}
          />
      </View>
    )
  }
}

GifSearch.propTypes = {
  searchGiphy: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 63
  },
  searchInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10
  }
});

const mapStateProps = (state) => {
  return {
    // TODO: Once action dispatch created for giphy search results, connect giphyreducer to this container
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchGiphy: (searchTerm) => dispatch(Actions.gifSearchRequest(searchTerm))
  }
};

export default connect(mapStateProps, mapDispatchToProps)(GifSearch);
