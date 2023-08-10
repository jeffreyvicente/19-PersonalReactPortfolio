import React from 'react';
import project1 from '../../assets/images/projectImages/projectScreenshot-1.png'
import project2 from '../../assets/images/projectImages/projectScreenshot-2.png'
import project3 from '../../assets/images/projectImages/projectScreenshot-3.png'
import project4 from '../../assets/images/projectImages/projectScreenshot-4.png'
import project5 from '../../assets/images/projectImages/projectScreenshot-5.png'
import project6 from '../../assets/images/projectImages/projectScreenshot-6.png'

export default function Protfolio() { 
    return (
        <div className='m-3'>
          <h3>Protfolio</h3>
          <div className="row p-5">
            <div className="col text-center d-flex">

              <div className="card flex-fill" style={{width: '30rem'}}>
                <img className="card-img-top" src={project1} alt='Nada' />
                <div className="card-body">
                  <h5 className="card-title">TextScribe</h5>
                  <p className="card-text">A text editor that runs in the browser as a Progressive Web Application (PWA).It allows users to create, edit, and manage text documents seamlessly. </p>
                  <a href="https://github.com/jeffreyvicente/19-TextScribe" class="btn btn-primary m-3">Github Repo</a>
                  <a href="https://textscribe-a44a925d489a.herokuapp.com/" class="btn btn-primary m-3">Project Demo</a>
                </div>
              </div>

            </div>
            <div class="col text-center d-flex">

              <div className="card flex-fill" style={{width: '30rem'}}>
                  <img className="card-img-top" src={project2} alt='Nada' />
                  <div className="card-body">
                    <h5 className="card-title">SVG Logo Maker Pro</h5>
                    <p className="card-text">This command-line application allows freelance web developers to generate simple logos for their projects without having to rely on a graphic designer. The application prompts the user for input regarding the logo's text, text color, shape, and shape color, and then generates an SVG file with the specified logo.</p>
                    <a href="https://github.com/jeffreyvicente/10-SVGLogoMaker" class="btn btn-primary m-3">Github Repo</a>
                    <a href="https://drive.google.com/file/d/1SMqJPa__R6CxKcBt9iLQQAAdYiRSFhGb/view" class="btn btn-primary m-3">Project Demo</a>
                  </div>
                </div>

            </div>
            <div class="col text-center d-flex">

              <div className="card flex-fill" style={{width: '30rem'}}>
                  <img className="card-img-top" src={project3} alt='Nada' />
                  <div className="card-body">
                    <h5 className="card-title">WeatherHub</h5>
                    <p className="card-text">The Travel Weather App is a web application that allows travelers to view the weather outlook for multiple cities. The app provides current and future weather conditions for searched cities and displays a 5-day forecast that includes temperature, wind speed, and humidity.</p>
                    <a href="https://github.com/jeffreyvicente/06-WeatherHub" class="btn btn-primary m-3">Github Repo</a>
                    <a href="https://jeffreyvicente.github.io/06-WeatherHub/" class="btn btn-primary m-3">Project Demo</a>
                 </div>
              </div>

            </div>
          </div>


          <div className="row p-5">
            <div className="col text-center d-flex">

              <div className="card flex-fill" style={{width: '30rem'}}>
                <img className="card-img-top" src={project4} alt='Nada' />
                <div className="card-body">
                  <h5 className="card-title">TaskMaster</h5>
                  <p className="card-text">A simple calendar application that allows a user to save events for each hour of the day.
                    The app is designed to run in a browser and features dynamically updated HTML and CSS powered by jQuery. </p>
                  <a href="https://github.com/jeffreyvicente/05-TaskMaster" class="btn btn-primary m-3">Github Repo</a>
                  <a href="https://jeffreyvicente.github.io/05-TaskMaster/" class="btn btn-primary m-3">Project Demo</a>
                </div>
              </div>

            </div>
            <div class="col text-center d-flex">

              <div className="card flex-fill" style={{width: '30rem'}}>
                  <img className="card-img-top" src={project5} alt='Nada' />
                  <div className="card-body">
                    <h5 className="card-title">Brain Battle 🧠⚔️</h5>
                    <p className="card-text">Brain Battle will present a series of multiple-choice questions to the user. Each question will have a set amount of time to answer, and the user will earn points based on their speed and accuracy.</p>
                    <a href="https://github.com/jeffreyvicente/04-brain-battle" class="btn btn-primary m-3">Github Repo</a>
                    <a href="https://jeffreyvicente.github.io/04-brain-battle/" class="btn btn-primary m-3">Project Demo</a>
                  </div>
                </div>

            </div>
            <div class="col text-center d-flex">

              <div className="card flex-fill" style={{width: '30rem'}}>
                  <img className="card-img-top" src={project6} alt='Nada' />
                  <div className="card-body">
                    <h5 className="card-title">Food Roulette</h5>
                    <p className="card-text">Food Roulette is a mobile application designed to help users find nearby restaurants and choose where to eat without the hassle of scrolling through endless options. The app uses geolocation to detect the user's location and presents a random selection of nearby restaurants.</p>
                    <a href="https://github.com/jeffreyvicente/food-roulette" class="btn btn-primary m-3">Github Repo</a>
                    <a href="https://jeffreyvicente.github.io/food-roulette/" class="btn btn-primary m-3">Project Demo</a>
                 </div>
              </div>

            </div>
           
          </div>

        </div>
    );
}