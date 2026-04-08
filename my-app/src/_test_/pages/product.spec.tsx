import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ProductPage from "@/pages/produk"

// MOCK ROUTER
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "/produk",
      query: {},
      asPath: "/produk",
    }
  },
}))

describe("Daftar Produk", () => {
  
  it("should render product page title", async () => {
    render(<ProductPage />)

    const title = await screen.findByTestId("title")
    expect(title).toBeInTheDocument()
    expect(title.textContent).toBe("Daftar Produk") // toBe()
  })

  it("should match snapshot", () => {
    const { asFragment } = render(<ProductPage />)
    expect(asFragment()).toMatchSnapshot() // snapshot
  })

})