/**
 * This file contains all the types that are used in the application
 *
 * It is a bit of a redundant file, because most of the types come from
 * the prima model. However, in this way we have more control over the
 * types that are used in the application. For example we want the id and
 * the createdAt field to be optional, it is genereated by Prisma.
 */

interface Owner {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
}

interface Pet {
  id?: number,
  ownerId: number,
  name: string,
  specie: string,
  breed: string,
  date_of_birth: Date,
}

export { Owner, Pet };
