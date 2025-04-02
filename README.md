### Hexlet tests and linter status:

[![Actions Status](https://github.com/Kudrikudrii/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Kudrikudrii/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/7ac83ba99356fa3f4ef0/maintainability)](https://codeclimate.com/github/Kudrikudrii/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7ac83ba99356fa3f4ef0/test_coverage)](https://codeclimate.com/github/Kudrikudrii/frontend-project-46/test_coverage)
[![Node CI](https://github.com/Kudrikudrii/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/Kudrikudrii/frontend-project-46/actions/workflows/main.yml)

# Frontend Project 46 - File Difference Calculator

A Node.js CLI utility that compares two configuration files (JSON/YAML) and shows the differences between them in various output formats.

## Features

- Supports JSON and YAML file formats
- Multiple output formats:
  - **Stylish** (default) - human-readable output
  - **Plain** - simplified text output
  - **JSON** - machine-readable diff output
- Recursive comparison of nested structures

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/Kudrikudrii/frontend-project-46.git

# 2. Navigate to the project directory
cd frontend-project-46

# 3. Install dependencies
npm install

# 4. Link the package for global access
npm link
```

## Usage

### Basic Command

```bash
gendiff [options] <filepath1> <filepath2>
```

### Available Options

| Option            | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `-V`, `--version` | Display current version number                            |
| `-f`, `--format`  | Set output format: `stylish` (default), `plain` or `json` |
| `-h`, `--help`    | Show help message                                         |

### Argument Description

| Argument      | Description                                   |
| ------------- | --------------------------------------------- |
| `<filepath1>` | Path to first configuration file (JSON/YAML)  |
| `<filepath2>` | Path to second configuration file (JSON/YAML) |
