import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialsComponent.scss';
import ReactRating from 'react-rating';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const TestimonialsComponent = () => {

  const Testimonials = [
    {
        name: "John D.",
        id: 1,
        currentcity: "London",
        rate: 4.5,
        text: "This website is amazing! The customizable homes on Mars are beyond my imagination. The endless options to make my dream home a reality left me in awe. Highly recommended!"
    },
    {
        name: "Sarah W.",
        id: 2,
        currentcity: "Sidney",
        rate: 4.2,
        text: "I was hesitant at first to use this website, but I'm so glad I did. The process was smooth and I was able to create the perfect home for my family on the red planet."
    },
    {
        name: "Miquel P.",
        id: 3,
        currentcity: "Barcelona",
        rate: 5,
        text: "This website exceeded my expectations. The form was user-friendly and I was able to create a unique and personalized home on Mars. Highly recommend!"
    },
    {
        name: "Berta R.",
        id: 4,
        currentcity: "Madrid",
        rate: 4.8,
        text: "I had a great experience using this website to customize my favorite Martian home. The form was straightforward and I was able to make changes easily. Thank you!"
    },
    {
        name: "Anna W.",
        id: 5,
        currentcity: "Ciudad del Cabo",
        rate: 5,
        text: "Choosing a house on Mars and customizing it to my liking was such a fun and unique experience. The futuristic design and technology are incredible."
    },
    {
        name: "Yui N.",
        id: 6,
        currentcity: "Kioto",
        rate: 4.3,
        text: "As a lover of all things futuristic and innovative, I was immediately drawn to the homes on Mars.  I can't wait to show off my new Martian home to my friends and family."
    },
]

      return (
      <div className="Container PageRegularPadding">
      <h2 className='centerText'>What are people saying about us?</h2>
      <div className='TestimonialsComponent'>
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper-wrapper"
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 3,
          }
        }}
      >
          {Testimonials.map(t => {
            return (
              <SwiperSlide key={t.id}>
              <div className='TestimonialCard'>
                <h4>{t.name}</h4>
                <p>{t.currentcity}</p>
                <ReactRating
                  initialRating={t.rate}
                  emptySymbol={<FaStar />}
                  fullSymbol={<FaStar fill="#B26ADC" />}
                  fractions={2}
                  readonly
                /> <span>({t.rate})</span>
                <p>{t.text}</p>
              </div>
              </SwiperSlide>
            )
          })}
      </Swiper>
        </div>
        </div>)
      };

TestimonialsComponent.propTypes = {};

TestimonialsComponent.defaultProps = {};

export default TestimonialsComponent;
