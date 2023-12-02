<template>
  <div>
    <h2>main page</h2>
    <NuxtLink to="/todo">TODO</NuxtLink>
    <button @click="enableCustomLayout">Update layout</button>
    <button @click="moveToTODO">TODO BUTTON</button>
  </div>
</template>

<script setup>

  const router = useRouter();

  function enableCustomLayout() {
    setPageLayout('custom');
  }

  function moveToTODO() {
    router.push({name: 'todo', query: {userId : '1', test:2}})
  }

  definePageMeta({
    layout: false,
  });
</script>
