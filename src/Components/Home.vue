<template>
  <section class="main">
    <div class="container">
      <div class="markdown">
        <div class="title">
          <h1 class="text-center">A Simple note keeping app.</h1>
        </div>
      </div>
      <div class="row at-row flex-around">
        <at-input class="input-box" v-model="inputTitle" placeholder="Please input todos"></at-input>
        <at-button class="ml-n3" type="primary" @click="addNotes">Add</at-button>
      </div>
      <div class="todos">
        <div v-for="(todo, index) in noteslist" :key="index">
          <at-checkbox class="list-todos" v-model="todo.finished">{{ todo.task }}</at-checkbox>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    noteslist: Array
  },
  data() {
    return {
      inputTitle: "",
      errorStatus: false,
      errorMessage: "",
      finish: false,
      notes: {}
    };
  },
  methods: {
    addNotes() {
      if (this.validate(this.inputTitle)) {
        this.notes.task = this.inputTitle;
        this.notes.finished = this.finish;
        this.noteslist.push(this.notes);
        (this.notes = {}), (this.inputTitle = ""), (this.errorStatus = false);
        console.log(this.noteslist);
      } else {
        (this.errorStatus = true),
          (this.errorMessage = `Note title can't be blank`);
      }
    },
    validate(value) {
      if (value != "") {
        return true;
      } else {
        return false;
      }
    },
    removeNotes(index) {
      this.noteslist.splice(index, 1);
    }
  }
};
</script>


<style scoped>
.list-todos {
  text-align: center;
  margin: 10px auto;
}
.todos {
  max-width: 80%;
  width: 80%;
  margin: 5% auto;
}
.ml-n3 {
  margin-left: -30%;
}
.input-box {
  width: 60%;
}
.title {
  text-align: center;
  margin-top: 10%;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
}
.markdown {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  height: 100vh;
}
.my-3 {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
</style>
