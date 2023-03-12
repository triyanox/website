import prisma from "lib/prisma";
import handler from "lib/handler";
import z from "zod";

handler.get(async (req, res) => {
  const slug = z.string().parse(req.query.slug);
  const post = await prisma.post.findUnique({
    where: { slug },
  });
  if (!post) return res.status(404).json("Post not found");
  return res.status(200).json({
    views: post.views,
    likes: post.likes,
  });
});

export default handler;
