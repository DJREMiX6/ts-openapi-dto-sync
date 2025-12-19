#!/usr/bin/env node
import {Command} from "commander";

const program = new Command();

program
  .name("ts-openapi-dto-sync-cli")
  .description("CLI for ts-openapi-dto-sync")
  .version("1.0.0");

program
  .option("-i, --input <path>", "Path to the OpenAPI spec file");

program
  .action(async (options) => {
    const inputPath = options.input;
    console.log(`Processing OpenAPI spec at: ${inputPath}`);
    console.log(typeof inputPath);
  });

program.parse();
