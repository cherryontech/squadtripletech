<template>
  <div class="flex flex-col items-center gap-4 sm:justify-center sm:flex-row">
    <h1 class="text-2xl font-bold text-center sm:hidden">Pitch Pop Out</h1>
    <img
      class="w-44 sm:w-60 md:w-1/3 lg:w-1/2"
      src="../assets/images/tripleTechHeader.png"
      alt="Cartoon drawing of a winking, bespectacled woman with curly hair and glasses, wearing bright clothing and holding a laptop. The woman is surrounded by large, abstract depictions of digital life."
    />

    <div class="flex flex-col items-center lg:gap-10 sm:gap-6">
      <h1
        class="hidden text-2xl font-bold text-center md:text-4xl lg:text-6xl sm:block"
      >
        Pitch Pop Out
      </h1>

      <p class="w-64 text-center sm:w-72 lg:w-full lg:text-2xl">
        Transform your resume summary into a personalized
        <span class="font-bold">pop-out pitch!</span>
      </p>
      <p class="mt-4 lg:text-2xl">
        <span class="sr-only">It's as easy as ... </span>
        <span class="flex gap-4">
          <span class="flex flex-col items-center">
            <img
              class="h-10 lg:h-14"
              src="../assets/images/icon-copy.png"
              role="presentation"
            />
            Copy
          </span>
          <span class="flex flex-col items-center">
            <img
              class="h-10 lg:h-14"
              src="../assets/images/icon-paste.png"
              role="presentation"
            />
            Paste
          </span>
          <span class="flex flex-col items-center">
            <img
              class="h-10 lg:h-14"
              src="../assets/images/icon-save.png"
              role="presentation"
            />
            Save
          </span>
        </span>
      </p>
    </div>
  </div>
</template>
