import { Body, Controller, Get, Post } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { ApiCreatedResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { CreateCargoDto } from './interfaces';

@ApiUseTags('api/cargo')
@Controller('api/cargo')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @ApiOperation({ title: 'Adding new cargo' })
  @ApiCreatedResponse({ description: 'Created new cargo' })
  @Post('')
  async createNewCargo(@Body() cargo: CreateCargoDto) {
    return await this.cargoService.createNewCargo(cargo);
  }

  @ApiOperation({ title: 'Fetch all cargo' })
  @ApiCreatedResponse({ description: 'Fetch all cargo' })
  @Get('')
  async getAllCargo() {
    return await this.cargoService.getAllCargo();
  }
}
