import React from "react";
import { useRef } from "react";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//MUI components
import { IconButton, Button, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";
// Swiper styles
import "swiper/swiper.min.css";

const NavigationButton = styled(IconButton)(({ theme }) => ({
   backgroundColor: theme.palette.background.light,
   borderRadius: 5,
   margin: 10,
   padding: 4,
   color: theme.palette.primary.dark,
   "&:hover": {
      border: 2,
      color: theme.palette.primary.main,
   },
}));

const WorkStation = styled(Button)(({ theme }) => ({
   width: 146,
   height: 50,
   fontSize: 16,
   color: theme.palette.common.white,
   backgroundColor: theme.palette.primary.main,
   "&:hover": {
      color: theme.palette.primary.main,
   },
   "&:focus": {
      border: `2px solid ${theme.palette.info.main}`,
   },
}));

const ArrowForwardIosIcon = styled(ArrowForwardIos)(({ theme }) => ({
   color: theme.palette.secondary.dark,
}));

const ArrowBackIosNewIcon = styled(ArrowBackIosNew)(({ theme }) => ({
   color: theme.palette.secondary.dark,
}));

const SliderContainer = styled("div")(({ theme }) => ({
   width: "60%",
   display: "flex",
   [theme.breakpoints.down("laptop")]: {
      display: "none",
   },
}));

export default function Slider() {
   const swiperRef = useRef();

   const BreakPoints = {
      768: {
         slidesPerView: 1,
         spaceBetween: 8,
         centeredSlides: true,
      },
      1440: {
         slidesPerView: 4,
         spaceBetween: 8,
      },
      1620: {
         slidesPerView: 6,
         spaceBetween: 20,
      },
      2560: {
         slidesPerView: 8,
         spaceBetween: 10,
      },
   };

   return (
      <SliderContainer>
         <NavigationButton onClick={() => swiperRef.current.slidePrev()}>
            <ArrowBackIosNewIcon />
         </NavigationButton>
         <Swiper
            modules={[Navigation, FreeMode]}
            slidesPerView={1}
            spaceBetween={1}
            grabCursor={true}
            centeredSlidesBounds={true}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
            breakpoints={BreakPoints}
            className="mySwiper"
         >
            {Data.map((d) => (
               <SwiperSlide key={d.id}>
                  <WorkStation>{d.title}</WorkStation>
               </SwiperSlide>
            ))}
         </Swiper>
         <NavigationButton onClick={() => swiperRef.current.slideNext()}>
            <ArrowForwardIosIcon />
         </NavigationButton>
      </SliderContainer>
   );
}

const Data = [
   {
      id: 1,
      title: "Workspace 1",
   },
   {
      id: 2,
      title: "Workspace 2",
   },
   {
      id: 3,
      title: "Workspace 3",
   },
   {
      id: 4,
      title: "Workspace 4",
   },
   {
      id: 5,
      title: "Workspace 5",
   },
   {
      id: 6,
      title: "Workspace 6",
   },
   {
      id: 7,
      title: "Workspace 7",
   },
   {
      id: 8,
      title: "Workspace 8",
   },
   {
      id: 9,
      title: "Workspace 9",
   },
];
