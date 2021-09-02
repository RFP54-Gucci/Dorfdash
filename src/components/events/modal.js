import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import {Grid} from '@material-ui/core';

import Fade from '@material-ui/core/Fade';
import samples from './sample.js';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:500
  },
  span: {
    color: '#037041',
    fontStyle:'italic',
    fontWeight:900,
    padding:10
  },
  spanDivs: {
    marginBottom:10,
  },
  button: {
    color: '#20A46B',
    marginLeft: 185,
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const[sample, setSamples] = React.useState({
    name:'',
    host:''
  })

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.button} size="small" onClick={handleOpen}>Details</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <>
          {samples.map(item => (
            <div className={classes.paper}>
            <div className={classes.spanDivs}>
            <span className={classes.span}>Event: </span>
            <span style = {{fontWeight:900}}>{item.event_name}</span>
            </div>
            <div className={classes.spanDivs}>
            <span className={classes.span}>Host: </span>
            <span>{item.event_host}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Date: </span>
              <span>{item.event_date}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Time: </span>
              <span>{item.event_time}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Location: </span>
              <span>{item.event_location}</span>
            </div>

            <div className={classes.spanDivs}>
              <span className={classes.span}>Description: </span>
              <span>{item.event_des}</span>
            </div>
            </div>

          ))}
            {/* <div className={classes.paper}>{sample.name}</div> */}
         </>


        </Fade>
      </Modal>
    </div>
  );
}
