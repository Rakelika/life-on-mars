import PicturesNasaComponent from "../../components/PicturesNasaComponent/PicturesNasaComponent";
import MarsWeatherComponent from "../../components/MarsWeatherComponent/MarsWeatherComponent";

export default function HomePage() {
    return (
        <div className="Container">
            <h1>Home page</h1>
            <PicturesNasaComponent></PicturesNasaComponent>
            <MarsWeatherComponent></MarsWeatherComponent>
        </div>
    )
}