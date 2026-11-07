# JSTSlearning

JavaScript and TypeScript practice examples, set up in a Playwright project.

## Contents

The `tests/` folder holds short scripts on core JavaScript topics:

| Topic | Files |
|-------|-------|
| Basics | `01_Basics.js`, `02JS.js` |
| Variables and identifiers | `Variable.js`, `identifiers_Rules.js` |
| `var`, `let`, `const` | `var_let_const.js`, `letexplained.js`, `constexplain.js`, `varfunctionscope.js`, `let,const functions.js` |
| Hoisting | `hosting.js`, `lethosting.js`, `functionhosting.js` |
| Literals | `Litearl_number.js`, `stringliteral.js`, `template_literla.js`, `literal - variable value.js` |
| Operators | `operators.js`, `comparisionoperator.js`, `compoundoperator.js`, `exponential.js` |
| Functions | `functions.js` |
| Playwright sample test | `example.spec.ts` |

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS)

## Setup

```bash
npm install
npx playwright install
```

## Running

Run a single JavaScript example with Node:

```bash
node tests/operators.js
```

Run the Playwright tests:

```bash
npx playwright test
npx playwright show-report
```

## CI

A GitHub Actions workflow in `.github/workflows/playwright.yml` runs the Playwright tests on push and pull request.
