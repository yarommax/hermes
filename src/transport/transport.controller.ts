import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse, ApiUseTags } from '@nestjs/swagger';
import { CreateTransportDto } from './interfaces';
import { TransportService } from './transport.service';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('api/transport')
@Controller('api/transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @ApiOperation({ title: 'Adding new transport' })
  @ApiCreatedResponse({ description: 'Created new transport' })
  @Post('')
  @UseGuards(AuthGuard())
  async createNewTransport(@Body() transport: CreateTransportDto, @Req() req) {
    transport.userStamp = req.user.username;
    transport.userId = req.user._id;
    return await this.transportService.createNewTransport(transport);
  }

  @ApiOperation({ title: 'Fetch all transport' })
  @ApiCreatedResponse({ description: 'Fetch all transport' })
  @Get('')
  async getAllTransport() {
    return await this.transportService.getAllTransport();
  }
}
