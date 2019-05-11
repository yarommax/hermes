import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse, ApiUseTags } from '@nestjs/swagger';
import { CreateTransportDto } from './interfaces';
import { TransportService } from './transport.service';

@ApiUseTags('api/transport')
@Controller('api/transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @ApiOperation({ title: 'Adding new transport' })
  @ApiCreatedResponse({ description: 'Created new transport' })
  @Post('')
  async createNewTransport(@Body() transport: CreateTransportDto) {
    return await this.transportService.createNewTransport(transport);
  }

  @ApiOperation({ title: 'Fetch all transport' })
  @ApiCreatedResponse({ description: 'Fetch all transport' })
  @Get('')
  async getAllTransport() {
    return await this.transportService.getAllTransport();
  }
}
