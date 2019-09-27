import React, {useState, useEffect} from 'react'
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import Retrieved from "@material-ui/icons/GetApp";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import GridItem from "../../Components/Grid/GridItem.js";
import Card from "../../Components/Card/Card.js";
import CardHeader from "../../Components/Card/CardHeader.js";
import CardIcon from "../../Components/Card/CardIcon.js";
import CardFooter from "../../Components/Card/CardFooter.js";
import CardBody from "../../Components/Card/CardBody.js";
import axios from 'axios'


import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
let apiFlag = true;

export default function Dashboard() {
    
    const classes = useStyles();
    const [chartTopper, setChartTopper] = useState([{"track":{"artist_name":"unknown","track_name":"unknown","track_id":0}}])
    const [checked, setChecked] = useState(false);

    const gettingChartTopper = () => {
        if(apiFlag){
            axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=ie&f_has_lyrics=1&apikey=50608670a12a2d630774b10327411a21`)        
            .then(res => { 
                console.log(res)
                apiFlag = false
            setChartTopper(res.data.message.body.track_list)    
        }
            )
        .catch(err => console.log(err))
        }
    }

    const handleChange = () => {
        setChecked(prev => !prev);
      };
    
    
      useEffect(() => gettingChartTopper())

    return (

            <GridItem xs={12} sm={6} md={3} onClick={handleChange}>
              <Card>
                <CardHeader color="danger" stats icon>
                  <CardIcon color="danger">
                    <MusicNoteIcon />
                  </CardIcon>
                  <p className={classes.cardCategory}>Charts</p>
                  <h3 className={classes.cardTitle}>{chartTopper[0].track.artist_name}</h3>
                  <h3 className={classes.cardTitle}>{chartTopper[0].track.track_name}</h3>
                </CardHeader>
                <Collapse in={checked}>
                    <CardBody>
                    {chartTopper.map(item => (
                        <p key={item.track.track_id} className={classes.cardCategory}>{item.track.artist_name} : {item.track.track_name}</p>
                    ))}
                        
                        
                    </CardBody>
                </Collapse>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Retrieved />
                    Obtained By MusixMatch
                  </div>
                </CardFooter>
              </Card>
            </GridItem> 

    )
}
