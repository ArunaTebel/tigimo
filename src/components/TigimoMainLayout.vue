<template>
  <div class="overflow-y-hidden bg-gray-200"
       style="min-height: 400px; height:100vh">
    <TigimoNavbar :authUser="authUser"/>
    <TigimoPostingListComponent/>
  </div>
</template>

<script>
import {Auth, Hub} from 'aws-amplify';
import TigimoNavbar from "./TigimoNavbar.vue";
import TigimoPostingListComponent from "./TigimoPostingListComponent.vue";
import {DataStore} from "@aws-amplify/datastore";

export default {
  name: "TigimoMainLayout",
  components: {TigimoPostingListComponent, TigimoNavbar},
  data() {
    return {
      authUser: false
    }
  },
  async created() {
    try {
      this.authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
    } catch (e) {
      this.authUser = false;
    }
    const listener = (data) => {
      switch (data.payload.event) {
        case 'signIn':
          location.reload();
          break
        case 'signOut':
          DataStore.clear();
          location.reload();
      }
    }
    Hub.listen('auth', listener);
  },
};
</script>
