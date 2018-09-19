<template>
  <div id="app">
    <h1>test pring</h1>
    <button @click="test()">このボタンを押して new User()の実験をしましょう</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from './models/user';

@Component
export default class App extends Vue {
  private async test() {
    const user = new User();
    user.name = 'test user';
    try {
      await user.save();
      console.log('成功しました！');
    } catch (e) {
      console.log('失敗しました orz');
      console.log(e);
    }
  }
}
</script>
