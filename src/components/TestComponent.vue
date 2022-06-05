<template>
  <p>Posting Count: {{ postings.length }}</p>
  <li v-for="posting in postings">
    {{ posting.id }} - {{ posting.title }} - {{ posting.owner }}
  </li>
  <button @click="getPostings">Get Postings</button>
  <br/>
  <button @click="addPosting">Add Posting</button>
  <br/>
  <br/>
  <p>
    <input type="text" v-model="id" name="id" placeholder="Posting ID to update ...">
  </p>
  <button @click="updatePosting">Update Posting</button>
  <br/>
  <br/>
  <p>
    <input type="text" v-model="deletedId" name="deletedId" placeholder="Posting ID to delete ...">
  </p>
  <button @click="deletePosting" class="bg-red-700">Delete Posting</button>
</template>

<script>
import {DataStore} from "@aws-amplify/datastore";
import {Posting} from "../models";
import ArchDataStoreService from "../lib/services/ArchDataStoreService";

export default {
  name: "TestComponent",
  data() {
    return {
      id: null,
      deletedId: null,
      postings: []
    }
  },
  created() {
    //Subscribe to changes
    this.subscription = DataStore.observe(Posting).subscribe(async msg => {
      await this.getPostings()
    });
  },
  methods: {
    getPostings: async function () {
      this.postings = await ArchDataStoreService.models.Posting.getAll()
    },
    addPosting: async () => {
      await ArchDataStoreService.models.Posting.create({
        "title": `Posting at: ${(new Date()).toLocaleTimeString()}`,
        "url": "https://tigimo.vercel.app"
      })
    },
    updatePosting: async function () {
      await ArchDataStoreService.models.Posting.update(this.id, {
        title: `title updated at - ${(new Date()).toLocaleTimeString()}`
      })
    },
    deletePosting: async function () {
      await ArchDataStoreService.models.Posting.delete(this.deletedId)
    }
  }
}
</script>

<style scoped>

</style>