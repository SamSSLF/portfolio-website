<script setup>
import { onMounted } from "vue";
import { initCarousels } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initCarousels();
});
</script>

<template>
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
    <h1>
      Fable - A language-learning toy that supports the development of
      self-efficacy in children aged 3-7 years.
    </h1>
    <h3 class="mb-4">
      Fable is a digital-physical toy which aims to improve second language
      proficiency by leveraging self-efficacy theory (SET) as a mechanism that
      could help explain why some children thrive learning a second language
      whereas others struggle.
    </h3>
    <h3>
      The toy is underpinned by Bandura’s theory of self-efficacy, and current
      theories on intellectual development across the lifespan. An initial
      prototype was developed and tested with potential users and areas of
      improvement were noted for future iterations. As part of my Design
      Psychology module, an experimental design to test the toy’s claim that it
      can improve second language proficiency is outlined in a report that can
      be read here.
    </h3>
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
  </article>
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
  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h2>Prototyping</h2>
    <p>
      A physical prototype of the final design was developed for user testing,
      coupled with a high fidelity prototype of the companion app so we could
      test the user experience with children. A digital prototype was also
      created to ensure all the electronic components could fit into the
      proposed design for the casing.
    </p>
  </article>
  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h2>User Testing</h2>
    <p>
      I conducted user testing with two children aged 6 and 8 years old.
    </p>
  </article>
  <article
    class="mb-2 col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
  >
    <h1>Proposed Method of Testing the Toy's Claims</h1>
    <p>
      Summary of the report insert here.
    </p>
  </article>
</template>
