<script>
import RSVPForm from "../components/RSVPForm.vue";
import { ref } from "vue";
import AddToCalendar from "../components/AddToCalendar.vue";
import axios from "axios";
import { Form as VeeForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Home",
  components: {
    RSVPForm,
    AddToCalendar,
    VeeForm,
    Field,
    ErrorMessage,
  },
  setup() {
    const modalActive = ref(false);
    const formData = ref({
      firstName: "",
      lastName: "",
      rsvp: "",
      message: "",
      mobileNumber: " ",
    });

    function showModal() {
      modalActive.value = true;
    }

    function closeModal() {
      modalActive.value = false;
    }

    const schema = yup.object().shape({
      firstName: yup
        .string()
        .required("* is required")
        .min(2, "must be at least 2 characters"),
      lastName: yup.string().required("* is required"),
      rsvp: yup
        .string()
        .required("Please select an option")
        .oneOf(["yes", "no"], 'RSVP must be either "yes" or "no"'),
      mobileNumber: yup.string().when("rsvp", {
        is: (rsvp) => rsvp === "yes",
        then: () =>
          yup
            .string()
            .required("Mobile number is required")
            .min(10, "Please enter a valid mobile number"),
        otherwise: () => yup.string().notRequired(),
      }),
      message: yup.string().notRequired(),
    });

    function submitForm() {
      // event.preventDefault();
      // console.log(values);

      // Send the data to the Notion API
      async function createPage() {
        try {
          await axios.post(
            `https://sams-api.vercel.app/api/v1/notion/create-page`,
            formData.value
          );

          // console.log(response);

          closeModal();

          // clear form
          formData.value = {
            firstName: "",
            lastName: "",
            rsvp: "",
            message: "",
            mobileNumber: " ",
          };
        } catch (error) {
          console.error("There was an error!", error);
        }
      }
      createPage();
    }

    return {
      modalActive,
      showModal,
      closeModal,
      formData,
      submitForm,
      schema,
    };
  },
};
</script>

