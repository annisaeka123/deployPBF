import { useState } from "react"
import { useRouter } from "next/router"

const EditProfilePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman Edit Profile</h1>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Nama:</strong> Annisa Eka Puspita</p>
        <p><strong>Email:</strong> annisa@gmail.com</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button>Simpan</button>
      </div>
    </div>
  )
}

export default EditProfilePage
