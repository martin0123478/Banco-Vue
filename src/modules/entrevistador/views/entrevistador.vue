<template>
  <body>
        <main>
            <div class="container">
                <header class="header">
                    <h1 class="header__logo">BBVA
                      <img src="@/assets/images/BBVA-logo.png" alt="logo">
                    </h1>
                    <div class="buttons">
                        <button class="header__notification">
                            <img class="notificacion" src="@/assets/images/notificacion.png" alt="">
                        </button>
                        <button class="header__menu" id="header__menu">
                            <span class="burguer"></span>
                        </button>
                    </div>
                </header>
                <div class="mainContent">
                    <aside class="menu" id="menu">
                        <div class="blackBack" id="blackBack"></div>
                        <section class="menuContent">
                            <div class="perfil">
                                <div class="perfilImg">
                                    <img src="" alt="">
                                </div>
                                <h2>¡Bienvenido Alan!</h2>
                                <h6 class="area">Recursos Humanos</h6>
                            </div>
                            <nav>
                                <router-link to="/entrevista">Lista Candidatos</router-link>
                                
                              
                                <router-link to="/login">Cerrar sesion</router-link>
                            </nav>
                        </section>
                    </aside>
                <div class="principal">
            
          
           <router-view/> 

       
        </div>
                </div>
            </div>
        </main>
        
    </body>
</template>

<script>
export default {

}
</script>

<style scoped>
:root{
    --color-primario:#01599B;
    --color-primario-light:rgba(1,89,155,.5);
    --color-secundario:#2C93E0;
    --color-terciario:#FFFFFF;
    -color-botones:#0F74BE;
    -color-texto:#000000;
    --text-menu:Droid Sans;
  }
