import React, {useState, useEffect} from 'react'
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import Bank from "@material-ui/icons/AccountBalance";
import Dollar from "@material-ui/icons/AttachMoney";
import TextField from '@material-ui/core/TextField';
import GridItem from "../../Components/Grid/GridItem.js";
import Card from "../../Components/Card/Card.js";
import CardHeader from "../../Components/Card/CardHeader.js";
import CardIcon from "../../Components/Card/CardIcon.js";
import CardFooter from "../../Components/Card/CardFooter.js";
import CardBody from "../../Components/Card/CardBody.js";
import axios from 'axios'


import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
let apiFlag = true


export default function Dashboard() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [rates, setRates] = useState({"GBP":0, "USD":0});
    const [values, setValues] = React.useState({
        pounds: '0',
        euro: '0'
      });
    const [exhangeRateResult, setExhangeRateResult] = useState(0)
    

    const gettingExchangeRate = () => {
        if(apiFlag){
            axios.get(`https://api.exchangeratesapi.io/latest`)
            .then(res => {
                setRates(res.data.rates)
                apiFlag = false;
                updateExhangeRateValue(values.pounds)
            })
            .catch(err => console.log(err))
        }
        else{
            updateExhangeRateValue(values.pounds)
        }
    }

    const handleChange = () => {
        setChecked(prev => !prev);
      };
      
      const handleChangeExchange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      };

      const updateExhangeRateValue = (pounds) => {
        setExhangeRateResult(pounds *  ( 2 - rates.GBP ))
      }

    useEffect(() => {
        gettingExchangeRate()
    })

    return (
            <GridItem xs={12} sm={6} md={3} >
              <Card>
                <CardHeader color="info" stats icon onClick={handleChange}>
                  <CardIcon color="info">
                    <Dollar />
                  </CardIcon>
                  <p className={classes.cardCategory}>Exhange Rate</p>
                  <h3 className={classes.cardTitle}>GBP : {rates.GBP}</h3>
                  <h3 className={classes.cardTitle}>USD : {rates.USD}</h3>
                </CardHeader>
                <Collapse in={checked}>
                    <CardBody>
                    
                    <TextField
                        id="outlined-number"
                        label="£"
                        value={values.pounds}
                        onChange={handleChangeExchange('pounds')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />

                    <h3 className={classes.cardTitle}>{exhangeRateResult}</h3>
                    </CardBody>
                </Collapse>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Bank />
                    Open Rates
                  </div>
                </CardFooter>
              </Card>
            </GridItem> 
    )
}
