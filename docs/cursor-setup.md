# Cursor Integration Guide

This guide explains how to configure Cursor to use the TomTom MCP Server for location-based queries.

## Prerequisites

- Cursor installed
- Node.js 22+
- A valid [TomTom API key](https://developer.tomtom.com/)

## Setup

1. Navigate to Cursor `Settings` > `Tools & Integrations`, then click `Add Custom MCP` and add the following configuration::
    ```json
    {
        "mcpServers": {
            "tomtom-mcp": {
                "command": "npx",
                "args": ["-y", "@tomtom-org/tomtom-mcp@latest"],
                "env": {
                 "TOMTOM_API_KEY": "<your_API_KEY>"
                }
            }
        }
    }
    ```

## Troubleshooting

- Ensure **TOMTOM_API_KEY** is valid and active
- Check that the MCP server is running
- Review logs for connection errors