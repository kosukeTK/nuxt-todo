<template>
  <h1>todo page</h1>
  <div>{{ editTitle }}</div>
  <div>{{ editContent }}</div>
  <div>{{ editRemarks }}</div>
  <section>
    <todoDetail 
      v-for="(todo, index) in state.todoList"
      :key="index" 
      :id="todo.id" 
      v-model:title="todo.title"
      v-model:content="todo.content"
      v-model:remarks="todo.remarks"
      :date="todo.date"
      ></todoDetail>
  </section>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'custom',
  });
  
  interface todoRow {
    id: number;
    title: string;
    content: string;
    remarks?: string;
    date: Date;
  }

  const todoListInit: todoRow[] = [
    {id: 1, title: 'テスト1', content: 'テスト１です', remarks: 'トマト大好き！', date: new Date('2023-11-24')},
    {id: 2, title: 'テスト2', content: 'テスト２です', date: new Date('2023-11-25')},
    {id: 3, title: 'テスト3', content: 'テスト３です', date: new Date('2023-11-26')},
  ];

  const state = reactive({
    todoList : todoListInit
  });

  const editTitle = computed(() => {
    return state.todoList[0]['title'];
  });
  const editContent = computed(() => {
    return state.todoList[0]['content'];
  });
  const editRemarks = computed(() => {
    return state.todoList[0]['remarks'];
  });

</script>