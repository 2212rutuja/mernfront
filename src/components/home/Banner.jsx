import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';


const Image = styled('img')(({theme})=>({
    width:'100%',
    height:'280px',
    [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:'180px'
    }
    
}))

export default function Banner() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1 
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000} 
    keyBoardControl={true}
    slidesToSlide={1}
    transitionDuration={500}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    shouldAutoScroll= {true}
    >
  {
    bannerData.map(data => {
      return (
        <Image src={data.url} alt="banner" />
      )
    })
  }
</Carousel>
  )
}
