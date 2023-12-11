import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    await delayApiResponse();
    return this.appService.getHello();
  }
}

function delayApiResponse(): Promise<void> {
  // Calculate a random delay between 30ms and 100ms
  const delay = Math.random() * 70 + 30;
  // Return a promise that resolves after the delay
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
