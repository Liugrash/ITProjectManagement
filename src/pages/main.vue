<template>
    <div class="root">
       <div class="wrap">
         
                <div class="logo">
                    <p>SCUT EXPRESS</p>
                </div>
                <el-menu mode="horizontal" class="rightnav" >
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">服务</el-menu-item>
                    <el-menu-item index="3">加入我们</el-menu-item>
                </el-menu>
                <el-button type="primary" class="nav-btn" @click="login">登录</el-button>
           
       </div>
       <div class="swiper">
           <el-carousel height="600px" >
             <el-carousel-item class="pic">
                 <div class="img">
                      <img src="../resource/img/1.png" alt="">
                 </div>
             </el-carousel-item>
              <el-carousel-item >
                  <img src="../resource/img/shunfeng.jpeg" alt="">
                 
             </el-carousel-item>
              <el-carousel-item >
                 
                 <img src="../resource/img/zhogntong.jpeg" alt="">
                  
             </el-carousel-item>
            </el-carousel>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods: {
            login(){
                this.$router.push('/login')
            }
        }
    }
</script>

<style  scoped>
.root{
    margin:0px;
    padding:0px;
}
.wrap{
    height:100px;
    width: 100vw;
}
.logo{
    position: absolute;
    left:50px;
}

.logo p{
    font-size: 30px;
    color: #cee002;
    font-weight: 800;
}
.rightnav{
    position:absolute;
    top:30px;
    right: 200px;
}
.nav-btn{
    position: absolute;
    top: 40px;
    right: 50px;
}
.swiper{
    height:calc(100vh-140px);
    width:100vw;
}
.swiper img{
    height: 100%;
    width:100%;
}
/* .menu{
    position: absolute;
    top: 20px;
    right: 40px;
}

.menu ul li{
    list-style: none;
    display: inline-block;
    padding: 40px;
}

.active{
    color: #cee002;
} */
</style>