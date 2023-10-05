import {ReactNode} from 'react';
import {TextInputProps} from 'react-native';

export interface TextInputWithIconInterface
  extends Omit<TextInputProps, 'styles'> {
  icon: ReactNode;
  /**
   * Indicates that input has error
   */
  error?: boolean;

  /**
   * Error text
   * @default ''
   */
  errorText?: string;

  /**
   * Indicates that you can see the hidden text. shows the passwords
   * @default false
   */
  secureTextEntryView?: boolean;
}
