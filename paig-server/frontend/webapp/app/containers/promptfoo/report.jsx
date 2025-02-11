
/* library imports */
import React, {Component} from 'react';

/* other project imports */
import { Grid, Typography, Button } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import BaseContainer from 'containers/base_container';
import {ErrorLogo} from 'components/site/v_error_page_component';

/* --------------------------- */
// import { callApi } from './api'; CAN DELETE
import WarningIcon from '@mui/icons-material/Warning';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { categoryAliasesReverse} from './constants';
import { convertResultsToTable } from './convertEvalResultsToTable';
// import FrameworkCompliance from './FrameworkCompliance';
// import Overview from './Overview';
import ReportDownloadButton from './ReportDownloadButton';
// import ReportSettingsDialogButton from './ReportSettingsDialogButton';
// import RiskCategories from './RiskCategories';
import StrategyStats from './StrategyStats';
import TestSuites from './TestSuites';
import ToolsDialog from './ToolsDialog';
import { getPluginIdFromResult, getStrategyIdFromMetric } from './shared';
import './Report.css';


const ResultFailureReason = {
  // The test passed, or we don't know exactly why the test case failed.
  NONE : 0,
  // The test case failed because an assertion rejected it.
  ASSERT : 1,
  // Test case failed due to some other error.
  ERROR : 2,
}

function isProviderOptions(provider) {
  return (
    typeof provider === 'object' &&
    provider != null &&
    'id' in provider &&
    typeof provider.id === 'string'
  );
}
/* --------------------------- */

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