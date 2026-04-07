import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Navbar from "@/components/layouts/navbar"

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({
    data: null,
  })),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

jest.mock("next/image", () => (props: any) => {
  return <img {...props} />
})

jest.mock("next/dist/client/script", () => (props: any) => {
  return <>{props.children}</>
})

describe("Navbar Component", () => {

  it("should render navbar", () => {
    render(<Navbar />)

    const nav = screen.getByTestId("navbar") // getByTestId()
    expect(nav).toBeInTheDocument()
  })

  it("should show Sign In button when not logged in", () => {
    render(<Navbar />)

    const btn = screen.getByText("Sign In")
    expect(btn).toBeInTheDocument()
  })

})