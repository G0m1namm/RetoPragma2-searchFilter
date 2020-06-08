import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const CustomTabs = withStyles({
  indicator: {
    backgroundColor: '#B5076B',
  },
})((props) => <Tabs variant="scrollable" scrollButtons="off"  {...props}/>);

const CustomTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 44,
    marginRight: theme.spacing(2),
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
    '&:hover': {
      color: '#B5076B',
      opacity: 1,
    },
    '&$selected': {
      color: '#B5076B',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#B5076B',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


const FilterTabs = ({value, handleChange}) => {
  return (
    <CustomTabs value={value} onChange={handleChange}>
        <CustomTab label="Todos" />
        <CustomTab label="Con alcohol" />
        <CustomTab label="Sin alcohol" />
        <CustomTab label="Alcohol opcional" />
    </CustomTabs>
  )
}

export default FilterTabs