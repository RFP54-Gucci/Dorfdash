import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    padding:'0',
    maxWidth: 375,
    height: '100%',
    borderColor: '#ECECEC',
    borderStyle: 'solid',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#20A46B',
    color: 'white',
  },
  buttonContainer:{
    marginTop:'2rem',
    display: 'grid',
    gridTemplateRows: '3rem 3rem',
    gridGap: '1rem',
  },
  mapContainer: {
    height: '45vh', width: '100%',
  },
}));