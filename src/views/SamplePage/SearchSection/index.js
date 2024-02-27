import React, { useState,useEffect} from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { alpha, Box, Button, InputBase, Popper, Fade, Card, CardContent, Grid,Select,MenuItem} from '@mui/material';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';

// assets
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

// this projects
import { filterMemberships } from 'helper/searchHelper';
import { getCustomerMembershipByUUID} from 'api/customerMembership';
import { useUserAuth } from "../../../context/UserAuthContext";

//third party - Date Picker
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../../../../node_modules/react-datepicker/dist/react-datepicker.css'

// ==============================|| SEARCH SECTION ||============================== //

const searchOptions = {
   'All': {name:'All', searchBoxType:'none'},
   'Customer Name':{name:'Customer Name',searchBoxType:'SearchInput',options:[]},
   'Promo Code':{name:'Promo Code',searchBoxType:'SearchInput',options:[]},
  //  'Expiry Date':{name:'Expiry Date',searchBoxType:'DatePicker',options:[]},
  //  'Start Date':{name:'Start Date',searchBoxType:'DatePicker',options:[]},
   'Status': {name:'Status', searchBoxType:'DropDown', options:['None','Active','Close']},
}

const DropdownSelect = ({labelId, id, value, handleChange,data})=>{
  return(
  <Select
      labelId= {labelId}
      id={id}
      value={value}
      onChange={(val)=>handleChange(val)}
      label="Select an Option"
    >
      {
        data.map((option)=>{
          return(
          <MenuItem value={option} key={option}>{option}</MenuItem>)
        })
      }
    </Select>
  )}

