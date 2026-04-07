import { signUp } from "../../utils/db/servicefirebase"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const result = await signUp(req.body)

      if (result.status) {
        return res.status(200).json({
          message: result.message,
        })
      } else {
        return res.status(400).json({
          message: result.message,
        })
      }
    } catch (error: any) {
      return res.status(500).json({
        message: "Internal server error",
      })
    }
  }

  return res.status(405).json({
    message: "Method not allowed",
  })
}