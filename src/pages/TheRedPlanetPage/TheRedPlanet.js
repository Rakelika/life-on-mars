import MarsImagesComponent from "../../components/MarsImagesComponent/MarsImagesComponent";
import './TheRedPlanetPage.scss';

export default function TheRedPlanet() {
    
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

    return (
        <>
        <header className='MarsBanner centerText'>
            <div className='BannerTitles'>
                <h1>Mars, the planet that could be your next home</h1>
                <h2>Welcome to the Red Planet</h2>
            </div>
        </header>
        <section className='MarsSection'>
            <h2>{MarsInfo.hero}</h2>
                    {MarsInfo.info.map(info =>{
                        return (
                        <article className='MarsInfo' key={info.title}>
                            <h4>{info.title}</h4>
                            <p>{info.text}</p>
                        </article>
                        )
                    })}
        </section>
            <MarsImagesComponent></MarsImagesComponent>
        </>
    )
}

