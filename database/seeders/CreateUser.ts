import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'ale@hotmail.com',
        password: 'secret',
        role: 'admin'
      },
      {
        email: 'bia@hotmail.com',
        password: 'secret',
        role: 'normal'
      }
    ])
  }
}
