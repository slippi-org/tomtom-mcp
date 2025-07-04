# Smolagents Integration Guide

This guide explains how to configure smolagents to the TomTom MCP Server for location-based queries. Keep in mind the size of the models you're using for inference before running this locally. 

## Prerequisites

- Node.js 22+
- Python 3.10+
- A valid [TomTom API key](https://developer.tomtom.com/)
- Smolagents installed (```pip install smolagents[toolkit]```)
- Hugging Face User Access Token available

## Setup

1. Personalize the configuration from line 36 to line 41 in smolagents_example.py:
    ```bash
    # Run server with node
    server_parameters = StdioServerParameters(
        command="npx", 
        args=["-y", "@tomtom-org/tomtom-mcp@latest"], 
        env={
            "TOMTOM_API_KEY": "<your_API_KEY>"}, # replace with your TomTom API key
    )
    ```

2. Run ```python3 smolagents_example.py```

If configured correctly, the MCP server will fetch results from TomTom APIs.

## Troubleshooting

- Ensure `TOMTOM_API_KEY` is valid and active.
- Check that the MCP server is accessible locally.
- Ensure that you have access to the smolagents (most models require their own key or a huggingface CLI login)

