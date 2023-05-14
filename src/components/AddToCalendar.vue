<script>
export default {
  name: "AddToCalendar",
  mounted() {
    const script = document.createElement("script");
    script.src = "https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js";
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>

<template>
  <div
    title="Add to Calendar"
    class="addeventatc"
    data-styling="none"
    data-id="OD17084207"
  >
    Add to Calendar
  </div>
</template>

<style lang="css" scoped>
@import "https://cdn.addevent.com/libs/atc/themes/fff-theme-13/theme.css";
.addeventatc {
  background-color: #009688 !important;
  color: #ffffff !important;
}
.addeventatc:before {
  background-color: #009688 !important;
}
.addeventatc:hover:before {
  background-color: #009688 !important;
}
</style>
