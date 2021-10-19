<template>
    <div class="root">
        <div class="login-card">
            <h2>登录</h2>
            <div class="input">
                 <div class="font">用户名：</div>
                 <el-input v-model="username" label="用户名" placeholder="请输入用户名" class="username"></el-input>
            </div>
            <div class="input">
                <div class="font">密码：</div><el-input placeholder="请输入密码" v-model="password" show-password class="password"></el-input>
            </div>
            <div class="btn">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="text" @click="create">尚未注册？立即注册</el-button>
            </div>
           
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                username:"",
                password:""
            }
        },
        methods: {
            login(){
                this.$message({
                    message:"登录成功",
                    type:"success",
                    onClose:()=>{
                        this.$router.push("/in")
                    }
                })
            },
            create(){
                console.log("create account")
            }
        }
    }
</script>

<style  scoped>
.root{
    padding: 100px 500px;
    margin: 0;
   
    height: 100vh;
    background: url(../resource/img/login-bg.jpeg) no-repeat;
    background-position:0% 0%;
    background-size:cover;
    
}
 .login-card{
        /* width:650px; */
        /* margin:100px auto; */
        border:5px dashed #409EFF;
        border-radius: 10px;
        padding:20px;
        padding-top:0;

    }
    h2{
        text-align: center;
    }
    .input{
        display: flex;
    }
    .input .font{
        width: 80px;
        height:40px;
        line-height: 40px;
    }
    .username{
        margin-bottom: 20px;
    }
    .password{
        margin-bottom:40px;
    }
    .btn {
        display: flex;
        justify-content: center;
    }
</style>