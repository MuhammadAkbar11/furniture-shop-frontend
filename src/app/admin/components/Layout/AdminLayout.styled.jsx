import { IconButton, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const drawerWidth = 250;

export const MenuToggle = styled(IconButton)`
  height: max-content;
  svg {
    height: 20px;
    width: 20px;
  }

  ${({ theme }) => `
  margin-right: 1rem;
    ${theme.breakpoints.up('sm')} {
      display: none;
    }
  `}
`;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  appFixed: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px) !important`,
      marginLeft: drawerWidth,
    },
  },
  sidebar: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  sidebarLogoBox: {
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textTransform: 'uppercase',
    '& .title': {
      fontWeight: 'bold',
      fontSize: '2rem',
      color: theme.palette.primary.main,
    },
  },
  content: {
    width: '100%',
    overflowX: 'hidden',
    flexGrow: 1,
    position: 'relative',
    minHeight: '100vh',
    padding: theme.spacing(3),
    paddingTop: theme.spacing(4),
    backgroundColor: theme.palette.grey[100],
  },
  drawerPaper: {
    backgroundColor: theme.palette.grey[100],
    paddingTop: theme.spacing(1),
    width: drawerWidth,
    border: 0,
    borderRight: `0.5px solid ${theme.palette.grey[300]}`,
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    color: theme.palette.grey[700],
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  listItemIcon: {
    color: 'currentColor',
    height: 20,
    width: 20,
  },
  listItemText: {
    marginLeft: -5,
  },
}));

export default useStyles;
