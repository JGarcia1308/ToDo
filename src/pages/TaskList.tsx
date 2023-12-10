// src/pages/TaskList.tsx
import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList, 
  IonItem, 
  IonCheckbox, 
  IonLabel, 
  IonButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import './TaskList.css';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  type: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = () => {

  const { tasks, setTasks, selectedTask, setSelectedTask } = useTaskContext();
  //const [selectedTask, setSelectedTask] = useState<Task>();

  const history = useHistory();

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleTaskCompletion = (taskId: number) => {
    // ... handle task completion logic
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskDeletion = (taskId: number) => {
    // ... handle task deletion logic    
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleTaskSelection = (task: Task) => {
    setSelectedTask(task);
    history.push('/task-details');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Tareas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {tasks.map((task) => (
            <IonItem key={task.id} className={selectedTask === task ? 'selected' : ''}>
              <IonCheckbox
                slot="start"
                checked={task.completed}
                onIonChange={() => handleTaskCompletion(task.id)}
                aria-label='Complete Task'
              />
              <IonLabel className={task.completed ? 'completed' : ''}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>Tipo: {task.type}</p>
              </IonLabel>
              <IonItem key={task.id} className={selectedTask === task ? 'selected' : ''}>
                <div className='button-group'>
                  <IonButton fill="outline" onClick={() => handleTaskSelection(task)} >
                    Detalle
                  </IonButton>
                  <IonButton fill="outline" onClick={() => handleTaskDeletion(task.id)}>
                    Eliminar
                  </IonButton>
                </div>
              </IonItem>
            </IonItem>
          ))}
        </IonList>
        <IonButton expand="block" href="/add-task">Nueva Tarea</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default TaskList;
