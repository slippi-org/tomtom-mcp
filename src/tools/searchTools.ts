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

// tools/searchTools.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { schemas } from "../schemas/index";
import {
  createGeocodeHandler,
  createReverseGeocodeHandler,
  createFuzzySearchHandler,
  createPoiSearchHandler,
  createNearbySearchHandler,
} from "../handlers/searchHandler";

/**
 * Creates and registers search-related tools
 */
export function createSearchTools(server: McpServer): void {
  // Geocode tool
  server.tool("tomtom-geocode", schemas.tomtomGeocodeSearchSchema, createGeocodeHandler());

  // Reverse geocode tool
  server.tool(
    "tomtom-reverse-geocode",
    schemas.tomtomReverseGeocodeSearchSchema,
    createReverseGeocodeHandler()
  );

  // Fuzzy search tool
  server.tool("tomtom-fuzzy-search", schemas.tomtomFuzzySearchSchema, createFuzzySearchHandler());

  // POI search tool
  server.tool("tomtom-poi-search", schemas.tomtomPOISearchSchema, createPoiSearchHandler());

  // Nearby search tool
  server.tool("tomtom-nearby", schemas.tomtomNearbySearchSchema, createNearbySearchHandler());
}
