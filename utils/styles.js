import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#c92e12',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#f5de15',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
    '& h1': {
      color: '#c92e12',
      marginLeft: 10,
      fontWeight: 'bold',
    },
    '& h2': {
      color: '#c92e12',
      marginLeft: 10,
      fontWeight: 'bold',
    },
    '& button': {
      backgroundColor: '#c92e12',
      color: '#ffffff',
      marginLeft: 10,
      fontWeight: 'bolder',
    },
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: '#c92e12',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
    color: '#ffffff',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
    '& a': {
      color: '#c92e12',
      marginLeft: 10,
    },
  },
  form: {
    maxWidth: 600,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  error: {
    color: '#f04040',
  },
});
export default useStyles;
