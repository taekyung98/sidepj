<template>
  <div id="container">
    <div id="contacts">
      <div id="contacts--contact">
        <h5 class="title"> JIDO.VILL</h5>
        <p>GalaSoManDeunJackPeum</p>
      </div>
      <div id="contacts--social">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
  ,data(){
    return{
      mention : '2022 | WELCOME.JIDO.VILLIAGE'
    }
  }
}

</script>

<style scoped>

#container{
  padding-top:20px;
  width:100vw;
  color:#2d477f;
  background-color:#eaeaea;
  display:flex;
  flex-direction:column;
  align-items:center;

}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;

}
#contacts--contact{
  text-align:left;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;
  background-color:#2d477f;
  border-radius:50%;
}
#mentions p {
  margin-top: 1rem;
  font-size:0.5em;
}
</style>