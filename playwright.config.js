import { defineConfig } from "@playwright/test";

export default defineConfig({
    use: {
        headless: false,
        video: "on",
        trace: "on",
        screenshot: "only-on-failure",
        launchOptions: {
            slowMo: 1000
        },
    },
    reporter: [["html", {open: "never"}]],
})