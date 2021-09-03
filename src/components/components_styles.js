import { makeStyles } from '@material-ui/core/styles';
import Image from '../assets/background.png';
// import '../../App.css';

export default makeStyles((theme) => ({
  // root: {
  //   maxWidth: 375,
  //   height: 770,
  //   borderColor: '#ECECEC',
  //   borderStyle: 'solid',
  //   overflowX: 'scroll',
  //   marginBottom: 25,
  //   padding: 0
  // },
  font: {
    fontFamily: 'Sora'
  },
  font2: {
    fontWeight: 600
  },
  div: {
    width: '100vw',
    maxWidth: '100vw',
    padding: '5%',
    height: '100vh',
    backgroundColor: '#10BD82',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  div2: {
    width: '100vw',
    maxWidth: '100vw',
    padding: '5%',
    height: '100vh',
    backgroundColor: '#10BD82',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  logo: {
    width: '250px',
    height: '40px',
    margin: '2%'
  },
  logo2: {
    width: '250px'
  },
  logo3: {
    width: '100px'
  },
  // header: {
  //   backgroundColor: '#10BD82',
  //   padding: '2%'
  // },
  // footer: {
  //   width: '100vw',
  //   maxWidth: '100vw',
  //   backgroundColor: '#3F3F3F',
  //   padding: '2% 2% 5% 2%',
  //   textAlign: 'center',
  //   color: '#fff'
  // },
  form: {
    padding: '5%',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0px 5px 12px 0px rgba(0,0,0,0.65)',
    backgroundColor: '#fff'
  },
  form2: {
    padding: '5%',
    margin: '2%',
    borderRadius: '10px',
    boxShadow: '0px 5px 12px 0px rgba(0,0,0,0.65)',
    backgroundColor: '#fff'
  },
  form3: {
    padding: '2%',
    margin: '2%',
    borderRadius: '10px',
    boxShadow: '0px 5px 12px 0px rgba(0,0,0,0.65)',
    backgroundColor: '#fff'
  },
  form4: {
    padding: '2%',
  },
  formSlide: {
    overflowY: 'scroll',
    overflowX: 'hidden',
    padding: '2%',
    margin: '2%',
    borderRadius: '10px',
    boxShadow: '0px 5px 12px 0px rgba(0,0,0,0.65)',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: '2.2rem',
    fontFamily: 'Sora'
  },
  title2: {
    fontSize: '1.5rem',
    fontFamily: 'Sora',
    fontWeight: 700
  },
  title3: {
    fontSize: '1.2rem',
    fontFamily: 'Sora',
    fontWeight: 800
  },
  solidBtn: {
    backgroundColor: '#10BD82',
    color: '#fff',
    marginTop: '10%',
    fontSize: '1.2rem',
    padding: '3%',
    fontFamily: 'Sora'
  },
  solidBtn2: {
    backgroundColor: '#10BD82',
    color: '#fff',
    marginTop: '10%',
    fontSize: '1.2rem',
    padding: '3% 5%',
    fontFamily: 'Sora'
  },
  loginBtn: {
    color: '#20A46B',
    fontSize: '1.2rem',
    fontFamily: 'Sora'
  },
  error: {
    color: 'red',
    margin: 0,
    fontStyle: 'italic'
  },
  card: {
    backgroundColor: 'rgba(19,225,155, 0.25)',
    marginBottom: '5%'
  },
  card2: {
    backgroundColor: 'rgba(19,225,155, 0.1)',
    marginBottom: '5%'
  },
  card3: {
    backgroundColor: 'rgba(19,225,155,0.1)',
    textAlign: 'center',
    padding: '2%',
    marginTop: '5%'
  },
  links: {
    fontSize: '1rem',
    fontFamily: 'Sora',
    padding: '2%',
    margin: '2%'
  },
  link1: {
    fontFamily: 'Sora',
    color: '#10BD82',
    fontWeight: 600
  },
  myListBtn: {
    marginLeft: 230,
    marginTop: 10
  },
  modalBtn: {
    color: '#10BD82',
    marginLeft: 210,
    fontFamily: 'Sora',
    fontWeight: 600
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    padding: '2%',
    borderRadius: '10px'
  },
  span: {
    color: '#037041',
    fontStyle: 'italic',
    fontWeight: 900,
    padding: 10,
    fontFamily: 'Sora',
  },
  spanDivs: {
    marginBottom: 10
  },
  inputForm: {
    marginTop: 40,
    '& .MuiTextField-root': {
      width: '28ch',
      margin: theme.spacing(1)
    }
  },
  input: {
    marginBottom: 20
  },
  gridStyle: {
    height: 400,
    paddingBottom: 70
  },
  formSpan: {
    fontStyle: 'italic',
    fontWeight: 800,
    fontFamily: 'Sora',
    color: '#10BD82',
  },
  alignLeft: {
    textAlign: 'left'
  },
  spanDivs2: {
    margin: '7% auto'
  },
  riderCard: {
    marginBottom: '3%',
    justifyContent: 'space-between',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  riderInfoDiv: {
    width: '110%'
  },
  riderInfo: {
    fontSize: '0.9rem',
    fontFamily: 'Sora',
    backgroundColor: 'transparent'
  },
  mapBtnDiv: {
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    color: '#fff'
  }
}));