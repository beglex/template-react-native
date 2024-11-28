import {View} from 'react-native';

import {Button, Paragraph} from '@root/components';

import {styles} from './constants';

export function AboutPage() {
    return (
        <View style={styles.page}>
            <Paragraph>About Screen</Paragraph>
            <Button link="/">Home</Button>
        </View>
    );
}
