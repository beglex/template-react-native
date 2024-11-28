import type {PropsWithChildren} from 'react';

import {Link} from 'expo-router';
import {StyleSheet} from 'react-native';

import {Colors} from '@root/constants';

interface Props extends PropsWithChildren {
    link: string;
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.success,
        borderColor: Colors.warning,
        borderRadius: 10,
        borderWidth: 2,
        color: Colors.dark,
        fontSize: 20,
        margin: 15,
        padding: 15,
    },
});

export function Button({children, link}: Props) {
    return (
        <Link style={styles.button} href={link}>
            {children}
        </Link>
    );
}
