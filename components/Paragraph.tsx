import type {PropsWithChildren} from 'react';

import {StyleSheet, Text} from 'react-native';

import {Colors} from '@root/constants';

const styles = StyleSheet.create({
    paragraph: {
        color: Colors.warning,
        fontSize: 30,
    },
});

export function Paragraph({children}: PropsWithChildren) {
    return <Text style={styles.paragraph}>{children}</Text>;
}
