import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ProductPage from "@/pages/produk"

// MOCK ROUTER
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "/produk",
      query: {},
      asPath: "/produk",
    }
  },
}))

describe("Product Page", () => {
  
  it("should render product page title", () => {
    render(<ProductPage />)

    const title = screen.getByTestId("title")
    expect(title).toBeInTheDocument()
    expect(title.textContent).toBe("Product Page") // toBe()
  })

  it("should match snapshot", () => {
    const { asFragment } = render(<ProductPage />)
    expect(asFragment()).toMatchSnapshot() // snapshot
  })

})