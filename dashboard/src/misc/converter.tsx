export const base64ToPng = (
  base64Data: string,
  filename: string = "avatar.png"
) => {
  const byteString = atob(base64Data.split(",")[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: "image/png" });
  const url = URL.createObjectURL(blob);
  return { blob, url, filename };
};
