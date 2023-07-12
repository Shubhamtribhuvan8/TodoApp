<script>
import { mapGetters } from 'vuex';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiDelete } from '@mdi/js';
export default {
  computed: {
    ...mapGetters(['getTodos']), 
    todos() {
      return this.getTodos;
    },
  },
  methods: {
    deleteData(index) {
      this.$store.dispatch("addToHistoryData", this.todos[index]);
      this.$store.dispatch("deleteTodo", index);
      alert("Data deleted successfully!");
    },
    Delethistory(){
      this.$router.push('/delete');
    },
    Return() {
      this.$router.push('/post');
    },
  },
  components: {
		SvgIcon
	},

	data() {
		return {
	  		path: mdiDelete,
		}
	},
};
</script>

<template>
  <div class="styling1"> 
    <v-sheet max-width="300" class="mx-auto">
      <table>
        <thead>
          <tr>
            <th><h3>ToDo Details</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in todos" :key="todo.id">
            <td>{{ index + 1 }}</td>
            <td>  {{ todo.text }}</td>
            <td> 
              <svg-icon type="mdi" :path="path"  @click="deleteData(index)"></svg-icon>
         </td>
          <!-- //<v-btn variant="outlined" @click="deleteData(index)"></v-btn> -->
          </tr>
        </tbody>
      </table>
      <div class="twobuttons">
        <v-btn @click="Return()">
      ADD TODO </v-btn> 

      <v-btn @click="Delethistory()">
      History </v-btn>
      </div>
   
     </v-sheet>
  </div>
 
</template>
