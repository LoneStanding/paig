/* library imports */
import React, {Component} from 'react';

/* other project imports */
import { Grid, Typography, Button } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import BaseContainer from 'containers/base_container';
import {ErrorLogo} from 'components/site/v_error_page_component';

class CPageNotFound extends Component {

  constructor(props){
    super(props);
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  render () {
    return (
      <BaseContainer showRefresh={false} routes={null}>
        <h1>HELLO THIS A TEST</h1>
        
      </BaseContainer>
    );
  }
}

export default CPageNotFound;