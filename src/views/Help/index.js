import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Event as EventIcon, ExpandMore as ExpandMoreIcon} from '@mui/icons-material';

import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { helpData as data} from './help.data';
import { bgcolor } from '@mui/system';
import { variance } from '@babel/types';
import { useUserAuth } from 'context/UserAuthContext';

const BreadcrumbSection =()=>{
  return(
    <Breadcrumb title="Help">
      <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
        Home
      </Typography>
      <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
        Help
      </Typography>
  </Breadcrumb>
  )
}

const HelpPage = () => {
  const { user } = useUserAuth();
  const htmlElementMapping = (props) => {
    const { elementType, data } = props;
    switch (elementType) {
      case 'Text':
        return <p>{data}</p>;
      case 'Image':
        return <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}><img src={data} alt="help_image" style={{width:'100vh'}}/></div>;
      default:
        return <div>Error</div>;
    }
  };
  
  const CustomAccordionSummary = ({data, index})=> {
    return(
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}a-content`} id={`panel${index + 1}a-header`}>
        <Typography style={{fontWeight:data.isRoot?'700':'500'}}>{ data.summary }</Typography>
      </AccordionSummary>)
  }
  const NestedAccordion = ({ data }) => {
    return (
      <div>
        {data.map((item, index) => (
          <Accordion key={index}>
            <CustomAccordionSummary data={item} index={index}/>
            <AccordionDetails 
              sx={{bgcolor:'white'}}>
              {item.isNested && item.details && (
                <NestedAccordion data={item.details} key={'accordianDetail_'+index}/>
              )}
              {!item.isNested && item.details &&
                <>
                  {item.details.map((nestedItem, nestedIndex) => {
                    return(
                      <div key={nestedItem}>
                            {htmlElementMapping({ elementType: nestedItem.type, data: nestedItem.data })}
                            <br/>
                      </div>
                    )
                  })}
                </>
              }
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  };
  return (
    <>
      <BreadcrumbSection/>
      <NestedAccordion data={data}/>
    </>
  );
};

export default HelpPage;
