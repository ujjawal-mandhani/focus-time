import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View } from "react-native";
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';
 
const minutesToMillis = (min) => min * 60000;
const formatTime = (time) => time < 10 ? `0${time}` : time;

export const Countdown = ({
  minutes = 20,
  isPaused,
  onProgress,
  onEnd
}) => {
  const interval = React.useRef(null);
  
  const [millis, setMillis] = useState(null);

  const countDown = () => {
    setMillis((time) => {
      if(time === 0){
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / minutesToMillis(minutes))
      return timeLeft;
    })
  }

  useEffect(() => {
    setMillis(minutesToMillis(minutes))
  }, [minutes])

   useEffect(() => {
     if(isPaused) {
       if(interval.current) clearInterval(interval.current);
       return;
     }
     interval.current = setInterval(countDown, 1000);
     return () => clearInterval(interval.current)
   },[isPaused])

  const minute = Math.floor(millis / 60000) % 60;

  const seconds = Math.floor(millis / 1000) % 60;
  
  return (
    <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(160, 97, 95, 0.5)'
  }
})
