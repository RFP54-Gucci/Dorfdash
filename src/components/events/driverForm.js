import React, {useState, useContext, useEffect} from 'react';
import {Container, Avatar, Grid, Paper,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import {Context} from '../../_Context/Context';
import axios from 'axios';

// Jinhoo change
import logo from '../../assets/logo.png';
import useStyles from '../components_styles.js';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   container: {
//     borderColor: '#ECECEC',
//     borderStyle: 'solid',
//     borderWidth:1,
//     borderRadius:'2.5rem',
//     padding:0,
//     alignItems:'center',
//     height:'45rem',
//     maxHeight: '100%',
//     overflow: 'hidden',
//     width: '25rem'

//  },
//  formContainer: {
//   height:'35rem',
//   maxHeight: '73.5%',
//   overflowY: 'scroll',
// },
//  paper: {
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: "black",
//   backgroundColor:'#ECECEC',
//   marginBottom:15
// },
// typography: {
//   backgroundColor:'#ECECEC',
//   height:40
// },
// avatar: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//     margin:4
// },
// riderInfo: {
//   padding:5
// }
// }))

const DriverForm = () => {
  const { currentUser, setCurrentUser } = useContext(Context);
  const {currentEvent:{event_name}} = useContext(Context);
  const { currentEvent, setCurrentEvent } = useContext(Context);
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [riders, setRiders] = useState([]);
  const[onChange, setOnChange] = useState([]);
  console.log(riders);
  useEffect(() => {
    async function fetchData() {
      try{
       const {data:ridersArr} = await axios.get(`/data/riders/${event_name}`);
       const location = [
         '2229 Union St, San Francisco, CA 94123','350 Turk St, San Francisco, CA 94102',
         '35 Palm Ave # 2, San Francisco, CA 94118','500-514 Hayes Street',
         '501 Stanyan St, San Francisco, CA 94117'
        ];
       ridersArr?.forEach((e,i) => e.location = location[i] );
       setRiders(ridersArr);
      }
       catch(err){
         console.log('ERROR:', err);
       }
     }
     fetchData();
  },[event_name])

  let history = useHistory();

  const handleChange = (event,name) => {
    setChecked(event.target.checked);
    setOnChange({name})
  };


// put request to update the riders table (drivers-email)specific driver for a rider
  const handleSubmit = () => {
    axios.put('/data/riders',{
        riderEmail: onChange.name.rider_email,
        eventName: currentEvent.event_name,
        driverEmail: currentUser.email
    })
    .then((response) => {
      console.log(response);
    history.push("/map");
    })
    .catch(err => {
    console.log(err);
    })
  }

  return (


    // Jinhoo change
    <Container maxWidth="xs" className={classes.div2}>
      <img alt="logo2" className={classes.logo} src={logo}/>
      <Container maxWidth="xs" className={classes.form2} >
      <p className={classes.font} style={{fontStyle:'italic'}}>Hey <span style={{fontWeight:780}}>{currentUser.name}</span> Select your Riders</p>
      {riders.map(({rider_name, location, phone, rider_email}) => (
        <Grid className={classes.riderCard} container spacing={2} style={{paddingBottom:8}}>
          <Grid className={classes.avatar}>
            <Avatar />
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.riderInfoDiv}>
              <div  className={classes.riderInfo}>{rider_name}</div>
              <div className={classes.riderInfo}>{phone}</div>
              <div className={classes.riderInfo}>{location}</div>
            </Paper>
          </Grid>
          <Grid item xs={0}>
            <Checkbox
              color='primary'
              onClick={(e) => handleChange(e,{rider_name,location,rider_email})}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <div>1.1mi</div>
          </Grid>
        </Grid>
      ))}
      <Button className={classes.solidBtn} onClick={handleSubmit}>Finish</Button>
      </Container>
    </Container>

    //---------------------------

    // <Container maxWidth="xs" className={classes.container}>
    //   <Header />
    //   <Container maxWidth="xs" >
    //   <p style = {{fontStyle:'italic'}}>Hey <span style={{fontWeight:780}}>{currentUser.name}</span> Select your Riders</p>
    //   {
    //     riders.map(({rider_name, location, phone,rider_email}) => (
    //     <Grid container spacing={2} style={{paddingBottom:8}}>
    //         <Grid>
    //           <Avatar className={classes.avatar} />
    //         </Grid>
    //         <Grid item xs={8}>
    //           <Paper className={classes.paper} >
    //             <div  className={classes.riderInfo}>{rider_name}</div>
    //             <div className={classes.riderInfo}>{phone}</div>
    //             <div className={classes.riderInfo}>{location}</div>

    //           </Paper>
    //         </Grid>
    //         <Grid item xs={0}>
    //           <Checkbox
    //                 // defaultChecked
    //                 color="primary"
    //                 onClick={(e) => handleChange(e,{rider_name,location,rider_email})}
    //                 inputProps={{ 'aria-label': 'secondary checkbox' }}
    //             />
    //            <div>1.1mi</div>
    //         </Grid>
    //     </Grid>
    //   ))}
    //   <Button className={classes.solidBtn} onClick={handleSubmit}>Finish</Button>
    //   </Container>
    // </Container>
  )
}

export default DriverForm;



