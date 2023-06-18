import { Box, Button, Stack } from "@mui/material";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SwiperButtonNext = ({ children }) => {
   const swiper = useSwiper();
   return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

const SwiperButtonPrv = ({ children }) => {
   const swiper = useSwiper();
   return (
      <button style={{ padding: 10 }} onClick={() => swiper.slidePrev()}>
         {children}
      </button>
   );
};
export default function Slider() {
   return (
      <Swiper
         modules={[Navigation]}
         slidesPerView={5}
         spaceBetween={150}
         // navigation
         onSlideChange={() => console.log("slide change")}
         onSwiper={(swiper) => console.log(swiper)}
         // breakpoints={{
         //    // when window width is >= 640px

         //    768: {
         //       width: 100,
         //       slidesPerView: 1,
         //       spaceBetween: 10,
         //       centeredSlides: true,
         //    },
         //    // when window width is >= 768px

         //    1440: {
         //       width: 500,
         //       slidesPerView: 5,
         //    },
         // }}
         style={{
            margin: 10,
            width: "800px",
         }}
      >
         <Stack>
            <SwiperButtonPrv>prev</SwiperButtonPrv>

            <SwiperSlide>
               <Button
                  sx={{ width: 146, height: 50 }}
                  variant="contained"
                  color="primary"
               >
                  Workspace - 1
               </Button>
            </SwiperSlide>
            <SwiperSlide>
               <Button
                  sx={{ width: 146, height: 50 }}
                  variant="contained"
                  color="primary"
               >
                  Workspace - 2
               </Button>
            </SwiperSlide>
            <SwiperSlide>
               <Button
                  sx={{ width: 146, height: 50 }}
                  variant="contained"
                  color="primary"
               >
                  Workspace - 3
               </Button>
            </SwiperSlide>
            <SwiperSlide>
               <Button
                  sx={{ width: 146, height: 50 }}
                  variant="contained"
                  color="primary"
               >
                  Workspace - 4
               </Button>
            </SwiperSlide>
            <SwiperSlide>
               <Button
                  sx={{ width: 146, height: 50 }}
                  variant="contained"
                  color="primary"
               >
                  Workspace - 5
               </Button>
            </SwiperSlide>
            <SwiperSlide>
               <Button
                  sx={{ width: 146, height: 50 }}
                  variant="contained"
                  color="primary"
               >
                  Workspace - 6
               </Button>
            </SwiperSlide>
            <SwiperSlide>
               <Button
                  sx={{ width: 146, height: 50 }}
                  variant="contained"
                  color="primary"
               >
                  Workspace - 7
               </Button>
            </SwiperSlide>
            <SwiperSlide>
               <Button
                  sx={{ width: 146, height: 50 }}
                  variant="contained"
                  color="primary"
               >
                  Workspace - 8
               </Button>
            </SwiperSlide>
            <SwiperSlide>
               <Button
                  sx={{ width: 146, height: 50 }}
                  variant="contained"
                  color="primary"
               >
                  Workspace - 9
               </Button>
            </SwiperSlide>
            <SwiperSlide>
               <Button
                  sx={{ width: 146, height: 50 }}
                  variant="contained"
                  color="primary"
               >
                  Workspace - 10
               </Button>
            </SwiperSlide>

            <SwiperButtonNext>Next</SwiperButtonNext>
         </Stack>
      </Swiper>
   );
}
