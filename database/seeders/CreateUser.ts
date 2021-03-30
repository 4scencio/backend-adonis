import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        name: 'Nicolas',
        email: 'nico@hotmail.com',
        password: 'secret',
        role: 'admin'
      },
      // {
      //   name: 'Beatriz',
      //   email: 'bia@hotmail.com',
      //   password: 'secret',
      //   role: 'normal'
      // }
    ])
  }
}
