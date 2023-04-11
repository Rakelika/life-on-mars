import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialsComponent.scss';
import ReactRating from 'react-rating';
import { FaStar } from 'react-icons/fa';


const TestimonialsComponent = () => {

  const Testimonials = [
    {
        name: "John D.",
        currentcity: "London",
        rate: 4.5,
        text: "This website is amazing! The customizable homes on Mars are beyond my imagination. The attention to detail and the endless options to make my dream home a reality left me in awe. Highly recommended!"
    },
    {
        name: "Sarah W.",
        currentcity: "Sidney",
        rate: 4.2,
        text: "I was hesitant at first to use this website, but I'm so glad I did. The process was smooth and I was able to create the perfect home for my family on the red planet."
    },
    {
        name: "Miquel P.",
        currentcity: "Barcelona",
        rate: 5,
        text: "This website exceeded my expectations. The form was user-friendly and I was able to create a unique and personalized home on Mars. Highly recommend!"
    },
    {
        name: "Berta R.",
        currentcity: "Madrid",
        rate: 4.8,
        text: "I had a great experience using this website to customize my favorite Martian home. The form was straightforward and I was able to make changes easily. Thank you!"
    },
]

      return (
      <div className="TestimonialsComponent">
          TestimonialsComponent
          {Testimonials.map(t => {
            return (
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
            )
          })}
        </div>)
      };

TestimonialsComponent.propTypes = {};

TestimonialsComponent.defaultProps = {};

export default TestimonialsComponent;
