import React from "react"
import { Button } from "../Button"

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Button variant="primary" onClick={() => alert("Clicked!")}>
        Test Button
      </Button>
    </div>
  )
}
