import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): string {
        return `Item: ${param.id}`;
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
