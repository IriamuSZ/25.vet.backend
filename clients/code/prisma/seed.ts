import { PrismaClient } from '@prisma/client';
// reference a type from the generated Prisma Client
// import type { Client } from '@prisma/client';
const prisma: PrismaClient = new PrismaClient();
import { Owner, Pet } from './types.ts';

// if you use the model you have to fill in all the fields also the generated ones
const clients: Owner[] = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@doe.com',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
  },
  {
    firstName: 'Mary',
    lastName: 'Jane',
    email: 'mary@jane.com',
  },
];

const pets: Pet[] = [
  {
    ownerId: 1,
    name: 'Fido',
    specie: 'Dog',
    breed: 'Labrador',
    date_of_birth: new Date('2020-03-15')
  },
  {
    ownerId: 2,
    name: 'Whiskers',
    specie: 'Cat',
    breed: 'Siamese',
    date_of_birth: new Date('2019-07-22')
  },
  {
    ownerId: 3,
    name: 'Rex',
    specie: 'Dog',
    breed: 'German Shepherd',
    date_of_birth: new Date('2018-11-05')
  },
  {    
    ownerId: 1,
    name: 'Bella',
    specie: 'Dog',
    breed: 'Golden Retriever',
    date_of_birth: new Date('2021-02-10')
  },
  {
    ownerId: 2,
    name: 'Milo',
    specie: 'Cat',
    breed: 'Tabby',
    date_of_birth: new Date('2020-09-30')
  },
  {    
    ownerId: 3,
    name: 'Luna',
    specie: 'Dog',
    breed: 'Poodle',
    date_of_birth: new Date('2019-12-17')
  },
  {
    ownerId: 1,
    name: 'Max',
    specie: 'Dog',
    breed: 'Bulldog',
    date_of_birth: new Date('2017-05-08')
  }
];


const load = async (): Promise<void> => {
  try {
    await prisma.owner.createMany({
      data: clients,
    });
    loadPets();
    console.log('Added owner data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

const loadPets = async (): Promise<void> => {
  try {
    await prisma.pet.createMany({
      data: pets,
    });
    console.log('Added pet data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
