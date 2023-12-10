// src/pages/TaskDetails.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel, IonList } from '@ionic/react';
import { useTaskContext } from '../context/TaskContext';
import { useHistory } from 'react-router-dom';

const TaskDetails: React.FC = () => {
  const { selectedTask } = useTaskContext();
  const history = useHistory();

  if (!selectedTask) {
    // Manejar el caso en el que no haya una tarea seleccionada
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Detalles de la Tarea</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>No se ha seleccionado ninguna tarea.</p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          
          <IonTitle>Detalles de la Tarea</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
        <IonLabel>
          <h2>{selectedTask.title}</h2>
          <p>{selectedTask.description}</p>
          <p>Tipo: {selectedTask.type}</p>
          <p>Completada: {selectedTask.completed ? 'Sí' : 'No'}</p>
        </IonLabel>
        </IonList>
        <IonButton expand='full' onClick={() => history.goBack()} >Regresar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default TaskDetails;
