<template>
  <div>
    <v-row justify="start" align="center">
      <v-col
        v-for="movie in initialMoviesData"
        :key="movie.id"
        cols="12"
        sm="4"
        md="3"
        elevation="5"
      >
        <v-card class="pa-2">
          <v-img
            height="350"
            :src="getPosterUrl(movie)"
            alt="movie.title || movie.original_name"
          ></v-img>
          <v-card-title>{{ movie.title || movie.original_name }}</v-card-title>
          <v-card-subtitle>Popularity: {{ movie.popularity }}</v-card-subtitle>
          <v-card-actions><MovieDetails :movieDetails="movie" /></v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MovieDetails from "@/components/MovieDetails.vue";

export default {
  name: "IndexPage",

  beforeCreate() {
    this.$store.dispatch("fetchResults");
  },
  methods: {
    getPosterUrl(movie) {
      return `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
    },
  },
  computed: {
    initialMoviesData() {
      return this.$store.getters.getMoviesData;
    },
  },
};
</script>
<style lang="scss">
.v-card {
  height: 100%;
  &__title {
    align-items: flex-start;
    height: 10rem;
  }
}
</style>
