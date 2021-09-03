import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    maxWidth: 375,
    height: 770,
    borderColor: '#ECECEC',
    borderStyle: 'solid',
    marginBottom: 25,
  },
  header : {
    backgroundColor: '#20A46B',
    color:'white',
    fontSize:'2rem',
    height: '5rem',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

}));