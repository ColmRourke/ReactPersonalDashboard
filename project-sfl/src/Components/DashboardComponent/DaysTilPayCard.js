import React, {useState, useEffect} from 'react'
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import DateRange from "@material-ui/icons/DateRange";
import Euro from "@material-ui/icons/Euro";
import GridItem from "../../Components/Grid/GridItem.js";
import Card from "../../Components/Card/Card.js";
import CardHeader from "../../Components/Card/CardHeader.js";
import CardIcon from "../../Components/Card/CardIcon.js";
import CardFooter from "../../Components/Card/CardFooter.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
export default function Dashboard() {
    const classes = useStyles();

    /*
      Count down to next pay day
     */
    const [daysTilPay, setDaysTilPay] = useState(0);

    const nextPayDay = () => {
      let date = new Date();
      let payDate = new Date()
      payDate.setDate(28);

      //if payday is past the 28, the next payday is in the following month
      if(date.getDate() > 28)
        payDate.setMonth(date.getMonth() + 1)

      //if Payday is a sat or sun then subtract 1 or 2 days respectively
      if(payDate.getDay() === 0)
        payDate.setDate(26)
      else if (payDate.getDay() === 6){
        payDate.setDate(27)
      }
        
      let DifferenceInDateByDays = (payDate.getTime() - date.getTime())/(1000 * 3600 * 24)

      setDaysTilPay(DifferenceInDateByDays);
    }

    // call function on load
    useEffect(() => nextPayDay())

    return (

            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="success" stats icon>
                  <CardIcon color="success">
                    <Euro />
                  </CardIcon>
                  <p className={classes.cardCategory}>Days Until Pay</p>
                  <h3 className={classes.cardTitle}>{daysTilPay}</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <DateRange />
                    Updated Since Login
                  </div>
                </CardFooter>
              </Card>
            </GridItem> 

    )
}
