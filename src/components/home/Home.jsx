import React from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box } from '@mui/material'
import {styled} from '@mui/material'
import { getProducts } from '../../redux/actions/produtActions'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'


const Component = styled(Box)({
    padding:'10px 10px;',
    background:'#f1f3f6'
})

export default function Home() {
  const {products}=  useSelector(state => state.getProducts)// this getProduct is  state seen in redud devtools from getProductReducer
  console.log(products)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getProducts()) // this getProduct is function from productAction
  },[dispatch]) //empty array is for componentDidMount
  return (
    <>
        <Navbar/>
        <Component>
            <Banner/>
            <MidSlide products={products} title='Deal Of The Day' timer={true}/>
            <MidSection/>
            <Slide products={products} title='Best Of Electronics' timer={false}/>
            <Slide products={products} title='Beauty, Food, Toys & more'timer={false}/>
            <Slide products={products} title='Sports, Healthcare & more'timer={false}/>
            <Slide products={products} title='Best Of Fashion' timer={false}/>
            <Slide products={products} title='Top Rated'timer={false}/>
            <Slide products={products} title='Home & Kitchen Essentials'timer={false}/>
            <Slide products={products} title='You May Also Like' timer={false}/>
            <Slide products={products} title='Suggested For You' timer={false}/>
            <Slide products={products} title='Grooming, Books, Auto & more' timer={false}/>
            <Slide products={products} title='Recommended Items' timer={false}/>

        </Component>
    </>
  )
}
