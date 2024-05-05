import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "asfdsfsE234",
            name: "item 1",
            qty: 100,
            description: "This is dummy description"
        },
        {
            id: "asfdsfsE234",
            name: "item 2",
            qty: 90,
            description: "This is dummy description"
        },
        {
            id: "asfdsfsE234",
            name: "item 3",
            qty: 1000,
            description: "This is dummy description"
        }
    ];

    findAll(): Item[] {
        return this.items;
    }
}
