<template>
  <section class="main">
    <div class="container">
      <div class="markdown">
        <div class="title">
          <h1 class="text-center">A Simple Todo app.</h1>
        </div>
      </div>
      <div class="row at-row flex-around">
        <input
          type="text"
          class="at-input__original input-box"
          v-model="inputTitle"
          @keyup.enter="addNotes"
          placeholder="Please input tasks and hit ENTER to save"
        >
        <at-button
          class="ml-n3"
          type="primary"
          @click="addNotes"
        >Add</at-button>
      </div>
      <div class="todos">
        <div
          v-for="(todo, index) in notes"
          :key="index"
        >
          <at-checkbox
            class="list-todos"
            v-model="todo.finished"
          >
            <span
              :class="{ 'strikethrough': todo.finished}"
              @click="updateTodo(todo)"
            >{{ todo.title }}</span>
          </at-checkbox>
          <at-button
            class="align-right"
            @click.prevent="removeTask(todo)"
            type="primary"
          >Delete</at-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TaskService from "@/services/TaskService";

export default {
  data() {
    return {
      inputTitle: "",
      errorStatus: false,
      errorMessage: "",
      notes: [],
      classStrike: ""
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      const response = await TaskService.fetchTasks();
      this.notes = response.data;
    },
    async addNotes() {
      if (this.validate(this.inputTitle)) {
        let response = await TaskService.addTask({
          title: this.inputTitle,
          finished: this.finish
        });
        if (response.status != 200) {
          this.errorMessage = response.data;
          this.handleClick("error", this.errorMessage);
          this.error();
          this.getTasks();
        } else {
          this.inputTitle = "";
          this.start();
          this.getTasks();
          this.finish();
        }
      } else {
        this.errorStatus = true;
        this.errorMessage = `Note title can't be blank`;
        this.error();
      }
    },
    validate(value) {
      if (value != "") {
        return true;
      } else {
        return false;
      }
    },
    async updateTodo(task) {
      let response = await TaskService.updateTask({
        id: task._id,
        title: task.title,
        finished: !task.finished
      });
      if (response.status != 200) {
        this.errorMessage = response.data;
        this.handleClick("error", this.errorMessage);
        this.error();
        this.getTasks();
      } else {
        this.start();
        this.getTasks();
        this.finish();
      }
    },
    async removeTask(task) {
      let response = await TaskService.deleteTask({
        id: task._id
      });
      if (response.status != 200) {
        this.errorMessage = response.data;
        this.handleClick("error", this.errorMessage);
        this.error();
        this.getTasks();
      } else {
        this.start();
        this.getTasks();
        this.finish();
      }
    },
    start() {
      this.$Loading.start();
    },
    finish() {
      this.$Loading.finish();
    },
    error() {
      this.$Loading.error();
    },
    update() {
      this.$Loading.update(50);
    },
    handleClick(type, msg) {
      if (type === "info") {
        this.$Message.info(msg);
      } else if (type === "success") {
        this.$Message.success(msg);
      } else if (type === "warning") {
        this.$Message.warning(msg);
      } else if (type === "error") {
        this.$Message.error(msg);
      }
    }
  }
};
</script>


<style scoped>
.strikethrough {
  text-decoration: line-through;
}
.align-right {
  float: right;
}
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
