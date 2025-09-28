import { PrismaClient } from '@prisma/client';
// reference a type from the generated Prisma Client
// import type { Client } from '@prisma/client';
const prisma: PrismaClient = new PrismaClient();
import { TimeSlot, Appointment } from './types.ts';

// if you use the model you have to fill in all the fields also the generated ones
const timeSlots: TimeSlot[] = [
  {
    id: 1,
    starttime: '09:00',
    endTime: '09:15',
  },
  {
    id: 2,
    starttime: '09:15',
    endTime: '09:30',
  },
  {
    id: 3,
    starttime: '09:30',
    endTime: '09:45',
  },
  {
    id: 4,
    starttime: '09:45',
    endTime: '10:00',
  },
  {
    id: 5,
    starttime: '10:00',
    endTime: '10:15',
  },
  {
    id: 6,
    starttime: '10:15',
    endTime: '10:30',
  },
  {
    id: 7,
    starttime: '10:30',
    endTime: '10:45',
  },
  {
    id: 8,
    starttime: '10:45',
    endTime: '11:00',
  },
  {
    id: 9,
    starttime: '11:00',
    endTime: '11:15',
  },
  {
    id: 10,
    starttime: '11:15',
    endTime: '11:30',
  },
  {
    id: 11,
    starttime: '11:30',
    endTime: '11:45',
  },
  {
    id: 12,
    starttime: '11:45',
    endTime: '12:00',
  },
  {
    id: 13,
    starttime: '12:00',
    endTime: '12:15',
  },
  {
    id: 14,
    starttime: '12:15',
    endTime: '12:30',
  },
  {
    id: 15,
    starttime: '12:30',
    endTime: '12:45',
  },
  {
    id: 16,
    starttime: '12:45',
    endTime: '13:00',
  },
];

// this feels a bit stupid, maybe rewrite it 😁


enum ApptStatus {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Completed = 'Completed',
  Canceled = 'Canceled',
}
/**
 * Create a new appointment
 *
 * We want to create an appointment based on the flow of the application
 * Step 1 - select a date
 * Step 2 - select a time slot
 * Step 3 - fill in the name and breed of the pet
 */
