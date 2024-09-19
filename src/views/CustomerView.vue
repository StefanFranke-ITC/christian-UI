<template>
  <div v-if="loadetdata">
    <h1 class="text-center mt-3">{{kunde.kundenname}}</h1>
    <v-row style="width: 100%; height: 700px" class="mx-0">
      <v-col cols="6">
        <div  class="card" :style="'background-color:'+ kunde.farbe1 "  >
          <h2 class="text-center">{{kunde.text1}}</h2>
          <p class="px-16 mt-5" style="text-align: justify;">{{kunde.text2}}</p>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="card" >
          <v-img :src="kunde.image" style="width: 100%; height: 100%" cover></v-img>
        </div>
      </v-col>
    </v-row>

    <v-row style="width: 100%; height: 300px" class="mx-0">
      <v-col class="d-flex justify-center" cols="4">
        <div :style="'border: solid 5px '+ kunde.farbe2" style="height: 300px; width: 300px; border-radius: 10px; background-color: #cfcfcf">
          <v-img :src="kunde.icon1"></v-img>
        </div>
      </v-col>
      <v-col class="d-flex justify-center" cols="4">
        <div :style="'border: solid 5px '+ kunde.farbe2" style="height: 300px; width: 300px; border-radius: 10px; background-color: #cfcfcf">
          <v-img :src="kunde.icon2"></v-img>
        </div>
      </v-col>
      <v-col class="d-flex justify-center" cols="4">
        <div :style="'border: solid 5px '+ kunde.farbe2" style="height: 300px; width: 300px; border-radius: 10px; background-color: #cfcfcf">
          <v-img :src="kunde.icon3"></v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>


<script>


import axios from "axios";

export default {
  name: 'HomeWithParam',
  props: ['param'],

  data(){
    return{
      loadetdata: false,
      kunde:{
        id: 0,
        kundenname: "Kunde1",
        head: "test",
        icon1: "test",
        icon2: "string",
        icon3: "string",
        icon4: "string",
        icon5: "string",
        icon6: "string",
        text1: "string",
        text2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        text3: "string",
        text4: "string",
        text5: "string",
        text6: "string",
        text7: "string",
        image: "string",
        farbe1: "string",
        farbe2: "string",
        farbe3: "string"
      },
    }
  },
 async mounted() {
    this.loadetdata = false
   await this.getPage()
    this.loadetdata = true
  },
  methods:{
    async getPage(){
     let response = await axios.get('/kunde/'+ this.param,{

     })
      this.kunde = response.data
      console.log(response)
    }
  }
};
</script>

<style scoped>
.card{
  width: 100%;
  height: 100%;
  background-color: #cfcfcf;
  border-radius: 20px;
  box-shadow: 3px 3px 6px black;
  padding: 10px 10px 10px 10px;
}
</style>


