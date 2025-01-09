import { ConsumptionUtil } from "@514labs/moose-lib";

export interface QueryParams {
  size: string; // payload size
}

function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default async function handle(
  { size }: QueryParams,
  { client, sql }: ConsumptionUtil
) {
  const sizeInNumber = parseInt(size, 10);
  const randomString = generateRandomString(sizeInNumber);

  return {
    status: 200,
    success: true,
    data: randomString,
  };
}

