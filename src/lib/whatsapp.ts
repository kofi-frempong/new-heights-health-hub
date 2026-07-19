export const WHATSAPP_NUMBER = "233245012395";
export const PHONE_DISPLAY = "+233 (0)24 501 2395";
export const PHONE_TEL = "+233245012395";

const DEFAULT_MSG = "Hi, I'd like to send my prescription to New Heights Pharmacy.";

export function waLink(message: string = DEFAULT_MSG) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}