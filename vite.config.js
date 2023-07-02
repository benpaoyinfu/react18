import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  define: {
    __DEV__: true,
    __PROFILE__: true,
    __UMD__: true,
    __EXPERIMENTAL__: true,
  },
  // posix 路径分隔符 保证不同操作系统下路径分隔符是一致的
  // window和linux路径分割符不一样 window 是; / linux 是: 。
  resolve: {
    alias: { // 给vite看
      react: path.posix.resolve("src/react"), 
      "react-dom": path.posix.resolve("src/react-dom"),
      "react-dom-bindings": path.posix.resolve("src/react-dom-bindings"),
      "react-reconciler": path.posix.resolve("src/react-reconciler"),
      scheduler: path.posix.resolve("src/scheduler"),
      shared: path.posix.resolve("src/shared"),
    },
  },
  plugins: [react()],
  optimizeDeps: {
    force: true,
  },
});
