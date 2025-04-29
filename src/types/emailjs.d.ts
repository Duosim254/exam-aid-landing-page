
interface EmailJSResponseStatus {
  status: number;
  text: string;
}

interface EmailJS {
  init(userId: string): void;
  send(
    serviceId: string,
    templateId: string,
    templateParams: Record<string, any>,
    userId: string
  ): Promise<EmailJSResponseStatus>;
}

interface Window {
  emailjs: EmailJS;
}
