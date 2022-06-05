import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import "@aws-amplify/ui-vue/styles.css";
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import PubSub from "@aws-amplify/pubsub";

Amplify.configure(awsconfig);
PubSub.configure(awsconfig);
createApp(App).mount('#app')
