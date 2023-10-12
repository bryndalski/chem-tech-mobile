import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React, {MutableRefObject, useEffect, useRef} from 'react';
import {CodeBlock} from './code_block';
import {useFormik} from 'formik';
import {isCode} from '@forms/isCode';

interface ICodeInput {
  submitFunction: (code: string) => void;
  error: boolean;
  runSubmitWhenValid: boolean;
  setButtonEnabled: (value: boolean) => void;
  setCode?: (code: string) => void;
}

export function CodeInput(props: ICodeInput) {
  const itemEls: MutableRefObject<TextInput | null>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  //Validaton formik
  const formik = useFormik({
    initialValues: {
      code: new Array(6).fill(''),
    },
    validationSchema: isCode,
    onSubmit: values => {
      props.submitFunction(values.code.join(''));
    },
  });
  useEffect(() => {
    //Check if code is full
    if (!formik.values.code.includes('')) {
      //Execute only if auto-execute is enabled
      if (props.runSubmitWhenValid) formik.submitForm();
      props.setButtonEnabled(true);
      //Disable button
    } else props.setButtonEnabled(false);
    if (props.setCode) props.setCode(formik.values.code.join(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.code]);

  const codeBlocks = [];
  for (let i = 0; i < formik.values.code.length; i++) {
    codeBlocks.push(
      <CodeBlock
        key={i}
        ref={itemEls[i]}
        value={formik.values.code[i]}
        onChange={(value: string): void => {
          //Responsible for paste event
          if (value.length === 6 && !isNaN(Number(value)))
            formik.setValues({code: value.split('')} as any);

          formik.setFieldValue(`code[${i}]`, value.charAt(value.length - 1));
          if (i !== codeBlocks.length - 1)
            (itemEls[i + 1].current as TextInput).focus();
        }}
      />,
    );
  }

  return <SafeAreaView style={styles.container}>{codeBlocks}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
