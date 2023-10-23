<script setup>
import { onMounted } from "vue";
import { initCarousels } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initCarousels();
});
</script>

<template>
  <article
    class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <h1>Fable - A scientifically-backed language-learning toy.</h1>
    <h3 class="mb-4">
      Fable is a digital-physical toy which supports young children in second
      language learning by leveraging established principles in developmental
      psychology.
    </h3>
    <h3 class="mb-8">
      The toy is underpinned by Bandura’s theory of self-efficacy, and current
      theories on intellectual development across the lifespan. An initial
      prototype was developed and tested with potential users and areas of
      improvement were noted for future iterations. As part of my Design
      Psychology module, an experimental design to test the toy’s claim that it
      can improve second language proficiency is outlined in a report that can
      be read here.
    </h3>
  </article>
  <img src="../../assets/fable-hero-4.png" alt="" class="col-span-full" />
  <p
    class="col-start-2 text-sm mt-3 mb-8 tracking-wide font-semibold text-slate-500"
  >
    Mock-up of the final toy design. Fable consists of a set of square, magnetic
    tiles, and a companion app which connects to the tiles over bluetooth.
  </p>
  <article
    class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-p:prose-md prose-h3:font-normal"
  >
    <div class="flex flex-col space-y-2">
      <div><span class="font-bold">Time Frame: </span>5 weeks</div>
      <div>
        <span class="font-bold"> Team: </span> Paula Castillero, Kyle Li, Irina
        Barzykina, Anna Soligo and myself.
      </div>
      <div>
        <span class="font-bold"> Role: </span>I was responsible for the initial
        concept development, user research, user testing, user interface design,
        and design psychology research for development. I am the sole author of
        the proposed research study to test the toy's efficacy empirically.
      </div>
    </div>
  </article>

  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h1>Background and Context</h1>
    <p>
      The development of Fable stemmed from the observation that low proficiency
      in one’s heritage language prevents one from engaging meaningfully with
      your ethnic background, culture, and extended family who can only speak
      the heritage language.
    </p>
    <p>
      Language proficiency is closely correlated to an individual’s self-esteem
      and sense of identity, and bilingual children have also shown to have
      superior executive functioning skills compared to monolinguals and their
      brains are more resilient against age-related decline. Thus, second
      language proficiency can improve mental health of immigrant children and
      generally comes with many cognitive benefits that persist into adulthood.
    </p>
    <p>
      During the pre-operational stage of development, ages 3-7 years children
      begin to form complex sentences and maintain complex interactions - beyond
      the age of 7, children tend to focus more on reading and writing in
      schools. Our toy intends to target children at this key stage of their
      development.
    </p>
    <p>This project can be summarised as follows:</p>

    <!-- Quotation Start-->
    <p class="text-gray-600 text-3xl mb-4">
      <font-awesome-icon
        :icon="['fas', 'quote-left']"
        size="2xl"
        class="text-gray-100 absolute z-0"
      />
      <i class="relative left-4 top-4 z-10"
        >How might we apply psychological principles to create an engaging
        language-learning toy for children aged 3-7 years?</i
      >
      <font-awesome-icon
        :icon="['fas', 'quote-right']"
        size="2xl"
        class="text-gray-100 absolute z-0"
      />
    </p>
    <!--Quotation End -->
  </article>
  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h1>Insights from Psychology</h1>
    <ul>
      <li>
        <span class="font-bold">Self-Efficacy:</span> It's the belief in our
        ability to succeed in specific situations. It makes learners more
        persistent, especially in challenging tasks like language learning.
      </li>
      <li>
        <span class="font-bold">Parental Value:</span> If parents don’t see the
        value in learning a new language, a child is less likely to put in the
        effort to learn it, regardless of their self-efficacy.
      </li>
      <li>
        <span class="font-bold">Parental Input:</span> The quality and diversity
        of language that parents use with their children can impact the child’s
        language development. Activities like reading together can especially
        help in improving language skills in children.
      </li>
    </ul>
  </article>
  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h1>Research and Analysis</h1>
    <h2>User Research</h2>
  </article>
  <!--Carousel Start-->
  <div class="col-span-full">
    <div id="default-carousel" class="relative w-full" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative overflow-hidden rounded-lg aspect-w-10 aspect-h-7">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_UR1.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_UR2.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_UR3.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_UR4.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_UR5.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-600/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-600/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
  <!--Carousel End-->
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    Questions asked during semi-structured interviews with users (parents of
    children ages between 3-10 years old), followed by quotations from the
    interviews and corresponding insights synthesised.
  </p>
  <img src="../../assets/Fable_Persona.png" alt="" class="col-span-full" />
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    The synthesised insights were summarised into a persona to help us empathise
    with Fable's potential users.
  </p>
  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h2>Market Research</h2>
    <p>
      Existing language learning toys were researched and summarised into the
      following graphic, which highlights an opportunity within this market.
    </p>
    <p>
      Between the ages of 2-7 years, children typically engage with toys that
      incorporate symbolic representation, to help them expand their vocabulary
      and improve their communciation skills. There are no toys however
      specifically designed to support second-language acquisition during these
      years, with language-specific toys typically being aimed at older
      children.
    </p>
    <p class="mb-4">
      There are also currently no toys offering a high level of personalised
      learning at this stage of childhood development.
    </p>
  </article>
  <img src="../../assets/Fable_Toy_Market.jpg" alt="" class="col-span-full" />
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    A 2x2 matrix depicting existing language-related educational toys for
    children between the ages of 0 to 11. The Y-axis represents the relative
    degree of personalisation available for each toy. Symbolic representation is
    typical of toys for children between the ages of 2-7 years, while
    language-learning specific toys are typically aimed at older children.
  </p>
  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h1>Design Process</h1>
    <h2>Ideation & Concept Development</h2>
    <p>
      Working off our user research and knowledge in developmental psychology,
      the team began ideating toy concepts. I personally developed the following
      concept which the team ended up selecting to take further.
    </p>
  </article>
  <img
    src="../../assets/Fable_initial_concept1.png"
    alt=""
    class="col-span-full"
  />
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    I first thought about using role play and storytelling as tools for language
    acquisition. The idea is that children would learn passively as they play
    more and more with the toy, incorporating the foreign-language nouns into
    their storytelling. This concept is consistent with using symbolic
    representation to teach language, which is typical of toys for children
    between the ages of 2-7 years.
  </p>
  <img
    src="../../assets/Fable_initial_concept2.png"
    alt=""
    class="col-span-full"
  />
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    Electronic flashcards aready exist on the market, I upgraded the idea
    slightly to include buttons for verbs and adjectives related to the noun, so
    children may start to develop stories around the character (the noun) in a
    foreign language.
  </p>
  <img
    src="../../assets/Fable_initial_concept3.png"
    alt=""
    class="col-span-full"
  />
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    Finally the idea of using a character to teach language was developed into a
    board-like game, each tile includes an electronic touch screen which can
    play animations and afford interactive mini games to be played.
  </p>
  <!--Carousel Start-->
  <div class="col-span-full">
    <div id="default-carousel" class="relative w-full" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide1.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide2.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide3.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide4.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide5.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 6 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide6.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 7 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide7.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 8 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide8.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 9 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide9.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 10 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide10.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 11 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="../../assets/Fable_Design_Slide11.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 6"
          data-carousel-slide-to="5"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 7"
          data-carousel-slide-to="6"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 8"
          data-carousel-slide-to="7"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 9"
          data-carousel-slide-to="8"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 10"
          data-carousel-slide-to="9"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-black/10 hover:bg-black/50 active:bg-black/70 focus:ring-4"
          aria-current="false"
          aria-label="Slide 11"
          data-carousel-slide-to="10"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-600/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-600/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>
  <!--Carousel End-->
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    A walkthrough of the final game design I developed.
  </p>
  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h2>Prototyping</h2>
    <p>
      A physical prototype of the final design was developed for user testing,
      coupled with a high fidelity prototype of the companion app so we could
      test the user experience with children. A digital prototype was also
      created to illustrate that the design was technically feasible.
    </p>
  </article>
  <img
    src="../../assets/Fable_Physical_Prototype.png"
    alt=""
    class="col-span-full"
  />
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    Anna created a feels-like physical prototype by laser cutting multiple
    acrylic sheets and stacking them. The tiles click together with the help of
    magnets, embedded into the edges of the tiles.
  </p>
  <div class="col-span-full aspect-w-16 aspect-h-9">
    <iframe
      style="border: 1px solid rgba(0, 0, 0, 0.1)"
      width="100%"
      height="100%"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9FhSM0f2NSv42NW2WKmnbJ%2FMobile-Device-Prototypes%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D15-28%26viewport%3D-32%252C199%252C0.53%26t%3DsyUlW0fc5uxPHbpW-1%26scaling%3Dscale-down%26starting-point-node-id%3D15%253A28%26show-proto-sidebar%3D1%26mode%3Ddesign"
      allowfullscreen
    ></iframe>
  </div>
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    Digital prototype of Fable and its features I created.
  </p>
  <img
    src="../../assets/Fable_Technical_Feasibility1.png"
    alt=""
    class="col-span-full"
  />
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    A rough digital prototype of all the necessary electronic components within
    the Play Tiles to illustrate the design's feasibility created by Kyle.
  </p>
  <img
    src="../../assets/Fable_Technical_Feasibility2.png"
    alt=""
    class="col-span-full"
  />
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    A rough digital prototype of all the necessary electronic components within
    the Start Tiles to illustrate the design's feasibility created by Kyle.
  </p>

  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h2>User Testing</h2>
    <p>
      I conducted user testing with children between the ages of 5 and 11 years
      old with the following aims:
    </p>
    <ol class="text-base">
      <li>
        Determine how effectively the game captures and maintains the children's
        attention.
      </li>
      <li>
        Understand how the storytelling aspect contributes to contextual
        learning.
      </li>
      <li>
        Examine the parent-child interation by observing the dynamics of
        parent-child reading sessions, and gather insight on how the game
        facilitates bonding and cooperative learning.
      </li>
      <li>Assess the appeal of AI-generated stories to adults and children.</li>
    </ol>
  </article>
  <img
    src="../../assets/Fable_User_testing_blurred.png"
    alt=""
    class="col-span-full"
  />
  <p
    class="mb-6 col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
  >
    A user testing session carried out with two children aged 6 and ll years,
    and their father. Each child interacted with the high-fidelity figma
    prototype, following on-screen instructions and playing with the tile
    prototypes and solving the puzzles under parental supervision.
  </p>
  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <p>The user testing sessions yielded the following learnings.</p>
    <h4>Positive Points:</h4>
    <ul class="text-base">
      <li>
        Dynamic difficulty is an important feature for the game to have as
        second-language proficiency was not necessarily correlated with the age
        of the child, each child requiring more or less help with certain
        puzzles depending on their contextual exposure to the language (purely
        conversational or classroom-based).
      </li>
      <li>
        The children and parents were intrigued by the AI-generated stories and
        liked how the storyline is affected by the tile configuration. Some
        parents found the stories strange, but children seemed to enjoy the
        outlandish nature of them.
      </li>
      <li>
        Parents were happy to get involved with helping their children read
        words they were not familiar with and liked how the game targeted
        exposure to words they may not usually hear in their daily life, and
        help expand their vocabulary.
      </li>
      <li>Children LOVED the clicking magnetic tiles.</li>
    </ul>
    <h4>Areas of Improvement:</h4>
    <ul class="text-base">
      <li>
        Many parents requested a "read-aloud" feature so children and parents
        could verify the pronunciation of words independently.
      </li>
      <li>
        The "hint" feature on its own was not enough for the children to figure
        out the puzzle tiles, and they required assistance from their parents.
      </li>
      <li>
        Many families weren't sure if they would reread the generated stories in
        the library. One parent suggested a feature where children could attach
        their own artwork to the story to make the learning process more
        engaging.
      </li>
      <li>
        Younger children struggled a lot reading the AI-generated stories
        independently, highlighting the need for a voice narration of the
        stories so children could listen to the stories independently.
      </li>
    </ul>
  </article>
  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h1>Proposed Method of Testing the Toy's Claims</h1>
    <p>
      You can read my full scientific report on how I planned on testing the
      toy's effectiveness at helping young children learn a second-language.
    </p>
  </article>
  <div class="col-start-2">
    <iframe
      src="https://drive.google.com/file/d/1dL3jBwHZb90PTwfFc5-i-Jkk0CNZmihj/preview"
      height="680"
      allow="autoplay"
      class="mt-4 w-full"
    ></iframe>
  </div>
</template>