<template>
    <div class="add container">
        <alert v-if="alert"  :message="alert"></alert>
        <h1 class="page-header">
            添加用户
        </h1>
        <form v-on:submit="addCustomer">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" placeholder="请输入用户名" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="text" class="form-control" placeholder="请输入电话" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control" placeholder="请输入邮箱" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>学历</label>
                    <input type="text" class="form-control" placeholder="请输入学历" v-model="customer.education">
                </div>
                <div class="form-group">
                    <label>毕业学校</label>
                    <input type="text" class="form-control" placeholder="请输入毕业学校" v-model="customer.graduationschool">
                </div>
                <div class="form-group">
                    <label>职业</label>
                    <input type="text" class="form-control" placeholder="请输入职业" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <textarea class="form-control" rows="10" v-model="customer.profile">
                    </textarea>
                    <button type="submit" class="btn btn-primary">添加</button>
                </div>

            </div>


        </form>

    </div>
</template>

<script>
    import Alert from "./Alert";
    export default {
        name: "Add",
        components:{
            Alert

        },
        data(){
            return{
                customer:{},
                alert:""
            }
        },
        methods:{
            addCustomer(e){
                if(!this.customer.name||!this.customer.email||!this.customer.phone){
                   // console.log("请添加对应的信息");
                    this.alert="盖亚后台提示您:请添加对应的信息!"
                }else{
                    let newCustomer={
                        name:this.customer.name,
                        phone:this.customer.phone,
                        email:this.customer.email,
                        education:this.customer.education,
                        graduationschool:this.customer.graduationschool,
                        profession:this.customer.profession,
                        profile:this.customer.profile
                    }
                    this.$http.post("http://localhost:3000/users",newCustomer).then(function(response){
                        //console.log(response)
                        this.$router.push({path:'/',query:{alert:"盖亚后台已帮你添加成功！"}});

                    })
                    e.preventDefault();
                }
                e.preventDefault();
                //console.log("123")


            }
        }
    }
</script>

<style scoped>

</style>