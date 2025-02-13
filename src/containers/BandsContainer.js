import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bands from '../components/Bands';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    const bandList = this.props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>
    })
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {bandList}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => {
      dispatch({ type: 'ADD_BAND', band })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
