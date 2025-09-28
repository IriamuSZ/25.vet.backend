/**
 * This file contains all the types that are used in the application
 *
 * It is a bit of a redundant file, because most of the types come from
 * the prima model. However, in this way we have more control over the
 * types that are used in the application. For example we want the id and
 * the createdAt field to be optional, it is genereated by Prisma/database.
 */

interface Appointment {
  id?: number,
  pets_id?: number,
  appointment_date: Date,
  timeslotId: number,
  reason: string,
  status: string
}

interface TimeSlot {
  id?: number,
  starttime: string,
  endTime: string,
}

export { Appointment, TimeSlot };
