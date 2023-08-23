import { View, ScrollView, SafeAreaView } from 'react-native';
import { useRef } from 'react';
import { captureRef } from 'react-native-view-shot';
import SubmitButton from "./SubmitButton";
import DoubleImageSubmit from './DoubleImageSubmit';

const FinalWrapper = (title, arr, data, goHome, styles) => {

    const ref1 = useRef();
    const ref2 = useRef();

    let longenough = false;
    const qlist = arr[1];
    const half = Math.ceil(qlist.length / 2);

    const first = qlist.splice(0, half);
    const last = qlist.splice(half);

    const updatebool = () => {
        if (qlist.length > 30) { longenough = true; }
    }

    async function capture(ref) {
        const uri = await captureRef(ref, {
            format: 'png',
            quality: 1.0,
            result: 'tmpfile',
            fileName: title+'image',
            snapshotContentContainer: true,
            useRenderInContext: true,
        })

        const myuri = 'file://' + uri;

        return myuri;
    }

    const button = <SubmitButton data={data} capture={() => capture(ref1)} goHome={goHome} title={title}/>
    arr.push(button);

    const shortresult = (
        <View style={styles.page}>
            <ScrollView ref={ref1} >
                {arr.map((val, index) => <View key={index}>{val}</View>)}
            </ScrollView>
        </View>
    );

    first.unshift(arr[0]);

    const doublebutton = <DoubleImageSubmit data={data} goHome={goHome} capture1={() => capture(ref1)} capture2={() => capture(ref2)} title={title} />
    last.push(doublebutton);

    const longresult = (
        <View style={styles.page}>

            <ScrollView ref={ref1} >
                {first.map((val, index) => <View key={index}>{val}</View>)}
            </ScrollView>

            <ScrollView ref={ref2} >
                {last.map((val, index) => <View key={index}>{val}</View>)}
            </ScrollView>
        </View>
    );

    return longenough ? longresult : shortresult;
}
 
export default FinalWrapper;