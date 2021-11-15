const data = [
  // 검색 후 detail 내용
  {
    id: 1,
    name: 'hello',
    image: ''
  },
  {
    id: 2,
    name: '',
    image: ''
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}