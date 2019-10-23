<template>
    <div>
         <h1> {{ animal.name }} ({{$route.params.species}}) </h1>
         <h2> Age: {{ animal.age }} years old </h2>
         <p> Breed: {{ animal.breed }} </p>
    
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data(){
    return {
        animal : {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted(){
        const animal = this[this.$route.params.species][this.$route.params.id]
        this.animal =  animal 

    }
  }

</script>