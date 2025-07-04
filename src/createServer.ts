/*
 * Copyright (C) 2025 TomTom NV
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { logger } from "./utils/logger";
import { validateApiKey } from "./services/base/tomtomClient";
import { createSearchTools } from "./tools/searchTools";
import { createRoutingTools } from "./tools/routingTools";
import { createTrafficTools } from "./tools/trafficTools";
import { createMapTools } from "./tools/mapTools";

/**
 * Factory function that creates and configures a TomTom MCP server instance
 */
export function createServer(): McpServer {
  logger.info("Initializing TomTom MCP Server");

  validateServerApiKey();

  const server = new McpServer({
    name: "TomTom MCP Server",
    version: "1.0.0",
  });

  // Register all tools
  registerTools(server);

  logger.info("✅ TomTom MCP Server initialized with all tools");
  return server;
}

/**
 * Validates API key at startup
 */
function validateServerApiKey(): void {
  try {
    validateApiKey();
    logger.info("✅ TomTom API key validated successfully");
  } catch (error: any) {
    logger.error(`❌ API key validation failed: ${error.message}`);
    logger.warn("Server will start but API calls may fail without valid credentials");
  }
}

/**
 * Registers all tools with the server
 */
function registerTools(server: McpServer): void {
  // Register search and geocoding tools
  createSearchTools(server);

  // Register routing and navigation tools
  createRoutingTools(server);

  // Register traffic tools
  createTrafficTools(server);

  // Register mapping tools
  createMapTools(server);
}
