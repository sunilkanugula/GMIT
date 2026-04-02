export const whatsappNumber = "919959431136";
export const defaultWhatsAppMessage =
  "Hi GMIT, I want to get started with your programs.";

export const openWhatsAppChat = (message = defaultWhatsAppMessage) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
