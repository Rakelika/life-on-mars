import MarsWeatherComponent from "../../components/MarsWeatherComponent/MarsWeatherComponent";
import TestimonialsComponent from "../../components/TestimonialsComponent/TestimonialsComponent";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import HowToUseComponent from "../../components/HowToUseComponent/HowToUseComponent";

export default function HomePage() {
    return (
        <div className="">
            <HeroComponent></HeroComponent>
            <HowToUseComponent></HowToUseComponent>
            <MarsWeatherComponent></MarsWeatherComponent> 
            <TestimonialsComponent></TestimonialsComponent>
        </div>
    )
}