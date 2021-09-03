import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    borderColor: '#ECECEC',
    borderStyle: 'solid',
    borderWidth:1,
    borderRadius:'2.5rem',
    padding:0,
    alignItems:'center',
    height:'45rem',
    maxHeight: '100%',
    overflow: 'hidden',
    width: '25rem'

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
    height: '20.3rem',
    width: '100%',
  },
}));