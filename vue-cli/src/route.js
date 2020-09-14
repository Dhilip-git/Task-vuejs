import Home from './components/Home.vue';
import Employee from './components/Employee.vue';
import Task from './components/TaskStatus.vue';

export const routes = [
    {path : '' , component : Home},
    {path : '/employee' , component : Employee},
    {path : '/task' , component : Task}
]