// CustomComponent.tsx
import React, { useRef } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCheckbox } from '@ionic/react';

interface CustomComponentProps {  
  title: string;
  descrip: string;
  type: string;
  isCompleted: boolean;  
}

const ViewTask: React.FC<CustomComponentProps> = ({ title, descrip, type, isCompleted }) => {  

  return (
    <IonCard>      
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{descrip}</p>
        <p>{type}</p>
        <IonCheckbox slot="start" checked={isCompleted}>Completada</IonCheckbox>       
      </IonCardContent>
    </IonCard>
  );
};

export default ViewTask;
