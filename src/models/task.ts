export class Task {
    taskId: number;
    taskName: string;


    constructor (taskId: number, taskName: string){
        this.taskId= taskId;
        this.taskName=taskName;
    }
}