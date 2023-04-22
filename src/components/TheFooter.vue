<template>
  <footer class="pb-8">
    <div
      class="w-full pt-10 pb-12 text-white lg:pb-5 lg:pt-52 bg-primary-indigo"
    >
      <div class="ml-8 sm:mx-auto lg:ml-36 w-52 sm:w-96">
        <h2 class="sm:text-lg">Contact Us</h2>
        <p class="pt-5 text-2xl font-black sm:text-5xl lg:text-6xl">
          Let's make it pop together.
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-12 px-16 mt-12 sm:flex-row sm:px-10 lg:px-36">
      <FooterSection>
        <template #title>About the Creators</template>

        <template #text>
          Triple Tech is a tech squad committed to empowering people to land
          their dream jobs with confidence and ease.
        </template>
      </FooterSection>

      <FooterSection class="hidden lg:block">
        <template #title>About the Site</template>

        <template #text>
          Pitch Pop-out is a cutting-edge AI solution that empowers job seekers
          and users to craft personalized pitch summaries that align with the
          requirements of their target positions. With ongoing improvements, the
          app will soon offer features for generating tailored resumes that
          match specific job descriptions, streamlining the application process
          with a single click.
        </template>
      </FooterSection>

      <FooterSection theme="mail">
        <template #title>How Can We Help?</template>

        <template #text>
          <a href="mailto:info@tripletech.com">info@tripletech.com</a>
        </template>
      </FooterSection>
    </div>
  </footer>
</template>

<script setup>
import FooterSection from './FooterSection.vue'
</script>
