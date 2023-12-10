import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCheckbox, IonSelect, IonSelectOption, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

interface Task {
  id: number;
  title: string;
  description: string;
  type: string;
  isCompleted: boolean;
  completed: boolean; // Add the completed property
}

interface AddTaskProps {
  onTaskAdded: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = () => {
  
  const {tasks, setTasks} = useTaskContext();
  const [newTask, setNewTask] = useState({ id: 0, title: '', description: '', type: '', isCompleted: false, completed: false });
  const [showToast, setShowToast] = useState(false);
  const history = useHistory();

  const handleAddTask = () => {      
    //history.push('/tasklist', { task });
    if (newTask.title.trim() === '' || newTask.description.trim() === '' || newTask.type.trim() === '') {
      setShowToast(true);
      return;
    }

    if (newTask.title.trim() !== '') {
      const updatedTasks = [...tasks, { ...newTask, id: tasks.length + 1 }];
      console.log(updatedTasks);
      setTasks(updatedTasks);
      history.push('/task-list');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar Tarea</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonInput
          placeholder="Titulo"
          value={newTask.title}
          onIonChange={(e) => setNewTask({ ...newTask, title: e.detail.value! })}
        ></IonInput>
        <IonInput
          placeholder="Descripcion"
          value={newTask.description}
          onIonChange={(e) => setNewTask({ ...newTask, description: e.detail.value! })}
        ></IonInput>
        <IonSelect          
          placeholder="Tipo de tarea"
          onIonChange={(e) => setNewTask({ ...newTask, type: e.detail.value})}>
          <IonSelectOption value="trabajo">Trabajo</IonSelectOption>
          <IonSelectOption value="casa">Casa</IonSelectOption>
          <IonSelectOption value="negocios">Negocios</IonSelectOption>
        </IonSelect>
        <IonCheckbox                
          checked={newTask.isCompleted}
          onIonChange={(e) => setNewTask({ ...newTask, isCompleted: e.detail.checked })}
        >Completada</IonCheckbox>
        <IonButton expand="full" onClick={handleAddTask}>Agregar Tarea</IonButton>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Por favor, completa todos los campos."
          duration={2000}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default AddTask;
