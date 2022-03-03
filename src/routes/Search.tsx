import { Box, FormControl, Grid, InputLabel, Stack } from '@mui/material';
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { fetchCards, fetchCardByName, fetchByElement } from '../app/api'

import { CardElement } from '../types/enums';
import '../styles/search.scss';
import { black, red, green, blue, white } from '../helpers/elementImports'
import { Select } from '@mui/material';


const slider = require('../asset/images/slider.png')

const Search = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState<any>();
  const [selectedCardElements, setSelectedCardElements] = useState<CardElement[]>([]);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  }

  const toggleCardElements = (elem: CardElement) => {
    if (selectedCardElements.includes(elem)) {
      setSelectedCardElements(prev => prev.filter(item => {return item !== elem}))
      return
    }
    setSelectedCardElements(prev => [...prev, elem]);
  }

  useEffect(() => {
    const initCards = async () => {
      setCards(await fetchByElement(selectedCardElements));
    };
    initCards();
  }, [selectedCardElements])

  console.log(cards);

  return (<>
    <div className="slider-wrapper" style={isOpen ? { transform: "translateX(270px)" } : undefined}>
      <Box className="slider-box">
        <Box className="filter-element">
          <div className='filter-label'>ELEMENTS</div>
          <Stack 
            spacing={1} 
            direction="row" 
            className="filter-element-buttons"
          >
            <img src={black} onClick={() => toggleCardElements(CardElement.Black)} style={selectedCardElements.includes(CardElement.Black) ? {opacity: 1} : undefined}/>
            <img src={red} onClick={() => toggleCardElements(CardElement.Red)} style={selectedCardElements.includes(CardElement.Red) ? {opacity: 1} : undefined}/>
            <img src={blue} onClick={() => toggleCardElements(CardElement.Blue)} style={selectedCardElements.includes(CardElement.Blue) ? {opacity: 1} : undefined}/>
            <img src={white} onClick={() => toggleCardElements(CardElement.White)} style={selectedCardElements.includes(CardElement.White) ? {opacity: 1} : undefined}/>
            <img src={green} onClick={() => toggleCardElements(CardElement.Green)} style={selectedCardElements.includes(CardElement.Green) ? {opacity: 1} : undefined}/>
          </Stack>
          <FormControl className="filter-form">
            <InputLabel id='supertype-label'><span className='filter-select-label'>SUPERTYPE</span></InputLabel>
            <Select 
              className='select'
              labelId ='supertype-labe'
              id='supertype'
              value={''}
              label='SUPERTYPE'
              MenuProps={{ disableScrollLock: true }}
            >
            </Select>
          </FormControl>
        </Box>
      </Box>
      <img src={slider} className="slider" onClick={toggleFilter} style={isOpen ? { transform: "rotate(180deg)" } : undefined}></img>
    </div>
    <Grid container sx={{ paddingX: "20vw", paddingY: "250px" }} spacing={8} justifyContent="center">{
      cards?.data.slice(0, 25).map((card: any) => {
        if (card.hasOwnProperty('image_uris')) {
          return <Grid item key={card.id}><img className="card-img" src={card.image_uris.png} alt="" /></Grid>
        }
      })}
    </Grid>
  </>
  )
}

export default Search