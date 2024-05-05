import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {

    @Get()
    findAll(): string {
        return 'Find all items!';
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `name: ${createItemDto.name}, desc: ${createItemDto.description}, qty: ${createItemDto.qty}`;
    }

    @Put()
    update(): string {
        return 'Updated item!';
    }

    @Delete()
    remove(): string {
        return 'Removed item!';
    }
 
}
