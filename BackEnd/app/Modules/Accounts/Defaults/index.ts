import { ModelType } from 'App/Shared/Interfaces/BaseInterface'
import User from 'App/Modules/Accounts/Models/User'
import Role from 'App/Modules/Accounts/Models/Role'

type UserDefaultType = ModelType<typeof User> & { roleName: string }

export const RolesDefault: Array<ModelType<typeof Role>> = [
  {
    slug: 'Root',
    name: 'root',
    description: 'a root user system',
    is_active: true,
    deletable: false,
  },
  {
    slug: 'Admin',
    name: 'admin',
    description: 'a Admin user system',
    is_active: true,
    deletable: false,
  },
  {
    slug: 'User',
    name: 'user',
    description: 'a common user system',
    is_active: true,
    deletable: false,
  },
  {
    slug: 'Guest',
    name: 'guest',
    description: 'a common guest user system',
    is_active: true,
    deletable: false,
  },
]

export const UsersDefault: Array<UserDefaultType> = [
  {
    first_name: 'Root',
    last_name: 'Root',
    username: 'root',
    email: 'root@email.com',
    password: 'root@2022',
    roleName: 'root',
    source_image: 'https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg',
  },
  {
    first_name: 'Gabriel',
    last_name: 'Maia',
    username: 'maia',
    email: 'gabriel.maia@email.com',
    password: 'acl@2022',
    roleName: 'user',
    source_image: 'https://culturardotblog.files.wordpress.com/2022/07/megumi.jpg',
  },
  {
    first_name: 'Max',
    last_name: 'Milan',
    username: 'max',
    email: 'max@email.com',
    password: '123456',
    roleName: 'user',
    source_image:
      'https://play-lh.googleusercontent.com/XvXZBRDEPZTulwtDJAnu3N3UDvFtp4yL7ILlfx3ahkp19aM3UyK77CYC8qSfW51_7Q=w800-h500',
  },
  {
    first_name: 'Vinicius',
    last_name: 'Adriano',
    username: 'vinicius',
    email: 'vinicius.adriano@email.com',
    password: 'acl@2022',
    roleName: 'user',
    source_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjy1jE0lc3ZOe1SDSThrVsKu95rgqhe_wwaJY6hXv5IIifcIjY1gW5W0y01_d8blz61Mc&usqp=CAU',
  },
  {
    first_name: 'Natalia',
    last_name: 'Araujo',
    username: 'alucard',
    email: 'nat.alucard@email.com',
    password: 'nat123alucard',
    roleName: 'user',
    source_image:
      'https://e1.pxfuel.com/desktop-wallpaper/115/697/desktop-wallpaper-anime-profile-anime-girl-profile.jpg',
  },
  {
    first_name: 'Victor',
    last_name: 'Dias',
    username: 'victor.d',
    email: 'victor@email.com',
    password: 'vdias1',
    roleName: 'user',
    source_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2LkuIQ7UVafgOsYElDMt-EnD7PkXEQC_HA&usqp=CAU',
  },
  {
    first_name: 'Daniel',
    last_name: 'Dan',
    username: 'dan',
    email: 'dan@email.com',
    password: 'd159753',
    roleName: 'user',
    source_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0moy0bMv17q9sQ5z5nlT2y86_gnITCcVcuA&usqp=CAU',
  },
  {
    first_name: 'Artur',
    last_name: 'Massaro',
    username: 'massaro',
    email: 'massaro@email.com',
    password: 'artMassaro',
    roleName: 'user',
    source_image:
      'https://play-lh.googleusercontent.com/ImZu9p0qE-kYkyEq_Sb2Bibrz45-9bP_oAIApdk0bJBe76sOM-e_r0YhYUTeV6I8zw=w750-h750',
  },
  {
    first_name: 'Luís',
    last_name: 'Vitor',
    username: 'luisss',
    email: 'luis.vitor@email.com',
    password: 'L.Vit',
    roleName: 'user',
    source_image:
      'https://image.winudf.com/v2/image1/bmV0LmJlYXV0eXdhbGxwYXBlci5hbmltZV9ib3lfcHJvZmlsZV9waWN0dXJlX3NjcmVlbl81XzE2NjQ4NzgyMzJfMDYx/screen-5.webp?fakeurl=1&type=.webp',
  },
  {
    first_name: 'Gian',
    last_name: 'Manzo',
    username: 'manzoG',
    email: 'gian.manzo@email.com',
    password: 'manzoG12345',
    roleName: 'user',
    source_image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9V80w8zEn1k6VU0eoF3wF5qnhnEOnc3Nbqwqwdjl3kT1t9f8Xyj0iKvMFxtWUZm8KYDw&usqp=CAU',
  },
]
