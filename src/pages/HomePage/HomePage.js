import NasaPictureDayComponent from "../../components/NasaPictureDayComponent/NasaPictureDayComponent";
import MarsWeatherComponent from "../../components/MarsWeatherComponent/MarsWeatherComponent";
import TestimonialsComponent from "../../components/TestimonialsComponent/TestimonialsComponent";
import MarsImagesComponent from "../../components/MarsImagesComponent/MarsImagesComponent";

export default function HomePage() {
    return (
        <div className="Container PageRegularPadding">
            <h1>Home page</h1>
            <NasaPictureDayComponent></NasaPictureDayComponent>
            <MarsWeatherComponent></MarsWeatherComponent>
            <TestimonialsComponent></TestimonialsComponent>
            <MarsImagesComponent></MarsImagesComponent>
        </div>
    )
}