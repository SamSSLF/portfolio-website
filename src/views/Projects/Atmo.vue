<script setup>
import Modal from "../../components/Modal.vue";
import { ref } from "vue";

const isModalVisible = ref(true);

// const toggleModal = () => {
//   isModalVisible.value = !isModalVisible.value;
// };
</script>

<template>
  <div class="col-start-2 col-span-1">
    <!-- <Modal v-show="isModalVisible"></Modal> -->
    <article
      class="prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
    >
      <h1>
        Atmo Technology enables cleaner, more cost-effective operations on-site.
      </h1>
      <h3>
        Atmo Technology Ltd is an environmental-monitoring-service company with
        a mission to reduce emissions, maximize efficiency, and save lives on
        industrial sites across the UK. Atmo uses a network of sensors to
        monitor pollution and vehicle utilisation, to provide real-time data to
        site operators, and health and safety officers. They turn data into
        actionable insights for their clients to maximise asset utilisation,
        identify inefficiencies and decarbonise their operations.
      </h3>
    </article>
    <p
      class="col-start-2 text-center font-bold tracking-[.3em] text-slate-300 mt-8 text-sm mb-6"
    >
      TRUSTED BY
    </p>
    <div class="flex justify-center col-start-2 col-span-1">
      <img src="../../assets/atmo-partner-logos.png" alt="" />
    </div>
    <img
      src="../../assets/atmo-hero-3.png"
      alt=""
      class="col-span-full mt-10"
    />
    <article
      class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
    >
      <h1>Project Brief</h1>
      <p>
        Atmo’s first client portal was a great MVP, that served as a proof of
        concept for their real-time digital twin, but was served by a third
        party service and had limited customizability which fell short of the
        product’s growing client requirements. The less than stellar UI also
        resulted in low user engagement with the real-time portal. My task was
        to build Atmo’s own real-time environmental monitoring portal, writing
        the codebase, and designing the user experience.
      </p>
      <p>
        <span class="font-bold">Time Frame: </span>5 months, full-time<br /><span
          class="font-bold"
          >My Role:
        </span>
        Front-end Developer and Product Designer<br /><span class="font-bold"
          >Team:
        </span>
        Tim Lefevre (Front-end Developer and Product Designer) and Fynn O’Connor
        (Back-end Developer)
      </p>
      <h1>App Overview</h1>
      <p class="mb-2">
        Here are some snapshots of the final UI designs for the portal.
      </p>
    </article>
    <img
      src="../../assets/atmo-app-overview.png"
      alt=""
      class="col-span-full"
    />
    <article
      class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
    >
      <h1>Information Architecture and Interaction Design</h1>
      <p>
        I began by scoping product requirements - what exactly do I need to
        build? What is Atmo’s value proposition? What tasks do users want to
        accomplish on the portal? I collected information from various parts of
        the company, talking to engineers, sales, and clients to really
        understand the scope and scale of the product I was going to build.
      </p>
      <p>
        I created a User Flow Map for the new portal to understand how users may
        interact with the web app to meet their needs. The diagram also allowed
        me to identify gaps in my knowledge about Atmo’s product e.g. how many
        types of sensors do we offer?, and highlighted some discrepancies in
        their product vocabulary that needed to be clearly defined e.g. an
        “asset” to the engineering team was different from what our clients
        thought “assets” were.
      </p>
      <p>
        The final diagram ultimately helped us structure the development process
        into three distinct portal features - Asset Management, User Management
        and Site Dashboards.
      </p>
    </article>
    <img
      src="../../assets/user-flow-1.png"
      alt=""
      class="col-start-2 col-span-1 mb-8"
    />
    <img
      src="../../assets/user-flow-2.png"
      alt=""
      class="col-start-2 col-span-1"
    />
    <p
      class="col-start-2 text-sm mt-3 tracking-wide font-semibold text-slate-500"
    >
      Parts of the user flow map of Portal 2.0.
    </p>
    <p class="col-start-2 prose prose-md my-8">
      Some initial prototyping of the UI took place to test out the user flows
      mapped out in the User Flow Map.
    </p>
    <img
      src="../../assets/prototype-flow.gif"
      alt=""
      class="col-start-2 flex justify-center"
    />
    <p class="col-start-2 prose prose-md my-8">
      Tricky task flows such as editing user details and permissions took many
      rounds of design and testing before arriving at the final iteration.
    </p>
    <img
      src="../../assets/atmo-evolution-edituser.png"
      alt=""
      class="col-span-full"
    />
    <article
      class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
    >
      <h1>Atmo Design System and Component Library</h1>
      <p>
        Translating prototypes into development-ready designs was a challenging
        task that I accomplished by creating a design system and component
        library in Figma. I built Atmo’s first design system following Google’s
        Material Design guidelines, and used “design tokens” to store and use
        styles across designs, code, tools and platforms. I then migrated the
        design tokens to the codebase by extending the Tailwind.css library and
        used them to code reusable components.
      </p>
    </article>
    <img
      src="../../assets/atmo-styles3.png"
      alt=""
      class="col-start-2 col-span-1 mt-8"
    />
    <img
      src="../../assets/atmo-component-styles.png"
      alt=""
      class="col-start-2 col-span-1 mt-4"
    />
    <article
      class="col-start-2 col-span-1 prose prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-10 prose-p:prose-md prose-h3:font-normal prose-h4:mb-3"
    >
      <h1>Design to Development</h1>
      <p>
        Previous to Atmo, I had only ever built basic web apps using HTML/CSS
        and vanilla Javascript, so learning a front-end framework like Vue.Js
        was a relief, but also time-consuming. I had to code as a team for the
        first time, so I had to be more disciplined about branch naming, making
        regular and descriptive commits, and learnt how to conduct code reviews
        and make pull requests.
      </p>
      <p>
        Building a robust, scalable codebase took up the majority of my time at
        Atmo. Eventually, I stopped designing in Figma and prototyped new
        screens and task flows directly in the codebase. I would test these new
        flows with my co-workers and iterate directly within the codebase.
      </p>
    </article>
    <img
      src="../../assets/atmo-final-1.png"
      alt=""
      class="col-start-2 col-span-1 mt-8"
    />
    <img
      src="../../assets/atmo-final-2.png"
      alt=""
      class="col-start-2 col-span-1 mt-4"
    />
    <img
      src="../../assets/atmo-final-3.png"
      alt=""
      class="col-start-2 col-span-1 mt-4"
    />
  </div>
</template>
