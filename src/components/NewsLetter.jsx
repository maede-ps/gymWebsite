import image from '../Images/nutrition.jpg'

import { HiNewspaper } from 'react-icons/hi'
import SectionHeader from './SectionHeader'
import { newsLetters } from '../data'
import NewsItem from './NewsItem'

function NewsLetter() {

    const galleryLength = 4;
    const images = [];

    for (let i = 2; i <= galleryLength; i++) {
        images.push(require(`../Images/nutrition${i}.jpg`))
    }
    console.log(images);

    return (
        <section className="newsLetter">
            <div className="container">
                <SectionHeader icon={<HiNewspaper />} title="NewsLetters" />
                {/* <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsum?
                    Harum, magnam voluptatibus iure velit maiores maxime sapiente sunt nesciunt?
                </p> */}
                <div className="newsContainer">
                    {/* <div className="newsBanner">
                        <img src={image} alt="News Banner" />
                        <h3>HEALTHY FOOD</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, reiciendis.
                            Quos ducimus cupiditate aperiam exercitationem nesciunt, cumque ratione architecto saepe?
                            Dicta dignissimos repellat harum saepe fugit, possimus sunt id ducimus.
                        </p>
                    </div> */}

                    <div className="newsItems">
                        {
                            newsLetters.map(({ id, group, title, content, image }) => {
                                return <NewsItem key={id} group={group} title={title} content={content} image={image} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter