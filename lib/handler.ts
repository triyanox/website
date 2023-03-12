import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  },
  onNoMatch(req, res) {
    res.status(405).json({
      statusCode: 405,
      message: `Method ${req.method} Not Allowed`,
    });
  },
});

export default handler;
