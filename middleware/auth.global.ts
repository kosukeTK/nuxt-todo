export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to)
  console.log(from)
  // if (Object.keys(to.query).length  !== 0) {
  //   return abortNavigation(
  //     showError({
  //       statusCode: 400,
  //       statusMessage: 'Bad Request',
  //       message: 'エラー発生',
  //     })
  //   );
  // }
})