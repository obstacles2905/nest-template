import * as dotenv from "dotenv";
import * as path from "path";

loadEnvironmentVariables();
setupMocks();

function loadEnvironmentVariables() {
  dotenv.config({ path: path.resolve(__dirname, "..", "tests.env") });
}

function setupMocks() {
  jest.mock("@selinarnd/nest-logging");
}
