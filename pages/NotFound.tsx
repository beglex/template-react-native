import {View} from 'react-native';

import {Button, Paragraph} from '@root/components';

import {styles} from './constants';

export function NotFoundPage() {
    return (
        <View style={styles.page}>
            <Paragraph>Not Found</Paragraph>
            <Button link="/">Go back to Home screen!</Button>
        </View>
    );
}
