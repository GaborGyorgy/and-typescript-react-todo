import ITask from "./ITask";

export default interface ITaskListProps {
  tasks: ITask[];
  deleteTaskHandler: (index: number) => void;
}
