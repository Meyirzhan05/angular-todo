import {Category} from "../model/category";
import {Priority} from "../model/priority";
import {Task} from "../model/task";

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'}
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
    {id: 4, title: 'Очень срочно!', color: '#F1128D'}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Uige katsai',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[1],
      date: new Date("2023-04-16")
    },
    {
      id: 2,
      title: 'Uige katsai',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 3,
      title: 'Uige katsai',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[3],
      date: new Date("2023-04-17")
    },
    {
      id: 4,
      title: 'Uige katsai',
      priority: TestData.priorities[4],
      completed: false,
      category: TestData.categories[4],
      date: new Date("2023-04-16")
    },
    {
      id: 5,
      title: 'Uige katsai',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[5],
      date: new Date("2023-04-16")
    },
    {
      id: 6,
      title: 'Uige katsai',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[6]
    },
    {
      id: 7,
      title: 'Uige katsai',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[7]
    },
    {
      id: 8,
      title: 'Uige katsai',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date("2023-04-16")
    },
    {
      id: 9,
      title: 'Uige katsai',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[9]
    },
    {
      id: 10,
      title: 'Uige katsai',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[10],
      date: new Date("2023-04-20")
    }
  ]

}
