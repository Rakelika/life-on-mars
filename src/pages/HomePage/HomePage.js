import NasaPictureDayComponent from "../../components/NasaPictureDayComponent/NasaPictureDayComponent";
import MarsWeatherComponent from "../../components/MarsWeatherComponent/MarsWeatherComponent";
import TestimonialsComponent from "../../components/TestimonialsComponent/TestimonialsComponent";
import MarsImagesComponent from "../../components/MarsImagesComponent/MarsImagesComponent";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import HowToUseComponent from "../../components/HowToUseComponent/HowToUseComponent";

export default function HomePage() {
    return (
        <div className="">
            <HeroComponent></HeroComponent>
            <HowToUseComponent></HowToUseComponent>
            {/* <NasaPictureDayComponent></NasaPictureDayComponent>
            <MarsWeatherComponent></MarsWeatherComponent> */}
            <TestimonialsComponent></TestimonialsComponent>
            {/* <MarsImagesComponent></MarsImagesComponent> */}
        </div>
    )
}