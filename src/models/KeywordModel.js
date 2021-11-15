export default {
  data: [
    // 추천검색어 넣을지?
    {keyword: 'value'}
  ],

  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    })
  }
}
