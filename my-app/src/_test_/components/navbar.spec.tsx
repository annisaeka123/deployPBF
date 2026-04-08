import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Navbar from "@/components/layouts/navbar"
import { signIn, signOut } from "next-auth/react"

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

jest.mock("next/image", () => (props: any) => {
  return <img {...props} />
})

jest.mock("next/dist/client/script", () => (props: any) => {
  return <>{props.children}</>
})

const { useSession } = require("next-auth/react")

describe("Navbar Component", () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should render navbar", () => {
    useSession.mockReturnValue({ data: null })

    render(<Navbar />)

    const nav = screen.getByTestId("navbar")
    expect(nav).toBeInTheDocument()
  })

  it("should show Sign In button when not logged in", () => {
    useSession.mockReturnValue({ data: null })

    render(<Navbar />)

    const btn = screen.getByText("Sign In")
    expect(btn).toBeInTheDocument()

    fireEvent.click(btn)
    expect(signIn).toHaveBeenCalled()
  })

  it("should show user and Sign Out when logged in", () => {
    useSession.mockReturnValue({
      data: {
        user: {
          fullname: "Annisa",
          image: "/avatar.png",
        },
      },
    })

    render(<Navbar />)

    expect(screen.getByText(/Welcome, Annisa/i)).toBeInTheDocument()

    const btn = screen.getByText("Sign Out")
    expect(btn).toBeInTheDocument()

    fireEvent.click(btn)
    expect(signOut).toHaveBeenCalled()
  })

})