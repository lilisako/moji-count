<template>
  <div>
    <div class="relative　items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <div class="w-full max-w-4xl mx-auto sm:px-6 lg:px-8">
        <!-- counter -->
        <div class="flex items-center justify-center p-4 pt-8">
          <p class="text-xl">現在の文字数</p>
          <h1 class="text-6xl font-bold">{{ message.length }}</h1>
          <p class="text-xl">字</p>
        </div>
        <!-- counter -->
        <!-- other counter -->
        <div class="flex items-center justify-center">
          <p class="">原稿用紙</p>
          <h1 class="text-3xl font-bold">{{ (message.length / 400).toFixed(2) }}</h1>
          <p class="">枚</p>
        </div>
        <!-- other counter -->
        <!-- textarea -->
        <div class="mt-3 bg-white overflow-hidden shadow sm:rounded-lg p-4">
          <textarea v-model.trim="message" id="" class="w-full outline-none" rows="15"></textarea>
        </div>
        <!-- textarea -->
        <div class="p-3 pb-0 flex items-center justify-center text-xs">
          <p>※現在使用しているブラウザに内容が保存されます。個人情報などの漏洩すると危険な情報は入力しないでください。</p>
        </div>
        <div class="flex items-center justify-center p-2">
          <button v-on:click="postLocalStorage(message)" class="bg-white shadow sm:rounded-lg p-4">ブラウザに内容を保存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLocalStorage, postLocalStorage } from "../helpers/localStorage"
export default {
  mounted: function() {
    const str = getLocalStorage()
    if(typeof str !== 'undefined') this.message = str

    // add shortcuts 
    window.addEventListener("keydown", function(e) {
      if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          this.postLocalStorage(this.message);
      }
    }.bind(this));
  },
  components: {
    
  },
  data: function () {
    return {
      message: ""
    }
  },
  methods: {
    getLocalStorage: getLocalStorage,
    postLocalStorage: postLocalStorage
  }
}
</script>
