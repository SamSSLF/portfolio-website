<template>
  <article
    class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <h1>TerraQi: Renewable Energy Forecasts for the Layperson</h1>
    <h3 class="mb-4">
      For my Master's project, I developed a machine learning model that
      predicts wind energy generation potential anywhere in the UK and along its
      coasts. This model can be interacted with via REST API endpoints,
      facilitating a wide range of applications. Additionally, a web application
      was created to visualize the data available through the API.
    </h3>
    <p class="mb-8">
      <span class="font-bold">Time Frame: </span>5 months<br />
      <span class="font-bold"> Team: </span>
      Solo Project
    </p>
  </article>
  <a href="https://www.terraqi.com/" target="_blank" class="col-span-full"
    ><img src="../../assets/tq-hero-3.png" alt="TerraQi hero image"
  /></a>
  <p
    class="col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    A mock-up of the web app's user interface, particularly a wind map overlaid
    the map of Great Britain, and a panel which provides up-to-date wind power
    generation forecasts. At the bottom a panel showcasing a response from the
    TerraQi API in Postman.
  </p>
  <a
    href="https://www.terraqi.com/"
    target="_blank"
    class="mt-8 col-start-2 w-full"
    ><img src="../../assets/tq-demo.gif" alt="TerraQi demonstration"
  /></a>
  <p
    class="col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    A demo of the data visualisation. Explore it yourself at
    <a href="https://www.terraqi.com/" target="_blank" class="text-blue-700"
      >www.terraqi.com</a
    >.
  </p>
  <a
    href="https://documenter.getpostman.com/view/27379754/2s9YRDyqKb"
    target="_blank"
    class="mt-8 col-start-2"
    ><img src="../../assets/tq_api_docs.png" alt="TerraQi API documentation"
  /></a>
  <p
    class="col-start-2 text-sm mt-3 mb-8 tracking-wide font-semibold text-slate-500"
  >
    TerraQi API documentation can all be found
    <a
      href="https://documenter.getpostman.com/view/27379754/2s9YRDyqKb"
      target="_blank"
      class="text-blue-700"
      >here</a
    >.
  </p>
  <article
    class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <h1>Why did I make this?</h1>
  </article>
  <img
    src="../../assets/tq-problem-1.png"
    alt="Problem TerraQi is addressing."
    class="col-span-full"
  />
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    TerraQi is addressing the technical issue of accelerating the adoption of
    renewable energy into our grid, that is the intermittency of supply.
  </p>
  <article
    class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <p>
      Technological advancements have allowed us the opportunity to harvest
      energy locally from our surroundings. As solar panels and wind turbines
      afford us independence from the traditional centralised system of
      producers and suppliers, there is a pressing need for more and better data
      about renewable energy availability.
    </p>
    <p>
      Today, renewable energy forecasting is primarily the domain of power grid
      operators and energy suppliers, who use this data to site new turbines,
      forecast load obligation on the grid, and plan maintenance operations
      (Kariniotakis, 2017). As a result real-time energy data is primarily
      available in forms and formats that require specialized knowledge to
      interpret and apply, limiting the potential of individuals and communities
      to fully engage in the energy transition.
    </p>
    <p>
      This project aims to address a cruicial need for public access to
      renewable energy forecasts so we might as easily know the answer to the
      question
      <span class="italic font-semibold"
        >"how much renewable energy will there be tomorrow?"</span
      >
      as we do to "will it rain tomorrow?"
    </p>
  </article>
  <article
    class="mt-8 mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <h2>Applications</h2>
  </article>
  <img
    src="../../assets/tq-applications-1.png"
    alt="TerraQi API applications."
    class="col-start-2 mb-2"
  />
  <img
    src="../../assets/tq-applications-2.png"
    alt="TerraQi API applications."
    class="col-start-2 mb-2"
  />
  <img
    src="../../assets/tq-applications-3.png"
    alt="TerraQi API applications."
    class="col-start-2"
  />
  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <h1>How did I make it?</h1>
    <h2>Developing Prediction Models</h2>
    <p>
      Data is the centrepiece of this project. I spent a lot of time researching
      weather data, where to get it what all the terminology meant and how to
      manipulate it.
    </p>
  </article>
  <img
    src="../../assets/tq-model-training.png"
    alt="TerraQi API applications."
    class="mt-3 col-span-full"
  />
  <p
    class="col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    Process map of how the machine learning prediction models were developed.
  </p>
  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <p>
      <span class="font-bold">Input Vars</span>: Since the end-goal was to make
      my project accessible and open source, I needed to choose input variables
      for which I could access valid forecasts for. Most kinds of weather
      variables are publicly available and I found that the variables I needed
      to predict wind power generation were freely accessible form the ECMWF
      Open Data Archive so that is what I used to train my wind mode. The
      development of the solar prediction model was encumbered by lack of access
      to free solar radiation forecasts, hence I chose to focus my attention on
      the wind model.
    </p>
    <p>
      <span class="font-bold">Output Variables</span>: By output variables I
      mean the true values of wind power generation all over the globe. For this
      I used something called reanalysis data. Reanalysis datasets are developed
      by meteorologists using their most up-to-date atmospheric models and
      basically, they are out best guess of past weather and climate conditions.
      They are calculated retrospectively i.e. cutting-edge models are applied
      on historical datasets and the result is a dataset which is globally
      complete, and consistent in time - “maps without gaps”. Very useful, and
      required minimal data cleansing.
    </p>
    <p>
      Data pre-processing consisted of checking the data made sense, removing
      outliers, checking for null values and feature creation. I calculated wind
      speed and direction from my weather data and also created some temporal
      features like day of the week, hour and day of the year but these features
      turned out to have minimal impact on final prediction accuracy because my
      dataset only spanned one year. This was a limitation of the computing
      power I had available to me.
    </p>
  </article>

  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <h2>Assessing Prediction Accuracy</h2>
  </article>
  <img
    src="../../assets/tq-data-acc.png"
    alt="TerraQi API applications."
    class="col-span-full"
  />
  <p class="col-start-2 text-sm tracking-wide font-semibold text-slate-500">
    Model accuracy for various learning algorithms. I started by developing
    simple models regression models as a quick win and improve accuracy of the
    predictions.
  </p>
  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <p>
      My model is only in the 10th percentile when benchmarked against
      state-of-the-art models in terms of prediction accuracy. An acceptable
      outcome considering I am just one engineer and am not a Machine Learning
      Expert by any means, which is why I structured and deployed the project in
      such a way that experts can help me improve my models over time by making
      it open source.
    </p>
  </article>
  <img
    src="../../assets/tq-spatial-acc.png"
    alt="TerraQi API applications."
    class="col-span-full my-3"
  />
  <p class="col-start-2 text-sm tracking-wide font-semibold text-slate-500">
    Average absolute error across regions in the UK. Darker colour indicate
    larger errors.
  </p>
  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <p>
      Wind speed and direction is very sensitive to the surrounding terrain
      hence I was interested to learn if there was any consistent spatial biases
      in my wind data. Thus I plotted the average errors for each county and
      region in the UK on a map and found that indeed the model was more
      accurate in flat and low-lying areas and performed much worse in areas
      with a lot of mountains and uneven terrain.
    </p>
  </article>
  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <h2>Back-End Server Deployment</h2>
  </article>

  <img
    src="../../assets/tq-bes.png"
    alt="TerraQi API applications."
    class="col-span-full my-3"
  />
  <p class="col-start-2 text-sm tracking-wide font-semibold text-slate-500">
    A system overview of the back end that has been thus far developed and
    deployed. Black arrows are used to track the flow of data from the client
    (front-end), while green arrows highlight data flows from the server
    (back-end).
  </p>
  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <p>
      I exported my XGBoost model from my Jupyter Notebook environment and put
      it on my server. Everyday, twice a day my server fetches the latest
      weather forecast from ECMWF via a cron job which is essentially a
      time-based job scheduling service built into Unix systems.
    </p>
    <p>
      My model is exposed via a series of endpoints that will return wind
      forecast data. To query the /windfc endpoint a POST request must be made
      with a grid point as the query parameters. The predictor variables are
      interpolated at that point, then passed into the wind model which outputs
      the forecast which is then sent back to the client.
    </p>
    <p>
      My back-end server was written using the Flask Application framework and
      deployed on an AWS EC2 instance which is essentially a computer you can
      rent from amazon that will run your code every time someone types in your
      domain name into their browser.
    </p>
    <p>
      Because the Flask server on its own is not particularly fast, stable or
      secure and cannot handle concurrent requests on its own I used Gunicorn
      which is a Web Server Gateway Interface so
    </p>
    <ul>
      <li>any web server can interact with my application and also</li>
      <li>
        distribute the load when reacting to lots of web requests at once and
      </li>
      <li>it keeps multiple processes of the web app running.</li>
    </ul>
    <p>
      Nginx is used as a reverse proxy to enhance performance, security and
      reliability and essentially when a client makes a request to my server
      Nginx receives all my requests first and forwards it to the appropriate
      place or returns the appropriate piece of information very efficiently and
      more quickly than my flask application could on its own.
    </p>
  </article>
  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <h2>Web Application Development</h2>
    <p>I built a full-stack web app to visualise data from my API.</p>
  </article>
  <img src="../../assets/tq-fe.png" alt="" class="col-span-full my-3" />
  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <p>
      I built the all the interactive elements of my front-end application on
      Vue. I made a simple web server on the back-end using express to make
      requests to the various APIs like Mapbox for the map and geocoding
      functionality, and ofcourse the REST API I built that returns energy
      forecast data.
    </p>
  </article>
  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <h1>What is its impact?</h1>
    <h2>Usability Testing</h2>
    <p>
      I showed my web app to 20 lay persons (none of the participants posessed
      specialised knowledge in the energy industry) to determine if they
      understood the metrics I used to express wind power predictions, if the UI
      was easy to navigate, and gather feedback on the project in general.
    </p>
    <p class="font-bold">Key Findings:</p>
    <ul>
      <li><span class="font-bold">User Interface (UI) Intuitiveness</span></li>
      <li><span class="font-bold">Understanding Data</span></li>
      <li><span class="font-bold">Learning Experience</span></li>
      <li><span class="font-bold">Feedback and Suggestions</span></li>
    </ul>
    <p class="font-bold">Issues and Challenges:</p>
    <ul>
      <li></li>
    </ul>
  </article>
  <article
    class="mt-8 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <h2>Open Source Project</h2>
    <p>
      My project continues to have an impact as an open-source project, which
      you can contribute to
      <a href="https://github.com/SamSSLF/terraqi" class="text-blue-700">here</a
      >.
    </p>
    <p>
      One of my key design requirements when I embarked on my project was making
      data easily accessible hence the model training and back-end server
      components of my project is open source and freely available on my GitHub
      with
      <a
        href="https://documenter.getpostman.com/view/27379754/2s9YRDyqKb"
        class="text-blue-700"
        >corresponding documentation for how to install and use the API</a
      >
      available.
    </p>
  </article>
  <img src="../../assets/tq-os.png" alt="" class="col-span-full my-3" />
</template>
