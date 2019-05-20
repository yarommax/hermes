import { Controller, Get, Post, Body, Req, UseGuards, Param } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse, ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { CreateTransportDto, TrFilter } from './interfaces';
import { TransportService } from './transport.service';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('api/transport')
@Controller('api/transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @ApiOperation({ title: 'Adding new transport' })
  @ApiCreatedResponse({ description: 'Created new transport' })
  @ApiBearerAuth()
  @Post('')
  @UseGuards(AuthGuard())
  async createNewTransport(@Body() transport: CreateTransportDto, @Req() req) {
    transport.userStamp = req.user.username;
    transport.userId = req.user._id;
    return await this.transportService.createNewTransport(transport);
  }

  @ApiOperation({ title: 'Fetch all transport' })
  @ApiCreatedResponse({ description: 'Fetch all transport' })
  @ApiBearerAuth()
  @Get('')
  @UseGuards(AuthGuard())
  async getAllTransport() {
    return await this.transportService.getAllTransport();
  }

  @ApiOperation({ title: 'Fetch only user transport' })
  @ApiCreatedResponse({ description: 'Fetch only user transport' })
  @ApiBearerAuth()
  @Get('/my')
  @UseGuards(AuthGuard())
  async getUserTransport(@Req() req) {
    return await this.transportService.getUserTransport(req.user._id);
  }

  // @ApiOperation({ title: 'Get specific car' })
  // @ApiCreatedResponse({ description: 'Get specific car by her id' })
  // @ApiBearerAuth()
  // @Get('/:id')
  // @UseGuards(AuthGuard())
  // async getTransportById(@Param() params) {
  //   // переписать название эндпоинта
  //   return await this.transportService.getById(params.id);
  // }

  @ApiOperation({ title: 'Fetch filtered transport' })
  @ApiCreatedResponse({ description: 'Fetch filtered transport' })
  @ApiBearerAuth()
  @Post('/filter')
  @UseGuards(AuthGuard())
  async getFilteredTransport(@Body() filter: TrFilter) {
    return await this.transportService.getFilteredTransport(filter);
  }
}
