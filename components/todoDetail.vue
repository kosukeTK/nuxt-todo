<template>
  <section>
    <dl ref="taskRef">
      <dt>ID</dt>
      <dd>{{ props.id }}</dd>
      <dt>タイトル</dt>
      <input type="text" id="title" :value="props.title" v-on:input="onInput" readonly />
      <dt>内容</dt>
      <input type="text" id="content" :value="props.content" v-on:input="onInput" readonly />
      <dt>備考</dt>
      <input type="text" id="remarks" :value="props.remarks" v-on:input="onInput" readonly />
      <dt>更新日時</dt>
      <dd>{{ date }}</dd>
    </dl>
  </section>
  <input type="button" @click="edit" value="編集">
</template>

<script setup lang="ts">

  const taskRef = ref();

  interface Props {
    id: number;
    title: string;
    content: string;
    remarks?: string;
    date: Date;
  }

  interface Emits {
    (event: "update:title", title: string): void, 
    (event: "update:content", content: string): void, 
    (event: "update:remarks", remarks: string): void, 
  }

  const emit = defineEmits<Emits>();

  const onInput = (event: Event): void => {
    const element = event.target as HTMLInputElement;
    const inputValue = element.value;
    const id = element.getAttribute('id');
    switch(id) {
      case 'title': emit("update:title", inputValue); break;
      case 'content': emit("update:content", inputValue); break;
      case 'remarks': emit("update:remarks", inputValue); break;
      default: break;
    }
  }

  const edit = (): void => {
    let tasks: NodeListOf<HTMLInputElement> = taskRef.value.querySelectorAll('input');
    tasks.forEach((task: HTMLInputElement) => {
      if (task.hasAttribute('readonly')) {
        task.removeAttribute('readonly');
      }
    });
  }

  const props = withDefaults(
    defineProps<Props>(),
    {remarks: "--"}
  );
</script>