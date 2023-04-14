export const APP_BACKEND_URL = process.env.APP_BACKEND_URL;

export const fetchQrData = async (qrcode) => {
  const response = await fetch(`${APP_BACKEND_URL}/products//${qrcode}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }
  const data = await response.json();
  return data;
};
