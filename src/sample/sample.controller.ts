import { Controller, Get, Req, Res } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import SampleService from './sample.service';

@Controller('/sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  async findAll(
    @Req() request: FastifyRequest,
    @Res({ passthrough: true }) response: FastifyReply,
  ): Promise<string> {
    console.log(request.ip);

    return 'Helllo Sample';
  }
}
