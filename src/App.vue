<template>
  <div class="app">
      <button class="button is-fullwidth has-text-weight-bold" @click="connectWallet" v-if="!currAccount">Connect Wallet</button>
      <div class="connected" v-else>
        <p class="block has-text-centered">Address: {{ currAccount }}</p>
        <button class="button is-fullwidth has-text-weight-bold block" @click="mintNFT">{{ status }}</button>
        <p v-if="transaction" class="has-text-centered">{{ transaction }}</p>
      </div>
  </div>
</template>

<script>

import { onBeforeMount, ref} from '@vue/runtime-core'
import connectWallet from '@/composables/connectWallet'
import { getWallet, currAccount } from '@/composables/getWallet'
import {mintNFT, status, transaction} from '@/composables/mintNFT'

export default {
  name: 'App',
  setup(){
      onBeforeMount(()=>{
          getWallet()
      })

      return {connectWallet, currAccount, mintNFT, status, transaction}
  }
}
</script>

<style>
.app{
  width: 40%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
