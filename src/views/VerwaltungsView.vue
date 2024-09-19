<template>
  <div class="d-flex justify-center">
    <div style="width: 1300px">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">VerwaltungsView</h1>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.kundenname" label="Kundenname"/>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.text1" label="Überschrift"/>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.text2" label="Inhalt"/>
        </v-col>
        <v-col cols="4">
          <v-file-input v-model="icon1File" accept="image/*" label="icon1 auswählen"
                        @change="convertIconToBase64('icon1', icon1File)"/>
          <v-img :src="kunde.icon1" height="50" width="50"/>
        </v-col>
        <v-col cols="4">
          <v-file-input v-model="icon2File" accept="image/*" label="icon2 auswählen"
                        @change="convertIconToBase64('icon2', icon2File)"/>
          <v-img :src="kunde.icon2" height="50" width="50"/>
        </v-col>
        <v-col cols="4">
          <v-file-input v-model="icon3File" accept="image/*" label="icon3 auswählen"
                        @change="convertIconToBase64('icon3', icon3File)"/>
          <v-img :src="kunde.icon3" height="50" width="50"/>
        </v-col>
        <v-col cols="4">
          <v-file-input v-model="icon4File" :disabled="true" accept="image/*" label="icon4 auswählen"
                        @change="convertIconToBase64('icon4', icon4File)"/>
        </v-col>
        <v-col cols="4">
          <v-file-input v-model="icon5File" :disabled="true" accept="image/*" label="icon5 auswählen"
                        @change="convertIconToBase64('icon5', icon5File)"/>
        </v-col>
        <v-col cols="4">
          <v-file-input v-model="icon6File" :disabled="true" accept="image/*" label="icon6 auswählen"
                        @change="convertIconToBase64('icon6', icon6File)"/>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.text3" :disabled="true" label="text3"/>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.text4" :disabled="true" label="text4"/>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.text5" :disabled="true" label="text5"/>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.text6" :disabled="true" label="text6"/>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.text7" :disabled="true" label="text7"/>
        </v-col>
        <v-col cols="4">
          <v-file-input v-model="imageFile" accept="image/*" label="Bild" @change="convertImageToBase64(imageFile)"/>
          <v-img :src="kunde.image" height="50" width="50"/>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.farbe1" label="farbe1"/>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.farbe2" label="farbe2"/>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="kunde.farbe3" :disabled="true" label="farbe3"/>
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="kunde.head" :disabled="true" label="head"/>
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-row class="justify-center">
          <v-col class="d-flex justify-end" cols="4">
            <v-btn @click="speichern">
              Speichern
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-start" cols="4">
            <v-btn @click="löschen">
              Löschen
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'HomeWithParam',
  data() {
    return {
      kunde: {
        "kundenname": "",
        "head": "",
        "icon1": "",
        "icon2": "",
        "icon3": "",
        "icon4": "",
        "icon5": "",
        "icon6": "",
        "text1": "",
        "text2": "",
        "text3": "",
        "text4": "",
        "text5": "",
        "text6": "",
        "text7": "",
        "image": "",
        "farbe1": "",
        "farbe2": "",
        "farbe3": ""
      },
      imageFile: null,
      icon1File: null,
      icon2File: null,
      icon3File: null,
      icon4File: null,
      icon5File: null,
      icon6File: null
    }
  },
  methods: {
    löschen() {
      this.kunde = {
        "kundenname": "",
        "head": "",
        "icon1": "",
        "icon2": "",
        "icon3": "",
        "icon4": "",
        "icon5": "",
        "icon6": "",
        "text1": "",
        "text2": "",
        "text3": "",
        "text4": "",
        "text5": "",
        "text6": "",
        "text7": "",
        "image": "",
        "farbe1": "",
        "farbe2": "",
        "farbe3": ""
      };
      this.imageFile = null;
      this.icon1File = null;
      this.icon2File = null;
      this.icon3File = null;
      this.icon4File = null;
      this.icon5File = null;
      this.icon6File = null;
    },
    convertImageToBase64(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.kunde.image = reader.result;
      };
    },
    convertIconToBase64(iconField, file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.kunde[iconField] = reader.result;
      };
    },
    async speichern() {
      try {
        const response = await axios.post('/kunde', this.kunde);
        console.log('Kunde erfolgreich gespeichert', response.data);
      } catch (error) {
        console.error('Fehler beim Speichern des Kunden', error);
      }
    }
  }
};
</script>

<style scoped>
.row {
  width: 100%;
}
</style>
