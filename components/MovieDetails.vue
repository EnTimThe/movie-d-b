<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="400" max-heigth="1000">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="white" dark v-bind="attrs" v-on="on" text small>
          Details
        </v-btn>
      </template>
      <v-card>
        <v-card-text class="movie_overview"
          ><br />{{ movieDetails.overview }}</v-card-text
        >
        <v-card-text
          ><br />Released: {{ movieDetails.release_date }}<br /><br />Average vote
          {{ movieDetails.vote_average }} out of
          {{ movieDetails.vote_count }} votes.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="white" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template> 

<script>
export default {
  name: "DetailsPage",
  props: {
    movieDetails: {
      type: Object,
      default: () => ({
        overview: "",
        genre: "",
        rating: "",
        country: "",
        link: "",
      }),
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

