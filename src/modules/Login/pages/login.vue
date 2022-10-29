<template>
<body>
    <header class="header">
        <h1 class="header__logo">BBVA
          <img src="@/assets/images/BBVA-logo.png" alt="logo">
        </h1>
    </header>
    <h2 class="titulo">Login</h2>
    <div class="content">
        <div class="container">
            <formLogin/>
            <div class="imagenApoyo">
                <img src="@/assets/images/login.png">
            </div>
        </div>
    </div> 
</body>
 
</template>

<script>
import formLogin from '../components/formLogin.vue'
export default {
    components:{
       formLogin
    }
}
</script>

<style scoped>
body{
    background-color: #0f74be;
    width: 100%;
    height: 100%;
}
h2{
    margin: 2rem auto 2rem;
    color: #fff;
    font-size: 40px;
    font-family: 'Inika';
    text-align: center;
    /*font-family: 'Droid Sans', Arial, Helvetica, sans-serif;*/
}
.header{
    padding: 1rem;
    height: 79px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.header h1{
    max-width: 138px;
    font-size: 0;
    line-height: 1px;
}
/*.content{
    display: flex;
    justify-content: center;
    margin: auto;
}*/
.container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}



@media(min-width:769px){
    .titulo{
        font-size: 64px;
        line-height: 64px;
        margin: 0 auto;
    }
    .container{
        max-width: 1000px;
        margin: 0 auto;
        padding: 1rem;
        flex-direction: row;
    }
    .formulario, .imagenApoyo{
        width: 55%;
    }
    .formulario{
        width: 40%;
        padding: 20px 60px 40px;
    }
    .imagenApoyo{
        width: 55%;
        margin: 0;
        max-width: initial;
    }
    /*.imagenApoyo img{
        width: auto;
        min-height: 350px;
    }*/
}

@media screen and (max-width: 768px){
    .header{
        display: none;
    }
}


</style>