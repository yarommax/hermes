import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse, ApiUseTags } from '@nestjs/swagger';
import { CreateTransportDto } from './interfaces';

@ApiUseTags('api/transport')
@Controller('api/transport')
export class TransportController {

    @ApiOperation({ title: 'Adding new transport' })
    @ApiCreatedResponse({ description: 'Created new transport' })
    @Post('')
    async createNewTransport(@Body() transport: CreateTransportDto) {
        console.log('new transport added to database')
    }

    @ApiOperation({ title: 'Fetch all transport' })
    @ApiCreatedResponse({ description: 'Fetch all transport' })
    @Get('')
    async getAllTransports() {
        console.log('fetched all transport')
    }
}
