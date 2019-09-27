import React, {useState, useEffect} from 'react'
import DaysTilPayCard from './DaysTilPayCard'
import WeatherCard from "./WeatherCard";
import MusicCard from "./MusicCard"
import ExchangeRateCard from "./ExhangeRateCard"
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../Components/Grid/GridContainer.js";

export default function Dashboard() {

    return (
        <div>
          <GridContainer>
            <DaysTilPayCard />
            <WeatherCard />
            <MusicCard />
            <ExchangeRateCard />
          </GridContainer>
        </div>
    )
}
