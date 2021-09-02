import { Context } from '../../_Context/Context.js';
import { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { currentEvent, setCurrentEvent } = useContext(Context);

  const handleOpen = () => {
    setOpen(true);
    setCurrentEvent(props.selectedEvent);
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
          <div className={classes.paper}>
          <div className={classes.spanDivs}>
          <span className={classes.span}>Event: </span>
          <span style = {{fontWeight:900}}>{props.selectedEvent.event_name}</span>
          </div>
          <div className={classes.spanDivs}>
          <span className={classes.span}>Host: </span>
          <span>{props.selectedEvent.host_email}</span>
          </div>

          <div className={classes.spanDivs}>
            <span className={classes.span}>Date: </span>
            <span>{props.selectedEvent.date}</span>
          </div>

          <div className={classes.spanDivs}>
            <span className={classes.span}>Time: </span>
            <span>{props.selectedEvent.time}</span>
          </div>

          <div className={classes.spanDivs}>
            <span className={classes.span}>Location: </span>
            <span>{props.selectedEvent.location}</span>
          </div>

          <div className={classes.spanDivs}>
            <span className={classes.span}>Description: </span>
            <span>{props.selectedEvent.description}</span>
          </div>
          </div>
         </>


        </Fade>
      </Modal>
    </div>
  );
}
