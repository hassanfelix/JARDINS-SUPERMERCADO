import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    width: '100%',
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
  fullWith: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 600,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #c92e12 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: {
    marginTop: '1rem',
  },
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  iconButton: {
    backgroundColor: '#f5de15',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#c92e12',
    },
  },
}));
export default useStyles;
