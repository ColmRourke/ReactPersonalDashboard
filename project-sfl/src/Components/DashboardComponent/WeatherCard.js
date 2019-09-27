import React, {useState, useEffect} from 'react'
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import Location from "@material-ui/icons/Room";
import Sun from "@material-ui/icons/WbSunny";
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
    const [temperature, setTemperature] = useState('unknown')
    const [currentSummary, setCurrentSummary] = useState('unknown')
    const [hourSummary, setHourSummary] = useState('unknown')
    const [ozone, setOzone] = useState('unknown')
    const [checked, setChecked] = useState(false);


    const gettingWeather = () => {
        if(apiFlag){
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/13c96754acee74aa030e02c191bfacb1/53.2720,-7.8279?units=si`)
            .then(res => {
                setCurrentSummary(res.data.currently.summary);
                setTemperature(res.data.currently.temperature);
                setHourSummary(res.data.hourly.summary);
                setOzone(res.data.currently.ozone)
                apiFlag = false
                console.log(res)
            })
            .catch(err => console.log(err))
        }
    }

    const handleChange = () => {
        setChecked(prev => !prev);
      };

    useEffect(() => gettingWeather())

    return (

            <GridItem xs={12} sm={6} md={3} onClick={handleChange}>
              <Card>
                <CardHeader color="warning" stats icon>
                  <CardIcon color="warning">
                    <Sun />
                  </CardIcon>
                  <p className={classes.cardCategory}>Temperature</p>
                  <h3 className={classes.cardTitle}>{temperature}°C</h3>
                </CardHeader>
                <Collapse in={checked}>
                    <CardBody>
                        <p className={classes.cardCategory}>Current Summary: {currentSummary}</p>
                        <p className={classes.cardCategory}>Hourly Summary: {hourSummary}</p>
                        <p className={classes.cardCategory}>Ozone: {ozone}</p>
                    </CardBody>
                </Collapse>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Location />
                    Ferbane Temperature
                  </div>
                </CardFooter>
              </Card>
            </GridItem> 

    )
}
