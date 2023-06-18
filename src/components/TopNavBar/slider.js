import { Box, IconButton, Stack, Button, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// Import Swiper styles
import "swiper/swiper.min.css";

const AppIconButton = styled(IconButton)(({ theme }) => ({
   backgroundColor: theme.palette.background.light,
   borderRadius: 5,
   margin: 10,
   padding: 4,
   color: theme.palette.primary.dark,
   "&:hover": {
      border: 2,
      // border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
   },
}));
const NextButton = () => {
   const swiper = useSwiper();
   return (
      <AppIconButton onClick={() => swiper?.slideNext()}>
         {" "}
         <ArrowForwardIosIcon />
      </AppIconButton>
   );
};

const PrevButton = () => {
   const swiper = useSwiper();
   return (
      <AppIconButton onClick={() => swiper?.slidePrev()}>
         <ArrowBackIosNewIcon />
      </AppIconButton>
   );
};
export default function Slider() {
   const theme = useTheme();
   return (
      <div style={{ display: "flex" }}>
         <PrevButton />
         <Swiper
            modules={[Navigation]}
            slidesPerView={7}
            spaceBetween={5}
            // navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{}}
            style={{
               margin: 2,
               maxWidth: 1050,
            }}
         >
            {Data.map((d) => (
               <SwiperSlide key={d.id}>
                  <Button
                     sx={{
                        width: 146,
                        height: 50,
                        fontSize: 16,
                        "&:focus": {
                           border: `2px solid ${theme.palette.info.main}`,
                        },
                     }}
                     variant="contained"
                     color="primary"
                  >
                     {d.title}
                  </Button>
               </SwiperSlide>
            ))}
         </Swiper>
         <NextButton />
      </div>
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
];
