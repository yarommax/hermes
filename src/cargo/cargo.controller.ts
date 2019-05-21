import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { CreateCargoDto } from './interfaces';
import { AuthGuard } from '@nestjs/passport';
import { TrFilter } from '../transport/interfaces';

@ApiUseTags('api/cargo')
@Controller('api/cargo')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @ApiOperation({ title: 'Adding new cargo' })
  @ApiCreatedResponse({ description: 'Created new cargo' })
  @ApiBearerAuth()
  @Post('')
  @UseGuards(AuthGuard())
  async createNewCargo(@Body() cargo: CreateCargoDto, @Req() req) {
    cargo.userStamp = req.user.username;
    cargo.userId = req.user._id;
    return await this.cargoService.createNewCargo(cargo);
  }

  @ApiOperation({ title: 'Fetch all cargo' })
  @ApiCreatedResponse({ description: 'Fetch all cargo' })
  @ApiBearerAuth()
  @Get('')
  @UseGuards(AuthGuard())
  async getAllCargo() {
    return await this.cargoService.getAllCargo();
  }

  @ApiOperation({ title: 'Fetch only user cargo' })
  @ApiCreatedResponse({ description: 'Fetch only user cargo' })
  @ApiBearerAuth()
  @Get('/my')
  @UseGuards(AuthGuard())
  async getUserTransport(@Req() req) {
    return await this.cargoService.getUserCargo(req.user._id);
  }

  @ApiOperation({ title: 'Fetch filtered cargo' })
  @ApiCreatedResponse({ description: 'Fetch filtered cargo' })
  @ApiBearerAuth()
  @Post('/filter')
  @UseGuards(AuthGuard())
  async getFilteredCargo(@Body() filter: TrFilter) {
    return await this.cargoService.getFilteredCargo(filter);
  }
}
