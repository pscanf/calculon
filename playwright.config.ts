import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    webServer: {
        command: "yarn e2e:serve",
        port: 3000,
        timeout: 120 * 1000,
    },

    use: {
        trace: "on-first-retry",
        video: "on-first-retry",
    },
};
export default config;
