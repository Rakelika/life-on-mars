import NasaPictureDayComponent from "../../components/NasaPictureDayComponent/NasaPictureDayComponent";
import MarsWeatherComponent from "../../components/MarsWeatherComponent/MarsWeatherComponent";
import TestimonialsComponent from "../../components/TestimonialsComponent/TestimonialsComponent";
import MarsImagesComponent from "../../components/MarsImagesComponent/MarsImagesComponent";
import HeroComponent from "../../components/HeroComponent/HeroComponent";

export default function HomePage() {
    return (
        <div className="">
            <HeroComponent></HeroComponent>
            {/* <NasaPictureDayComponent></NasaPictureDayComponent>*/}
            <TestimonialsComponent></TestimonialsComponent>
            <MarsWeatherComponent></MarsWeatherComponent> 
            {/* <MarsImagesComponent></MarsImagesComponent> */}
        </div>
    )
}