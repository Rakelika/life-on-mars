import PicturesNasaComponent from "../../components/PicturesNasaComponent/PicturesNasaComponent";
import MarsWeatherComponent from "../../components/MarsWeatherComponent/MarsWeatherComponent";
import TestimonialsComponent from "../../components/TestimonialsComponent/TestimonialsComponent";

export default function HomePage() {
    return (
        <div className="Container PageRegularPadding">
            <h1>Home page</h1>
            <PicturesNasaComponent></PicturesNasaComponent>
            <MarsWeatherComponent></MarsWeatherComponent>
            <TestimonialsComponent></TestimonialsComponent>
        </div>
    )
}