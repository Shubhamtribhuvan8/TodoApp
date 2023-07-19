<script>
export default{
   name:"Customer",
   props:{
    name:{type :String,required:true},
    age:{type :String,required:true},
    salary:{type :String,required:true}
   }
}
</script>
<template>
 <li class="list-group-item">
    Name:{{ name }}
    Age:{{ age }}
    Salary:{{ salary }}
 </li>
</template>