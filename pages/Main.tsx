import {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Button, Paragraph} from '@root/components';

import {styles} from './constants';

const fields: Array<keyof Intl.DateTimeFormatOptions> = ['hour', 'minute', 'second'];
const {format: formatDate} = new Intl.DateTimeFormat('ru', Object.fromEntries(fields.map(f => [f, 'numeric'])));

export function MainPage() {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()));

        return () => clearInterval(interval);
    });

    return (
        <View style={styles.page}>
            <Paragraph>Home Screen</Paragraph>
            <Paragraph>{formatDate(new Date(time))}</Paragraph>
            <Button link="/about">About</Button>
        </View>
    );
}
