import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  
  integrations: [tailwind(), alpinejs()],

    site: 'https://github.com/Agoudjiliss/issam_agoudjil.github.io',
   

});
