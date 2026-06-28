# Dexcalibur Core API

Core API and type definitions for the Dexcalibur/Reversense platform - an automated reverse engineering and security analysis framework for software, mobile apps, and firmware.

## Overview

This package provides foundational constants, enumerations, and type definitions used across all Dexcalibur-based projects. It serves as the ultimate dependency defining core node types, architectures, operating systems, and metadata structures.

## Installation

Install from NPM registry:

```bash
npm i @dexcalibur/dxc-core-api
```

## Usage

### NodeInternalType

Access predefined node types for various code and system elements:

```typescript
import { NodeInternalType, NodeInternalTypeName } from '@dexcalibur/dxc-core-api';

// Use node types
const methodType = NodeInternalType.METHOD;
const className = NodeInternalType.CLASS;

// Get string representation
const typeName = NodeInternalTypeName[NodeInternalType.METHOD]; // "METHOD"
```

Available node types include: `CLASS`, `METHOD`, `FIELD`, `FILE`, `INSTRUCTION`, `PACKAGE`, `SYSCALL`, `FUNC`, `VAR`, `HOOK_JAVA`, `HOOK_NATIVE`, `ANDROID_ACTIVITY`, `CVE`, `CWE`, and many more.

### Architecture

Supported CPU architectures:

```typescript
import { Architecture } from '@dexcalibur/dxc-core-api';

const arch = Architecture.AARCH64;
// Available: ARMEABI, AARCH64, AARCH32, X86, X86_64, MIPS, MIPS_64, PPC32, PPC64
```

### OperatingSystem

Supported operating systems and platforms:

```typescript
import { OperatingSystem } from '@dexcalibur/dxc-core-api';

const os = OperatingSystem.ANDROID;
// Available: LINUX, ANDROID, IOS, DARWIN, MACOS, FLUTTER, REACTNATIVE, WINNT, etc.
```

### Metadata

Metadata types and topics for code analysis:

```typescript
import { Metadata, MetadataType, MetadataTopic, DataOperation } from '@dexcalibur/dxc-core-api';

// Use metadata topics and types in your analysis
```

### Utilities

```typescript
import { Validator, Nullable } from '@dexcalibur/dxc-core-api';

// Nullable type for optional values
type OptionalValue = Nullable<string>;
```

## API Reference

### Exported Types

- **NodeInternalType** - Enum of internal node types
- **NodeInternalTypeName** - Mapping of node type values to names
- **Architecture** - Supported CPU architectures
- **OperatingSystem** - Supported operating systems
- **Metadata** - Metadata definitions
- **MetadataType** - Metadata type enumeration
- **MetadataTopic** - Metadata topic categories
- **DataOperation** - Data operation types
- **Validator** - Validation utilities
- **Nullable** - Type utility for nullable values

## Development

Build the package:

```bash
npm run build
```

## License

This project is licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0-only).

Copyright (C) 2026 Reversense SAS

See [LICENSE](LICENSE) for full license text.

## Author

Reversense - georges@reversense.com

## Repository

[GitLab Repository](ssh://git@gitlab.reversense.org:dexcalibur/dxc-core-api.git)