import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Hero } from '@app/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/752de422433737.5631e83fc1bf6.png' },
      { id: 12, name: 'Narco', avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png' },
      { id: 13, name: 'Bombasto', avatar: 'https://i.pinimg.com/originals/60/7b/a1/607ba1795c55444e38bed385a9272932.png' },
      { id: 14, name: 'Celeritas', avatar: 'https://i.pinimg.com/originals/a2/26/91/a226914001492533a363c320ba6dba4c.png' },
      { id: 15, name: 'Magneta', avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/a2fa0522433737.5631e82d148c9.png' },
      { id: 16, name: 'RubberMan', avatar: 'http://ww.vtiger.com.co/img/avatar4.png' },
      { id: 17, name: 'Dynama', avatar: 'https://yourproseo.com/wp-content/uploads/2013/04/Superman.png' },
      { id: 18, name: 'Dr IQ', avatar: 'https://dumielauxepices.net/sites/default/files/catwoman-clipart-avatar-883569-689348.png' },
      { id: 19, name: 'Magma', avatar: 'https://www.thecoolector.com/wp-content/uploads/2014/03/flash.png' },
      { id: 20, name: 'Tornado', avatar: 'https://unixtitan.net/images/marvel-vector-nick-fury-5.png' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
