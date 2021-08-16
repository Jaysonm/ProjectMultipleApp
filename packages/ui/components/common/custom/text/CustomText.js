import React from "react";
import {Text} from "react-native";
import styles from "./CustomText.style"

const CustomText = props => {
    return <Text numberOfLines={props.numberOfLines}
                 style={[styles.textContent, { fontWeight: props.isBold ? 'bold' : 'normal', opacity: props.disabled ? 0.3 : 1 }, props.style]}>
        {props.children}
    </Text>
}

export default CustomText