const SearchSection = (props) => {
  const {data, setData} = props;
  const theme = useTheme();

  const searchOptionsName = Object.keys(searchOptions);
  const [searchOption,setSearchOption]=useState(searchOptionsName[0])
  const [membershipsData, setMembershipsData] = useState(null)

  const [searchWord,setSearchWord]=useState();
  const [searchStatus,setSearchStatus]=useState(searchOptions['Status'].options[0])
  const [searchDate,setSearchDate]=useState(new Date());
  const [filterMembership,setFilterMemberships]=useState();

  const {user} = useUserAuth();

  const getMemberships = async () => {
    try {
        await getCustomerMembershipByUUID(user.email).then((result)=>{
          setMembershipsData(result);
        });
    } catch (error) {
        setMembershipsData(null);
    }
  };

  useEffect(()=>{
    if(user){
      console.log('Access Here')
      getMemberships()
    }
  },[
    searchOption,
  ])

  const handleSearchOption=(event)=>{
    setSearchOption(event.target.value);
    setData(membershipsData)
  }

  const handleSearchInputSubmit=()=>{
    console.log('Data',data)
    if(searchWord!=''){
      console.log('Submit-searchOption',searchOption)
      console.log('Submit-data',dayjs(data))
      console.log('Submit-searchWord',searchWord)
      console.log('filterMembership',filterMemberships(searchOption,searchWord,dayjs(data)));
      // setData()
    }
  }

  const handleStatusSearchSubmit=(event)=>{
    setSearchStatus(event.target.value)
    if(event.target.value != 'None'){
      setData(filterMemberships(searchOption,event.target.value,membershipsData))
    }
  }
  
  const handleDateSearchSubmit=(value)=>{
    const parsedDate = dayjs(value, 'DD/MM/YYYY');
    setData(filterMemberships(searchOption,parsedDate,data))
  }

  const onChangeSearchWord = (event)=>{
    console.log('Search Word',event.target.value)
    setSearchWord(event.target.value);
  }

  const SearchInput = ()=>{
    return(
      <>
       <Box
        sx={{
          position: 'relative',
          borderRadius: 1,
          backgroundColor: { sm: alpha(theme.palette.common.white, 0.15), xs: 'transparent' },
          '&:hover': {
            backgroundColor: { sm: alpha(theme.palette.common.white, 0.25), xs: 'transparent' }
          },
          ml: { sm: theme.spacing(1), xs: 0 },
          mr: { sm: theme.spacing(2), xs: 0 },
          width: 'auto'
        }}
      >
        <Box sx={{ display: { sm: 'none', xs: 'block' } }}>
          <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
              <>
                <Button
                  sx={{
                    minWidth: { xs: 35 }
                  }}
                  aria-haspopup="true"
                  {...bindToggle(popupState)}
                  color="inherit"
                >
                  <SearchTwoToneIcon sx={{ fontSize: '1.5rem' }} />
                </Button>
                <Popper
                  {...bindPopper(popupState)}
                  transition
                  sx={{ zIndex: 1100, width: '100%', top: '10px !important', p: 0 }}
                  modifiers={[
                    {
                      name: 'offset',
                      options: {
                        offset: [0, 10]
                      }
                    },
                    {
                      name: 'preventOverflow',
                      options: {
                        altAxis: true
                      }
                    }
                  ]}
                >
                  {({ TransitionProps }) => (
                    // <Fade {...TransitionProps} timeout={350}>
                    <Fade {...TransitionProps} timeout={350}>
                      <Card
                        sx={{
                          borderRadius: 0,
                          background: theme.palette.primary[200],
                          border: { sm: 0 },
                          boxShadow: { sm: 'none' }
                        }}
                      >
                        <CardContent sx={{ p: 1.5, backgroundColor: theme.palette.secondary.main }}>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs>
                              <Box display="flex" p={0}>
                                <Box
                                  sx={{
                                    p: { sm: theme.spacing(0.75, 1.25), xs: theme.spacing(1.25) },
                                    position: 'absolute',
                                    pointerEvents: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: theme.palette.grey[100]
                                  }}
                                >
                                  <SearchTwoToneIcon color="inherit" />
                                </Box>
                                <InputBase
                                  fullWidth
                                  placeholder="Search…"
                                  value={searchWord}
                                  onChange={(e) => setSearchWord(e.target.value)}
                                  sx={{
                                    '& .MuiInputBase-root': {
                                      color: 'inherit'
                                    },
                                    '& .MuiInputBase-input': {
                                      padding: theme.spacing(1, 1, 1, 0),
                                      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                                      transition: theme.transitions.create('width'),
                                      color: 'black',
                                      width: { sm: '100%', md: 125 },
                                      mr: 3,
                                      '&:focus': {
                                        width: { md: 225 }
                                      }
                                    }
                                  }}
                                  inputProps={{ 'aria-label': 'search' }}
                                />
                                <Box
                                  sx={{
                                    cursor: 'pointer',
                                    p: theme.spacing(1.25),
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    display: 'flex',
                                    color: 'theme.palette.grey[100]'
                                  }}
                                  {...bindToggle(popupState)}
                                >
                                  <CloseTwoToneIcon color="inherit" />
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Fade>
                  )}
                </Popper>
              </>
            )}
          </PopupState>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Box
            sx={{
              p: { sm: theme.spacing(0.75, 1.25), xs: theme.spacing(1.25) },
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.grey[100]
            }}
          >
            <SearchTwoToneIcon />
          </Box>
          <InputBase
            placeholder="Search…"
            onChange={(e) => setSearchWord(e.target.value)}
            sx={{
              '& .MuiInputBase-root': {
                color: 'inherit',
                mr: 3
              },
              '& .MuiInputBase-input': {
                p: theme.spacing(1, 1, 1, 0),
                pl: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create('width'),
                color: 'black',
                width: { sm: '100%', md: 125 },
                mr: { md: 3 },
                '&:focus': {
                  width: { md: 225 }
                }
              }
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>
      </Box>
      <SearchButton/>
      </>
    )
  }

  const SearchButton =()=>{
    return(
      <Button
        backgroundColor="primary" 
        variant="contained"
        size="small"
        onClick={()=>handleSearchInputSubmit()}
      >
        Search
      </Button>
    )
  }
  return (
    <>
      <DropdownSelect
        labelId="dropdown-label"
        id="dropdown"
        value={searchOption}
        handleChange={handleSearchOption}
        label="Select an Option"
        data={searchOptionsName}
      />
      {
        searchOptions[searchOption].searchBoxType === 'SearchInput' &&
        <SearchInput/>
      }
      {
      searchOptions[searchOption].searchBoxType === 'DropDown' &&
      <>
        &nbsp;&nbsp;
        <DropdownSelect
          labelId="status-label"
          id="statusdropdown"
          value={searchStatus}
          handleChange={handleStatusSearchSubmit}
          label="Select an Option"
          data={searchOptions[searchOption].options}
        />
      </>
    }
    {
      searchOptions[searchOption].searchBoxType === 'DatePicker'&&
      <>
        &nbsp; &nbsp;
        <DatePicker
          label="Date"
          name="selectedDate"
          defaultValue={dayjs(new Date())}
          views={['year', 'month', 'day']}
          slotProps={{
            openPickerIcon: { fontSize: 'large' },
            openPickerButton: { color: 'secondary' },
            textField: {
              variant: 'filled',
              fullWidth: false,
              focused: true,
              color: 'secondary',
            },
          }}
          onChange={(value)=>handleDateSearchSubmit(value)}
        />
      </>
    }
    </>
  );
};

export default SearchSection;
