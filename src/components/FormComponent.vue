<template>
    <form @submit.prevent="onSubmit">
        <div id="app"
        v-on:keyup.down="selectValue('down')"
        v-on:keyup.up="selectValue('up')">
        <input type="text" v-model="inputValue" placeholder="검색어를 입력하세요" autofocus @keyup="onKeyup">
        <button type="reset" @click="onClickResetBtn" v-show="inputValue.length" class="btn-reset"></button>
        </div>
    </form>
</template>

<script>
export default {
    names: [
  { name: '#서울시' },
  { name: '#서리' },
  { name: '#서규동' },
  { name: '#규리서비' },
  { name: '#송파구' },
  { name: '#잠실' },
  { name: '#잠실 카트장' },
  { name: '#카페 맛집 잠실' },
  { name: '#자리잠' },
  { name: '#시울서' },
  { name: '#just test' },
],
    props:['value'],
    data(){
        return{
            inputValue: this.value
        }
    },
    watch:{
        value(newVal, oldVal){
            this.inputValue = newVal
        }
    },
    methods:{
        onSubmit(){
            this.$emit('@submit',this.inputValue.trim())
        },
        onClickResetBtn(){
            this.inputValue = ''
            this.$emit('@reset')
        },
        onKeyup(){
            if(this.inputValue.length === 0){
                this.$emit('@reset')
            }
        }
    }
}
var app = new Vue({
    el: '#app',
    data: {
        isActive: false,
        searchQuery: '',
        names: names,
  },
  methods: {
    changeValue(str) {
      this.isActive = false;
      document.querySelector('.s').value = str;
    },
    selectValue(keycode, str) {
      if (this.isActive === true) {
        const hasClass = document.querySelector('.r').classList.contains('key');
        if (keycode === 'down') {
          if (!hasClass) {
            const thisEl = document.querySelectorAll('.r li')[0];
            document.querySelector('.r').classList.add('key');
            thisEl.classList.add('sel');
            thisEl.focus();
          } else {
            const lastEl = document.querySelector('.r li:last-child');
            const thisEl = document.querySelector('.r li.sel');
            const nextEl = thisEl.nextElementSibling;
            if (!lastEl.classList.contains('sel')) {
              thisEl.classList.remove('sel');
              nextEl.classList.add('sel');
              nextEl.focus();
            }
          }
        }
        if (keycode === 'up' && hasClass) {
          const firstEl = document.querySelectorAll('.r li')[0];
          const thisEl = document.querySelector('.r li.sel');
          const prevEl = thisEl.previousElementSibling;
          if (!firstEl.classList.contains('sel')) {
            thisEl.classList.remove('sel');
            prevEl.classList.add('sel');
            prevEl.focus();
          } else {
            document.querySelector('.s').focus();
          }
        }
        if (keycode === 'enter' && hasClass) {
          this.changeValue(str);
        }
      }
    },
    removeValue() {
      if (document.querySelector('.r').classList.contains('key')) {
        document.querySelector('.r').classList.remove('key');
        document.querySelector('.r li.sel').classList.remove('sel');
      }
    },
  },
  computed: {
    filterList() {
      const str = this.searchQuery;
      const reg = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9|#|\s]/.test(str);
      console.log(`typing value: ${str}`);
      if (reg === false && str !== '' && str !== ' ') {
        this.isActive = true;
        return this.names.filter((el) => {
          return el.name.match(str);
        });
      } else {
        this.isActive = false;
      }
    },
  },
});
</script>