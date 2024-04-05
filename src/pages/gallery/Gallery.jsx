import image from '../../Images/image2.jpg'
import './Gallery.css'
import Header from '../../components/Header'

function Gallery() {

  const galleryLength =8;
  const images =[];

  for(let i =2;i<=galleryLength;i++){
    images.push(require(`../../Images/g${i}.jpg`))
  }
  return (
    <>
    <Header title="Our Gallery" image={image}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione!
      Optio, eum reprehenderit eveniet modi cumque voluptas nemo esse placeat?
    </Header>

    
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image,index)=>{
            return <article key={index}>
              <img src={image} alt={`Gallery image ${index+1}`}/>
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery