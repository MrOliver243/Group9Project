import React, { Component } from 'react';
import AutoCompleteText from '../AutoCompleteText.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllGames } from '../../Redux/actions/dataActions';

class Homepage extends Component {  
  componentDidMount() {
    this.props.getAllGames();
  }
  render() {
    const { games } = this.props.data;
    console.log(games);
    return (
      
      <div className='container-fluid'>
        <AutoCompleteText/>
        <h1>Games Genre Categories Page</h1>
          
      </div>
    );
  }
}

Homepage.propTypes = {
  getAllGames: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect( mapStateToProps, { getAllGames } )(Homepage);


