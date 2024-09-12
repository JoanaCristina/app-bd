import { Usuario } from "../../core/model/Usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
  private static db: PrismaClient = new PrismaClient();

  static async salvarUsuario(usuario: Usuario): Promise<Usuario> {
    return await this.db.usuario.upsert({
      where: { id: usuario.id },
      update: usuario,
      create: usuario,
    });
  }

  static async listarUsuarios(): Promise<Usuario[]> {
    return await this.db.usuario.findMany();
  }

  static async obterUsuarioId(id: number): Promise<Usuario> {
    const usuario = await this.db.usuario.findUnique({ where: { id } });
    return usuario as Usuario;
  }

  static async excluirUsuario(id: number): Promise<void> {
    await this.db.usuario.delete({
      where: { id },
    });
  }
}
