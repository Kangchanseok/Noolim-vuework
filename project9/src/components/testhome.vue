<template>
<div>
  <h1>testhome입니다.</h1>
  <h2>id : {{ $route.params.name }}</h2>
  <!-- id값 들어오면 검색창 && 오른쪽 해시태그 선택된 상태로 만듬 -->
</div>
</template>

<script>
export default {
    name: 'Params',
    props: {
        name: {
            type: String,
            default : ''
        }
    }
}
</script>

<style>

</style>