import { PrismaClient } from '@prisma/client';
// reference a type from the generated Prisma Client
// import type { Client } from '@prisma/client';
const prisma: PrismaClient = new PrismaClient();
import { TimeSlot, Appointment } from './types.ts';

// if you use the model you have to fill in all the fields also the generated ones
const timeSlots: TimeSlot[] = [
  { starttime: '09:00', endTime: '09:15' },
  { starttime: '09:15', endTime: '09:30' },
  { starttime: '09:30', endTime: '09:45' },
  { starttime: '09:45', endTime: '10:00' },
  { starttime: '10:00', endTime: '10:15' },
  { starttime: '10:15', endTime: '10:30' },
  { starttime: '10:30', endTime: '10:45' },
  { starttime: '10:45', endTime: '11:00' },
  { starttime: '11:00', endTime: '11:15' },
  { starttime: '11:15', endTime: '11:30' },
  { starttime: '11:30', endTime: '11:45' },
  { starttime: '11:45', endTime: '12:00' },
  { starttime: '12:00', endTime: '12:15' },
  { starttime: '12:15', endTime: '12:30' },
  { starttime: '12:30', endTime: '12:45' },
  { starttime: '12:45', endTime: '13:00' },
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
    pets_id: 1,
    appointment_date: new Date('2024-08-15T09:00:00Z'),
    timeslotId: 1,
    reason: 'Regular check-up',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 2,
    appointment_date: new Date('2024-08-15T09:15:00Z'),
    timeslotId: 2,
    reason: 'Vaccination',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 3,
    appointment_date: new Date('2024-08-17T09:30:00Z'),
    timeslotId: 3,
    reason: 'Grooming',
    status: ApptStatus.InProgress,
  },
  {
    pets_id: 4,
    appointment_date: new Date('2024-08-17T09:45:00Z'),
    timeslotId: 4,
    reason: 'Follow-up visit',
    status: ApptStatus.Completed,
  },
  {
    pets_id: 5,
    appointment_date: new Date('2024-08-18T09:00:00Z'),
    timeslotId: 1,
    reason: 'General Check-up',
    status: ApptStatus.Canceled,
  },
  {
    pets_id: 6,
    appointment_date: new Date('2024-08-20T10:15:00Z'),
    timeslotId: 6,
    reason: 'Dental Cleaning',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 7,
    appointment_date: new Date('2024-08-20T10:30:00Z'),
    timeslotId: 1,
    reason: 'Vaccination Booster',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 8,
    appointment_date: new Date('2024-08-20T10:45:00Z'),
    timeslotId: 2,
    reason: 'Check-up for injury',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 9,
    appointment_date: new Date('2024-08-22T11:00:00Z'),
    timeslotId: 3,
    reason: 'Weight control check',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 10,
    appointment_date: new Date('2024-08-22T11:15:00Z'),
    timeslotId: 4,
    reason: 'Flea treatment',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 11,
    appointment_date: new Date('2024-08-22T11:30:00Z'),
    timeslotId: 1,
    reason: 'Routine check-up',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 12,
    appointment_date: new Date('2024-08-23T10:15:00Z'),
    timeslotId: 6,
    reason: 'Vaccination',
    status: ApptStatus.Completed,
  },
  {
    pets_id: 13,
    appointment_date: new Date('2024-08-23T09:00:00Z'),
    timeslotId: 1,
    reason: 'Check-up after surgery',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 14,
    appointment_date: new Date('2024-08-23T09:15:00Z'),
    timeslotId: 2,
    reason: 'Behavioral consultation',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 15,
    appointment_date: new Date('2024-08-25T09:30:00Z'),
    timeslotId: 3,
    reason: 'Annual vaccination',
    status: ApptStatus.InProgress,
  },
  {
    pets_id: 16,
    appointment_date: new Date('2024-08-25T09:45:00Z'),
    timeslotId: 4,
    reason: 'Allergy treatment',
    status: ApptStatus.Completed,
  },
  {
    pets_id: 17,
    appointment_date: new Date('2024-08-25T09:00:00Z'),
    timeslotId: 1,
    reason: 'Post-op follow-up',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 18,
    appointment_date: new Date('2024-08-25T10:15:00Z'),
    timeslotId: 6,
    reason: 'Deworming treatment',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 19,
    appointment_date: new Date('2024-08-26T09:00:00Z'),
    timeslotId: 1,
    reason: 'Skin check',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 20,
    appointment_date: new Date('2024-08-26T09:15:00Z'),
    timeslotId: 2,
    reason: 'Eye infection check',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 21,
    appointment_date: new Date('2024-08-26T09:30:00Z'),
    timeslotId: 3,
    reason: 'Vaccination Booster',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 22,
    appointment_date: new Date('2024-08-26T09:45:00Z'),
    timeslotId: 4,
    reason: 'General health check',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 23,
    appointment_date: new Date('2024-08-27T09:00:00Z'),
    timeslotId: 1,
    reason: 'Microchip registration',
    status: ApptStatus.Pending,
  },
  {
    pets_id: 24,
    appointment_date: new Date('2024-08-27T10:15:00Z'),
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
