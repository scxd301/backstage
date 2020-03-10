<template>
    <div class="details container">
        <router-link class="btn btn-default" to="/">返回</router-link>
        <h1 class="page-header">
            {{customer.name}}
            <span class="pull-right">
                <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
                <button class="btn btn-danger" v-on:click="deleteCustomers(customer.id)">删除</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone-alt">{{customer.phone}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope">{{customer.email}}</span></li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-send">{{customer.education}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-flag">{{customer.graduationschool}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.profession}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-user">{{customer.profile}}</span></li>

        </ul>

    </div>
</template>

<script>
    export default {
        name: "CustomerDetails",
        data(){
            return{
                customer: ""
            }
        },
        methods:{
            fetchCustomers(id){
                this.$http.get("http://localhost:3000/users/"+id).then(
                    function(response){
                        //console.log(response)
                        this.customer=response.body
                    }
                )
            },
            deleteCustomers(id){
                this.$http.delete("http://localhost:3000/users/"+id).then(
                    function(response){
                        //console.log(response)
                       this.$router.push({path:"/",query:{alert:"盖亚后台提示您:用户删除成功！"}})
                    }
                )
            }
        },
        created() {
            this.fetchCustomers(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>