import React, {useState, useContext, useEffect} from 'react';
import {Container, Avatar, Grid, Paper,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import {Context} from '../../_Context/Context';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    borderColor: '#ECECEC',
    borderStyle: 'solid',
    borderWidth:1,
    padding:0,
    paddingLeft:5,
    paddingRight:5,
    alignItems:'center'
 },
 paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: "black",
  backgroundColor:'#ECECEC',
  marginBottom:15
},
typography: {
  backgroundColor:'#ECECEC',
  height:40
},
avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin:4
},
riderInfo: {
  padding:5
}
}))

const DriverForm = () => {
  const {currentEvent:{event_name}} = useContext(Context);

  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [riders, setRiders] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try{
       const {data:ridersArr} = await axios.get(`http://localhost:3100/data/riders/${event_name}`);
       const location = [
         '2229 Union St, San Francisco, CA 94123','350 Turk St, San Francisco, CA 94102',
         '35 Palm Ave # 2, San Francisco, CA 94118','500-514 Hayes Street',
         '501 Stanyan St, San Francisco, CA 94117'
        ];
       ridersArr.forEach((e,i) => e.location = location[i] );
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
    console.log("what is",name)
    const parentNode = event.target.parentNode;
    console.log('parentNode:: ',parentNode);

    console.log(event.target)
    setChecked(event.target.checked);
  };
  const handleSubmit = () => {
    history.push("/map");
  }

const riderName = 'Max'
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Header />

    <Container maxWidth="xs" >

      <p style = {{fontStyle:'italic'}}>Hey Helio! Select your Riders</p>
      {/* {
        riders.map(({}))
      } */}

      <Grid container spacing={2} style={{paddingBottom:8}}>
        <Grid>
        <Avatar className={classes.avatar} />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper} >
            <div  className={classes.riderInfo}>{riderName}</div>
            <div className={classes.riderInfo}>(123)456-789</div>
            <div className={classes.riderInfo}>21 Pike Place</div>
          </Paper>
        </Grid>
        <Grid item xs={0}>
          <Checkbox
        defaultChecked
        color="primary"
        onClick={(e) => handleChange(e,{riderName})}
        // onChange={(e) => handleChange(e,'Taurus')}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <div>1.1mi</div>
          </Grid>

        <Grid container spacing={2} >
        <Grid>
        <Avatar className={classes.avatar} />
        </Grid>
        <Grid item xs={8} style={{marginBottom:10}}>
          <Paper className={classes.paper} >
            <div className={classes.riderInfo}>Kair</div>
            <div className={classes.riderInfo}>(123)223-789</div>
            <div className={classes.riderInfo}>21 Einstein Place</div>
          </Paper>
        </Grid>

        <Grid item xs={0} style={{marginTop:10}}>
          <Checkbox
        defaultChecked
        color="primary"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <div>1.5mi</div>
          </Grid>
      </Grid>
      </Grid>
      <Button variant="contained"  className={classes.root}
         style={{backgroundColor: '#20A46B', color: '#FFFFFF', margin: 40}}
         onClick={handleSubmit}>
  Finish
</Button>

  </Container>
  <Footer />
  </Container>


  )
}

export default DriverForm;



