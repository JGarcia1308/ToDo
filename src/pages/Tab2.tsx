import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonCard } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewContainer from '../components/ViewContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://xeno-canto.org/api/2/recordings?query=cnt:guatemala');
        setData(response.data.recordings || []);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [])


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aves de Guatemala</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-text-center'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Aves</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading isOpen={loading} message="Cargando datos..." duration={3000} />
        
         <IonCard>
            {data.map((item, index) => (
              <ViewContainer
                key={index}
                imageSrc={'../resources/th-2755471748.png'}
                text1={item.gen}
                text2={item.en}
                text3={item.loc}
                text4={item.rec}
                audioSrc={item.file} />
            ))}
          </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
