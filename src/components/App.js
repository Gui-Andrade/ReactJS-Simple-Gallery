import React from 'react';
import Header from './Header';
import exampleImages from '../exampleImages';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      gallery: 'galleryExample2',
      exampleImages: exampleImages
    }
  }

  componentDidMount(){

		var controls = document.querySelectorAll('.controls');
		for(var i=0; i<controls.length; i++){
			controls[i].style.display = 'inline-block';
		}

		var slides = document.querySelectorAll('#slides .slide');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide,3000);

		function nextSlide(){
			goToSlide(currentSlide+1);
		}

		function previousSlide(){
			goToSlide(currentSlide-1);
		}

		function goToSlide(n){
			slides[currentSlide].className = 'slide';
			currentSlide = (n+slides.length)%slides.length;
			slides[currentSlide].className = 'slide showing';
		}

		var playing = true;

		function pauseSlideshow(){
			playing = false;
			clearInterval(slideInterval);
		}

		function playSlideshow(){
			playing = true;
			slideInterval = setInterval(nextSlide,3000);
		}

		var next = document.getElementById('next');
		var previous = document.getElementById('previous');

		next.onclick = function(){
			pauseSlideshow();
			nextSlide();
		};
		previous.onclick = function(){
			pauseSlideshow();
			previousSlide();
		};


    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      // alert('keydown event\n\n' + 'key: ' + keyName);
      if (event.key === "ArrowLeft") {
        pauseSlideshow();
  			previousSlide();
      } else if (event.key === "ArrowRight") {
        pauseSlideshow();
  			nextSlide();
      }
    });


	}

  render(){

    const galleryId = this.state.gallery;
    const gallery = this.state.exampleImages[galleryId];

    const picture =
			gallery.imagesURL.map(function(imageURL, index){
        return (
					<li key={ index } className={index === 0 ? 'slide showing' : 'slide'}>
						<img src={imageURL} alt={name} />
					</li>
				);
      })

    return (
        <main>

          <Header />

          <section className="clearfix">
            <h2>Usage:</h2>

            <p>
              This is a basic component level Gallery.
            </p>

          </section>

          <div className="gallery-container">

            <ul id="slides" className="flex-item">
              {picture}
            </ul>

            <div className="buttons-container flex-item">
              <button className="controls" id="previous">&lt;</button>
              <button className="controls" id="next">&gt;</button>
            </div>

          </div>

        </main>
    )
  }

}

export default App;
