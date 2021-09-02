import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 375,
    height: 770,
    borderColor: '#ECECEC',
    borderStyle: 'solid',
    overflowX: 'scroll',
    marginBottom: 25,
    padding: 0
  },
  div: {
    width: '100vw',
    maxWidth: '100vw',
    padding: '0',
    height: '100vh'
  },

  header: {
    backgroundColor: '#20A46B'
  },
  headerTitle: {
    margin: '0',
    padding: '2%',
  },
  footer: {
    width: '100vw',
    maxWidth: '100vw',
    backgroundColor: '#3F3F3F',
    padding: '2% 2% 5% 2%',
    textAlign: 'center',
    color: '#fff'
  },
  form: {
    padding: '5% 5% 2% 5%',
    margin: '2% auto',
    borderRadius: '25px',
    boxShadow: '0px 5px 22px 0px rgba(0,0,0,0.65)'
  },
  title: {
    fontSize: '2.2rem'
  },
  signupBtn: {
    backgroundColor: '#20A46B',
    color: '#fff',
    marginTop: '10%',
    fontSize: '1.2rem',
    padding: '5%'
  },
  returningContainer: {
    marginTop: '20%'
  },
  loginBtn: {
    color: '#20A46B',
    fontSize: '1.2rem'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  },
  link2: {
    color: '#20A46B',
    textDecoration: 'none'
  },
  card: {
    padding: '6%',
    margin: '15% auto',
    borderRadius: '25px',
    boxShadow: '0px 5px 22px 0px rgba(0,0,0,0.65)',
    display: 'flex',
    flexDirection: 'column'
  },
  createButton: {
    padding: '6%',
    backgroundColor: '#20A46B',
    color: '#fff',
    marginBottom: '10%'
  },
  attendButton: {
    padding: '6%',
    backgroundColor: '#20A46B',
    color: '#fff',
    marginTop: '10%'
  },
  link: {
    color: '#fff',
    fontSize: '1.1rem',
    textDecoration: 'none'
  },
  createButton2: {
    width: '80%',
    margin: 'auto',
    padding: '6%',
    backgroundColor: '#20A46B',
    color: '#fff',
    // marginTop: '10%',
    marginTop: '40%'
  },
  attendButton2: {
    width: '80%',
    margin: 'auto',
    padding: '6%',
    backgroundColor: '#20A46B',
    color: '#fff',
    marginTop: '10%'
  },
  returning_form: {
    padding: '5%',
    margin: '13% auto',
    // margin: '53% auto',
    borderRadius: '25px',
    boxShadow: '0px 5px 22px 0px rgba(0,0,0,0.65)'
  },
  returning_button: {
    backgroundColor: '#20A46B',
    color: '#fff',
    marginTop: '10%',
    fontSize: '1.2rem',
    padding: '5%'
  },
  returning_link: {
    color: '#fff',
    textDecoration: 'none'
  }

}));