import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  dir: "./",
})

const config = {
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src/"],
  collectCoverage: true,

  collectCoverageFrom: [
    "src/pages/produk/index.tsx",
    "src/components/layouts/navbar/index.tsx",

    "src/pages/about/index.tsx",
  ],
}

export default createJestConfig(config)