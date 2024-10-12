import { useCallback, useContext, useRef, useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import AuthContext from '../../context/AuthContext';
import BottomRangeSection from './BottomRangeSection';
import BottomDetailsSection from './BottomDetailsSection';
import BottomCommentSection from './BottomCommentSection';

const Feedback = () => {
  const {setBottomSheet} = useContext(AuthContext)

  const bottomSheetRef = useRef(null);
  const [isGestureEnabled,setIsGestureEnabled] = useState(false)

  const handleSheetChanges = useCallback((index) => {
    if(index === -1){
      setBottomSheet(false)
    }
  }, []);


  

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={['80%']}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        enableContentPanningGesture={isGestureEnabled}
        enableHandlePanningGesture={isGestureEnabled}
        >
        <BottomSheetScrollView style={styles.contentContainer}> 
          <BottomDetailsSection/>
          <BottomRangeSection setIsGestureEnabled={setIsGestureEnabled} />
          <BottomCommentSection/>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  contentContainer: {
    flex: 1
  },
});

export default Feedback;