<template>
  <div class="col-start-2">
    <RSVPForm :modalActive="modalActive" @close="closeModal">
      <div class="flex flex-col justify-center space-y-5 px-8">
        <div class="space-y-1">
          <h1 class="text-4xl font-blenny text-left text-amber-900">
            RSVP To Picnic
          </h1>
          <h3 class="font-medium font-dapifer text-amber-900 text-left">
            To edit RSVP, simply enter your details again to overwrite your
            previous response.
          </h3>
        </div>
        <VeeForm
          v-slot="{ handleSubmit, validate }"
          :validation-schema="schema"
          as="div"
        >
          <form @submit="handleSubmit($event, submitForm)">
            <div class="flex flex-col space-y-5 mb-8">
              <div class="flex flex-col space-y-1">
                <label class="text-amber-900 font-dapifer font-bold">
                  First Name
                </label>
                <Field
                  name="firstName"
                  type="text"
                  class="border-solid border-[1px] border-amber-900 rounded-lg px-4 py-2"
                  placeholder="First Name"
                  v-model="formData.firstName"
                />
                <ErrorMessage class="text-red-500" name="firstName" />
              </div>
              <div class="flex flex-col space-y-1">
                <label class="text-amber-900 font-dapifer font-bold">
                  Last Name
                </label>
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  class="border-solid border-[1px] border-amber-900 rounded-lg px-4 py-2"
                  v-model="formData.lastName"
                />
                <ErrorMessage class="text-red-500" name="lastName" />
              </div>
              <div class="flex flex-col space-y-1">
                <ErrorMessage class="text-red-500" name="rsvp" />
                <div class="flex space-x-12">
                  <div class="flex flex-col space-y-1">
                    <label
                      for="yes"
                      class="text-amber-900 font-dapifer font-bold"
                    >
                      Yes
                    </label>
                    <Field
                      id="yes"
                      value="yes"
                      type="radio"
                      name="rsvp"
                      class="border-solid border-[1px] border-amber-900 h-6 w-6"
                      v-model="formData.rsvp"
                    />
                  </div>
                  <div class="flex space-x-12">
                    <div class="flex flex-col space-y-1">
                      <label
                        for="no"
                        class="text-amber-900 font-dapifer font-bold"
                      >
                        No
                      </label>
                      <Field
                        id="no"
                        value="no"
                        type="radio"
                        name="rsvp"
                        class="border-solid border-[1px] border-amber-900 h-6 w-6"
                        v-model="formData.rsvp"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="flex flex-col space-y-1"
                v-if="formData.rsvp === 'no'"
              >
                <label class="text-amber-900 font-dapifer font-bold">
                  Message
                </label>
                <Field
                  name="message "
                  as="textarea"
                  placeholder="Excuses here"
                  class="border-solid border-[1px] border-amber-900 rounded-lg px-4 py-2 h-24"
                  v-model="formData.message"
                />
                <ErrorMessage class="text-red-500" name="message" />
              </div>
              <div
                class="flex flex-col space-y-1"
                v-if="formData.rsvp === 'yes'"
              >
                <label class="text-amber-900 font-dapifer font-bold">
                  WhatsApp Mobile Number
                </label>
                <Field
                  name="mobileNumber"
                  type="text"
                  placeholder="+441234567890"
                  class="border-solid border-[1px] border-amber-900 rounded-lg px-4 py-2"
                  v-model="formData.mobileNumber"
                />
                <ErrorMessage class="text-red-500" name="mobileNumber" />
              </div>
            </div>
            <button
              @click="validate"
              type="submit"
              class="w-full bg-amber-900 text-white text-lg font-dapifer font-bold rounded-lg px-4 py-2"
            >
              Submit
            </button>
          </form>
        </VeeForm>
      </div>
    </RSVPForm>
    <div class="flex flex-col items-center space-y-4">
      <h3 class="text-2xl font-medium font-dapifer text-lime-700">
        You're Invited To
      </h3>
      <h1 class="text-5xl font-blenny text-center text-lime-700">
        Sam’s 23rd Birthday Picnic Party
      </h1>
    </div>
    <div class="flex justify-center my-8">
      <!-- <button
        class="font-dapifer font-bold text-xl text-emerald-900 bg-emerald-300 px-8 py-2 rounded-full"
      >
        RSVP Now
      </button> -->
      <button
        @click="showModal"
        type="button"
        class="font-dapifer font-bold text-xl text-emerald-900 bg-emerald-300 px-8 pt-2 pb-3 rounded-full"
      >
        RSVP Now
      </button>
      <!-- <AddToCalendar /> -->
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 leading-loose text-lg">
      <div class="col-span-1 space-y-4">
        <div
          class="bg-white rounded-xl border-solid border-[1px] border-lime-600 p-6 sm:order-1"
        >
          <h2 class="text-emerald-900 text-bold text-3xl font-dapifer">
            Hello!
          </h2>
          <p class="font-dapifer font-medium text-emerald-900 mt-4">
            I am turning 23 on June 5th and would love to celebrate this strange
            number with dear friends outdoors in the sunshine. Please RSVP as
            soon as possible if you’re coming, so I know how much bihun and
            alcohol to provide. It is a potluck, so do bring supplementary food
            items and drinks. The swimming will be dependent on capacity at the
            ponds but I am optimistic that everyone who is down to swim that day
            will be able to swim.
          </p>

          <p class="font-dapifer font-medium text-emerald-900 mt-4">
            Hope to see you there, much love, Sam.
          </p>
        </div>

        <div
          class="col-span-1 col-start-1 h-fit bg-white rounded-xl border-solid border-[1px] border-lime-600 p-6"
        >
          <h2 class="text-emerald-900 text-bold text-3xl font-dapifer">
            Agenda
          </h2>
          <p class="font-dapifer font-medium text-emerald-900 mt-4">
            <b>Lunch: </b>12-3 pm <br />
            <b>Swimming: </b>3-5 pm <br />
          </p>
        </div>

        <div
          class="col-span-1 col-start-1 h-fit bg-white rounded-xl border-solid border-[1px] border-lime-600 p-6 order-last"
        >
          <h2 class="text-emerald-900 text-bold text-3xl font-dapifer">
            Gifts
          </h2>
          <p class="font-dapifer font-medium text-emerald-900 mt-4">
            Please do not feel obligated to bring a gift. Your presence is truly
            all that matters to me. If you really must however
            <a
              href="https://flowery-gallium-b11.notion.site/484f83658ad147d79f676466097073f8?v=1c90ba7854814785934803f2330e660c"
              class="text-emerald-500 italic underline underline-offset-2"
              >here is a list of things I like</a
            >.
          </p>
        </div>
      </div>
      <div class="col-span-2 space-y-4">
        <div
          class="col-span-2 col-start-2 h-fit bg-white rounded-xl border-solid border-[1px] border-lime-600 p-6"
        >
          <h2 class="text-emerald-900 text-bold text-3xl font-dapifer">
            Event Summary
          </h2>
          <p class="font-dapifer font-medium text-emerald-900 mt-4">
            <b>Date: </b>Saturday, 10th June 2023 <br />
            <b>Time: </b>12-5pm <br />
            <b>Location: </b>Overlooking the Model Boating Pond, Hampstead
            Heath.
            <br />
            <b>Bring: </b>Potluck, picnic mat, swimsuit and towel.
          </p>
        </div>
        <div
          class="col-span-2 col-start-2 h-fit bg-white rounded-xl border-solid border-[1px] border-lime-600 p-6"
        >
          <h2 class="text-emerald-900 text-bold text-3xl font-dapifer">
            Food & Drink
          </h2>
          <p class="font-dapifer font-medium text-emerald-900 mt-4">
            Potluck. Bring no more than 4 servings of food + drink e.g. 4
            Sausage Rolls + 1 Bottle of Wine. Savoury food preferred. Cold brew
            always welcome.
          </p>
          <p class="font-dapifer font-medium text-emerald-900 mt-4">
            Homemade <i>‘mihun goreng’</i> will be catered. Paper plates + cups
            + cutlery + ice provided.
          </p>
        </div>
        <div
          class="col-span-2 col-start-2 h-fit bg-white rounded-xl border-solid border-[1px] border-lime-600 p-6"
        >
          <h2 class="text-emerald-900 text-bold text-3xl font-dapifer">
            Activities
          </h2>
          <p class="font-dapifer font-medium text-emerald-900 mt-4">
            Picnic lunch and drinks followed by a swim in
            <a
              href="https://www.cityoflondon.gov.uk/things-to-do/green-spaces/hampstead-heath/where-to-go-at-hampstead-heath/mixed-pond"
              class="text-emerald-500 italic underline underline-offset-2"
              >Hampstead Heath Mixed Bathing Pond</a
            >
            .
            <b class="underline underline-offset-2"
              >Bring a swimsuit + towel.</b
            >
            Concession fee for students is £2.70, adult fee is £4.70. Bring cash
            just in case. Inflatables appreciated.
          </p>
          <p class="font-dapifer font-medium text-emeral-900 mt-4">
            <b
              >Book your swimming slot
              <a
                href="https://www.cityoflondon.gov.uk/things-to-do/green-spaces/hampstead-heath/where-to-go-at-hampstead-heath/mixed-pond"
                class="text-emerald-500 italic underline underline-offset-2"
                >here</a
              >.</b
            >
            Booking opens 30th May 2023.
          </p>
        </div>
        <div
          class="space-y-4 col-span-2 col-start-2 h-fit bg-white rounded-xl border-solid border-[1px] border-lime-600 p-6"
        >
          <h2 class="text-emerald-900 text-bold text-3xl font-dapifer">
            Picnic Location
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.1961539910308!2d-0.15979690000000002!3d51.564637499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x842db82a5881aeaa!2sHR7R%2BV34%2C%20London!5e0!3m2!1sen!2suk!4v1684365500294!5m2!1sen!2suk"
            class="w-full h-96"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p class="font-dapifer font-medium text-emerald-900 mt-4">
            Picnic location most likely fixed but if there is a change I'll text
            you. We are also subject to the weather, so if it's raining, event
            will be postponed to the next sunny day. Will keep you updated.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
