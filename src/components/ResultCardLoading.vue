<template>
  <div
    role="alert"
    aria-live="assertive"
    class="flex flex-col-reverse w-full border-4 border-indigo-100 animate-pulse motion-safe:animate-none rounded-2xl"
  >
    <div class="flex justify-between px-6 py-4 font-bold bg-indigo-100">
      <div class="hidden h-2 bg-indigo-200 rounded-lg w-52 sm:inline-block" />
      <div class="h-2 bg-indigo-200 rounded-lg w-38 sm:w-1/5" />
    </div>
    <div class="block px-6 pt-4 pb-6">
      <p class="mb-4 text-center text-indigo-400">
        Generating a pop-out pitch!
      </p>
      <div class="grid grid-cols-3 grid-rows-2 gap-4">
        <div class="h-2 col-span-2 row-span-1 bg-indigo-200 rounded"></div>
        <div class="h-2 col-span-1 row-span-1 bg-indigo-200 rounded"></div>
        <div class="h-2 col-span-1 row-span-2 bg-indigo-200 rounded"></div>
        <div class="h-2 col-span-2 row-span-2 bg-indigo-200 rounded"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  width: 100%;
  height: 200px;
  background: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#ddd, #ddd),
    radial-gradient(38px circle at 19px 19px, #ddd 50%, transparent 51%),
    linear-gradient(#ddd, #ddd);
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 100% 200px, 100%x 130px, 100px 100px, 225px 30px;
  background-position: 0% 0, 0 0, 15px 140px, 65px 145px;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  to {
    background-position: 100% 0, 0 0, 15px 140px, 65px 145px;
  }
}
</style>
