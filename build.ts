import { execSync } from "node:child_process";
import path from "node:path";

const testbenchDir = path.join(__dirname, "vendor", "bin", "testbench");

const scribe = (command: string): void => console.error(execSync(`${testbenchDir} ${command}`).toString('utf8'))

export function setup(): void {
    try {
        process.env.WAYFINDER_CACHE_ROUTES
            ? scribe('route:cache')
            : scribe('route:clear')

        scribe('wayfinder:generate --path=workbench/resources/js --with-form')
    } catch (error) {
        console.error(`Wayfinder build error\n----------${error.output}\n----------`);

        process.exit(1);
    }
}

export function teardown(): void {
    scribe('route:clear')
}