*{
    margin: 0;
    padding: 0;
	-moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	
	color:#000000;
}

  
b, strong{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	font-weight: 600;
	font-weight: bold\9;
}
h1, h1, h3, h4, h5, h6, span, p, b, a, li, br, label{
    font-size: 16px ;
    line-height: 24px;
}
img{
	display: block;
	width: 100%;
}
@media screen and (-webkit-min-device-pixel-ratio:0) {

	Body {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	
	b {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-weight: 600;
	}
}
html {
    
}
a {
	outline: none;
	text-decoration: none;
	cursor: pointer;
}
button{
    border: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
}
.header{
    max-width: 100%;
    padding: 1rem;
    height: 72px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: #01599B;
}
.header h1{
    max-width: 120px;
    font-size: 0;
    line-height: 1px;
}
.header .buttons button{
    width: 30px;
    height: 30px;
    margin: 0 .5rem;    
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    position: relative;
}
.header .buttons button:first-of-type{
    margin-left: 0;
}
.header .buttons button:last-of-type{
    margin-right: 0;
}
.header .buttons button.header__menu{
    display: none;
    position: relative;
}
.header .buttons button.header__menu .burguer,
.header .buttons button.header__menu .burguer::before,
.header .buttons button.header__menu .burguer::after{
    width: 75%;
    height: 2px;
    background-color: var(--color-terciario);
}
.header .buttons button.header__menu .burguer{
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: all ease-in-out .35s;
}
.header .buttons button.header__menu .burguer::before,
.header .buttons button.header__menu .burguer::after{
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    transition: all ease-in-out .35s;
}
.header .buttons button.header__menu .burguer::before{
    top: -7px;
}
.header .buttons button.header__menu .burguer::after{
    top: 6px;
}
.header .buttons button.header__menu.openMenu .burguer{
    background-color: var(--color-primario);
}
.header .buttons button.header__menu.openMenu .burguer::before{
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    -moz-transform: translate(-50%, -50%) rotate(-45deg);
    -ms-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
}
.header .buttons button.header__menu.openMenu .burguer::after{
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
}
.mainContent{
    display: flex;
    align-items: center;
    align-items: flex-start;
    justify-content: space-between;
}
.menu{
    width: 20%;
    min-width: 282px;
    min-height: calc(100vh - 72px);
    position: relative;
}
.blackBack{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    transition: all ease-in-out .35s;
    background-color: rgba(0,0,0,.75);
    opacity: 0;
}
.menuContent{
    height: calc(100vh - 72px);
    position: relative;
    background-color: var(--color-secundario);
    z-index: 10;
}
.perfil{
    padding: 2rem;
    text-align: center;
}
.perfilImg{
    width: 120px;
    height: 120px;
    margin: 0 auto .75rem;
    display: block;
    border-radius: 100%;
    border: 4px solid var(--color-terciario);
    background-image: url(@/assets/images/user.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
    overflow: hidden;
}
.perfil h2{
    color:  var(--color-terciario);
    font-size: 1.5rem;
    font-weight: normal;
}
.perfil h6{
    font-size: 1.125rem;
    color: var(--color-terciario);
}
.menu nav{
    margin: .5rem auto 0;
}
.menu nav a{
    padding: 1rem;
    margin: 0 auto.5rem;
    display: block;
    color: var(--color-terciario);
    font-size: 1.12rem;
    font-weight: normal;
    transition: all ease-in-out .35s;
    background-color: #01599B;
}
.menu nav a:hover{
    background-color: var(--color-primario-light);
}
.menu nav a:last-of-type{
    margin: 0;
    padding: 1rem 2.5rem 1rem 1rem;
    bottom: 1rem;
    position: absolute;
    background: none;
}
.menu nav a:last-of-type::after{
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: .5rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background-image: url(@/assets/images/log-out.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    -webkit-filter: invert();
    filter: invert();
}
.principal{
    width: 80%;
    min-height: calc(100vh - 72px);
    padding: 2rem;
    text-align: left;
}
.principal{
  grid-column: 2/6;
  grid-row: 2/7;
}

.cabecera{
    display: inline;
}

.row{
    display: grid;
    grid-template-columns: repeat(6,1fr);
    row-gap: 25px;
    
    padding: 10px;
}
.row:hover{
    background-color:#A6A6A6;
}
.row1{
    display: grid;
    grid-template-columns: repeat(6,1fr);
    
}
.principal__cabecera--input::placeholder{
    text-transform: lowercase;
    font-family: "Font Awesome 6 free"; 
    font-weight: 800;
}
.principal__cabecera--input:focus{
    outline: none;
}


.tabla{
  display: grid;
  grid-template-columns: repeat(6,1fr);
  /* grid-template-rows: repeat(4,1fr); */
  max-width: 100vw;
  justify-items:flex-start;
  align-items:flex-start;
  row-gap: 30px;
  column-width: auto; 
}
.tabla__borrar{
  width: 18px;
}
.tabla__borrar:hover{
  cursor: pointer;
}
.titulo{
  font-size: 18px;
  font-weight: bold;
}
.titulo_icon{
  width: 10px;
}
.item{
  font-size: 1.8rem;
 
}

.input-icon {
  color: #191919;
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.formulario{
    display: flex;
    flex-direction: column;
}
.campo{
    margin-bottom: 20px;
}

.campo label{
    display: block;
    font-size: 14px;
    font-weight:normal;
}
.form-input{
    width: 300px;
    height: 48px;
    border-radius: 4px;
    border: 1px solid black;
}
.button{
    width: 140px;
    height: 48px;
    background-color: var(--color-primario);
    color: var(--color-terciario);
    border-radius: 5px;
    border: 1px saddlebrown var(--color-primario);
    text-align: center;
}


@media only screen and (max-width:600px){
    .container{
        width: 100%;
    }
.principal__cabecera{
  display: block;
}
    .menu{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: -100%;
        display: flex;
        justify-content: flex-end;
        transition: all ease-in-out .35s;
        transition-delay: .5s;
    }
    .menu.open{
        right: 0;
    }
    .menu.open .blackBack{
        opacity: 1;
        transition-delay: .75s;
    }
    .header .buttons button.header__menu{
        display: inline-flex;
    }
    .menuContent{
        width: 100%;
        max-width: 85%;
        height: 100%;     

    }
    .principal {
        width: 100vw;
    }
    .header .buttons button.header__menu .burguer::after{
        top: 7px;
    }
.principal__cabecera--titulo{
    text-align: left;
  }
  .principal__cabecera--input{
    width: 300px;
    height: 35px;
   /* text-align: left; */
    /* margin-left: 5px; */
    
  }
  .principal__cabecera--titulo{
    text-align: left;
    margin-bottom: 15px
    
  }
  #tabla{
    
    width: auto;
    
  }
  
  .titulo,
  .item{
    place-self:center;
  }
  .item1{
    display: none;
  }
  .tabla__borrar{
    width: 25px ;
  }
  .form-input{
    width: 220px;
  }
  .formulario{
    align-items: center;
  }
  #tabla{

  }

  .name,.pos,.esta,.fech{
    font-size: 15px;
  }
  .section_table{
    justify-content: center;
  }
}


b, strong{
    font-family: 'Droid Sans', 'Arial Narrow', Arial, sans-serif;
	font-weight: bold;
	font-weight: bold\9;
}
h1, h1, h3, h4, h5, h6, span, p, b, a, li, br, label{
    font-size: 16px ;
    line-height: 24px;
}
img{
	display: block;
	width: 100%;
}
@media screen and (-webkit-min-device-pixel-ratio:0) {

}
html {
}
a {
	outline: none;
	text-decoration: none;
	cursor: pointer;
}
button{
    border: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
}
/* .header{
    padding: 1rem;
    height: 79px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primario);
} */
.header h1{
    max-width: 138px;
    font-size: 0;
    line-height: 1px;
}
.header .buttons button{
    width: 38px;
    height: 38px;
    margin: 0 .5rem;    
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    position: relative;
}
.header .buttons button:first-of-type{
    margin-left: 0;
}
.header .buttons button:last-of-type{
    margin-right: 0;
}
.header .buttons button.header__menu{
    display: none;
    position: relative;
}
.header .buttons button.header__menu .burguer, .menuOpn .burguer,
.header .buttons button.header__menu .burguer::before, .menuOpn .burguer::before,
.header .buttons button.header__menu .burguer::after, .menuOpn .burguer::after{
    width: 75%;
    max-width: 38px;
    height: 2px;
    background-color: var(--color-terciario);
}
.header .buttons button.header__menu .burguer,  .menuOpn .burguer{
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: all ease-in-out .35s;
}
.header .buttons button.header__menu .burguer::before,  .menuOpn .burguer::before,
.header .buttons button.header__menu .burguer::after,  .menuOpn .burguer::after{
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    transition: all ease-in-out .35s;
}
.header .buttons button.header__menu .burguer::before{
    top: -9px;
}
.header .buttons button.header__menu .burguer::after{
    top: 6px;
}
.header .buttons button.header__menu.openMenu .burguer{
    background-color: var(--color-primario);
}
.header .buttons button.header__menu.openMenu .burguer::before{
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    -moz-transform: translate(-50%, -50%) rotate(-45deg);
    -ms-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
}
.header .buttons button.header__menu.openMenu .burguer::after{
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
}
.mainContent{
    display: flex;
    align-items: center;
    align-items: flex-start;
    justify-content: space-between;
}
.menu{
    width: 20%;
    min-width: 282px;
    min-height: calc(100vh - 79px);
    position: relative;
    z-index: 20;
}
.blackBack{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    transition: all ease-in-out .35s;
    background-color: rgba(0,0,0,.75);
    opacity: 0;
}
.menuContent{
    height: calc(100vh - 79px);
    position: relative;
    background-color: #2C93E0;
    z-index: 10;
}
.perfil{
    padding: 1.5rem 2rem 1rem;
    text-align: center;
}
.perfilImg{
    width: 108px;
    height: 108px;
    margin: 0 auto .75rem;
    display: block;
    border-radius: 100%;
    border: 4px solid var(--color-terciario);
    background-image: url(@/assets/images/user.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
    overflow: hidden;
}
.perfil h2{
    color:  var(--color-terciario);
    font-size: 1.1875rem;
    line-height: 1.375rem;
    font-weight: bold;
}
.perfil h6{
    margin: .25rem auto 0;
    color: var(--color-terciario);
    font-size: 0.875rem;
    line-height: 1.375;
}
.menu nav{
    margin: 0 auto;
}
.menu nav a.menu__opc{
    padding: 1rem;
    margin: 0 auto.5rem;
    display: block;
    color: var(--color-terciario);
    font-size: 1.1875rem;
    line-height: 1.375rem;
    font-weight: normal;
    transition: all ease-in-out .35s;
    background-color: #01599B;
}
.menu nav a.menu__opc.acordion_tit{
    padding: 1.188rem 1rem 1.188rem 2.5rem;
    margin: 0 auto;
    position: relative;
    font-size: 1.1875rem;
    font-weight: bold;
}
.menu nav a.menu__opc.acordion_tit::before{
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: 1rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    transition: all ease-in-out .35s;
    border-top: 5px solid transparent;
    border-left: 8px solid var(--color-terciario);
    border-bottom: 5px solid transparent;
}
.menu nav a.menu__opc.acordion_tit.open::before{
    -webkit-transform: translateY(-50%) rotate(90deg);
    -moz-transform: translateY(-50%) rotate(90deg);
    -ms-transform: translateY(-50%) rotate(90deg);
    transform: translateY(-50%) rotate(90deg);
}
.menu nav a.menu__opc:hover{
    background-color: var(--color-primario-light);
}
.menu nav a.menu__opc:last-of-type{
    margin: 0;
    padding: 0 2.5rem 0 1rem;
    bottom: .75rem;
    position: absolute;
    background: none;
}
.menu nav a.menu__opc:last-of-type::after{
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: .5rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background-image: url(@/assets/images/log-out.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    -webkit-filter: invert();
    filter: invert();
}
.menu__acordion{
    height: 0;
    overflow: hidden;
}
.menu nav a.menu__opc.acordion_tit.open + .menu__acordion{
    height: auto;
    overflow: auto;
}
.menu__acordion a.acordion__opc{
    display: block;
    padding: 1.188rem 1rem 1.188rem 3.5rem;
    color: var(--color-terciario);
    font-size: 1.5rem;
    line-height: 1.75rem;
    position: relative;
    transition: all ease-in-out .35s;
    border-width: 1px 0 0 0;
    border-style: solid;
    border-color: var(--color-terciario);
    background-color: var(--color-botones);
}
.menu__acordion a.acordion__opc::before{
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 2rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
}
.menu__acordion a.acordion__opc.dashboard::before{
    background-image: url(@/assets/images/dashboard.png);
}
.menu__acordion a.acordion__opc.grafico::before{
    background-image: url(@/assets/images/graphic.png);
}
.menu__acordion a.acordion__opc:last-of-type{
    border-width: 1px 0 1px 0; 
}
.menu__acordion.acordion_rh .acordion__opc.dashboard{
    font-size: 1rem;
}
.menu__acordion a.acordion__opc:hover{
    background-color: var(--color-botones-hov);
}
.principal{
    padding: 2rem;
    width: 80%;
    min-height: calc(100vh - 79px);
    max-height: calc(100vh - 79px);
    overflow-y: scroll;
}
.menuOpcionesEdicion{
    width: 100%;
    padding: .75rem .5rem;
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-primario);
}
.menuOpcionesEdicion .opn_registro{
    min-width: 56px;
    width: 56px;
    height: 56px;
    margin: 0 10%;
    display: inline-flex;
    position: relative;
    font-size: 0;
    /*background: red;*/
}
.menuOpcionesEdicion .opn_registro.roundButton{
    border-width: 2px;
    border-style: solid;
    border-radius: 100%;
    overflow: hidden;
}
.menuOpn .burguer::before{
    top: 12px;
}
.menuOpn .burguer::after{
    top: -12px;
}
.menuOpcionesEdicion .opn_registro.roundButton.agregar{
    border-color:  var(--color-terciario);
}
.menuOpcionesEdicion .opn_registro.roundButton.eliminar{
    border-color:  var(--color-red);
}
.menuOpcionesEdicion .opn_registro.roundButton::before, .menuOpcionesEdicion .opn_registro.roundButton::after{
    content: '';
    width: 60%;
    height: 2px;
    position: absolute;
    left: 50%;
    top: 50%;
}
.menuOpcionesEdicion .opn_registro.roundButton.agregar::before, .menuOpcionesEdicion .opn_registro.roundButton.agregar::after{
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: var(--color-terciario);
}
.menuOpcionesEdicion .opn_registro.roundButton.agregar::after{
    -webkit-transform: translate(-50%, -50%) rotate(90deg);
    -moz-transform: translate(-50%, -50%) rotate(90deg);
    -ms-transform: translate(-50%, -50%) rotate(90deg);
    transform: translate(-50%, -50%) rotate(90deg);
}
.menuOpcionesEdicion .opn_registro.roundButton.eliminar::before{
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    -moz-transform: translate(-50%, -50%) rotate(-45deg);
    -ms-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
    background-color: var(--color-red);
}
.menuOpcionesEdicion .opn_registro.roundButton.eliminar::after{
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: var(--color-red);
}
@media only screen and (max-width:768px){
    .menu{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: -100%;
        display: flex;
        justify-content: flex-end;
        transition: all ease-in-out .35s;
        transition-delay: .5s;
    }
    .menu.open{
        right: 0;
    }
    .menu.open .blackBack{
        opacity: 1;
        transition-delay: .75s;
    }
    .header .buttons button.header__menu{
        display: inline-flex;
    }
    .menuContent{
        width: 100%;
        max-width: 50%;
        height: 100%;     
    }
    .principal {
        width: 100%;
    }
    .header .buttons button.header__menu .burguer::after{
        top: 9px;
    }
    .menuOpcionesEdicion{
        display: flex;
    }
}

@media only screen and (max-width:500px){
    .menuContent{
        max-width: 70%;     
    }
    .menuOpcionesEdicion .opn_registro{
        margin: 0 2rem;
    }
}

@media only screen and (max-width:375px){
    .menuContent{
        max-width: 80%;     
    }
}
</style>
