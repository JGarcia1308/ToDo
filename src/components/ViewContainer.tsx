// CustomComponent.tsx

import React, { useRef } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

interface CustomComponentProps {
  imageSrc: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  audioSrc: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ imageSrc, text1, text2, text3, text4, audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <IonCard>
      <img src={imageSrc} alt="Custom" onClick={handlePlayAudio} style={{ width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '15px 15px 0 0' }}/>
      <audio ref={audioRef} src={audioSrc} controls hidden></audio>
      <IonCardHeader>
        <IonCardTitle>{text1}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{text4}</p>
        
      </IonCardContent>
    </IonCard>
  );
};

export default CustomComponent;
