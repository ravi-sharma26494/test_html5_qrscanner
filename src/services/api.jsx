// export const APP_BACKEND_URL = process.env.APP_BACKEND_URL;

export const fetchQrData = async (qrcode) => {
  const response = await fetch(`https://test-html5-qrscanner-backend.onrender.com/products/${qrcode}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }
  const data = await response.json();
  return data;
};
