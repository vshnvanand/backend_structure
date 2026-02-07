import prisma from "../lib/prisma";
import { hashPassword } from "../utils/hash";

export async function signup(data: {
  email: string;
  password: string;
}) {
  const hashed = await hashPassword(data.password);

  return prisma.user.create({
    data: {
      email: data.email,
      password: hashed,
    },
  });
}
