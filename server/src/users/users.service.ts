import { Injectable } from "@nestjs/common"
import { PrismaService } from "prisma/prisma.service"

export type User = any

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({})
  }

  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    })
  }

  async create(user: User): Promise<User> {
    return this.prisma.user.create({
      data: user,
    })
  }

  async update(user: User): Promise<User> {
    const { id, ...params } = user

    return this.prisma.user.update({
      where: { id },
      data: { ...params },
    })
  }

  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    })
  }
}
