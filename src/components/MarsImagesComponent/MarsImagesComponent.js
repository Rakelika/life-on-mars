import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './MarsImagesComponent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMarsImages } from '../../store/nasa/actions';

const MarsImagesComponent = () => {

  const {marsImages, loadingMarsImages} = useSelector((state)=> state.NasaReducer);
  const dispatch = useDispatch()

  const MarsInfo = {
    hero: "Known as the fourth planet from the sun, Mars is a fascinating world that has long captured the imagination of scientists and space enthusiasts alike. Here are some facts to help you better understand the Red Planet:",
    info: [
        {
            title: "Exploring the rocky, desert-like terrain and features of Mars",
            text: "Mars is a rocky, desert-like planet that has a thin atmosphere and is covered in red dust. The planet's surface features include towering volcanoes, deep canyons, and a massive canyon system called Valles Marineris.",
        },
        {
            title: "Mars has a similar day length to Earth, but much longer year",
            text: "The length of a day on Mars is very similar to Earth's, at around 24.6 hours. However, the length of a year on Mars is much longer, at about 687 Earth days."
        },
        {
            title: "Olympus Mons: Mars' massive, towering volcano",
            text: "Mars is home to the largest volcano in the solar system, called Olympus Mons. It stands at a towering 22 kilometers (14 miles) high and covers an area roughly the size of Arizona.",
        },
        {
            title: "Evidence suggests Mars once had flowing water and thick atmosphere",
            text: "Scientists believe that Mars may have once had a thick atmosphere and even flowing water on its surface. Evidence of dried-up riverbeds, lakebeds, and minerals that form in the presence of water have been found on the planet's surface, suggesting that liquid water once flowed on Mars."
        },
        {
            title: "NASA's Mars rovers discover ancient microbial life evidence",
            text: "Several missions have been sent to explore Mars, including NASA's Mars rovers Curiosity and Perseverance. These rovers have made significant discoveries, including evidence of ancient microbial life on the planet."
        },
        {
          title: "Mars has extreme temperature variations due to its thin atmosphere",
          text: "Mars experiences extreme temperature variations due to its thin atmosphere. During the day, temperatures on Mars can reach as high as 20°C (68°F) near the equator, but can drop to as low as -73°C (-99°F) at night. In the winter, temperatures can drop to as low as -143°C (-225°F) near the poles."
      }
    ],
    close: "As we continue to learn more about Mars, there is no doubt that this fascinating planet will continue to capture our imaginations and inspire new discoveries about the universe we live in."
}

  useEffect(()=> {
    dispatch(getMarsImages())
  }, [])

  if (loadingMarsImages) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

    return (
    <div className="MarsImagesComponent">
    {marsImages && marsImages[12] && marsImages[12].img_src ? 
      <header style={{ backgroundImage: `url(${marsImages[12].img_src})` }} 
      className='MarsBanner'>
      <div className='BannerTitles'>
        <h1>The Red Planet</h1>
        <h2>Welcome to Mars</h2>
      </div>
      </header> : ""}
    <section className='Container'>
        <h2>{MarsInfo.hero}</h2>
    <div className="MarsSection">
      {MarsInfo.info.map(info =>{
        return (
          <article className='MarsInfo'>
            <h4>{info.title}</h4>
            <p>{info.text}</p>
          </article>
        )
      })}
      {marsImages && marsImages[0] && marsImages[0].camera ?
      <span>Exploring Mars: Stunning {marsImages[0].camera.full_name} 
      images captured by NASA's {marsImages[0].rover.name} on Earth Day {marsImages[0].earth_date}, 
      launched from Earth on {marsImages[0].rover.launch_date} and landed on Martian Soil on {marsImages[0].rover.landing_date}</span>
      : ""}
    </div>
    </section>
      <div className='MarsGallery'>
        {marsImages.slice(5,8).map(photo => {
          return (
            <div key={photo.id} className='MarsImage'>
            <img src={photo.img_src} alt={photo.id} />
            </div>
          )
        })}
      </div>
    <div className='MarsGallery'>
        {marsImages.slice(56, 59).map(photo => {
          return (
            <div key={photo.id} className='MarsImage'>
            <img src={photo.img_src} alt={photo.id} />
            </div>
          )
        })}
      </div>
    </div>
    )
};

MarsImagesComponent.propTypes = {};

MarsImagesComponent.defaultProps = {};

export default MarsImagesComponent;
