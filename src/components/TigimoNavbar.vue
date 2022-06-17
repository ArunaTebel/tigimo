<template>
  <TigimoAuthenticatorComponent v-if="!authUser && showSignInModal"/>
  <div class=" bg-white ">
    <nav class=" 2xl:mx-auto sm:py-3 sm:px-4 py-2 px-1">
      <!-- For large and Medium-sized Screen -->
      <div class="flex justify-between ">
        <div class=" flex space-x-1 items-center">
          <img width="125" src="../assets/textual-logo.svg" alt="circle"/>
          <span class=" font-bold text-2xl text-yellow-500 mt-1.5">| TIGIMO</span>
        </div>
        <div class="hidden sm:flex flex-row space-x-4">
          <div class="mt-2">{{ authUser ? `Hello, ${authUser.username}` : '' }}</div>
          <button @click="signInOutBtnClickHandler"
                  class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
            {{ authUser ? 'Sign Out' : 'Sign In' }}
          </button>
        </div>

        <!-- Burger Icon -->
        <div id="bgIcon" @click="toggleMenu()"
             class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex justify-center items-center sm:hidden cursor-pointer">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg" alt="burger"/>
          <img class=" hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg" alt="cross"/>
        </div>
      </div>

      <!-- Mobile and small-screen devices (toggle Menu) -->
      <div id="MobileNavigation" class="hidden sm:hidden mt-4 mx-auto">
        <div class="flex flex-col gap-4 mt-4 w-80 mx-auto ">
          <button
              class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import TigimoAuthenticatorComponent from "./TigimoAuthenticatorComponent.vue";
import {Auth} from 'aws-amplify';

export default {
  name: 'TigimoNavbar',
  components: {TigimoAuthenticatorComponent},
  props: {
    authUser: Object | Boolean
  },
  data() {
    return {
      showSignInModal: false
    }
  },
  methods: {
    toggleMenu() {
      const icon = document.getElementById('bgIcon');
      const childEle = icon.children;
      childEle[0].classList.toggle('hidden');
      childEle[1].classList.toggle('hidden');
    },
    async signOut() {
      try {
        await Auth.signOut();
      } catch (error) {

      }
    },
    signIn() {
      this.showSignInModal = true;
    },
    signInOutBtnClickHandler() {
      if (this.authUser) {
        this.signOut()
      } else {
        this.signIn()
      }
    }
  }
}
</script>

<style>

</style>