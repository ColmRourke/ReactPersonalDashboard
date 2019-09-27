import React from 'react'
import TreeAnimation from '../../Logos/LoginTree.svg'
import '../../css/LoginForm.css';
import '../../css/treeLogo.css'
import { makeStyles } from '@material-ui/core/styles';
//import components from material
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '80%',
      },
      dense: {
        marginTop: 19,
      }
  }));

  
function LoginForm ()  {


    const [values, setValues] = React.useState({
        username: '',
        password: '',
      });

        const classes = useStyles();

        const handleChange = name => event => {
            setValues({ ...values, [name]: event.target.value });
          };

        return (
            <div className="outer-container">
        
                <Container maxWidth="sm" style={
                    {backgroundColor:'white',
                     padding:'10px',
                     borderRadius:'4px'
                    }
                    }>
                <form noValidate autoComplete="off">

                <div className="container">
                    <img src={TreeAnimation}/>
                </div>

                <TextField
                    required
                    id="username"
                    label="Username"
                    className={classes.textField}
                    value={values.username}
                    onChange={handleChange('username')}
                    margin="normal"
                />
                
                <TextField
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />    
                <br />
                <Button color="primary" size="medium" className={classes.margin}>
                     Sign In
                </Button>
                    </form>
                    </Container>
            </div>
        )
    }
export default LoginForm;
