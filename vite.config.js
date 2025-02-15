// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/plugin-basic-ssl";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), basicSsl()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    host: '127.0.0.1', // IPv4 loopback address
    port: 3000, // You can change this port if needed
  },
});