const appointments: Appointment[] = [
  {
    id: 1,
    petId: 1,
    appointmentDate: new Date('2024-08-15T09:00:00Z'),
    timeslotId: 1,
    reason: 'Regular check-up',
    status: ApptStatus.Pending,
  },
  {
    id: 2,
    petId: 2,
    appointmentDate: new Date('2024-08-15T09:15:00Z'),
    timeslotId: 2,
    reason: 'Vaccination',
    status: ApptStatus.Pending,
  },
  { 
    id: 3,
    petId: 3,
    appointmentDate: new Date('2024-08-17T09:30:00Z'),
    timeslotId: 3,
    reason: 'Grooming',
    status: ApptStatus.InProgress,
  },
  {
    id: 4,
    petId: 4,
    appointmentDate: new Date('2024-08-17T09:45:00Z'),
    timeslotId: 4,
    reason: 'Follow-up visit',
    status: ApptStatus.Completed,
  },
  {
    id: 5,
    petId: 5,
    appointmentDate: new Date('2024-08-18T09:00:00Z'),
    timeslotId: 1,
    reason: 'General Check-up',
    status: ApptStatus.Canceled,
  },
  {
    id: 6,
    petId: 6,
    appointmentDate: new Date('2024-08-20T10:15:00Z'),
    timeslotId: 6,
    reason: 'Dental Cleaning',
    status: ApptStatus.Pending,
  },
  { 
    id: 7,
    petId: 7,
    appointmentDate: new Date('2024-08-20T10:30:00Z'),
    timeslotId: 1,
    reason: 'Vaccination Booster',
    status: ApptStatus.Pending,
  },
  {
    id: 8,
    petId: 8,
    appointmentDate: new Date('2024-08-20T10:45:00Z'),
    timeslotId: 2,
    reason: 'Check-up for injury',
    status: ApptStatus.Pending,
  },
  {
    id: 9,
    petId: 9,
    appointmentDate: new Date('2024-08-22T11:00:00Z'),
    timeslotId: 3,
    reason: 'Weight control check',
    status: ApptStatus.Pending,
  },
  {
    id: 10,
    petId: 10,
    appointmentDate: new Date('2024-08-22T11:15:00Z'),
    timeslotId: 4,
    reason: 'Flea treatment',
    status: ApptStatus.Pending,
  },
  {
    id: 11,
    petId: 11,
    appointmentDate: new Date('2024-08-22T11:30:00Z'),
    timeslotId: 1,
    reason: 'Routine check-up',
    status: ApptStatus.Pending,
  },
  {
    id: 12,
    petId: 12,
    appointmentDate: new Date('2024-08-23T10:15:00Z'),
    timeslotId: 6,
    reason: 'Vaccination',
    status: ApptStatus.Completed,
  },
  {
    id: 13,
    petId: 13,
    appointmentDate: new Date('2024-08-23T09:00:00Z'),
    timeslotId: 1,
    reason: 'Check-up after surgery',
    status: ApptStatus.Pending,
  },
  {
    id: 14,
    petId: 14,
    appointmentDate: new Date('2024-08-23T09:15:00Z'),
    timeslotId: 2,
    reason: 'Behavioral consultation',
    status: ApptStatus.Pending,
  },
  {
    id: 15,
    petId: 15,
    appointmentDate: new Date('2024-08-25T09:30:00Z'),
    timeslotId: 3,
    reason: 'Annual vaccination',
    status: ApptStatus.InProgress,
  },
  {
    id: 16,
    petId: 16,
    appointmentDate: new Date('2024-08-25T09:45:00Z'),
    timeslotId: 4,
    reason: 'Allergy treatment',
    status: ApptStatus.Completed,
  },
  {
    id: 17,
    petId: 17,
    appointmentDate: new Date('2024-08-25T09:00:00Z'),
    timeslotId: 1,
    reason: 'Post-op follow-up',
    status: ApptStatus.Pending,
  },
  {
    id: 18,
    petId: 18,
    appointmentDate: new Date('2024-08-25T10:15:00Z'),
    timeslotId: 6,
    reason: 'Deworming treatment',
    status: ApptStatus.Pending,
  },
  {
    id: 19,
    petId: 19,
    appointmentDate: new Date('2024-08-26T09:00:00Z'),
    timeslotId: 1,
    reason: 'Skin check',
    status: ApptStatus.Pending,
  },
  {
    id: 20,
    petId: 20,
    appointmentDate: new Date('2024-08-26T09:15:00Z'),
    timeslotId: 2,
    reason: 'Eye infection check',
    status: ApptStatus.Pending,
  },
  {
    id: 21,
    petId: 21,
    appointmentDate: new Date('2024-08-26T09:30:00Z'),
    timeslotId: 3,
    reason: 'Vaccination Booster',
    status: ApptStatus.Pending,
  },
  {
    id: 22,
    petId: 22,
    appointmentDate: new Date('2024-08-26T09:45:00Z'),
    timeslotId: 4,
    reason: 'General health check',
    status: ApptStatus.Pending,
  },
  {
    id: 23,
    petId: 23,
    appointmentDate: new Date('2024-08-27T09:00:00Z'),
    timeslotId: 1,
    reason: 'Microchip registration',
    status: ApptStatus.Pending,
  },
  {
    id: 24,
    petId: 24,
    appointmentDate: new Date('2024-08-27T10:15:00Z'),
    timeslotId: 6,
    reason: 'Vaccination',
    status: ApptStatus.Pending,
  },
];


// first look if the exist in the database and then add them
const load = async (): Promise<void> => {
  try {
    await prisma.timeslot.createMany({
      data: timeSlots,
    });
    loadAppointments();
    console.log('Added category data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

const loadAppointments = async (): Promise<void> => {
  try {
    await prisma.appointment.createMany({
      data: appointments,
    });
    console.log('Added appointment data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
