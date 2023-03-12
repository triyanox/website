import handler from "lib/handler";
import prisma from "lib/prisma";
import { z } from "zod";

handler.put(async (req, res) => {
  const slug = z.string().parse(req.query.slug);
  const post = await prisma.post.upsert({
    create: { slug, likes: 1 },
    update: { likes: { increment: 1 } },
    where: { slug },
  });
  if (!post) return res.status(404).json("Post not found");
  return res.status(200).json(post.likes || 1);
});

export default handler;
