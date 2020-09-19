import Home from './components/Home.vue';
import Employee from './components/Employee.vue';
import Task from './components/TaskStatus.vue';
import Welcome from './components/Welcome.vue'

export const routes = [
    {path : '' , component : Welcome},
    {path : '/employee' , component : Employee},
    {path : '/task' , component : Task}
]