<template>
  <v-app>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="mdi-magnify"
        placeholder="Search..."
        @input="updateQuery"
        dense
        rounded
        outlined
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import { debounce } from "debounce";

export default {
  name: "DefaultLayout",
  methods: {
    updateQuery: debounce(function (e) {
      this.$store.dispatch("fetchResults", e);
    }, 500),
  },
};
</script>

<style lang="scss">
.v-text-field {
  height: 40px;
}
</style>