export interface Appointement {
  id: number;
  date: Date;
  hour: string;
  patientId: number;
  customerId: number;
  veterinarianId: number;
  careId: number;
  roomId: number;
}
